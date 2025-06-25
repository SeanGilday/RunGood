interface Props {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: Props) {
  return (
    <>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </>
  );
}

export default Header;
