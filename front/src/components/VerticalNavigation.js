import React from "react";

import "../style/components/verticalNavigation.css"

import NavButton from "./NavButton";

import Meditation from "../img/Meditation.svg";
import Swimming from "../img/Swimming.svg";
import Cycling from "../img/Cycling.svg";
import Bodybuilding from "../img/Bodybuilding.svg";

export default function VerticalNavigation() {
  return (
    <nav className="vertical-navigation">
      <NavButton sport={Meditation} sportName="Meditation" />
      <NavButton sport={Swimming} sportName="Swimming" />
      <NavButton sport={Cycling} sportName="Cycling" />
      <NavButton sport={Bodybuilding} sportName="Bodybuilding" />
    </nav>
  );
}
