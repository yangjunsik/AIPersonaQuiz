import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Users, Gift, Crown, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ReferralSystemProps {
  userResult: string;
}

export default function ReferralSystem({ userResult }: ReferralSystemProps) {
  const [referralCode] = useState(() => 
    Math.random().toString(36).substring(2, 8).toUpperCase()
  );
  const [referralCount, setReferralCount] = useState(0);
  const { toast } = useToast();

  const handleCopyReferralLink = () => {
    const referralLink = `${window.location.origin}?ref=${referralCode}`;
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "추천 링크 복사됨!",
      description: "친구들에게 보내서 포인트를 획득하세요",
    });
  };

  const rewards = [
    { threshold: 1, points: 100, title: "첫 추천", description: "AYNO AI 프리미엄 1일" },
    { threshold: 3, points: 500, title: "추천 마스터", description: "AI 궁합 분석 리포트" },
    { threshold: 5, points: 1000, title: "인플루언서", description: "프리미엄 1개월" },
    { threshold: 10, points: 2500, title: "추천 킹", description: "AI 컨설팅 1회" },
  ];

  return (
    <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
      <CardContent className="p-4">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Crown className="w-5 h-5 text-yellow-600" />
            <h3 className="font-bold text-lg text-gray-900">친구 추천하고 혜택 받기</h3>
          </div>
          <p className="text-sm text-gray-600">
            친구가 테스트를 완료할 때마다 포인트를 획득하세요!
          </p>
        </div>

        {/* Referral Code */}
        <div className="bg-white rounded-lg p-3 mb-4 border-2 border-dashed border-yellow-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">내 추천 코드</p>
              <p className="font-mono font-bold text-lg text-yellow-700">{referralCode}</p>
            </div>
            <Button 
              onClick={handleCopyReferralLink}
              size="sm"
              className="bg-yellow-500 hover:bg-yellow-600 text-white"
            >
              <Copy className="w-4 h-4 mr-1" />
              링크 복사
            </Button>
          </div>
        </div>

        {/* Current Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="font-bold text-lg">{referralCount}</span>
            </div>
            <p className="text-xs text-gray-600">추천 완료</p>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <Star className="w-4 h-4 text-purple-500" />
              <span className="font-bold text-lg">{referralCount * 100}</span>
            </div>
            <p className="text-xs text-gray-600">획득 포인트</p>
          </div>
        </div>

        {/* Rewards */}
        <div className="space-y-2 mb-4">
          <h4 className="font-semibold text-sm text-gray-900 mb-2">🎁 추천 혜택</h4>
          {rewards.map((reward, index) => (
            <div 
              key={index}
              className={`flex items-center justify-between p-2 rounded-lg ${
                referralCount >= reward.threshold 
                  ? 'bg-green-100 border border-green-300' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              <div>
                <p className="text-sm font-medium">{reward.title}</p>
                <p className="text-xs text-gray-600">{reward.description}</p>
              </div>
              <div className="text-right">
                <Badge 
                  variant={referralCount >= reward.threshold ? "default" : "secondary"}
                  className="text-xs"
                >
                  {referralCount >= reward.threshold ? "완료!" : `${reward.threshold}명`}
                </Badge>
                <p className="text-xs text-gray-500 mt-1">{reward.points}P</p>
              </div>
            </div>
          ))}
        </div>

        {/* Share Message */}
        <div className="bg-gray-50 rounded-lg p-3 mb-3">
          <p className="text-xs text-gray-600 mb-2">추천 메시지 예시:</p>
          <p className="text-sm italic text-gray-700">
            "내 AI 분신은 {userResult}였어! 너도 해보고 결과 알려줘 ㅋㅋ {window.location.origin}?ref={referralCode}"
          </p>
        </div>

        <Button 
          onClick={handleCopyReferralLink}
          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold"
        >
          <Gift className="w-4 h-4 mr-2" />
          지금 친구들에게 공유하기
        </Button>
      </CardContent>
    </Card>
  );
}