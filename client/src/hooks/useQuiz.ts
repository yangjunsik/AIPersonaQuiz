import { useState, useEffect } from "react";
import { questions, Question } from "@/data/questions";
import { aiResults, AIResult } from "@/data/aiResults";

export interface QuizAnswer {
  questionId: number;
  value: number;
  aiTypes: string[];
}

export function useQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [result, setResult] = useState<AIResult | null>(null);

  // Load saved state from localStorage
  useEffect(() => {
    const savedAnswers = localStorage.getItem("quizAnswers");
    const savedResult = localStorage.getItem("quizResult");
    
    if (savedAnswers) {
      const parsedAnswers = JSON.parse(savedAnswers);
      setAnswers(parsedAnswers);
      setCurrentQuestion(parsedAnswers.length);
    }
    
    if (savedResult) {
      const parsedResult = JSON.parse(savedResult);
      setResult(parsedResult);
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    if (answers.length > 0) {
      localStorage.setItem("quizAnswers", JSON.stringify(answers));
    }
  }, [answers]);

  useEffect(() => {
    if (result) {
      localStorage.setItem("quizResult", JSON.stringify(result));
    }
  }, [result]);

  const answerQuestion = (questionId: number, value: number, aiTypes: string[]) => {
    const newAnswer: QuizAnswer = { questionId, value, aiTypes };
    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);
    
    if (updatedAnswers.length === questions.length) {
      // Calculate result
      const calculatedResult = calculateResult(updatedAnswers);
      
      // Set result with a delay to ensure state updates properly
      setTimeout(() => {
        setResult(calculatedResult);
      }, 100);
    } else {
      setCurrentQuestion(updatedAnswers.length);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Remove the last answer
      const updatedAnswers = answers.slice(0, -1);
      setAnswers(updatedAnswers);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("quizResult");
  };

  const calculateResult = (quizAnswers: QuizAnswer[]): AIResult => {
    const aiScores: Record<string, number> = {};
    
    // Initialize scores
    Object.keys(aiResults).forEach(aiId => {
      aiScores[aiId] = 0;
    });

    // Calculate scores based on answers
    quizAnswers.forEach(answer => {
      answer.aiTypes.forEach(aiType => {
        if (aiScores[aiType] !== undefined) {
          aiScores[aiType] += answer.value;
        }
      });
    });

    // Find the AI with the highest score
    const topAI = Object.entries(aiScores).reduce((max, current) => 
      current[1] > max[1] ? current : max
    );

    return aiResults[topAI[0]];
  };

  const getCurrentQuestion = (): Question => {
    return questions[currentQuestion];
  };

  const getProgress = () => {
    return {
      current: currentQuestion + 1,
      total: questions.length,
      percentage: Math.round(((currentQuestion + 1) / questions.length) * 100)
    };
  };

  const isQuizComplete = () => {
    return answers.length === questions.length;
  };

  const hasAnsweredCurrentQuestion = () => {
    return answers.some(answer => answer.questionId === currentQuestion + 1);
  };

  return {
    currentQuestion,
    answers,
    result,
    getCurrentQuestion,
    answerQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    resetQuiz,
    getProgress,
    isQuizComplete,
    hasAnsweredCurrentQuestion,
    totalQuestions: questions.length
  };
}
