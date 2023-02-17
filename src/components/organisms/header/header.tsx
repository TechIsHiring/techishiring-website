import Logo from "components/atoms/logo/logo";
import HeaderText from "components/atoms/typography/heading-text";
import MainNav from "components/molecules/main-nav/main-nav";
import useMainNav from "lib/hooks/use-nav";
import useMobileNav from "lib/hooks/use-mobile-nav";

const Header = () => {
  const navList = useMainNav();
  const mobileList = useMobileNav();

  return (
    <header className="sticky top-0 z-10 flex h-24 w-full items-center justify-between border-b bg-white px-4 py-2">
      <div className="flex items-center">
        <Logo />
      </div>
      <MainNav navList={navList} mobileList={mobileList} />
    </header>
  );
};

export default Header;
