
import React from "react";
import { useNavigate } from "react-router-dom";
import { LessonType } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface LessonCardProps {
  lesson: LessonType;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  const navigate = useNavigate();
  
  const startLesson = () => {
    navigate(`/lesson/${lesson.id}`);
  };
  
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-md ${lesson.complete ? 'border-soma-primary' : ''}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{lesson.title}</CardTitle>
          {lesson.complete && (
            <CheckCircle2 className="text-soma-primary h-5 w-5" />
          )}
        </div>
        <CardDescription>{lesson.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge variant="outline" className="bg-soma-gray text-soma-dark">
          {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
        </Badge>
        <div className="mt-2 text-sm text-gray-500">
          {lesson.exercises.length} exercises
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={startLesson}
          className={`w-full ${
            lesson.complete
              ? "bg-soma-secondary hover:bg-soma-secondary/90"
              : "bg-soma-primary hover:bg-soma-primary/90"
          }`}
        >
          {lesson.complete ? "Review Lesson" : "Start Lesson"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LessonCard;
