import { Metadata } from "next";
import "react-multi-carousel/lib/styles.css";

import "@/app/globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import BackToTop from "@/app/components/Commons/BackToTop";
import Messages from "@/app/components/Commons/Messages";
import AddBanner from "@/app/components/Sections/AdBanner";
import LogoImage from "@/public/images/logo.png";

export const metadata: Metadata = {
  icons: {
    icon: `${LogoImage}`,
  },
  verification: {
    google: "koq0fIrsjqpTvNIKXVYAWa1qBYeT0UChsLBO6ohsME",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* <AddBanner /> */}
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <Messages />
      </body>
    </html>
  );
}
