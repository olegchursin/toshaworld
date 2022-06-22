import Link from 'next/link';

interface ILogo {
  readonly href?: string;
}

const Logo: React.FC<ILogo> = ({ href }) => {
  const base = (
    <h1 className="flex items-center gap-4 text-yellow-700">
      <span>Tosha</span>
      <span>
        <img className="h-12 rounded-full" src="/img/favicon.jpg" alt="Tosha" />
      </span>
      <span>World</span>
    </h1>
  );

  const logo = href ? (
    <Link href={href}>
      <div className="cursor-pointer">{base}</div>
    </Link>
  ) : (
    base
  );

  return logo;
};

export default Logo;
