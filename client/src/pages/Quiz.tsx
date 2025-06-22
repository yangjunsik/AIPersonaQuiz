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
    currentQuestion
  } = useQuiz();

  const question = getCurrentQuestion();
  const progress = getProgress();

  // Redirect to result page when quiz is complete
  useEffect(() => {
    if (isQuizComplete()) {
      setLocation("/result");
    }
  }, [isQuizComplete, setLocation]);

  const handleAnswer = (value: number, aiTypes: string[]) => {
    answerQuestion(question.id, value, aiTypes);
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
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Question illustration */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-6xl">{question.icon}</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {question.title}
            </h2>
            <p className="text-gray-600 text-lg">
              {question.description}
            </p>
          </div>

          {/* Answer Options */}
          <div className="space-y-4">
            {question.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer.value, answer.aiTypes)}
                className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full group-hover:border-primary transition-colors"></div>
                    <span className="text-lg font-medium text-gray-900">{answer.text}</span>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={20} />
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
