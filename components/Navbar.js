import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt=""
            className="object-cover h-[40px]"
            width={123}
            height={40}
          />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <Link href="">Home</Link>
          </li>

          <li className="py-2">
            <Link href="">Recipe</Link>
          </li>

          <li className="py-2">
            <Link href="">About us</Link>
          </li>

          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <Link href="login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
