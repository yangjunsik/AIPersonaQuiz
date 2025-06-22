import { useLocation } from "wouter";
import { useQuiz } from "@/hooks/useQuiz";
import { generateResultImage, downloadImage } from "@/utils/canvasGenerator";
import { Button } from "@/components/ui/button";
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
    if (!result) {
      setLocation("/");
    }
  }, [result, setLocation]);

  if (!result) {
    return null;
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
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Result Hero */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle size={16} />
            <span>테스트 완료!</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">당신의 AI 분신은...</h1>
        </div>

        {/* Result Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
          {/* AI Header */}
          <div className="bg-result-gradient p-8 text-center text-white relative">
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
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl">{result.icon}</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-2">{result.name}</h2>
              <p className="text-xl text-purple-100">{result.tagline}</p>
            </div>
          </div>

          {/* AI Description */}
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">당신의 특징</h3>
                <p className="text-gray-700 leading-relaxed">
                  {result.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">강점</h4>
                  <ul className="space-y-1 text-gray-700">
                    {result.strengths.map((strength, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">어울리는 일</h4>
                  <ul className="space-y-1 text-gray-700">
                    {result.jobs.map((job, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-yellow-500 mr-2">⭐</span>
                        {job}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {/* Download Result Image */}
          <Button
            onClick={handleDownloadResult}
            disabled={isGeneratingImage}
            className="w-full bg-quiz-gradient text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            size="lg"
          >
            <Download className="mr-2" size={20} />
            {isGeneratingImage ? "이미지 생성 중..." : "결과 이미지 저장하기"}
          </Button>

          {/* Share Button */}
          <Button
            onClick={handleShare}
            variant="outline"
            className="w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300"
            size="lg"
          >
            <Share2 className="mr-2" size={20} />
            친구들과 공유하기
          </Button>

          {/* AYNO AI CTA */}
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-xl">
            <Button
              onClick={handleVisitAynoAI}
              className="w-full bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-6 rounded-lg transition-all duration-300"
              size="lg"
            >
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl">🚀</span>
                <span>다른 AI는 어떤 특징일까? → AYNO AI 랭킹 보러가기</span>
                <ExternalLink size={16} />
              </div>
            </Button>
          </div>

          {/* Retry Button */}
          <Button
            onClick={handleRetakeQuiz}
            variant="ghost"
            className="w-full text-gray-600 hover:text-gray-800 font-medium py-3"
          >
            <RefreshCw className="mr-2" size={16} />
            다시 테스트하기
          </Button>
        </div>

        {/* Other AI Types Preview */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">다른 AI 유형들도 궁금하다면?</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherAIs.map((ai) => (
              <div
                key={ai.id}
                className="bg-gray-50 hover:bg-gray-100 p-4 rounded-xl text-center transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <span className="text-2xl">{ai.icon}</span>
                </div>
                <div className="text-sm font-medium text-gray-900">{ai.name}</div>
                <div className="text-xs text-gray-500">{ai.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
