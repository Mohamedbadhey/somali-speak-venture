
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Languages, Settings } from "lucide-react";

const Header = () => {
  const { userProgress, toggleLanguageDirection, resetProgress } = useLanguage();

  return (
    <header className="sticky top-0 bg-white border-b z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-soma-primary">
            SomaliSpeak
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center bg-soma-light rounded-full px-4 py-1 mr-2">
            <span className="text-soma-dark font-medium">XP: {userProgress.totalXp}</span>
          </div>
          
          <div className="hidden md:flex items-center bg-soma-light rounded-full px-4 py-1">
            <span className="text-soma-dark font-medium">
              {userProgress.languageDirection === "english-to-somali" 
                ? "EN → SO" 
                : "SO → EN"}
            </span>
          </div>
          
          <Button 
            onClick={toggleLanguageDirection}
            variant="ghost" 
            size="icon"
            title="Switch language direction"
            className="text-soma-secondary"
          >
            <Languages size={20} />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem onClick={toggleLanguageDirection}>
                Switch to {userProgress.languageDirection === "english-to-somali" 
                  ? "Somali → English" 
                  : "English → Somali"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={resetProgress}>
                Reset Progress
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
