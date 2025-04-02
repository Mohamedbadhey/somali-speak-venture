
import { QuizType } from "../types";

export const beginnerQuizzes: QuizType[] = [
  {
    id: "basics-quiz",
    title: "Somali Basics Quiz",
    description: "Test your knowledge of basic Somali words and phrases",
    level: "beginner",
    complete: false,
    questions: [
      {
        id: "bq1",
        type: "matching",
        question: "Match the Somali words with their English translations",
        correctMatches: {
          "Salaan": "Hello",
          "Nabadgelyo": "Goodbye",
          "Mahadsanid": "Thank you",
          "Haa": "Yes",
          "Maya": "No"
        }
      },
      {
        id: "bq2",
        type: "multiple-choice",
        question: "What is the correct translation for 'Good morning' in Somali?",
        options: ["Galab wanaagsan", "Habeen wanaagsan", "Subax wanaagsan", "Maalin wanaagsan"],
        answer: "Subax wanaagsan"
      }
    ]
  },
  {
    id: "family-quiz",
    title: "Family Terms Quiz",
    description: "Test your knowledge of Somali family terms",
    level: "beginner",
    complete: false,
    questions: [
      {
        id: "fq1",
        type: "matching",
        question: "Match the Somali family terms with their English translations",
        correctMatches: {
          "Hooyo": "Mother",
          "Aabo": "Father",
          "Walaal": "Sibling",
          "Ayeeyo": "Grandmother",
          "Awoowe": "Grandfather"
        }
      },
      {
        id: "fq2",
        type: "multiple-choice",
        question: "How do you say 'sister' in Somali?",
        options: ["Ina abti", "Walaal gabadh", "Adeer", "Eeddo"],
        answer: "Walaal gabadh"
      }
    ]
  }
];

export const intermediateQuizzes: QuizType[] = [
  {
    id: "food-quiz",
    title: "Food Quiz",
    description: "Test your knowledge of Somali food vocabulary",
    level: "intermediate",
    complete: false,
    questions: [
      {
        id: "iq1",
        type: "matching",
        question: "Match the Somali food terms with their English translations",
        correctMatches: {
          "Bariis": "Rice",
          "Hilib": "Meat",
          "Canjeero": "Pancake",
          "Muufo": "Bread",
          "Biyo": "Water"
        }
      },
      {
        id: "iq2",
        type: "multiple-choice",
        question: "What is 'Shaah' in English?",
        options: ["Coffee", "Tea", "Juice", "Milk"],
        answer: "Tea"
      }
    ]
  }
];

export const advancedQuizzes: QuizType[] = [
  {
    id: "grammar-quiz",
    title: "Advanced Grammar Quiz",
    description: "Test your knowledge of Somali grammar rules",
    level: "advanced",
    complete: false,
    questions: [
      {
        id: "aq1",
        type: "multiple-choice",
        question: "Which of these sentences uses the correct verb conjugation?",
        options: [
          "Aniga baan soo socda",
          "Aniga waan soo socdaa",
          "Aniga soo socdaa waan",
          "Aniga soo socda baan"
        ],
        answer: "Aniga waan soo socdaa"
      },
      {
        id: "aq2",
        type: "matching",
        question: "Match the Somali prepositions with their English translations",
        correctMatches: {
          "Ku": "In/On",
          "Ka": "From",
          "U": "To/For",
          "La": "With",
          "Ku saabsan": "About"
        }
      }
    ]
  }
];

export const allQuizzes = [...beginnerQuizzes, ...intermediateQuizzes, ...advancedQuizzes];
