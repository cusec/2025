import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className="overflow-x-hidden overflow-y-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
