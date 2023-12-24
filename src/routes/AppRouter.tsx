import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage.jsx";
import { Navbar } from "../components/Navbar.js";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" Component={HomePage} />
    </BrowserRouter>
  );
};
