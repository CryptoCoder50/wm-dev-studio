import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "WM Dev Studio",
  description: "Software Development Studio | Web3 | AI | SaaS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white relative overflow-x-hidden">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-600 opacity-20 blur-3x1 rounded-full"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-cyan-500 opacity-20 blur 3x1 rounded-full"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}