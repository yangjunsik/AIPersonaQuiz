export interface Question {
  id: number;
  title: string;
  description: string;
  icon: string;
  answers: {
    text: string;
    value: number;
    aiTypes: string[];
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    title: "그림 그리는 걸 좋아하나요?",
    description: "창작과 시각적 표현에 대한 당신의 성향을 알려주세요",
    icon: "🎨",
    answers: [
      { text: "매우 좋아해요", value: 4, aiTypes: ["midjourney", "leonardo", "canva"] },
      { text: "좋아해요", value: 3, aiTypes: ["midjourney", "canva"] },
      { text: "보통이에요", value: 2, aiTypes: ["chatgpt", "claude"] },
      { text: "별로 안 좋아해요", value: 1, aiTypes: ["copilot", "notion"] }
    ]
  },
  {
    id: 2,
    title: "팀 프로젝트에서 어떤 역할을 주로 하나요?",
    description: "협업에서의 당신의 성향을 알려주세요",
    icon: "👥",
    answers: [
      { text: "리더 역할을 맡아요", value: 4, aiTypes: ["chatgpt", "notion", "perplexity"] },
      { text: "아이디어를 제안해요", value: 3, aiTypes: ["claude", "chatgpt"] },
      { text: "주어진 일을 성실히 해요", value: 2, aiTypes: ["copilot", "upstage"] },
      { text: "뒤에서 도와주는 역할이 좋아요", value: 1, aiTypes: ["removebg", "supertone"] }
    ]
  },
  {
    id: 3,
    title: "새로운 기술을 배울 때 어떤 방식을 선호하나요?",
    description: "학습과 성장에 대한 당신의 접근법을 알려주세요",
    icon: "📚",
    answers: [
      { text: "직접 해보면서 배워요", value: 4, aiTypes: ["copilot", "runway", "pika"] },
      { text: "체계적으로 단계별로 배워요", value: 3, aiTypes: ["claude", "notion"] },
      { text: "필요할 때마다 찾아서 배워요", value: 2, aiTypes: ["perplexity", "chatgpt"] },
      { text: "다른 사람이 알려주는 걸 좋아해요", value: 1, aiTypes: ["elevenlabs", "supertone"] }
    ]
  },
  {
    id: 4,
    title: "문제 해결 방식은 어떤가요?",
    description: "어려운 상황에서의 당신의 접근 방법을 알려주세요",
    icon: "🧩",
    answers: [
      { text: "논리적으로 단계별 분석해요", value: 4, aiTypes: ["claude", "perplexity", "upstage"] },
      { text: "창의적인 해결책을 찾아요", value: 3, aiTypes: ["midjourney", "runway", "leonardo"] },
      { text: "과거 경험을 활용해요", value: 2, aiTypes: ["chatgpt", "notion"] },
      { text: "다른 사람과 상의해요", value: 1, aiTypes: ["elevenlabs", "canva"] }
    ]
  },
  {
    id: 5,
    title: "소통할 때 어떤 방식을 선호하나요?",
    description: "의사소통에 대한 당신의 스타일을 알려주세요",
    icon: "💬",
    answers: [
      { text: "말로 대화하는 것을 좋아해요", value: 4, aiTypes: ["chatgpt", "elevenlabs", "supertone"] },
      { text: "글로 정리해서 전달해요", value: 3, aiTypes: ["claude", "notion", "upstage"] },
      { text: "이미지나 그림으로 설명해요", value: 2, aiTypes: ["midjourney", "canva", "leonardo"] },
      { text: "간단명료하게 요점만 말해요", value: 1, aiTypes: ["copilot", "removebg"] }
    ]
  },
  {
    id: 6,
    title: "여가 시간에 주로 무엇을 하나요?",
    description: "휴식과 취미에 대한 당신의 선호를 알려주세요",
    icon: "🎯",
    answers: [
      { text: "창작 활동을 해요", value: 4, aiTypes: ["midjourney", "runway", "canva"] },
      { text: "독서나 공부를 해요", value: 3, aiTypes: ["claude", "perplexity", "notion"] },
      { text: "코딩이나 기술 공부를 해요", value: 2, aiTypes: ["copilot", "kogpt", "upstage"] },
      { text: "음악을 듣거나 영상을 봐요", value: 1, aiTypes: ["elevenlabs", "supertone", "pika"] }
    ]
  },
  {
    id: 7,
    title: "일할 때 어떤 환경을 선호하나요?",
    description: "작업 환경과 방식에 대한 선호도를 알려주세요",
    icon: "🏢",
    answers: [
      { text: "조용하고 집중할 수 있는 곳", value: 4, aiTypes: ["claude", "copilot", "upstage"] },
      { text: "자유롭고 창의적인 분위기", value: 3, aiTypes: ["midjourney", "leonardo", "runway"] },
      { text: "동료들과 소통하며 일하는 곳", value: 2, aiTypes: ["chatgpt", "notion", "perplexity"] },
      { text: "효율적이고 체계적인 곳", value: 1, aiTypes: ["removebg", "canva", "kogpt"] }
    ]
  },
  {
    id: 8,
    title: "스트레스를 받을 때 어떻게 해소하나요?",
    description: "스트레스 관리 방법에 대해 알려주세요",
    icon: "😌",
    answers: [
      { text: "혼자만의 시간을 가져요", value: 4, aiTypes: ["claude", "copilot"] },
      { text: "창작 활동으로 표현해요", value: 3, aiTypes: ["midjourney", "runway", "leonardo"] },
      { text: "친구들과 대화해요", value: 2, aiTypes: ["chatgpt", "elevenlabs"] },
      { text: "음악을 듣거나 영상을 봐요", value: 1, aiTypes: ["supertone", "pika", "canva"] }
    ]
  },
  {
    id: 9,
    title: "새로운 프로젝트를 시작할 때 어떻게 접근하나요?",
    description: "프로젝트 시작 방식에 대한 당신의 스타일을 알려주세요",
    icon: "🚀",
    answers: [
      { text: "철저히 계획을 세워요", value: 4, aiTypes: ["claude", "notion", "upstage"] },
      { text: "대략적인 방향을 정하고 시작해요", value: 3, aiTypes: ["chatgpt", "perplexity"] },
      { text: "일단 해보면서 수정해요", value: 2, aiTypes: ["copilot", "runway", "midjourney"] },
      { text: "다른 사람의 조언을 먼저 구해요", value: 1, aiTypes: ["elevenlabs", "canva", "removebg"] }
    ]
  },
  {
    id: 10,
    title: "미래에 어떤 일을 하고 싶나요?",
    description: "당신의 꿈과 목표에 대해 알려주세요",
    icon: "🌟",
    answers: [
      { text: "사람들에게 도움이 되는 일", value: 4, aiTypes: ["claude", "chatgpt", "perplexity"] },
      { text: "창의적이고 예술적인 일", value: 3, aiTypes: ["midjourney", "leonardo", "runway"] },
      { text: "기술과 관련된 전문적인 일", value: 2, aiTypes: ["copilot", "kogpt", "upstage"] },
      { text: "효율성을 높이는 도구적인 일", value: 1, aiTypes: ["notion", "removebg", "canva"] }
    ]
  }
];
