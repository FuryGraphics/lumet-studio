import { renderToString } from "react-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { Router } from "wouter";
import App from "./App";
import { prerenderPaths } from "./data/routes";

export { prerenderPaths };

/**
 * Render one route to HTML. wouter reads `ssrPath` instead of the browser
 * address, so this can run at build time with no headless browser.
 */
export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <Router ssrPath={url}>
        <App />
      </Router>
    </HelmetProvider>
  );
  const helmet = helmetContext.helmet;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.priority.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ].join("\n")
    : "";
  return { appHtml, head };
}
