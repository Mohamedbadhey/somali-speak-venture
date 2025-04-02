
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Award, BarChart3 } from "lucide-react";

const DashboardStats = () => {
  const { userProgress, lessons } = useLanguage();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-500 flex items-center">
            <Flame className="h-4 w-4 mr-1 text-soma-error" />
            Current Streak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{userProgress.currentStreak} days</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-500 flex items-center">
            <Award className="h-4 w-4 mr-1 text-soma-accent" />
            Total XP
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{userProgress.totalXp} XP</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-500 flex items-center">
            <BarChart3 className="h-4 w-4 mr-1 text-soma-secondary" />
            Completion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {userProgress.completedLessons.length}/{lessons.length} lessons
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
