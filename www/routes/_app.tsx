import { PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function App({ Component, ...rest }: PageProps) {
  const title = rest.data.headTitle;
  const description = rest.data.headDescription;
  const headOgImg = new URL(asset("/home-og.png"), rest.url).href;
  console.log(rest);
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {description ? <meta name="description" content={description} /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={rest.url.href} />
        <meta property="og:image" content={headOgImg} />
        {rest.data.headViewTransition
          ? <meta name="view-transition" content="same-origin" />
          : null}
        <link rel="stylesheet" href="/styles.css" />
        {rest.data.docStyleSheet
          ? <link rel="stylesheet" href={rest.data.docStyleSheet} />
          : null}
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
