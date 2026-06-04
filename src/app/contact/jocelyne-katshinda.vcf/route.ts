import { generateJocelyneKatshindaVCard } from "@/lib/contact/generate-vcard";

export async function GET() {
  return new Response(generateJocelyneKatshindaVCard(), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="jocelyne-katshinda.vcf"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
