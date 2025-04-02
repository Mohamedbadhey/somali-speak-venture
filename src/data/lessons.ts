
import { LessonType } from "../types";

export const beginnerLessons: LessonType[] = [
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
  }
];

export const intermediateLessons: LessonType[] = [
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
  }
];

export const allLessons = [...beginnerLessons, ...intermediateLessons];
