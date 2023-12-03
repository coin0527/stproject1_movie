import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./Home/Home";
import { Detail } from "./Detail/Detail";
import { Search } from "./Search/Search";
import { Login } from "./Login/Login";
import { SignUp } from "./Login/SignUp";
import { Pagenotfound } from "./components/Pagenotfound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Popular } from "./Home/Pages/Popular";
import { Lated } from "./Home/Pages/Lated";
import { Upcoming } from "./Home/Pages/Upcoming";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<SignUp />} />
        <Route path={routes.pop} element={<Popular />} />
        <Route path={routes.upc} element={<Upcoming />} />
        <Route path={routes.rat} element={<Lated />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
export default Router;
