import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const quizContext = useQuiz();
  console.log("useQuiz() output:", quizContext);

  const { numQuestions, dispatch } = quizContext;

  console.log("numQuestions:", numQuestions);
  console.log("dispatch:", dispatch); // Should be a function

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
