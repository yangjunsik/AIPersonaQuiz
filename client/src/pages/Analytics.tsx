import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Share2, Eye, Crown, Star, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function Analytics() {
  // Simulated analytics data
  const stats = {
    totalTests: 15847,
    todayTests: 234,
    totalShares: 8923,
    todayShares: 87,
    topResults: [
      { name: "ChatGPT", percentage: 18.5, count: 2931 },
      { name: "Claude", percentage: 16.2, count: 2567 },
      { name: "Midjourney", percentage: 14.8, count: 2345 },
      { name: "GitHub Copilot", percentage: 12.1, count: 1917 },
      { name: "Notion AI", percentage: 9.4, count: 1489 }
    ],
    trendingHashtags: ["#AI분신찾기", "#AYNOAI", "#AI성격테스트", "#인공지능", "#AI궁합"],
    recentActivity: [
      { user: "김**", result: "ChatGPT", time: "방금 전" },
      { user: "이**", result: "Claude", time: "1분 전" },
      { user: "박**", result: "Midjourney", time: "2분 전" },
      { user: "최**", result: "GitHub Copilot", time: "3분 전" },
      { user: "정**", result: "Runway", time: "5분 전" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">📊 AI 분신 분석 센터</h1>
          <p className="text-gray-600">실시간으로 업데이트되는 AI 성격 테스트 트렌드를 확인해보세요</p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.totalTests.toLocaleString()}</div>
              <p className="text-sm text-gray-600">총 참여자</p>
              <div className="flex items-center justify-center text-green-600 text-xs mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +{stats.todayTests} 오늘
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.totalShares.toLocaleString()}</div>
              <p className="text-sm text-gray-600">총 공유</p>
              <div className="flex items-center justify-center text-green-600 text-xs mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +{stats.todayShares} 오늘
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">16</div>
              <p className="text-sm text-gray-600">AI 유형</p>
              <div className="text-xs text-gray-500 mt-1">전체 분석</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">87%</div>
              <p className="text-sm text-gray-600">공유율</p>
              <div className="text-xs text-gray-500 mt-1">평균 대비</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Top Results */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">🏆 인기 AI 순위</h3>
                <Badge variant="secondary">실시간</Badge>
              </div>
              
              <div className="space-y-3">
                {stats.topResults.map((result, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                        index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-400' : 'bg-gray-300'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-medium">{result.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-purple-600">{result.percentage}%</div>
                      <div className="text-xs text-gray-500">{result.count.toLocaleString()}명</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Real-time Activity */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">⚡ 실시간 활동</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600">LIVE</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {stats.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <span className="font-medium">{activity.user}</span>
                      <span className="text-gray-600"> → {activity.result}</span>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trending Section */}
        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔥 트렌딩 해시태그</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {stats.trendingHashtags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-purple-300 text-purple-700 hover:bg-purple-50 cursor-pointer"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-xl font-bold text-blue-600">↑ 23%</div>
                  <p className="text-sm text-gray-600">오늘 참여율 증가</p>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Share2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-xl font-bold text-green-600">4.2배</div>
                  <p className="text-sm text-gray-600">평균 공유율 대비</p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-xl font-bold text-purple-600">89%</div>
                  <p className="text-sm text-gray-600">재방문율</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 아직 테스트하지 않으셨나요?</h3>
              <p className="text-gray-600 mb-6">지금 가장 핫한 AI 성격 테스트를 경험해보세요!</p>
              
              <div className="space-y-3">
                <Link href="/">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold">
                    ✨ 내 AI 분신 찾으러 가기
                  </Button>
                </Link>
                
                <div className="flex justify-center space-x-4 text-sm text-gray-600">
                  <span>⚡ 2분 소요</span>
                  <span>🎁 무료 테스트</span>
                  <span>📱 모바일 최적화</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}