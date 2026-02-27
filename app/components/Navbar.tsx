import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center bg-darkSoft/60 backdrop-blur-md border-b border-white/10">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="WM Dev Studio" width={40} height={40} />
        <span className="font-semibold text-lg text-white">
          WM Dev Studio
        </span>
      </div>

      {/* Links */}
      <div className="flex items-center gap-8 text-sm font-medium">
        <Link
          href="/"
          className="text-white/70 hover:text-white transition duration-200"
        >
          Home
        </Link>

        <Link
          href="/apps"
          className="text-white/70 hover:text-white transition duration-200"
        >
          Apps
        </Link>

        <Link
          href="#contact"
          className="text-white/70 hover:text-white transition duration-200"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}