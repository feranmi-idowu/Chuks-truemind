import React from "react";
import LandingPage from "./pages/landingPage";
import LoginPage from "./pages/loginPage";
import SignInPage from "./pages/signInPage";
import HomePage from "./pages/ExplorePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import ExplorePage from "./pages/ExplorePage";

function App () {
  return (

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signIn" element={<SignInPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="Account" element={<AccountPage/>} />
      </Routes>

  );
}

export default App;