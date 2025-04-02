
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import LessonCard from "@/components/LessonCard";
import ProgressBar from "@/components/ProgressBar";
import DashboardStats from "@/components/DashboardStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const { lessons } = useLanguage();

  const beginnerLessons = lessons.filter((lesson) => lesson.level === "beginner");
  const intermediateLessons = lessons.filter((lesson) => lesson.level === "intermediate");
  const advancedLessons = lessons.filter((lesson) => lesson.level === "advanced");
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-soma-dark mb-2">Learn Somali</h1>
        <p className="text-gray-600 mb-6">
          Master Somali language with fun, bite-sized lessons.
        </p>
        
        <DashboardStats />
        
        <div className="mb-8">
          <ProgressBar />
        </div>
        
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
      </main>
    </div>
  );
};

export default Index;
