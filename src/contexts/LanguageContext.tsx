
import React, { createContext, useContext, useState, useEffect } from "react";
import { LessonType, UserProgress, QuizType } from "../types";
import { allLessons } from "../data/lessons";
import { allQuizzes } from "../data/quizzes";
import { toast } from "sonner";

interface LanguageContextType {
  userProgress: UserProgress;
  lessons: LessonType[];
  allQuizzes: QuizType[];
  completeLesson: (lessonId: string) => void;
  completeQuiz: (quizId: string) => void;
  resetProgress: () => void;
  toggleLanguageDirection: () => void;
  addXp: (points: number) => void;
}

const defaultUserProgress: UserProgress = {
  completedLessons: [],
  completedQuizzes: [],
  currentStreak: 0,
  totalXp: 0,
  languageDirection: "english-to-somali"
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const savedProgress = localStorage.getItem("userProgress");
    return savedProgress ? JSON.parse(savedProgress) : defaultUserProgress;
  });
  
  const [lessons, setLessons] = useState<LessonType[]>(allLessons);
  const [quizzes, setQuizzes] = useState<QuizType[]>(allQuizzes);

  useEffect(() => {
    localStorage.setItem("userProgress", JSON.stringify(userProgress));
    
    // Update lessons completed status
    const updatedLessons = allLessons.map(lesson => ({
      ...lesson,
      complete: userProgress.completedLessons.includes(lesson.id)
    }));
    
    // Update quizzes completed status
    const updatedQuizzes = allQuizzes.map(quiz => ({
      ...quiz,
      complete: userProgress.completedQuizzes?.includes(quiz.id) || false
    }));
    
    setLessons(updatedLessons);
    setQuizzes(updatedQuizzes);
  }, [userProgress]);

  const completeLesson = (lessonId: string) => {
    if (!userProgress.completedLessons.includes(lessonId)) {
      setUserProgress(prev => ({
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        totalXp: prev.totalXp + 10,
        currentStreak: prev.currentStreak + 1
      }));
      toast("Lesson completed! +10 XP", {
        description: "Keep up the great work!"
      });
    }
  };

  const completeQuiz = (quizId: string) => {
    if (!userProgress.completedQuizzes?.includes(quizId)) {
      setUserProgress(prev => ({
        ...prev,
        completedQuizzes: [...(prev.completedQuizzes || []), quizId],
        totalXp: prev.totalXp + 20,
        currentStreak: prev.currentStreak + 1
      }));
      toast("Quiz completed! +20 XP", {
        description: "Excellent job!"
      });
    }
  };

  const resetProgress = () => {
    setUserProgress(defaultUserProgress);
    toast("Progress reset", {
      description: "All progress has been reset."
    });
  };

  const toggleLanguageDirection = () => {
    setUserProgress(prev => ({
      ...prev,
      languageDirection: prev.languageDirection === "english-to-somali" 
        ? "somali-to-english" 
        : "english-to-somali"
    }));
    toast("Language direction changed", {
      description: userProgress.languageDirection === "english-to-somali" 
        ? "Now learning Somali to English" 
        : "Now learning English to Somali"
    });
  };

  const addXp = (points: number) => {
    setUserProgress(prev => ({
      ...prev,
      totalXp: prev.totalXp + points
    }));
    toast(`+${points} XP`, {
      description: "Good job!"
    });
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        userProgress, 
        lessons, 
        allQuizzes: quizzes,
        completeLesson,
        completeQuiz,
        resetProgress,
        toggleLanguageDirection,
        addXp
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
