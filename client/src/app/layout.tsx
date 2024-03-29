import type { Metadata } from "next";
import "./globals.css";
import App from "./App";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans max-w-screen-2xl mx-auto box-border">
        <App>{children}</App>
      </body>
    </html>
  );
}
