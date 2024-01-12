const webhookURL = Deno.env.get("WEBHOOK_URL");

/** Options for sending a message */
export interface SendMessageOptions {
  content: string;
  username?: string;
  avatar_url?: string;
}

/** Send a message to a discord channel */
export async function sendMessage(options: SendMessageOptions) {
  if (!webhookURL) {
    throw new Error("WEBHOOK_URL env variable is not defined");
  }

  const req = await fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  await req.text();
}
