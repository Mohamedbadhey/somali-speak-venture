
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import LessonCard from "@/components/LessonCard";
import QuizCard from "@/components/QuizCard";
import ProgressBar from "@/components/ProgressBar";
import DashboardStats from "@/components/DashboardStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator"; 

const Index = () => {
  const { lessons, allQuizzes } = useLanguage();
  const [contentType, setContentType] = useState<"lessons" | "quizzes">("lessons");

  const beginnerLessons = lessons.filter((lesson) => lesson.level === "beginner");
  const intermediateLessons = lessons.filter((lesson) => lesson.level === "intermediate");
  const advancedLessons = lessons.filter((lesson) => lesson.level === "advanced");
  
  const beginnerQuizzes = allQuizzes.filter((quiz) => quiz.level === "beginner");
  const intermediateQuizzes = allQuizzes.filter((quiz) => quiz.level === "intermediate");
  const advancedQuizzes = allQuizzes.filter((quiz) => quiz.level === "advanced");
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-soma-dark mb-2">Learn Somali</h1>
        <p className="text-gray-600 mb-6">
          Master Somali language with fun, bite-sized lessons and quizzes.
        </p>
        
        <DashboardStats />
        
        <div className="mb-8">
          <ProgressBar />
        </div>
        
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-full ${
              contentType === "lessons"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setContentType("lessons")}
          >
            Lessons
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              contentType === "quizzes"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setContentType("quizzes")}
          >
            Quizzes
          </button>
        </div>
        
        {contentType === "lessons" ? (
          <Tabs defaultValue="beginner">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            
            <TabsContent value="beginner">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {beginnerLessons.map((lesson) => (
                  <LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="intermediate">
              {intermediateLessons.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {intermediateLessons.map((lesson) => (
                    <LessonCard key={lesson.id} lesson={lesson} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                  <p className="text-gray-600">
                    Complete beginner lessons to unlock intermediate content.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="advanced">
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-gray-600">
                  Advanced lessons are being developed. Check back later!
                </p>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <Tabs defaultValue="beginner">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            
            <TabsContent value="beginner">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {beginnerQuizzes.map((quiz) => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="intermediate">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {intermediateQuizzes.map((quiz) => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="advanced">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {advancedQuizzes.map((quiz) => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
};

export default Index;
