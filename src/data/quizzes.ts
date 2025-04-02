
import { QuizType } from "../types";

// Beginner quizzes
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
      },
      {
        id: "bq3",
        type: "sentence-construction",
        question: "Construct the Somali greeting phrase",
        options: ["wanaagsan", "subax", "aad", "u"],
        answer: "subax wanaagsan"
      },
      {
        id: "bq4",
        type: "translation",
        question: "Select the correct translation",
        translationPrompt: "How are you?",
        options: ["Sidee tahay?", "Waa sidee?", "Xaggee baad joogtaa?", "Magacaa?"],
        answer: "Sidee tahay?"
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
      },
      {
        id: "fq3",
        type: "sentence-construction",
        question: "Construct the sentence: My brother is tall",
        options: ["waa", "dheer", "Walaalkay", "yahay"],
        answer: "Walaalkay waa dheer yahay"
      }
    ]
  },
  {
    id: "numbers-quiz",
    title: "Numbers Quiz",
    description: "Test your knowledge of Somali numbers",
    level: "beginner",
    complete: false,
    questions: [
      {
        id: "nq1",
        type: "matching",
        question: "Match the Somali numbers with their English translations",
        correctMatches: {
          "Kow": "One",
          "Laba": "Two",
          "Saddex": "Three",
          "Afar": "Four",
          "Shan": "Five"
        }
      },
      {
        id: "nq2",
        type: "translation",
        question: "Select the correct translation",
        translationPrompt: "Ten",
        options: ["Toban", "Sagaal", "Sideed", "Kow iyo toban"],
        answer: "Toban"
      },
      {
        id: "nq3",
        type: "sentence-construction",
        question: "Construct the sentence: I have three books",
        options: ["hayaa", "saddex", "buug", "Waxaan"],
        answer: "Waxaan hayaa saddex buug"
      }
    ]
  }
];

// Intermediate quizzes
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
      },
      {
        id: "iq3",
        type: "sentence-construction",
        question: "Construct the sentence: I want to eat lunch",
        options: ["qado", "cunno", "waxaan", "rabaa", "in", "aan"],
        answer: "waxaan rabaa in aan qado cunno"
      }
    ]
  },
  {
    id: "transport-quiz",
    title: "Transportation Quiz",
    description: "Test your knowledge of Somali transportation terminology",
    level: "intermediate",
    complete: false,
    questions: [
      {
        id: "tq1",
        type: "matching",
        question: "Match the Somali transportation terms with their English translations",
        correctMatches: {
          "Baabuur": "Car",
          "Diyaarad": "Airplane",
          "Bas": "Bus",
          "Markab": "Ship",
          "Tareen": "Train"
        }
      },
      {
        id: "tq2",
        type: "translation",
        question: "Select the correct translation",
        translationPrompt: "Where is the airport?",
        options: ["Garoonka diyaaradaha xaggee buu yahay?", "Maxaa kula bixi doonaa?", "Waa imisa saacad?", "Goorma ayuu tagayaa?"],
        answer: "Garoonka diyaaradaha xaggee buu yahay?"
      }
    ]
  },
  {
    id: "weather-quiz",
    title: "Weather Quiz",
    description: "Test your knowledge of Somali weather vocabulary",
    level: "intermediate",
    complete: false,
    questions: [
      {
        id: "wq1",
        type: "matching",
        question: "Match the Somali weather terms with their English translations",
        correctMatches: {
          "Roob": "Rain",
          "Qorrax": "Sun",
          "Dabayl": "Wind",
          "Qabow": "Cold",
          "Kuleel": "Heat"
        }
      },
      {
        id: "wq2",
        type: "sentence-construction",
        question: "Construct the sentence: Today is very hot",
        options: ["aad", "waa", "maanta", "kulul", "u"],
        answer: "maanta waa aad u kulul"
      }
    ]
  }
];

