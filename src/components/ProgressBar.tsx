
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Progress } from "@/components/ui/progress";

const ProgressBar = () => {
  const { userProgress, lessons } = useLanguage();
  
  const totalLessons = lessons.length;
  const completedLessons = userProgress.completedLessons.length;
  const progressPercentage = totalLessons > 0 
    ? Math.round((completedLessons / totalLessons) * 100) 
    : 0;
  
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-gray-500 mb-1">
        <span>Progress</span>
        <span>{progressPercentage}%</span>
      </div>
      <Progress value={progressPercentage} className="h-2" />
    </div>
  );
};

export default ProgressBar;
