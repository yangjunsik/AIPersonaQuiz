import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Gift, Star, Trophy } from "lucide-react";
import { useState } from "react";

interface ShareIncentiveProps {
  onShare: () => void;
  resultName: string;
}

export default function ShareIncentive({ onShare, resultName }: ShareIncentiveProps) {
  const [shareCount, setShareCount] = useState(0);

  const handleShare = () => {
    setShareCount(prev => prev + 1);
    onShare();
  };

  const incentives = [
    { count: 1, reward: "친구 1명 초대시", icon: <Users className="w-4 h-4" />, benefit: "다른 AI 유형 1개 미리보기" },
    { count: 3, reward: "친구 3명 초대시", icon: <Gift className="w-4 h-4" />, benefit: "전체 AI 궁합도 분석" },
    { count: 5, reward: "친구 5명 초대시", icon: <Star className="w-4 h-4" />, benefit: "AI 발전 예측 리포트" },
    { count: 10, reward: "친구 10명 초대시", icon: <Trophy className="w-4 h-4" />, benefit: "AI 전문가 1:1 상담권" }
  ];

  return (
    <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
      <CardContent className="p-4">
        <div className="text-center mb-4">
          <h3 className="font-bold text-gray-900 mb-2">🎁 친구 초대하고 혜택 받기!</h3>
          <p className="text-sm text-gray-600">
            {resultName} 결과를 공유하고 친구들의 반응을 확인해보세요
          </p>
        </div>

        <div className="space-y-2 mb-4">
          {incentives.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center p-2 rounded-lg ${
                shareCount >= item.count 
                  ? 'bg-green-100 border border-green-300' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              <div className={`mr-3 ${shareCount >= item.count ? 'text-green-600' : 'text-gray-400'}`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{item.reward}</p>
                <p className="text-xs text-gray-600">{item.benefit}</p>
              </div>
              {shareCount >= item.count && (
                <div className="text-green-600 text-xs font-bold">완료!</div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">현재 공유 횟수: {shareCount}회</p>
          <Button 
            onClick={handleShare}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            지금 친구들에게 공유하기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}