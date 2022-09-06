import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { MarketsPage } from "../pages/Markets";
import { MarketPage } from "../pages/Market";
import { RegisterPage } from "../pages/Register";
import { UserPage } from "../pages/User";
import { AboutUsPage } from "../pages/AboutUs";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/markets" element={<MarketsPage />} />
      <Route path="/markets/:id" element={<MarketPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/aboutus" element={<AboutUsPage />} />
    </Routes>
  );
};
