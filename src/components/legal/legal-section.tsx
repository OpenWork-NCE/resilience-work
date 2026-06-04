import type { Locale } from "@/types/content";
import type { LegalSection as LegalSectionType } from "@/types/legal";
import { LegalCallout } from "@/components/legal/legal-callout";
import { LegalDefinitionList } from "@/components/legal/legal-definition-list";

interface LegalSectionProps {
  locale: Locale;
  section: LegalSectionType;
}

export function LegalSection({ locale, section }: LegalSectionProps) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <h2 className="font-display text-[clamp(1.7rem,3.6vw,2.5rem)] font-medium leading-[1.08] text-balance">
        {section.title[locale]}
      </h2>

      {section.paragraphs ? (
        <div className="mt-5 space-y-4">
          {section.paragraphs[locale].map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-[1.02rem]">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      {section.items ? (
        <ul className="mt-5 space-y-3">
          {section.items[locale].map((item) => (
            <li key={item} className="rounded-[var(--radius-md)] bg-[rgb(var(--surface-muted))] px-4 py-3 text-base leading-relaxed text-[rgb(var(--foreground))]">
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {section.definitions ? (
        <div className="mt-6">
          <LegalDefinitionList locale={locale} items={section.definitions} />
        </div>
      ) : null}

      {section.table ? (
        <div className="mt-6 overflow-x-auto rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))]">
          <table className="min-w-full border-collapse bg-[rgb(var(--surface))] text-left">
            <thead>
              <tr className="border-b border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-muted))]">
                {section.table.headers[locale].map((header) => (
                  <th key={header} className="px-4 py-3 text-sm font-semibold text-[rgb(var(--foreground))]">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.id} className="border-b border-[rgb(var(--border-muted))] last:border-b-0">
                  {row.cells[locale].map((cell, index) => (
                    <td key={`${row.id}-${index}`} className="px-4 py-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {section.callout ? (
        <div className="mt-6">
          <LegalCallout
            tone={section.callout.tone}
            title={section.callout.title?.[locale]}
            description={section.callout.description[locale]}
          />
        </div>
      ) : null}
    </section>
  );
}
