import "./styles/App.scss";
import "./styles/App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./i18n/i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import Footer from "./components/Footer";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <Hero />
      <Footer />
    </I18nextProvider>
  );
}

export default App;
