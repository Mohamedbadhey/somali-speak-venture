
import { LessonType } from "../types";

// Helper function to generate lessons
const generateLessons = (
  level: 'beginner' | 'intermediate' | 'advanced',
  startIndex: number,
  count: number,
  topicPrefix: string
): LessonType[] => {
  const lessons: LessonType[] = [];
  
  for (let i = startIndex; i < startIndex + count; i++) {
    const topicNumber = i + 1;
    const lessonId = `${level}-${topicPrefix}-${topicNumber}`;
    
    lessons.push({
      id: lessonId,
      title: `${topicPrefix} ${topicNumber}`,
      description: `Learn ${level} ${topicPrefix.toLowerCase()} vocabulary and phrases`,
      level: level,
      complete: false,
      exercises: [
        {
          id: `${lessonId}-ex1`,
          type: "multiple-choice",
          question: `How do you say '${topicPrefix} term ${topicNumber}A' in Somali?`,
          options: ["Option A", "Option B", "Option C", "Correct Term"],
          answer: "Correct Term",
          translation: `${topicPrefix} term ${topicNumber}A`
        },
        {
          id: `${lessonId}-ex2`,
          type: "translation",
          question: `Translate '${topicPrefix} phrase ${topicNumber}B' to Somali`,
          answer: `Somali ${topicPrefix.toLowerCase()} phrase ${topicNumber}`,
          translation: `${topicPrefix} phrase ${topicNumber}B`
        },
        {
          id: `${lessonId}-ex3`,
          type: "multiple-choice",
          question: `What does '${topicPrefix} word ${topicNumber}C' mean?`,
          options: ["Wrong meaning 1", "Wrong meaning 2", "Correct meaning", "Wrong meaning 3"],
          answer: "Correct meaning",
          translation: `${topicPrefix} word ${topicNumber}C`
        }
      ]
    });
  }
  
  return lessons;
};

// Generate 200 beginner lessons across different topics
export const beginnerLessons: LessonType[] = [
  // Original beginner lessons
  {
    id: "greeting",
    title: "Greetings",
    description: "Learn basic greetings in Somali",
    level: "beginner",
    complete: false,
    exercises: [
      {
        id: "g1",
        type: "multiple-choice",
        question: "How do you say 'Hello' in Somali?",
        options: ["Nabadgelyo", "Subax wanaagsan", "Salaan"],
        answer: "Salaan",
        translation: "Hello"
      },
      {
        id: "g2",
        type: "multiple-choice",
        question: "What does 'Iska warran' mean?",
        options: ["Good morning", "How are you?", "Good night"],
        answer: "How are you?",
        translation: "Iska warran"
      },
      {
        id: "g3",
        type: "translation",
        question: "Translate 'Good morning' to Somali",
        answer: "Subax wanaagsan",
        translation: "Good morning"
      }
    ]
  },
  {
    id: "family",
    title: "Family",
    description: "Learn family-related words",
    level: "beginner",
    complete: false,
    exercises: [
      {
        id: "f1",
        type: "multiple-choice",
        question: "How do you say 'Mother' in Somali?",
        options: ["Aabo", "Hooyo", "Walaal"],
        answer: "Hooyo",
        translation: "Mother"
      },
      {
        id: "f2",
        type: "multiple-choice",
        question: "What does 'Walaal' mean?",
        options: ["Father", "Sister", "Sibling"],
        answer: "Sibling",
        translation: "Walaal"
      },
      {
        id: "f3",
        type: "translation",
        question: "Translate 'Father' to Somali",
        answer: "Aabo",
        translation: "Father"
      }
    ]
  },
  {
    id: "numbers",
    title: "Numbers",
    description: "Learn to count in Somali",
    level: "beginner",
    complete: false,
    exercises: [
      {
        id: "n1",
        type: "multiple-choice",
        question: "How do you say 'One' in Somali?",
        options: ["Laba", "Saddex", "Kow"],
        answer: "Kow",
        translation: "One"
      },
      {
        id: "n2",
        type: "multiple-choice",
        question: "What does 'Shan' mean?",
        options: ["Four", "Five", "Six"],
        answer: "Five",
        translation: "Shan"
      },
      {
        id: "n3",
        type: "translation",
        question: "Translate 'Ten' to Somali",
        answer: "Toban",
        translation: "Ten"
      }
    ]
  },
  // Generate additional beginner lessons
  ...generateLessons('beginner', 0, 40, 'Basics'),
  ...generateLessons('beginner', 0, 40, 'Phrases'),
  ...generateLessons('beginner', 0, 40, 'Conversation'),
  ...generateLessons('beginner', 0, 40, 'Everyday'),
  ...generateLessons('beginner', 0, 37, 'Essentials')
];

// Generate 200 intermediate lessons across different topics
export const intermediateLessons: LessonType[] = [
  // Original intermediate lesson
  {
    id: "food",
    title: "Food",
    description: "Learn food vocabulary",
    level: "intermediate",
    complete: false,
    exercises: [
      {
        id: "food1",
        type: "multiple-choice",
        question: "How do you say 'Rice' in Somali?",
        options: ["Bariis", "Hilib", "Muufo"],
        answer: "Bariis",
        translation: "Rice"
      },
      {
        id: "food2",
        type: "multiple-choice",
        question: "What does 'Canjeero' mean?",
        options: ["Bread", "Pancake", "Meat"],
        answer: "Pancake",
        translation: "Canjeero"
      },
      {
        id: "food3",
        type: "translation",
        question: "Translate 'Water' to Somali",
        answer: "Biyo",
        translation: "Water"
      }
    ]
  },
  // Generate additional intermediate lessons
  ...generateLessons('intermediate', 0, 40, 'Travel'),
  ...generateLessons('intermediate', 0, 40, 'Business'),
  ...generateLessons('intermediate', 0, 40, 'Culture'),
  ...generateLessons('intermediate', 0, 40, 'Health'),
  ...generateLessons('intermediate', 0, 39, 'Education')
];

// Generate 100 advanced lessons across different topics
export const advancedLessons: LessonType[] = [
  ...generateLessons('advanced', 0, 25, 'Literature'),
  ...generateLessons('advanced', 0, 25, 'Poetry'),
  ...generateLessons('advanced', 0, 25, 'Philosophy'),
  ...generateLessons('advanced', 0, 25, 'Science')
];

export const allLessons = [...beginnerLessons, ...intermediateLessons, ...advancedLessons];
