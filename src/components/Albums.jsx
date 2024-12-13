import { useTranslation } from "react-i18next";
import AlbumCover01 from "../assets/images/wallflowers.webp";
import AlbumCover02 from "../assets/images/melb.webp";
import AlbumCover03 from "../assets/images/macro.webp";
import AlbumCover04 from "../assets/images/cf.webp";
import AlbumCover05 from "../assets/images/koe.webp";
import AlbumCover06 from "../assets/images/idb.webp";
import VinylDisc01 from "../assets/images/vinyl-disc.png";

const Album = ({ cover, title, year }) => {
  const { t } = useTranslation();

  return (
    <a href="#" className="album__container" title={t("albums.listen")}>
      <div className="album__images__container">
        <img
          className="album__cover"
          width="500"
          height="500"
          src={cover}
          alt={`Portada del álbum ${title}`}
        />
        <img
          className="album__disc"
          width="500"
          height="500"
          src={VinylDisc01}
          alt="Disco de vinilo"
        />
      </div>
      <h3 className="album__title">{title}</h3>
      <span className="album__year">{year}</span>
    </a>
  );
};

const Albums = () => {
  const { t } = useTranslation();

  return (
    <section
      className="scroll-top-margin albums py-16 mx-auto bg-slate-200 text-black"
      id="albums"
    >
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            {t("albums.title")}
            <span>{t("albums.titleSpan")}</span>
          </h2>
          <p className="text-lg">{t("albums.description")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-40 gap-y-12 w-full md:w-5/6">
          <Album cover={AlbumCover01} title="Wallflowers" year="2021" />
          <Album cover={AlbumCover02} title="Alive in Melbourne" year="2020" />
          <Album cover={AlbumCover03} title="Macro" year="2019" />
          <Album cover={AlbumCover04} title="Cloud Factory" year="2018" />
          <Album cover={AlbumCover05} title="King of Everything" year="2016" />
          <Album
            cover={AlbumCover06}
            title="Inhale, Do not Breathe"
            year="2012"
          />
        </div>
        <a href="#" className="red__btn">
          {t("albums.itunes")}
        </a>
      </article>
    </section>
  );
};

export default Albums;
