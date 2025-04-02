
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Home, RotateCcw } from "lucide-react";

interface QuizCompleteProps {
  quizId: string;
  score: number;
  totalQuestions: number;
}

const QuizComplete: React.FC<QuizCompleteProps> = ({ quizId, score, totalQuestions }) => {
  const navigate = useNavigate();
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = "";
  if (percentage === 100) {
    message = "Perfect! Amazing job!";
  } else if (percentage >= 80) {
    message = "Excellent! Well done!";
  } else if (percentage >= 60) {
    message = "Good job! Keep practicing!";
  } else {
    message = "Keep practicing, you'll get better!";
  }
  
  return (
    <Card className="p-6 text-center">
      <div className="flex justify-center mb-4">
        <Trophy className="h-16 w-16 text-yellow-500" />
      </div>
      
      <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
      <p className="text-gray-600 mb-4">{message}</p>
      
      <div className="mb-6">
        <div className="text-4xl font-bold mb-2">
          {score} / {totalQuestions}
        </div>
        <div className="text-lg font-medium text-gray-600">
          {percentage}% Correct
        </div>
      </div>
      
      <div className="flex flex-col space-y-2">
        <Button onClick={() => window.location.reload()}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
        <Button variant="outline" onClick={() => navigate("/")}>
          <Home className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </div>
    </Card>
  );
};

export default QuizComplete;
