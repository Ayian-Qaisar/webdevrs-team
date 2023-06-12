import React from "react";
import Footer from "./component/Footer";

import Hasnat from "./component/Hasnat";
import Qadeer from "./component/Qadeer";
import Sameer from "./component/Sameer";
import Videobannner from "./component/Videobanner";

import { Ali } from "./component/Ali";

import FAQs from "./component/FAQs";
import Ban_card from "./component/Ban_card";

const App = () => {
  return (
    <>
      <Videobannner />
      <Hasnat />
      <FAQs />
      <Qadeer />
      <Sameer />
      <Ban_card />
      <Ali />

      <Footer />
    </>
  );
};
export default App;
