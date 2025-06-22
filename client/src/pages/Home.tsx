import { useLocation, Link } from "wouter";
import { ArrowRight, Brain, Palette, Code, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [, setLocation] = useLocation();

  const startQuiz = () => {
    // Clear any existing quiz data
    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("quizResult");
    setLocation("/quiz");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-premium-gradient">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M30 30a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0v-5zm30 0a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0v-5zm30 0a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0v-5zm-60 30a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0v-5zm30 0a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0v-5zm30 0a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0v-5zm-60 30a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0v-5zm30 0a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0v-5zm30 0a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0v-5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float-1"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/3 rounded-xl animate-float-rotate-1"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-white/4 rounded-full blur-lg animate-float-2"></div>
          <div className="absolute bottom-20 right-40 w-16 h-16 bg-white/2 rounded-lg animate-float-rotate-2"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-300/10 rounded-full animate-float-3"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-300/10 rounded-full animate-float-4"></div>
          <div className="absolute bottom-1/3 left-1/2 w-6 h-6 bg-pink-300/10 rounded-full animate-float-5"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 py-12 md:py-24 text-center">
          <div className="space-y-6 md:space-y-8">
            {/* Main Title */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight animate-fade-in-up">
                내 AI 분신<br />찾기
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-purple-100 font-medium px-4 animate-fade-in-up-delay">
                너랑 가장 닮은 생성형 AI는 누구?
              </p>
            </div>

            {/* AI Icons Grid */}
            <div className="flex justify-center space-x-3 md:space-x-4 py-6 md:py-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-bounce-gentle" style={{ animationDelay: '0s' }}>
                <Brain className="text-white" size={24} />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>
                <Palette className="text-white" size={24} />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-bounce-gentle" style={{ animationDelay: '0.4s' }}>
                <Code className="text-white" size={24} />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-bounce-gentle" style={{ animationDelay: '0.6s' }}>
                <Music className="text-white" size={24} />
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3 md:pt-4">
              <Button
                onClick={startQuiz}
                className="group bg-white hover:bg-gray-50 text-primary font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse-glow"
                size="lg"
              >
                <span className="flex items-center space-x-2">
                  <span>테스트 시작하기</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-6 md:pt-8 grid grid-cols-3 gap-4 md:gap-8 text-center">
              <div className="space-y-1">
                <div className="text-xl md:text-2xl font-bold text-white">15,847</div>
                <div className="text-purple-200 text-xs md:text-sm">참여자 수</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl md:text-2xl font-bold text-white">16</div>
                <div className="text-purple-200 text-xs md:text-sm">AI 유형</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl md:text-2xl font-bold text-white">87%</div>
                <div className="text-purple-200 text-xs md:text-sm">공유율</div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">어떻게 작동하나요?</h2>
            <p className="text-gray-600 text-lg">간단한 3단계로 당신의 AI 분신을 찾아보세요</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-quiz-gradient rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">10개 질문 답변</h3>
              <p className="text-gray-600">당신의 성향과 선호도를 파악할 수 있는 간단한 질문들에 답해주세요</p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">AI 분신 발견</h3>
              <p className="text-gray-600">16가지 AI 유형 중 당신과 가장 잘 맞는 AI를 찾아드려요</p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">결과 공유</h3>
              <p className="text-gray-600">예쁜 결과 이미지를 다운로드해서 친구들과 공유해보세요</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
