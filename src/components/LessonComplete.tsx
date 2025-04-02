
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Confetti } from "lucide-react";

interface LessonCompleteProps {
  lessonId: string;
  score: number;
  totalExercises: number;
}

const LessonComplete: React.FC<LessonCompleteProps> = ({
  score,
  totalExercises,
}) => {
  const navigate = useNavigate();
  const percentage = Math.round((score / totalExercises) * 100);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 text-center">
      <div className="w-24 h-24 rounded-full bg-soma-primary/20 flex items-center justify-center mb-6">
        <Confetti className="w-12 h-12 text-soma-primary animate-bounce-light" />
      </div>

      <h2 className="text-2xl font-bold mb-2">Lesson Complete!</h2>
      
      <p className="text-gray-600 mb-6">
        You scored {score} out of {totalExercises} ({percentage}%)
      </p>

      <div className="w-full max-w-md h-8 bg-gray-200 rounded-full overflow-hidden mb-8">
        <div
          className="h-full bg-soma-primary flex items-center justify-center text-white text-sm font-medium"
          style={{ width: `${percentage}%` }}
        >
          {percentage}%
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="border-soma-primary text-soma-primary hover:bg-soma-primary/10"
        >
          Back to Lessons
        </Button>
        <Button
          onClick={() => navigate("/")}
          className="bg-soma-secondary hover:bg-soma-secondary/90"
        >
          Continue Learning
        </Button>
      </div>
    </div>
  );
};

export default LessonComplete;
