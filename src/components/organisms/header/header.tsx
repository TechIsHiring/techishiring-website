import Logo from "components/atoms/logo/logo";
import HeaderText from "components/atoms/typography/heading-text";
import MainNav from "components/molecules/main-nav/main-nav";
import useMainNav from "lib/hooks/use-nav";

const Header = () => {
  const navList = useMainNav();

  return (
    <header className="flex min-h-20 w-full justify-between items-end border-b px-4 py-2">
      <div className="flex items-center">
        <Logo />
        <HeaderText className="w-[440px] px-5 hidden md:block" headingLevel="h1" size="md">
          "Where great jobs and great Engineers go to find each other!"
        </HeaderText>
      </div>
      <MainNav navList={navList} />
    </header>
  );
};

export default Header;