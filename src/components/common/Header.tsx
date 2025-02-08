import Link from "next/link";

const Header = () => {
  return (
    <header className="grid grid-cols-[auto_1fr] px-4 py-4 sm:px-8">
      <Link href="/" className="font-bold">
        ReactPractice
      </Link>
      <nav className="justify-self-end">
        <ul>
          <li>
            <Link href="/use-effect">useEffect</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
