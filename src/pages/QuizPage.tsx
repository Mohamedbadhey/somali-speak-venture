
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import QuizQuestion from "@/components/QuizQuestion";
import QuizComplete from "@/components/QuizComplete";
import { ChevronLeft } from "lucide-react";

const QuizPage = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const { allQuizzes, completeQuiz, addXp } = useLanguage();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  
  const quiz = allQuizzes.find((q) => q.id === quizId);
  
  useEffect(() => {
    if (!quiz) {
      navigate("/");
    }
  }, [quiz, navigate]);
  
  if (!quiz) {
    return null;
  }
  
  const { questions } = quiz;
  const totalQuestions = questions.length;
  const progress = Math.round(((currentQuestionIndex) / totalQuestions) * 100);
  
  const handleQuestionComplete = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers(correctAnswers + 1);
    }
    
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz complete
      completeQuiz(quiz.id);
      
      // Calculate XP: base 20 + 10 for each correct answer
      const earnedXp = 20 + (correctAnswers * 10);
      addXp(earnedXp);
      
      setQuizComplete(true);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to quizzes
          </Button>
          
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-soma-dark">
              {quiz.title}
            </h1>
            <span className="text-sm text-gray-500">
              {currentQuestionIndex + 1}/{totalQuestions}
            </span>
          </div>
          
          <Progress value={progress} className="h-2 mb-6" />
          
          {!quizComplete ? (
            <QuizQuestion
              question={questions[currentQuestionIndex]}
              onComplete={handleQuestionComplete}
            />
          ) : (
            <QuizComplete
              quizId={quiz.id}
              score={correctAnswers}
              totalQuestions={totalQuestions}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default QuizPage;
