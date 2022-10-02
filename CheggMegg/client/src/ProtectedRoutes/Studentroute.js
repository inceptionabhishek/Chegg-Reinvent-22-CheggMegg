import React from "react";
import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

function Studentroute() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("login") === "true" ? true : false || false
  );
  const [notLoggedIn, setNotloggedIn] = useState(!loggedIn);
  const [curruseremail, setCurruseremail] = useState(
    localStorage.getItem("email") || ""
  );
  const [user, setUser] = useState(localStorage.getItem("user") || "");
  const [loggedInTutor, setLoggedInTutor] = useState(
    localStorage.getItem("user") === "tutor" || false
  );
  const [loggedInAdmin, setLoggedInAdmin] = useState(
    localStorage.getItem("user") === "admin" || false
  );
  const [loggedInStudent, setLoggedInStudent] = useState(
    localStorage.getItem("user") === "student" || false
  );
  const useAuth = () => {
    return loggedInStudent === true ? true : false;
  };
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : loggedInTutor === true ? (
    <Navigate to="/tutor/solvedquestions" />
  ) : loggedInAdmin === true ? (
    <Navigate to="/admin" />
  ) : (
    <Navigate to="/" />
  );
}

export default Studentroute;
