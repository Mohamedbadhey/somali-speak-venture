
import React, { useState } from "react";
import { QuizQuestion as QuizQuestionType } from "@/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, X } from "lucide-react";
import { toast } from "sonner";

interface QuizQuestionProps {
  question: QuizQuestionType;
  onComplete: (correct: boolean) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const handleSubmit = () => {
    let correct = false;
    
    if (question.type === "multiple-choice" && question.answer) {
      correct = selectedAnswer === question.answer;
    } else if (question.type === "matching" && question.correctMatches) {
      const allMatched = Object.keys(question.correctMatches).every(
        (key) => matches[key] === question.correctMatches![key]
      );
      correct = allMatched;
    }
    
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      toast("Correct! +10 XP", {
        description: "Great job!",
      });
    } else {
      toast("Incorrect", {
        description: "Try again next time!",
      });
    }
    
    setTimeout(() => {
      onComplete(correct);
      setSelectedAnswer("");
      setMatches({});
      setShowResult(false);
    }, 1500);
  };
  
  const handleMatchSelect = (term: string, translation: string) => {
    setMatches({ ...matches, [term]: translation });
  };
  
  return (
    <Card className="p-6 relative">
      {showResult && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-lg z-10">
          {isCorrect ? (
            <Check className="h-16 w-16 text-green-500" />
          ) : (
            <X className="h-16 w-16 text-red-500" />
          )}
        </div>
      )}
      
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      
      {question.type === "multiple-choice" && question.options && (
        <div className="mb-6">
          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}
      
      {question.type === "matching" && question.correctMatches && (
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Terms</h3>
              {Object.keys(question.correctMatches).map((term, index) => (
                <div key={index} className="mb-2 p-2 bg-gray-100 rounded">
                  {term}
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Select Matching Translations</h3>
              {Object.keys(question.correctMatches).map((term, index) => (
                <div key={index} className="mb-2">
                  <select
                    className="w-full p-2 border rounded"
                    value={matches[term] || ""}
                    onChange={(e) => handleMatchSelect(term, e.target.value)}
                  >
                    <option value="">Select translation</option>
                    {Object.values(question.correctMatches!).map((translation, i) => (
                      <option key={i} value={translation}>
                        {translation}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <Button 
        className="w-full" 
        onClick={handleSubmit}
        disabled={
          (question.type === "multiple-choice" && !selectedAnswer) ||
          (question.type === "matching" && 
            Object.keys(matches).length !== Object.keys(question.correctMatches || {}).length)
        }
      >
        Check Answer
      </Button>
    </Card>
  );
};

export default QuizQuestion;
