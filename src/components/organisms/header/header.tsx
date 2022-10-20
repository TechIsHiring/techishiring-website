import Logo from "components/atoms/logo/logo";

const Header = () => {
  return (
    <header className="flex min-h-20 w-full justify-between items-end border-b px-4 py-2">
      <Logo />
    </header>
  );
};

export default Header;