import React from "react";

import "../style/page/homepage.css";

import getUserMainData from "../mock/user-main-data.js";

import Greetings from "../components/Greetings.js";

export default function Homepage() {
  const data = getUserMainData;

    console.log(data);


  return (
    <section className="homepage">
      <Greetings name="Thomas" />
    </section>
  );
}
