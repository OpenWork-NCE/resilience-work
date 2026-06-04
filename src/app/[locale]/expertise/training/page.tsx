import { redirect } from "next/navigation";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import type { Locale } from "@/types/content";

export default async function LegacyTrainingRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(getLocalizedHref(locale as Locale, "training"));
}
