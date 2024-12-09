import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./i18n/i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import Footer from "./components/Footer";
import News from "./components/News";
import About from "./components/About";
import Tour from "./components/Tour";
import Albums from "./components/Albums";
import Media from "./components/Media";
import Store from "./components/Store";
import Follow from "./components/Follow";
import ScrollToTopButton from "./components/ScrollToTopButton";
import NewsBlog from "./components/NewsBlog";

const Home = () => {
  return (
    <>
      <Hero />
      <News />
      <About />
      <Tour />
      <Albums />
      <Media />
      <Store />
      <Follow />
    </>
  );
};

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      {/* <Loader /> */}
      <Header />

      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsblog/:id" element={<NewsBlog />} />
      </Routes>

      <Footer />
    </I18nextProvider>
  );
}

export default App;
