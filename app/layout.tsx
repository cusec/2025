import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className="overflow-x-hidden overflow-y-auto mainGradientBackground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
