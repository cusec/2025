import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Team",
  description:
    "The student organizers behind CUSEC 2025. The CUSEC 2027 team is at 2027.cusec.net.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
