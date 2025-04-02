import React, { useState } from "react";
import { Exercise } from "@/types";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface LessonExerciseProps {
  exercise: Exercise;
  onComplete: (correct: boolean) => void;
}

const LessonExercise: React.FC<LessonExerciseProps> = ({ exercise, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [translationInput, setTranslationInput] = useState<string>("");
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (isAnswered) {
      onComplete(isCorrect);
      return;
    }

    let userAnswer = "";
    let correct = false;

    if (exercise.type === "multiple-choice") {
      userAnswer = selectedOption;
      correct = selectedOption === exercise.answer;
    } else if (exercise.type === "translation") {
      userAnswer = translationInput.trim().toLowerCase();
      correct = userAnswer === exercise.answer.toLowerCase();
    }

    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      toast({
        title: "Correct!",
        description: `Great job! You've got it right.`,
        variant: "default",
      });
    } else {
      toast({
        title: "Not quite right",
        description: `The correct answer is "${exercise.answer}"`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mb-8 p-6 bg-white rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-4">{exercise.question}</h3>

      {exercise.type === "multiple-choice" && (
        <RadioGroup
          value={selectedOption}
          onValueChange={setSelectedOption}
          disabled={isAnswered}
          className="space-y-3"
        >
          {exercise.options?.map((option) => (
            <div
              key={option}
              className={`flex items-center space-x-2 p-3 rounded-lg border ${
                isAnswered && option === exercise.answer
                  ? "border-soma-primary bg-soma-primary/10"
                  : isAnswered && option === selectedOption && !isCorrect
                  ? "border-soma-error bg-soma-error/10"
                  : "border-gray-200"
              }`}
            >
              <RadioGroupItem
                value={option}
                id={option}
                className={
                  isAnswered && option === exercise.answer
                    ? "text-soma-primary"
                    : ""
                }
              />
              <Label htmlFor={option} className="flex-1 cursor-pointer">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      )}

      {exercise.type === "translation" && (
        <div className="space-y-3">
          <Input
            placeholder="Type your answer here..."
            value={translationInput}
            onChange={(e) => setTranslationInput(e.target.value)}
            disabled={isAnswered}
            className={`p-3 rounded-lg border ${
              isAnswered && isCorrect
                ? "border-soma-primary bg-soma-primary/10"
                : isAnswered && !isCorrect
                ? "border-soma-error bg-soma-error/10"
                : "border-gray-200"
            }`}
          />
          
          {isAnswered && (
            <div className="mt-2 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm font-medium">
                Correct answer: <span className="text-soma-primary">{exercise.answer}</span>
              </p>
              {exercise.translation && (
                <p className="text-sm text-gray-500 mt-1">
                  Translation: {exercise.translation}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <Button
          onClick={handleSubmit}
          disabled={
            !isAnswered &&
            ((exercise.type === "multiple-choice" && !selectedOption) ||
              (exercise.type === "translation" && !translationInput))
          }
          className={`px-6 ${
            isAnswered
              ? "bg-soma-secondary hover:bg-soma-secondary/90"
              : "bg-soma-primary hover:bg-soma-primary/90"
          }`}
        >
          {isAnswered ? "Continue" : "Check"}
        </Button>
      </div>
    </div>
  );
};

export default LessonExercise;
