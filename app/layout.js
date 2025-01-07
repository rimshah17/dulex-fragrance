import { Great_Vibes } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const greatVibes = Great_Vibes({
  weight: "400", // This is the only weight available for Great Vibes
  subsets: ["latin"], // Choose the subset you need
  variable: "--font-great-vibes",
  display: "swap", // Optimized loading
});

export const metadata = {
  title: "Food Tuck",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
