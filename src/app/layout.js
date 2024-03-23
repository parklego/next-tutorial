import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/app/context/ThemeContext";
import AuthProvider from "@/components/authProvider/authProvider";

export const metadata = {
  title: "parklego",
  description: "parklego next tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
