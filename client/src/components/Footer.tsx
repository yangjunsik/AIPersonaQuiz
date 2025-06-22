import { Bot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-quiz-gradient rounded-lg flex items-center justify-center">
              <Bot className="text-white text-sm" size={16} />
            </div>
            <span className="font-semibold text-gray-900">내 AI 분신 찾기</span>
          </div>
          <p className="text-gray-600 text-sm">
            당신과 가장 잘 맞는 AI를 찾아보세요
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-700 transition-colors">이용약관</a>
            <a href="#" className="hover:text-gray-700 transition-colors">문의하기</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
