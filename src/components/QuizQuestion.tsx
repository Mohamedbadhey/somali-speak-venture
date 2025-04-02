
import React, { useState } from "react";
import { QuizQuestion as QuizQuestionType } from "@/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"; 
import { Check, X } from "lucide-react";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

interface QuizQuestionProps {
  question: QuizQuestionType;
  onComplete: (correct: boolean) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [constructedSentence, setConstructedSentence] = useState<string>("");
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
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
    } else if (question.type === "sentence-construction" && question.answer) {
      // For sentence construction, we compare the constructed sentence with the answer
      // Normalize spaces and case for more forgiving comparison
      const normalizedAnswer = question.answer.toLowerCase().trim();
      const normalizedConstruction = constructedSentence.toLowerCase().trim();
      correct = normalizedConstruction === normalizedAnswer;
    } else if (question.type === "translation" && question.answer) {
      // For translation type
      correct = selectedAnswer === question.answer;
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
      setConstructedSentence("");
      setMatches({});
      setSelectedWords([]);
      setShowResult(false);
    }, 1500);
  };
  
  const handleMatchSelect = (term: string, translation: string) => {
    setMatches({ ...matches, [term]: translation });
  };

  const handleWordSelect = (word: string) => {
    if (selectedWords.includes(word)) {
      // If word is already selected, remove it
      setSelectedWords(selectedWords.filter((w) => w !== word));
      setConstructedSentence(
        selectedWords.filter((w) => w !== word).join(" ")
      );
    } else {
      // Add word and update constructed sentence
      const newSelectedWords = [...selectedWords, word];
      setSelectedWords(newSelectedWords);
      setConstructedSentence(newSelectedWords.join(" "));
    }
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
      
      {question.type === "translation" && question.options && question.translationPrompt && (
        <div className="mb-6">
          <div className="p-3 bg-gray-50 rounded-md mb-4">
            <h3 className="font-medium mb-2">Translate:</h3>
            <p className="text-lg font-medium">{question.translationPrompt}</p>
          </div>
          
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
      
      {question.type === "sentence-construction" && question.options && (
        <div className="mb-6">
          <div className="mb-4">
            <Label className="font-medium mb-2 block">Construct the sentence:</Label>
            <div className="p-3 bg-gray-50 rounded-md min-h-[60px] mb-2">
              {constructedSentence ? constructedSentence : <span className="text-gray-400">Your sentence will appear here</span>}
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="mb-4"
              onClick={() => {
                setSelectedWords([]);
                setConstructedSentence("");
              }}
            >
              Clear
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {question.options.map((word, index) => (
              <div key={index} className="mb-2">
                <Button
                  variant={selectedWords.includes(word) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleWordSelect(word)}
                >
                  {word}
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <Button 
        className="w-full" 
        onClick={handleSubmit}
        disabled={
          (question.type === "multiple-choice" && !selectedAnswer) ||
          (question.type === "translation" && !selectedAnswer) ||
          (question.type === "matching" && 
            Object.keys(matches).length !== Object.keys(question.correctMatches || {}).length) ||
          (question.type === "sentence-construction" && !constructedSentence)
        }
      >
        Check Answer
      </Button>
    </Card>
  );
};

export default QuizQuestion;
