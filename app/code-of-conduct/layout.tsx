import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "The code of conduct that applied to CUSEC 2025.",
};

export default function CodeOfConductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
