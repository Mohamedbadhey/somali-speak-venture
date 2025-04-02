
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

export interface QuizType {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  questions: QuizQuestion[];
  complete: boolean;
}

export interface QuizQuestion {
  id: string;
  type: 'matching' | 'multiple-choice';
  question: string;
  options?: string[];
  correctMatches?: { [key: string]: string };
  answer?: string;
}

export interface UserProgress {
  completedLessons: string[];
  completedQuizzes: string[];
  currentStreak: number;
  totalXp: number;
  languageDirection: 'english-to-somali' | 'somali-to-english';
}
