import Image from "next/image";
import Link from "next/link";
import { deflate } from "zlib";

function Navbar() {
  return (
    <header className="top-0 left-0 right-0 fixed bg-black/40 border-b border-neutral-900 backdrop-blur-lg z-50  p-4 flex justify-between">
      <aside className="flex gap-0.5 items-center font-bold text-3xl">
        <Image src="/Logo.jpeg" alt="fuzzie logo" className="shadow-sm" width={105} height={15} />
      </aside>
      <nav className="flex justify-center mx-auto">
        <ul className="flex items-center gap-4">
          <li><Link href={"#"}>Products</Link></li>
          <li><Link href={"#"}>Pricing</Link></li>
          <li><Link href={"#"}>Clients</Link></li>
          <li><Link href={"#"}>Resources</Link></li>
          <li><Link href={"#"}>Documentation</Link></li>
          <li><Link href={"#"}>Enterprise</Link></li>
          <li><Link href={"#"} className="inline-flex brightness-150 h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Dashbourd
          </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;
