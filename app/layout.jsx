import "./globals.css";

export const metadata = {
  title: "Owain Stringer | Business Websites",
  description:
    "Freelance business website design and build for clear, fast, enquiry-ready websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
