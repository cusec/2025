import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "The talks, workshops, and socials that ran at CUSEC 2025. CUSEC 2027 runs in Montr\u00e9al in January 2027 at 2027.cusec.net.",
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
