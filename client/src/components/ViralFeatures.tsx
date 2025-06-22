import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Star, Users, Trophy, Gift, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface ViralFeaturesProps {
  resultName: string;
  onEngagement: (type: string) => void;
}

export default function ViralFeatures({ resultName, onEngagement }: ViralFeaturesProps) {
  const [reactions, setReactions] = useState({
    likes: Math.floor(Math.random() * 1000) + 500,
    comments: Math.floor(Math.random() * 200) + 50,
    shares: Math.floor(Math.random() * 300) + 100,
    trending: Math.random() > 0.7
  });
  const [userReacted, setUserReacted] = useState(false);
  const { toast } = useToast();

  const handleReaction = (type: string) => {
    if (type === 'like' && !userReacted) {
      setReactions(prev => ({ ...prev, likes: prev.likes + 1 }));
      setUserReacted(true);
      toast({ title: "반응 추가됨!", description: "다른 사람들도 이 결과에 공감하고 있어요." });
    }
    onEngagement(type);
  };

  const trendingMessages = [
    "지금 가장 인기있는 AI 유형이에요!",
    "많은 사람들이 이 결과에 공감하고 있어요",
    "친구들 사이에서 화제가 되고 있는 결과예요"
  ];

  return (
    <div className="space-y-4">
      {/* Trending Badge */}
      {reactions.trending && (
        <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-700">
                🔥 {trendingMessages[Math.floor(Math.random() * trendingMessages.length)]}
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Social Stats */}
      <Card className="border-purple-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-900">다른 사람들의 반응</h4>
            <Badge variant="secondary" className="text-xs">
              실시간
            </Badge>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Heart className={`w-4 h-4 ${userReacted ? 'text-red-500' : 'text-gray-400'}`} />
                <span className="text-sm font-bold">{reactions.likes.toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-600">좋아요</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <MessageCircle className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-bold">{reactions.comments}</span>
              </div>
              <p className="text-xs text-gray-600">댓글</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Share2 className="w-4 h-4 text-green-500" />
                <span className="text-sm font-bold">{reactions.shares}</span>
              </div>
              <p className="text-xs text-gray-600">공유</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button 
              onClick={() => handleReaction('like')}
              variant={userReacted ? "default" : "outline"}
              size="sm"
              className={`${userReacted ? 'bg-red-500 hover:bg-red-600 text-white' : ''}`}
            >
              <Heart className="w-3 h-3 mr-1" />
              {userReacted ? '좋아요 완료' : '좋아요'}
            </Button>
            
            <Button 
              onClick={() => handleReaction('comment')}
              variant="outline"
              size="sm"
            >
              <MessageCircle className="w-3 h-3 mr-1" />
              댓글 남기기
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Challenge Section */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <h4 className="font-semibold text-gray-900">AI 유형 챌린지</h4>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">
            친구들과 AI 유형을 비교해보세요! 가장 많이 공유된 유형이 이번 주 챔피언이 됩니다.
          </p>
          
          <div className="grid grid-cols-2 gap-2">
            <Button 
              onClick={() => handleReaction('challenge')}
              variant="outline"
              size="sm"
              className="border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              <Users className="w-3 h-3 mr-1" />
              친구 도전하기
            </Button>
            
            <Button 
              onClick={() => handleReaction('leaderboard')}
              variant="outline"
              size="sm"
              className="border-indigo-300 text-indigo-700 hover:bg-indigo-50"
            >
              <Star className="w-3 h-3 mr-1" />
              순위 보기
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Daily Rewards */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Gift className="w-5 h-5 text-green-500" />
            <h4 className="font-semibold text-gray-900">오늘의 미션</h4>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-white rounded">
              <span className="text-sm">결과 1번 공유하기</span>
              <Badge variant="secondary">+10P</Badge>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded">
              <span className="text-sm">친구 1명 테스트 완료시키기</span>
              <Badge variant="secondary">+50P</Badge>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded">
              <span className="text-sm">AYNO AI 방문하기</span>
              <Badge variant="secondary">+20P</Badge>
            </div>
          </div>
          
          <Button 
            onClick={() => handleReaction('mission')}
            className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white"
            size="sm"
          >
            미션 시작하기
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}