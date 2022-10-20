import Logo from "components/atoms/logo/logo";
import MainNav from "components/molecules/main-nav/main-nav";
import useMainNav from "lib/hooks/use-nav";

const Header = () => {
  const navList = useMainNav();

  return (
    <header className="flex min-h-20 w-full justify-between items-end border-b px-4 py-2">
      <Logo />
      <MainNav navList={navList} />
    </header>
  );
};

export default Header;