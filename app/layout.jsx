import "./globals.css";

export const metadata = {
  title: "Cadryx | Business Websites",
  description:
    "Business website design, build, and management for clear, fast, enquiry-ready websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
