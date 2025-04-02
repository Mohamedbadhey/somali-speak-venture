
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import LessonExercise from "@/components/LessonExercise";
import LessonComplete from "@/components/LessonComplete";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft } from "lucide-react";

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { lessons, completeLesson, addXp } = useLanguage();
  
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);
  
  const lesson = lessons.find((l) => l.id === lessonId);
  
  useEffect(() => {
    if (!lesson) {
      navigate("/");
    }
  }, [lesson, navigate]);
  
  if (!lesson) {
    return null;
  }
  
  const { exercises } = lesson;
  const totalExercises = exercises.length;
  const progress = Math.round(((currentExerciseIndex) / totalExercises) * 100);
  
  const handleExerciseComplete = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers(correctAnswers + 1);
    }
    
    if (currentExerciseIndex < totalExercises - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      // Lesson complete
      completeLesson(lesson.id);
      
      // Calculate XP: base 10 + 5 for each correct answer
      const earnedXp = 10 + (correctAnswers * 5);
      addXp(earnedXp);
      
      setLessonComplete(true);
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
            Back to lessons
          </Button>
          
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-soma-dark">
              {lesson.title}
            </h1>
            <span className="text-sm text-gray-500">
              {currentExerciseIndex + 1}/{totalExercises}
            </span>
          </div>
          
          <Progress value={progress} className="h-2 mb-6" />
          
          {!lessonComplete ? (
            <LessonExercise
              exercise={exercises[currentExerciseIndex]}
              onComplete={handleExerciseComplete}
            />
          ) : (
            <LessonComplete
              lessonId={lesson.id}
              score={correctAnswers}
              totalExercises={totalExercises}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default LessonPage;
