
import React from "react";
import { Link } from "react-router-dom";
import { QuizType } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Trophy, BookOpen, Pencil, Languages } from "lucide-react";

interface QuizCardProps {
  quiz: QuizType;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  const { id, title, description, level, questions, complete } = quiz;
  
  // Calculate quiz types
  const quizTypes = questions.reduce((types, question) => {
    if (!types.includes(question.type)) {
      types.push(question.type);
    }
    return types;
  }, [] as string[]);
  
  // Get appropriate icon for quiz type
  const getQuizTypeIcon = () => {
    if (quizTypes.includes('sentence-construction')) {
      return <Pencil className="h-4 w-4 mr-1" />;
    } else if (quizTypes.includes('translation')) {
      return <Languages className="h-4 w-4 mr-1" />;
    } else if (quizTypes.includes('matching')) {
      return <BookOpen className="h-4 w-4 mr-1" />;
    } else {
      return <Trophy className="h-4 w-4 mr-1" />;
    }
  };
  
  return (
    <Link to={`/quiz/${id}`}>
      <Card className={`h-full hover:shadow-md transition-shadow ${complete ? 'border-green-300' : ''}`}>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <Badge variant={
              level === "beginner" 
                ? "default" 
                : level === "intermediate" 
                  ? "secondary" 
                  : "outline"
            }>
              {level}
            </Badge>
            
            {complete && (
              <Check className="h-5 w-5 text-green-500" />
            )}
          </div>
          
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center text-sm text-gray-500">
              <Trophy className="h-4 w-4 mr-1" />
              <span>{questions.length} questions</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              {getQuizTypeIcon()}
              <span>
                {quizTypes.includes('sentence-construction') && 'Sentence Building '}
                {quizTypes.includes('translation') && 'Translation '}
                {quizTypes.includes('matching') && 'Matching '}
                {quizTypes.includes('multiple-choice') && 'Multiple Choice'}
              </span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <div className="w-full flex justify-end">
            <Badge variant="outline" className="cursor-pointer">
              Start Quiz
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default QuizCard;
