import JsonLd from "@/components/JsonLd";
import { organizationJsonLd } from "@/data/site";

export default function OrganizationSchema() {
  return <JsonLd data={organizationJsonLd} />;
}
