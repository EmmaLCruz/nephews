import Name from "./Name";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[color] h-28">
      <nav className="header__navbar flex justify-between items-center uppercase relative max-w-[1200px] mx-auto h-full px-8">
        <span className="material-symbols-outlined lg:hidden">menu</span>
        <ul className="gap-6 hidden lg:flex">
          <li>
            <a href="#">{t("home")}</a>
          </li>
          <li>
            <a href="">{t("news")}</a>
          </li>
          <li>
            <a href="">{t("about")}</a>
          </li>
          <li>
            <a href="">{t("tour")}</a>
          </li>
        </ul>

        <a
          className="absolute hover:text-white text-5xl left-1/2 -translate-x-1/2"
          href="#"
        >
          <Name />
        </a>

        <ul className="gap-6 hidden lg:flex">
          <li>
            <a href="">{t("albums")}</a>
          </li>
          <li>
            <a href="">{t("media")}</a>
          </li>
          <li>
            <a href="">{t("store")}</a>
          </li>
          <li>
            <a href="">{t("follow")}</a>
          </li>
        </ul>

        <div className="lg:hidden">
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  );
};

export default Header;
