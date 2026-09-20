import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { NavProvider } from "@/components/Navbar/NavContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://2025.cusec.net"),
  title: {
    default: "CUSEC 2025 - Canadian University Software Engineering Conference",
    template: "%s | CUSEC 2025",
  },
  description:
    "CUSEC 2025, the 24th Canadian University Software Engineering Conference, took place January 9-11, 2025. The next edition is CUSEC 2027 at 2027.cusec.net.",
  authors: [{ name: "CUSEC Organization" }],
  creator: "CUSEC Organization",
  publisher: "CUSEC",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "CUSEC 2025 - Canadian University Software Engineering Conference",
    description:
      "CUSEC 2025, the 24th Canadian University Software Engineering Conference. The next edition is CUSEC 2027 at 2027.cusec.net.",
    url: "./",
    siteName: "CUSEC 2025",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/images/cusec2025.png",
        width: 1903,
        height: 987,
        alt: "CUSEC 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CUSEC 2025 - Canadian University Software Engineering Conference",
    description:
      "CUSEC 2025 took place January 9-11, 2025. The next edition is CUSEC 2027.",
    images: ["/images/cusec2025.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const conferenceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cusec.net/#organization",
      name: "CUSEC",
      alternateName: "Canadian University Software Engineering Conference",
      url: "https://cusec.net",
      sameAs: [
        "https://2027.cusec.net",
        "https://www.instagram.com/cusecofficial/",
        "https://www.linkedin.com/company/cusec/",
        "https://github.com/cusec",
      ],
    },
    {
      "@type": "EventSeries",
      "@id": "https://cusec.net/#series",
      name: "Canadian University Software Engineering Conference",
      url: "https://cusec.net",
      organizer: { "@id": "https://cusec.net/#organization" },
    },
    {
      "@type": "Event",
      "@id": "https://2025.cusec.net/#event",
      name: "CUSEC 2025",
      url: "https://2025.cusec.net",
      startDate: "2025-01-09",
      endDate: "2025-01-11",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      superEvent: { "@id": "https://cusec.net/#series" },
      organizer: { "@id": "https://cusec.net/#organization" },
    },
    {
      "@type": "Event",
      "@id": "https://2027.cusec.net/#event",
      name: "CUSEC 2027",
      url: "https://2027.cusec.net",
      startDate: "2027-01",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Montr\u00e9al, QC",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Montr\u00e9al",
          addressRegion: "QC",
          addressCountry: "CA",
        },
      },
      superEvent: { "@id": "https://cusec.net/#series" },
      organizer: { "@id": "https://cusec.net/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className="overflow-x-hidden overflow-y-auto mainGradientBackground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(conferenceJsonLd) }}
        />
        <NavProvider>
          <Navbar />
          {children}
          <Footer />
        </NavProvider>
      </body>
    </html>
  );
}
