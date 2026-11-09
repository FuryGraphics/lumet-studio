/**
 * JSON-LD in the document body. Search engines accept it there, and a normal
 * script tag stays intact when the page is rendered to HTML.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
