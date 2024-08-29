import React from "react";

import logo from "../img/logo.svg";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a href="#">Accueil</a>
      <a href="#">Profil</a>
      <a href="#">Réglage</a>
      <a href="#">Communauté</a>
    </header>
  );
}
