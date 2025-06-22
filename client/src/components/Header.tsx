import { useLocation } from "wouter";
import { RefreshCw, Bot } from "lucide-react";

export default function Header() {
  const [, setLocation] = useLocation();

  const handleReset = () => {
    setLocation("/");
    // Clear any stored quiz state
    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("quizResult");
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-quiz-gradient rounded-lg flex items-center justify-center">
              <Bot className="text-white" size={14} />
            </div>
            <h1 className="text-lg md:text-xl font-bold text-gray-900">내 AI 분신 찾기</h1>
          </div>
          <button
            onClick={handleReset}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1"
          >
            <RefreshCw size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
