import { useLocation } from "wouter";
import { useQuiz } from "@/hooks/useQuiz";
import { Button } from "@/components/ui/button";
import ProgressBar from "@/components/ProgressBar";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function Quiz() {
  const [, setLocation] = useLocation();
  const {
    getCurrentQuestion,
    answerQuestion,
    goToPreviousQuestion,
    getProgress,
    isQuizComplete,
    hasAnsweredCurrentQuestion,
    currentQuestion,
    answers,
    totalQuestions
  } = useQuiz();

  const question = getCurrentQuestion();
  const progress = getProgress();

  // Redirect to result page when quiz is complete
  useEffect(() => {
    if (isQuizComplete()) {
      setTimeout(() => {
        setLocation("/result");
      }, 300);
    }
  }, [isQuizComplete, setLocation]);

  const handleAnswer = (value: number, aiTypes: string[]) => {
    answerQuestion(question.id, value, aiTypes);
    
    // Check if this was the last question and redirect immediately
    if (answers.length + 1 === totalQuestions) {
      setTimeout(() => {
        setLocation("/result");
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion === 0) {
      setLocation("/");
    } else {
      goToPreviousQuestion();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressBar current={progress.current} total={progress.total} />
      
      <div className="max-w-4xl mx-auto px-4 py-4 md:py-8">
        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 mb-6 md:mb-8">
          {/* Question illustration */}
          <div className="text-center mb-6 md:mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <span className="text-4xl md:text-6xl">{question.icon}</span>
            </div>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
              {question.title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg px-2">
              {question.description}
            </p>
          </div>

          {/* Answer Options */}
          <div className="space-y-3 md:space-y-4">
            {question.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer.value, answer.aiTypes)}
                className="w-full p-3 md:p-4 text-left border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-200 group active:scale-[0.98]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 md:space-x-4 flex-1 min-w-0">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full group-hover:border-primary transition-colors flex-shrink-0"></div>
                    <span className="text-base md:text-lg font-medium text-gray-900 break-words">{answer.text}</span>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            onClick={handlePrevious}
            variant="ghost"
            className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium"
          >
            <ArrowLeft className="mr-2" size={16} />
            {currentQuestion === 0 ? "홈으로" : "이전"}
          </Button>
          
          <div className="text-sm text-gray-500">
            {progress.current} / {progress.total}
          </div>
        </div>
      </div>
    </div>
  );
}
