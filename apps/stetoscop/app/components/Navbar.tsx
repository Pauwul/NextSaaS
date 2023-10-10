import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.svg";
export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Stetoscop Logo"
        width={70}
        height={20}
        quality={100}
      />
      <h1>Doctors Near You</h1>
      <Link href="/"> Dashboards</Link>
      <Link href="/doctors"> Doctors</Link>
    </nav>
  );
}
