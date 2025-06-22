import { useLocation } from "wouter";
import { useQuiz } from "@/hooks/useQuiz";
import { generateResultImage, downloadImage } from "@/utils/canvasGenerator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Share2, RefreshCw, ExternalLink, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

export default function Result() {
  const [, setLocation] = useLocation();
  const { result, resetQuiz } = useQuiz();
  const { toast } = useToast();
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  // Redirect to home if no result
  useEffect(() => {
    const checkResult = () => {
      const savedResult = localStorage.getItem("quizResult");
      if (!result && !savedResult) {
        setTimeout(() => setLocation("/"), 100);
      }
    };
    
    checkResult();
  }, [result, setLocation]);

  if (!result) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">결과를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  const handleDownloadResult = async () => {
    setIsGeneratingImage(true);
    try {
      const imageUrl = await generateResultImage(result);
      downloadImage(imageUrl, `내-AI-분신-${result.name}.png`);
      toast({
        title: "이미지 저장 완료!",
        description: "결과 이미지가 다운로드되었습니다.",
      });
    } catch (error) {
      toast({
        title: "오류 발생",
        description: "이미지 저장 중 문제가 발생했습니다.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "내 AI 분신 찾기",
          text: `나의 AI 분신은 ${result.name}! 너도 테스트해보자`,
          url: window.location.origin,
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.origin);
      toast({
        title: "링크 복사됨!",
        description: "테스트 링크가 클립보드에 복사되었습니다.",
      });
    }
  };



  const handleVisitAynoAI = () => {
    window.open("https://ayno.ai", "_blank");
  };

  const handleRetakeQuiz = () => {
    resetQuiz();
    setLocation("/");
  };

  const otherAIs = [
    { id: "chatgpt", name: "ChatGPT", category: "대화형 AI", icon: "💬", color: "text-green-500" },
    { id: "midjourney", name: "Midjourney", category: "이미지 생성", icon: "🎨", color: "text-purple-500" },
    { id: "copilot", name: "Copilot", category: "코드 어시스턴트", icon: "💻", color: "text-blue-500" },
    { id: "runway", name: "Runway", category: "영상 편집", icon: "🎬", color: "text-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-4 md:py-8">
        
        {/* Result Hero */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-600 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            <CheckCircle size={14} />
            <span>테스트 완료!</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 px-2">당신의 AI 분신은...</h1>
        </div>

        {/* Result Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden mb-6 md:mb-8">
          {/* AI Header */}
          <div className="bg-result-gradient p-6 md:p-8 text-center text-white relative">
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>
            
            <div className="relative z-10">
              {/* AI Logo */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg animate-bounce-gentle">
                {result.icon.startsWith('http') ? (
                  <img 
                    src={result.icon} 
                    alt={result.name} 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                ) : (
                  <span className="text-3xl md:text-4xl">
                    {result.icon}
                  </span>
                )}
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 animate-fade-in-up">{result.name}</h2>
              <p className="text-lg md:text-xl text-purple-100 px-2 animate-fade-in-up-delay">{result.tagline}</p>
            </div>
          </div>

          {/* AI Description */}
          <div className="p-4 md:p-8">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">당신의 특징</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {result.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">강점</h4>
                  <ul className="space-y-1 text-gray-700 text-sm md:text-base">
                    {result.strengths.map((strength, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={14} />
                        <span className="break-words">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">어울리는 일</h4>
                  <ul className="space-y-1 text-gray-700 text-sm md:text-base">
                    {result.jobs.map((job, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-yellow-500 mr-2 flex-shrink-0">⭐</span>
                        <span className="break-words">{job}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 md:space-y-4">
          {/* Download Result Image */}
          <Button
            onClick={handleDownloadResult}
            disabled={isGeneratingImage}
            className="w-full bg-quiz-gradient text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] text-sm md:text-base"
            size="lg"
          >
            <Download className="mr-2" size={18} />
            {isGeneratingImage ? "이미지 생성 중..." : "결과 이미지 저장하기"}
          </Button>

          {/* Share Button */}
          <Button
            onClick={handleShare}
            variant="outline"
            className="w-full font-semibold py-3 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 text-sm md:text-base"
            size="lg"
          >
            <Share2 className="mr-2" size={18} />
            친구들과 공유하기
          </Button>

          {/* Quick Social Share */}
          <div className="grid grid-cols-2 gap-2">
            <Button 
              onClick={() => {
                const shareText = `나의 AI 분신은 ${result.name}! 너도 테스트해보자 🤖 ${window.location.origin}`;
                navigator.clipboard.writeText(shareText);
                toast({ title: "텍스트 복사됨!", description: "카카오톡이나 메신저에 붙여넣기 해주세요." });
              }}
              variant="outline"
              size="sm"
              className="border-yellow-300 text-yellow-700 hover:bg-yellow-50"
            >
              💬 메신저 공유
            </Button>
            <Button 
              onClick={() => {
                const shareText = `나의 AI 분신은 ${result.name}! 너도 테스트해보자 🤖`;
                const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.origin)}`;
                window.open(url, '_blank');
              }}
              variant="outline"
              size="sm"
              className="border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              🐦 트위터
            </Button>
          </div>



          {/* AYNO AI CTA */}
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-xl">
            <Button
              onClick={handleVisitAynoAI}
              className="w-full bg-white hover:bg-gray-50 text-gray-900 font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg transition-all duration-300 text-xs md:text-base"
              size="lg"
            >
              <div className="flex items-center justify-center space-x-1 md:space-x-2">
                <span className="text-lg md:text-xl">🚀</span>
                <span className="text-center leading-tight">다른 AI는 어떤 특징일까?<br className="md:hidden" /> → AYNO AI 랭킹 보러가기</span>
                <ExternalLink size={14} className="flex-shrink-0" />
              </div>
            </Button>
          </div>

          {/* Retry Button */}
          <Button
            onClick={handleRetakeQuiz}
            variant="ghost"
            className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 md:py-3 text-sm md:text-base"
          >
            <RefreshCw className="mr-2" size={16} />
            다시 테스트하기
          </Button>
        </div>



        {/* Related AI Tests Recommendation */}
        <div className="mt-8">
          <Card className="border-2 border-dashed border-purple-300 bg-purple-50">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold text-purple-900 mb-2">🎯 더 정확한 결과를 원한다면?</h3>
              <p className="text-purple-700 mb-4 text-sm">
                AI 전문가들이 설계한 심화 테스트로 나만의 AI 파트너를 찾아보세요
              </p>
              <Button 
                onClick={() => window.open('https://ayno.ai', '_blank')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2"
              >
                AYNO AI 심화 테스트 받기 →
              </Button>
            </CardContent>
          </Card>
        </div>


      </div>
    </div>
  );
}
