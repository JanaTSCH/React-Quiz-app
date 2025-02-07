import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz(); // Берем нужные данные напрямую

  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        dispatch({ type: index < numQuestions - 1 ? "nextQuestion" : "finish" })
      }
    >
      {index < numQuestions - 1 ? "Next" : "Finish"}
    </button>
  );
}

export default NextButton;
