import React from "react";
import NavBarComp from "../components/NavBarComp";
import HomeDetails from "../components/HomeDetails";
import { useEffect, useState } from "react";
import NavBarCompWithLogin from "../components/NavBarCompWithLogin";
import Footer from "../components/Footer";
function Homepage() {
  const [findid, setFindid] = useState("");
  const [changestate, setchangestate] = useState(true);
  setTimeout(() => {
    if (changestate === true) {
      setchangestate(false);
    } else {
      setchangestate(true);
    }
  }, 300);
  useEffect(() => {
    setFindid(localStorage.getItem("user"));
  }, [changestate]);
  return (
    <>
      {findid !== null && findid.length > 0 ? (
        <>
          {" "}
          <NavBarCompWithLogin />
        </>
      ) : (
        <>
          <NavBarComp />
        </>
      )}
      <HomeDetails />
      <br />
    </>
  );
}

export default Homepage;