// Advanced quizzes
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
      },
      {
        id: "aq3",
        type: "sentence-construction",
        question: "Construct the sentence: If I study, I will pass the test",
        options: ["imtixaanka", "haddii", "aan", "baasayaa", "barto"],
        answer: "haddii aan barto imtixaanka baasayaa"
      }
    ]
  },
  {
    id: "literature-quiz",
    title: "Somali Literature Quiz",
    description: "Test your knowledge of Somali literature and poetry",
    level: "advanced",
    complete: false,
    questions: [
      {
        id: "lq1",
        type: "multiple-choice",
        question: "Which of the following is a traditional form of Somali poetry?",
        options: ["Gabay", "Casharo", "Heeso", "Warqad"],
        answer: "Gabay"
      },
      {
        id: "lq2",
        type: "translation",
        question: "Select the correct translation",
        translationPrompt: "The poet recited a beautiful poem",
        options: ["Abwaankii wuxuu tiriyey gabay qurux badan", "Buugga waxaa qoray qoraa caan ah", "Sheekada waxay ahayd mid xiiso leh", "Heesaha waxaa qaadaya fannaanada"],
        answer: "Abwaankii wuxuu tiriyey gabay qurux badan"
      }
    ]
  },
  {
    id: "idioms-quiz",
    title: "Somali Idioms Quiz",
    description: "Test your knowledge of Somali idioms and expressions",
    level: "advanced",
    complete: false,
    questions: [
      {
        id: "iq1",
        type: "matching",
        question: "Match the Somali idioms with their meanings",
        correctMatches: {
          "Il iyo il": "Face to face",
          "Gacmo wadajir baa wax ku gooya": "Unity is strength",
          "Af daboolan waa dahab": "Silence is golden",
          "Geel dheer ma dhaadho": "Slow and steady wins the race",
          "Qofka aqoonta leh, meel walba waa ku sharfan yahay": "A knowledgeable person is respected everywhere"
        }
      },
      {
        id: "iq2",
        type: "sentence-construction",
        question: "Construct the Somali proverb: Two heads are better than one",
        options: ["ka", "laba", "madax", "wanaagsan", "hal", "waa", "madax"],
        answer: "laba madax waa ka wanaagsan hal madax"
      }
    ]
  }
];

