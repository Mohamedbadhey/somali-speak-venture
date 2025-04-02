
export interface LessonType {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  exercises: Exercise[];
  complete: boolean;
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'translation' | 'matching';
  question: string;
  options?: string[];
  answer: string;
  translation?: string;
}

export interface UserProgress {
  completedLessons: string[];
  currentStreak: number;
  totalXp: number;
  languageDirection: 'english-to-somali' | 'somali-to-english';
}
