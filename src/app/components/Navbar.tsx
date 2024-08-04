import Image from 'next/image';
import Link from 'next/link';
import party_popper from '@/app/resources/party_popper.png';

export default function Navbar() {
  return (
    <>
      <h1 className="navbar-title">
        <Image
          src={party_popper}
          alt="Party Popper Icon"
          width={35}
          height={35}
        />
        <Link href="/">react-tada</Link>
      </h1>
      <nav>
        {/* <Link href="">Documentation</Link> */}
        <Link href="https://github.com/tada-js/react-tada">Github</Link>
        <Link href="https://www.npmjs.com/package/react-tada">npm</Link>
      </nav>
    </>
  );
}
