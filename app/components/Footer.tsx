export default function Footer() {
    return (
      <footer className="mt-20 py-8 text-center text-sm text-white/40 border-t border-white/10">
        © {new Date().getFullYear()} WM Dev Studio. All rights reserved.
      </footer>
    );
  }