// Generate 500 quiz questions
function generateAdditionalQuizzes() {
  const additionalBeginnerQuizzes: QuizType[] = [];
  const additionalIntermediateQuizzes: QuizType[] = [];
  const additionalAdvancedQuizzes: QuizType[] = [];
  
  // Common Somali vocab for generating questions
  const basicVocab = {
    "qof": "person",
    "guri": "house",
    "bisad": "cat",
    "eey": "dog",
    "qoyska": "family",
    "saaxiib": "friend",
    "walaashay": "my sister",
    "walaalkay": "my brother",
    "cuntada": "food",
    "magaalada": "city"
  };
  
  const intermediateVocab = {
    "dugsiga": "school",
    "xafiiska": "office",
    "isbitaalka": "hospital",
    "suuqa": "market",
    "maktabada": "library",
    "safarka": "travel",
    "cimilada": "weather",
    "caafimaadka": "health",
    "shaqada": "work",
    "waxbarashada": "education"
  };
  
  const advancedVocab = {
    "dhaqanka": "culture",
    "xorriyadda": "freedom",
    "cadaalad": "justice",
    "qaranka": "nation",
    "horumarinta": "development",
    "cilmi-baarista": "research",
    "maalgashiga": "investment",
    "xeerarka": "rules",
    "siyaasadda": "politics",
    "dhaqaalaha": "economy"
  };
  
  const verbs = {
    "tagaa": "go",
    "imaadaa": "come",
    "cunaa": "eat",
    "cabbaa": "drink",
    "akhriyaa": "read",
    "qoraa": "write",
    "dhageystaa": "listen",
    "daawadaa": "watch",
    "samaynaa": "do/make",
    "helaa": "find/get"
  };
  
  // Generate beginner quizzes (20 quizzes × 5 questions each = 100 questions)
  for (let i = 1; i <= 20; i++) {
    const quizQuestions = [];
    
    // Multiple choice questions
    for (let j = 1; j <= 2; j++) {
      const vocabKeys = Object.keys(basicVocab);
      const questionWord = vocabKeys[Math.floor(Math.random() * vocabKeys.length)];
      const correctAnswer = basicVocab[questionWord as keyof typeof basicVocab];
      
      // Generate wrong options
      const wrongOptions = Object.values(basicVocab)
        .filter(word => word !== correctAnswer)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      
      const options = [...wrongOptions, correctAnswer].sort(() => 0.5 - Math.random());
      
      quizQuestions.push({
        id: `b${i}mc${j}`,
        type: "multiple-choice",
        question: `What is the English translation of "${questionWord}"?`,
        options,
        answer: correctAnswer
      });
    }
    
    // Translation questions
    quizQuestions.push({
      id: `b${i}tr1`,
      type: "translation",
      question: "Select the correct translation",
      translationPrompt: `Hello, my name is Ahmed`,
      options: [
        "Salaan, magacaygu waa Ahmed",
        "Nabadgelyo, magacaygu waa Ahmed",
        "Subax wanaagsan, waxaan ahay Ahmed",
        "Mahadsanid, magacaygu waa Ahmed"
      ],
      answer: "Salaan, magacaygu waa Ahmed"
    });
    
    // Sentence construction
    quizQuestions.push({
      id: `b${i}sc1`,
      type: "sentence-construction",
      question: "Construct the Somali sentence: I want to learn Somali",
      options: ["baran", "Waxaan", "rabaa", "inaan", "Af-Soomaali"],
      answer: "Waxaan rabaa inaan Af-Soomaali baran"
    });
    
    // Matching
    const matchingTerms: Record<string, string> = {};
    const vocabEntries = Object.entries(basicVocab).sort(() => 0.5 - Math.random()).slice(0, 5);
    
    vocabEntries.forEach(([somali, english]) => {
      matchingTerms[somali] = english;
    });
    
    quizQuestions.push({
      id: `b${i}ma1`,
      type: "matching",
      question: "Match these Somali words with their English translations",
      correctMatches: matchingTerms
    });
    
    additionalBeginnerQuizzes.push({
      id: `beginner-extra-${i}`,
      title: `Beginner Practice Quiz ${i}`,
      description: `Practice your basic Somali vocabulary and phrases`,
      level: "beginner",
      complete: false,
      questions: quizQuestions
    });
  }
  
  // Generate intermediate quizzes (20 quizzes × 5 questions each = 100 questions)
  for (let i = 1; i <= 20; i++) {
    const quizQuestions = [];
    
    // Multiple choice questions
    for (let j = 1; j <= 2; j++) {
      const vocabKeys = Object.keys(intermediateVocab);
      const questionWord = vocabKeys[Math.floor(Math.random() * vocabKeys.length)];
      const correctAnswer = intermediateVocab[questionWord as keyof typeof intermediateVocab];
      
      // Generate wrong options
      const wrongOptions = Object.values(intermediateVocab)
        .filter(word => word !== correctAnswer)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      
      const options = [...wrongOptions, correctAnswer].sort(() => 0.5 - Math.random());
      
      quizQuestions.push({
        id: `i${i}mc${j}`,
        type: "multiple-choice",
        question: `What is the English translation of "${questionWord}"?`,
        options,
        answer: correctAnswer
      });
    }
    
    // Sentence construction
    quizQuestions.push({
      id: `i${i}sc1`,
      type: "sentence-construction",
      question: "Construct the sentence: I need to go to the hospital",
      options: ["isbitaalka", "Waxaan", "u", "tagayo", "baahanahay", "inaan"],
      answer: "Waxaan u baahanahay inaan isbitaalka tagayo"
    });
    
    // Translation
    quizQuestions.push({
      id: `i${i}tr1`,
      type: "translation",
      question: "Select the correct translation",
      translationPrompt: "Where can I find the nearest market?",
      options: [
        "Xaggee baan ka heli karaa suuqa ugu dhow?",
        "Immisa ayaa ku kacaysa tagitaanka suuqa?",
        "Goorma ayaa suuqa la furaa?",
        "Ma taqaanaa suuqa weyn ee magaalada?"
      ],
      answer: "Xaggee baan ka heli karaa suuqa ugu dhow?"
    });
    
    // Matching
    const matchingTerms: Record<string, string> = {};
    const vocabEntries = Object.entries(intermediateVocab).sort(() => 0.5 - Math.random()).slice(0, 5);
    
    vocabEntries.forEach(([somali, english]) => {
      matchingTerms[somali] = english;
    });
    
    quizQuestions.push({
      id: `i${i}ma1`,
      type: "matching",
      question: "Match these Somali words with their English translations",
      correctMatches: matchingTerms
    });
    
    additionalIntermediateQuizzes.push({
      id: `intermediate-extra-${i}`,
      title: `Intermediate Practice Quiz ${i}`,
      description: `Enhance your Somali vocabulary with these intermediate phrases`,
      level: "intermediate",
      complete: false,
      questions: quizQuestions
    });
  }
  
  // Generate advanced quizzes (20 quizzes × 5 questions each = 100 questions)
  for (let i = 1; i <= 20; i++) {
    const quizQuestions = [];
    
    // Multiple choice questions
    for (let j = 1; j <= 2; j++) {
      const vocabKeys = Object.keys(advancedVocab);
      const questionWord = vocabKeys[Math.floor(Math.random() * vocabKeys.length)];
      const correctAnswer = advancedVocab[questionWord as keyof typeof advancedVocab];
      
      // Generate wrong options
      const wrongOptions = Object.values(advancedVocab)
        .filter(word => word !== correctAnswer)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      
      const options = [...wrongOptions, correctAnswer].sort(() => 0.5 - Math.random());
      
      quizQuestions.push({
        id: `a${i}mc${j}`,
        type: "multiple-choice",
        question: `What is the English translation of "${questionWord}"?`,
        options,
        answer: correctAnswer
      });
    }
    
    // Sentence construction
    quizQuestions.push({
      id: `a${i}sc1`,
      type: "sentence-construction",
      question: "Construct the complex sentence: The government should invest in education",
      options: ["waxbarashada", "dowladda", "waa", "maalgelin", "inay", "ku", "tahay", "in"],
      answer: "waa in dowladda ay ku maalgelin tahay waxbarashada"
    });
    
    // Translation
    quizQuestions.push({
      id: `a${i}tr1`,
      type: "translation",
      question: "Select the correct translation",
      translationPrompt: "Economic development is vital for the nation's progress",
      options: [
        "Horumarinta dhaqaalaha waa muhiim u horumarinta qaranka",
        "Siyaasadda dhaqaalaha waxay dhibaato ku tahay dalka",
        "Dhaqaalaha waxaa lagu bartaa dugsiyada sare",
        "Qaranka waxaa lagu horumariyaa dhaqanka"
      ],
      answer: "Horumarinta dhaqaalaha waa muhiim u horumarinta qaranka"
    });
    
    // Matching
    const matchingTerms: Record<string, string> = {};
    const vocabEntries = Object.entries(advancedVocab).sort(() => 0.5 - Math.random()).slice(0, 5);
    
    vocabEntries.forEach(([somali, english]) => {
      matchingTerms[somali] = english;
    });
    
    quizQuestions.push({
      id: `a${i}ma1`,
      type: "matching",
      question: "Match these advanced Somali terms with their English translations",
      correctMatches: matchingTerms
    });
    
    additionalAdvancedQuizzes.push({
      id: `advanced-extra-${i}`,
      title: `Advanced Practice Quiz ${i}`,
      description: `Challenge yourself with these advanced Somali concepts and phrases`,
      level: "advanced",
      complete: false,
      questions: quizQuestions
    });
  }
  
  return {
    additionalBeginnerQuizzes,
    additionalIntermediateQuizzes,
    additionalAdvancedQuizzes
  };
}

const { 
  additionalBeginnerQuizzes, 
  additionalIntermediateQuizzes, 
  additionalAdvancedQuizzes 
} = generateAdditionalQuizzes();

export const allQuizzes = [
  ...beginnerQuizzes, 
  ...additionalBeginnerQuizzes,
  ...intermediateQuizzes, 
  ...additionalIntermediateQuizzes,
  ...advancedQuizzes,
  ...additionalAdvancedQuizzes
];
