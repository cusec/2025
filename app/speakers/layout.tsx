import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers",
  description:
    "The speakers who took the stage at CUSEC 2025, the 24th Canadian University Software Engineering Conference. The CUSEC 2027 lineup is at 2027.cusec.net.",
};

export default function SpeakersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
