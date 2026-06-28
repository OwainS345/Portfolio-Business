import "./globals.css";

export const metadata = {
  title: "Owain Stringer | CV & Freelance Websites",
  description:
    "A personal CV and freelance website-building studio for clear, fast, business-ready websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
