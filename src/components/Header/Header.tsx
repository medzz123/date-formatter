import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <nav>
      <p>Logo</p>
      <ul>
        <li>
          <Link href="/dayjs">Day js</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
