import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Results from "./Pages/Results";
import { useEffect, useState } from "react";
import Assessment from "./Pages/Assessment";
import TakeAssessment from "./Pages/AssessmentDetails/TakeAssessment";
import AssessmentLists from "./Pages/AssessmentDetails/AssessmentLists";
import { Routes, Route } from "react-router-dom";
import Explore from "./Pages/Explore";
import Chat from "./Pages/Chat";
function App() {
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
      <Routes>
        {findid !== null && findid.length > 0 ? (
          <>
            {" "}
            <Route path="/" element={<Home />}></Route>
            <Route path="/assessment" element={<Assessment />}></Route>
            <Route path="/results" element={<Results />}></Route>
            <Route path="/assessment/:id" element={<AssessmentLists />}></Route>
            <Route
              path="/assessment/:id/:assessmentid"
              element={<TakeAssessment />}
            />
            <Route path="/group/chat" element={<Chat />} />
          </>
        ) : (
          <>
            {" "}
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
