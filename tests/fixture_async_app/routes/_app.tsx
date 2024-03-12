import { delay } from "@std/async/delay";
import { FreshContext } from "$fresh/src/server/types.ts";

export default async function App(req: Request, ctx: FreshContext) {
  await delay(100);

  return (
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>fresh title</title>
      </head>
      <body>
        <div class="app">
          App template
          <ctx.Component />
        </div>
      </body>
    </html>
  );
}
