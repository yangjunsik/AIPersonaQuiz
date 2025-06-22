export interface AIResult {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  description: string;
  strengths: string[];
  jobs: string[];
  color: string;
  category: string;
}

export const aiResults: Record<string, AIResult> = {
  chatgpt: {
    id: "chatgpt",
    name: "ChatGPT",
    tagline: "만능 대화 마스터 🗣️",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    description: "와 완전 핵인싸네요! 당신은 그냥 말만 해도 사람들이 다 좋아할 타입이에요. 모르는 게 없는 만능 지식왕에 친화력 MAX인 당신, 분명 주변에서 '이거 어떻게 해?' 하면 제일 먼저 찾는 사람일 거예요. ChatGPT처럼 언제든 도움 줄 준비 완료! 🤗",
    strengths: ["뛰어난 소통 능력", "폭넓은 지식", "친근한 성격"],
    jobs: ["상담 및 조언", "교육 및 멘토링", "고객 서비스"],
    color: "from-green-500 to-emerald-600",
    category: "대화형 AI"
  },
  claude: {
    id: "claude",
    name: "Claude",
    tagline: "완벽주의 분석러 📊",
    icon: "https://claude.ai/favicon.ico",
    description: "어머 완전 내 스타일! 당신은 그 깐깐한 완벽주의자 타입이네요. 뭔가 결정할 때 진짜 신중하고, 다각도로 분석하는 거 완전 찐이에요. 친구들이 뭔가 고민 있을 때 조언 구하러 오는 그런 믿음직한 존재! Claude처럼 논리적이면서도 따뜻한 마음씨의 소유자 💙",
    strengths: ["논리적 사고력", "섬세한 배려심", "신뢰할 수 있는 성격"],
    jobs: ["상담 및 조언", "분석 및 연구", "글쓰기 및 편집"],
    color: "from-blue-500 to-purple-600",
    category: "분석형 AI"
  },
  midjourney: {
    id: "midjourney",
    name: "Midjourney",
    tagline: "예술혼 불타는 크리에이터 🎨",
    icon: "https://www.midjourney.com/apple-touch-icon.png",
    description: "오마이갓 당신 완전 예술가네요! 머릿속에 항상 뭔가 창의적인 아이디어가 막 떠다니는 타입이죠? 예쁜 거, 멋진 거 보면 진짜 설레고, 뭔가 만들어내는 걸 진짜 좋아할 거예요. Midjourney처럼 상상을 현실로 만드는 마법사! 인스타에서도 감성 사진 잘 찍을 것 같아요 ✨",
    strengths: ["풍부한 상상력", "예술적 감각", "독창적 사고"],
    jobs: ["디자인 및 아트", "브랜딩", "시각적 스토리텔링"],
    color: "from-purple-500 to-pink-500",
    category: "이미지 생성"
  },
  leonardo: {
    id: "leonardo",
    name: "Leonardo AI",
    tagline: "다재다능한 창작 천재 🎭",
    icon: "https://leonardo.ai/favicon.ico",
    description: "헐 당신 진짜 레오나르도 다빈치 리부트 버전이네요! 뭔가 하나만 잘하는 게 아니라 여러 분야에서 다 잘할 것 같은 그런 올라운더 타입이에요. 그림도 그리고, 디자인도 하고, 뭔가 만드는 것도 좋아하고... Leonardo AI처럼 창의력이 무한대! 완전 르네상스맨/우먼 🎨",
    strengths: ["다재다능함", "실용적 창의성", "균형잡힌 시각"],
    jobs: ["제품 디자인", "콘텐츠 제작", "마케팅 크리에이티브"],
    color: "from-orange-500 to-red-500",
    category: "이미지 생성"
  },
  runway: {
    id: "runway",
    name: "Runway",
    tagline: "트렌디한 영상 마법사 🎬",
    icon: "https://runwayml.com/favicon.ico",
    description: "와 진짜 트렌드세터네요! 당신은 새로운 거 나오면 제일 먼저 써보는 얼리어답터 타입이에요. 영상 편집하면서 '이런 효과는 어떨까?' 하면서 실험하는 거 완전 좋아할 것 같아요. Runway처럼 AI 기술로 말도 안 되는 영상 만들어내는 마법사! 틱톡도 찐으로 잘할듯 🔥",
    strengths: ["혁신적 사고", "트렌드 감각", "빠른 적응력"],
    jobs: ["영상 제작", "디지털 마케팅", "미디어 아트"],
    color: "from-cyan-500 to-blue-500",
    category: "영상 편집"
  },
  pika: {
    id: "pika",
    name: "Pika Labs",
    tagline: "감성적인 영상 스토리텔러 📹",
    icon: "https://pika.art/favicon.ico",
    description: "아 당신 완전 감성충이네요! 뭔가 일상 브이로그 찍고, 감성적인 영상 만드는 거 진짜 좋아할 것 같아요. 친구들이 '너는 뭘 해도 감성적으로 만든다' 이런 말 자주 들을 거예요. Pika Labs처럼 따뜻하고 자연스러운 스토리를 만드는 재주꾼! 인스타 릴스도 완전 센스있게 만들 듯 🎥",
    strengths: ["감성적 표현", "스토리텔링", "친근함"],
    jobs: ["콘텐츠 크리에이터", "브이로그", "감성 마케팅"],
    color: "from-pink-500 to-rose-500",
    category: "영상 편집"
  },
  elevenlabs: {
    id: "elevenlabs",
    name: "ElevenLabs",
    tagline: "표현력 풍부한 보이스 아티스트 🎙️",
    icon: "https://elevenlabs.io/favicon.ico",
    description: "와 당신 목소리 진짜 좋을 것 같아요! 뭔가 말하는 톤이나 표현력이 엄청 풍부한 타입이죠? 친구들이 '너 성우 해도 될 것 같다' 이런 말 많이 들을 거예요. ElevenLabs처럼 목소리만으로도 사람들 마음을 움직이는 그런 카리스마! 팟캐스트나 오디오 콘텐츠 만들면 대박날 듯 🔥",
    strengths: ["뛰어난 표현력", "감정 전달", "음성 센스"],
    jobs: ["성우", "팟캐스트", "오디오 콘텐츠"],
    color: "from-amber-500 to-orange-500",
    category: "음성 생성"
  },
  supertone: {
    id: "supertone",
    name: "Supertone",
    tagline: "감성적인 AI 뮤지션 🎵",
    icon: "https://supertone.ai/favicon.ico",
    description: "아 당신 완전 음악덕후네요! 멜론이나 스포티파이 플레이리스트 진짜 예술적으로 만들 것 같아요. 음악 들으면서 감성에 푹 빠지고, 뭔가 비트나 멜로디에 엄청 민감한 타입이죠? Supertone처럼 AI 기술로 음악 만드는 거 진짜 잘할 것 같아요! 완전 감성 뮤지션 👨‍🎤",
    strengths: ["음악적 감성", "기술 활용", "감정 표현"],
    jobs: ["음악 제작", "사운드 디자인", "오디오 기술"],
    color: "from-violet-500 to-purple-500",
    category: "음성 생성"
  },
  notion: {
    id: "notion",
    name: "Notion AI",
    tagline: "정리의 신 조직러 📋",
    icon: "https://www.notion.so/images/favicon.ico",
    description: "헐 정말 정리광이네요! 당신은 뭐든지 깔끔하게 정리해야 직성이 풀리는 타입이에요. 플래너도 예쁘게 꾸미고, 투두리스트 만드는 거 완전 좋아할 것 같아요. 친구들이 '어떻게 그렇게 체계적이지?' 하면서 부러워할 그런 사람! Notion AI처럼 효율성 끝판왕 🗂️",
    strengths: ["체계적 사고", "정리 정돈", "효율성 추구"],
    jobs: ["프로젝트 관리", "기획", "시스템 설계"],
    color: "from-gray-600 to-gray-800",
    category: "생산성 AI"
  },
  kogpt: {
    id: "kogpt",
    name: "KoGPT",
    tagline: "한국적 사고의 언어 전문가 🇰🇷",
    icon: "https://kakaobrain.com/favicon.ico",
    description: "오 당신 진짜 한국인의 정서를 잘 아는 타입이네요! 뭔가 언어 센스가 있고, 한국어 뉘앙스를 엄청 잘 캐치하는 그런 사람이에요. 친구들이 '이거 어떻게 표현하지?' 할 때 딱 적절한 말 해주는 그런 존재! KoGPT처럼 한국적 정서와 현대적 감각을 다 갖춘 완전 밸런서 ⚖️",
    strengths: ["언어 감각", "문화적 이해", "자연스러운 소통"],
    jobs: ["번역", "콘텐츠 라이팅", "문화 기획"],
    color: "from-red-500 to-blue-500",
    category: "언어 AI"
  },
  perplexity: {
    id: "perplexity",
    name: "Perplexity",
    tagline: "호기심 많은 지식 탐험가 🔍",
    icon: "https://www.perplexity.ai/favicon.svg",
    description: "와 당신 완전 지식욕 끝판왕이네요! 뭔가 궁금한 거 있으면 바로바로 찾아보고, 정확한 정보 알려주는 거 진짜 좋아하는 타입이죠? 친구들이 '이거 뭐야?' 하면 제일 먼저 검색해서 알려주는 그런 사람! Perplexity처럼 호기심 천국에서 살고 있는 완전 리서치 마스터 📚",
    strengths: ["탐구 정신", "정확성", "학습 능력"],
    jobs: ["연구원", "정보 분석", "교육"],
    color: "from-teal-500 to-cyan-500",
    category: "검색 AI"
  },
  upstage: {
    id: "upstage",
    name: "Upstage Docu AI",
    tagline: "정확한 문서 분석 전문가 📄",
    icon: "https://www.upstage.ai/favicon.ico",
    description: "와 당신 진짜 디테일 킹이네요! 문서 보면 한 글자도 빠트리지 않고 꼼꼼히 읽는 그런 타입이에요. 계약서나 보고서 같은 거 분석하는 거 완전 잘할 것 같아요. 친구들이 '이거 뭔 뜻이야?' 하면 딱딱 짚어서 설명해주는 그런 사람! Upstage Docu AI처럼 신뢰도 100% 분석러 🔍",
    strengths: ["정확성", "분석력", "전문성"],
    jobs: ["데이터 분석", "문서 관리", "컨설팅"],
    color: "from-indigo-500 to-purple-500",
    category: "문서 AI"
  },
  copilot: {
    id: "copilot",
    name: "GitHub Copilot",
    tagline: "개발자의 든든한 짝꿍 👨‍💻",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    description: "헐 진짜 개발자 체질이네요! 당신은 문제 보면 논리적으로 쪼개서 해결하는 게 완전 자연스러운 타입이에요. 코드 짜는 거 좋아하고, 뭔가 자동화시키는 거에 진짜 희열을 느낄 것 같아요. GitHub Copilot처럼 혼자보다는 팀으로 일할 때 진가 발휘! 디버깅의 신 🛠️",
    strengths: ["논리적 사고", "문제 해결", "협력"],
    jobs: ["개발자", "시스템 엔지니어", "기술 컨설팅"],
    color: "from-gray-700 to-black",
    category: "코드 어시스턴트"
  },
  codekogpt: {
    id: "codekogpt",
    name: "CodeKoGPT",
    tagline: "한국형 코딩 어시스턴트 🔧",
    icon: "https://kakaobrain.com/favicon.ico",
    description: "오 당신 완전 착한 개발자네요! 기술 얘기할 때도 어려운 말 안 쓰고, 누구나 이해할 수 있게 쉽게 설명해주는 그런 타입이에요. 한국 개발자들의 정서를 잘 아는 CodeKoGPT처럼 기술력도 좋고 인성도 좋은 완전 밸런스 캐릭터! 후배들한테 코딩 가르쳐주는 거 진짜 잘할 것 같아요 👨‍🏫",
    strengths: ["기술 전문성", "쉬운 설명", "실용성"],
    jobs: ["기술 교육", "시스템 개발", "IT 컨설팅"],
    color: "from-blue-600 to-indigo-600",
    category: "코드 어시스턴트"
  },
  canva: {
    id: "canva",
    name: "Canva Magic",
    tagline: "친근한 디자인 도우미 ✨",
    icon: "https://www.canva.com/favicon.ico",
    description: "아 당신 완전 디자인 센스 있는데 어려운 거 싫어하는 타입이네요! 뭔가 예쁘게 만들고 싶지만 포토샵은 너무 복잡하고... 그럴 때 딱 Canva 쓰는 그런 사람! 간단하게 만들어도 완전 예쁜 결과물이 나오는 마법 같은 능력의 소유자예요. 인스타 스토리도 완전 센스있게 만들 듯 📱",
    strengths: ["접근성", "사용자 친화", "실용적 창의성"],
    jobs: ["UX/UI 디자인", "교육", "소셜 미디어"],
    color: "from-cyan-400 to-purple-500",
    category: "디자인 AI"
  },
  removebg: {
    id: "removebg",
    name: "Remove.bg",
    tagline: "완벽주의자 이미지 편집사 🖼️",
    icon: "https://www.remove.bg/favicon-32x32.png",
    description: "와 당신 진짜 디테일 끝판왕이네요! 사진 편집할 때 배경 하나하나 꼼꼼히 지우고, 완벽하게 만들어야 직성이 풀리는 그런 타입이에요. 친구들이 '와 이거 어떻게 이렇게 깔끔하게 했어?' 하면서 감탄할 그런 작업물을 만드는 장인! Remove.bg처럼 한 가지 일을 완벽하게 해내는 프로 중의 프로 🎯",
    strengths: ["세심함", "완벽 추구", "전문성"],
    jobs: ["이미지 편집", "품질 관리", "세부 작업"],
    color: "from-green-400 to-teal-500",
    category: "이미지 편집"
  }
};
