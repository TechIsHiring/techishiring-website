import Logo from "components/atoms/logo/logo";
import MainNav from "components/molecules/main-nav/main-nav";
import useMainNav from "lib/hooks/use-nav";

const Header = () => {
  const navList = useMainNav();

  return (
    <header className="flex justify-center sticky top-0 z-10 w-full border-b bg-white py-2">
      <div className="flex items-center w-full 3xl:w-max-screen-size justify-between px-4 h-24">
        <Logo />
        <MainNav navList={navList} />
      </div>
    </header>
  );
};

export default Header;
