export function generateJocelyneKatshindaVCard() {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Jocelyne Katshinda",
    "N:Katshinda;Jocelyne;;;",
    "ORG:Resilience@Work",
    "TITLE:Founder and Managing Director",
    "TEL;TYPE=CELL:+32470542390",
    "EMAIL;TYPE=WORK:admin@resilienceatwork.eu",
    "URL:https://resilienceatwork.eu",
    "END:VCARD",
    "",
  ].join("\r\n");
}
