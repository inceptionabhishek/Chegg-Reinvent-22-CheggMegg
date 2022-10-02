import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import NavBarCompWithLogin from "../../components/NavBarCompWithLogin";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function TakeAssessment() {
  const [loader, setLoader] = useState(true);
  const [Questionbank, setQuestionbank] = useState([]);

  //useState Hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const params = useParams();
  useEffect(() => {
    axios
      .post("http://localhost:2000/assessment/get", {
        id: params.assessmentid,
      })
      .then((res) => {
        console.log(res.data.Data.Questions);
        setQuestionbank(res.data.Data.Questions);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect === "true") {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const saveresults = async () => {
    console.log(score);
    await axios
      .post("http://localhost:2000/user/take/test", {
        email: localStorage.getItem("user"),
        id: params.assessmentid,
        score: score,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  return (
    <>
      <NavBarCompWithLogin />
      {loader === true ? (
        <>
          {" "}
          <Spinner animation="border" variant="primary" />
        </>
      ) : (
        <>
          {" "}
          <div className="app">
            {showScore ? (
              <div className="score-section">
                You have scored {score} out of {Questionbank.length}
                <>
                  <button type="submit" onClick={resetQuiz}>
                    Play Again!!
                  </button>
                  <button type="submit" onClick={saveresults}>
                    Save Results
                  </button>
                </>
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>{currentQuestion + 1}</span>/{Questionbank.length}
                  </div>

                  <div className="question-text">
                    {Questionbank[currentQuestion].Question}
                  </div>
                </div>

                <div className="answer-section">
                  {Questionbank[currentQuestion].Answers.map((answer) => (
                    <button
                      onClick={() => handleAnswerResponse(answer.isCorrect)}
                    >
                      {answer.Answer}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default TakeAssessment;
