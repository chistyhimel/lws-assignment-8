import Navbar from "@/components/Navbar";
import AuthProvider from "@/providers/AuthProvider";
import connectMongo from "@/services/dbConnect";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Khana Khazana",
  description: "Choose from thousands of recipes",
  openGraph: {
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_SITE_URL
        }/api/og?cover=${encodeURIComponent("/assets/images/cover.png")}`,
        width: 1200,
        height: 600,
      },
    ],
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
