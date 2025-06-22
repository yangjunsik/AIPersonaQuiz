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
    description: "너 진짜 뭐든 다 아는 타입이네? 친구들이 궁금한 거 있으면 제일 먼저 찾는 그런 사람일 듯. '이거 어떻게 해?' 하면 '음.. 그거 이렇게 하면 될 거야' 하면서 차근차근 설명해주는 스타일. ChatGPT처럼 질문하면 대답이 쏟아지는 그런 타입이야.",
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
    description: "너 완전 신중한 타입이네? 뭔가 결정할 때 '잠깐, 이거 한 번 더 생각해보자' 하는 그런 사람. 친구들이 중요한 결정할 때 '야 너 생각은 어때?' 하면서 찾아오는 스타일일 듯. Claude처럼 논리적이고 차분하게 분석해주는 그런 타입이야.",
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
    description: "너 완전 예술가 기질이구나? 뭔가 예쁜 거 보면 '어 이거 어떻게 만들었지?' 하면서 바로 상상하기 시작하는 타입. 머릿속에 항상 그림이 그려져 있는 그런 사람일 듯. Midjourney처럼 상상한 걸 뚝딱 만들어내는 스타일이야.",
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
    description: "너 혹시 만능인? 그림도 그리고 디자인도 하고... 뭔가 여러 가지 잘하는 타입일 것 같아. 친구들이 '이거 어떻게 만들지?' 하면 '아 그거 내가 해줄게' 하면서 척척 해내는 스타일. Leonardo AI처럼 다재다능한 그런 사람이야.",
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
    description: "너 완전 트렌드 빠른 타입이구나? 새로운 거 나오면 바로 써보는 얼리어답터 스타일일 듯. '어 이거 이렇게 하면 어떨까?' 하면서 이것저것 실험해보는 사람. Runway처럼 뭔가 신기한 영상 만들어내는 그런 타입이야.",
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
    description: "너 완전 감성적인 타입이구나? 뭔 영상을 만들어도 '어 이거 왜 이렇게 감동적이야?' 하게 만드는 사람. 친구들이 '너 진짜 뭘 해도 따뜻하게 만든다' 하면서 좋아할 그런 스타일. Pika Labs처럼 보는 사람 마음을 움직이는 그런 타입이야.",
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
    description: "너 목소리 되게 좋을 것 같은데? 말만 해도 사람들이 '어? 이 사람 뭔가 다르네' 하는 그런 카리스마 있는 타입. 친구들이 '너 목소리로 뭔가 해야겠다' 이런 말 들어봤을 듯. ElevenLabs처럼 목소리만으로도 사람 마음 움직이는 그런 스타일이야.",
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
    description: "너 음악 취향 좋을 것 같은데? 플레이리스트 만드는 거 잘하고, '이 노래 들어봐 좋더라' 하면서 친구들한테 추천해주는 타입일 듯. 음악에 대한 감각이 있는 사람. Supertone처럼 소리에 대한 센스가 있는 그런 스타일이야.",
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
    description: "너 정리 좋아하는 타입이지? 뭔가 어수선한 거 보면 '아 이거 정리해야겠다' 하면서 바로 손이 가는 사람. 친구들이 '너 진짜 체계적이다' 하면서 부러워할 그런 스타일. Notion AI처럼 뭐든 깔끔하게 정리하는 타입이야.",
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
    description: "너 한국어 뉘앙스 잘 아는 타입이구나? '이거 어떻게 말하지?' 할 때 딱 적절한 표현 찾아주는 사람. 말 한 마디에도 감정이 들어가는 그런 스타일. KoGPT처럼 한국적인 정서를 잘 이해하는 타입이야.",
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
    description: "너 호기심 많은 타입이구나? 뭔가 궁금한 거 있으면 바로 찾아보는 사람. '어 이거 뭐지?' 하면서 검색해보는 스타일. 친구들이 '이거 맞나?' 하면 '잠깐 찾아볼게' 하면서 정확한 정보 가져다주는 타입. Perplexity처럼 궁금증 해결해주는 스타일이야.",
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
    description: "너 문서 보는 거 좋아하는 타입이구나? 복잡한 서류 봐도 '어 이거 재밌네' 하면서 차근차근 읽는 사람. 친구들이 '이 계약서 뭔 소리야?' 하면 '내가 봐줄게' 하면서 꼼꼼히 읽어주는 스타일. Upstage Docu AI처럼 믿고 맡길 수 있는 타입이야.",
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
    description: "너 문제 해결 좋아하는 타입이구나? 뭔가 복잡한 거 보면 '어떻게 풀지?' 하면서 논리적으로 접근하는 사람. '이거 자동화하면 편할 텐데' 하면서 뚝딱 만들어내는 스타일. GitHub Copilot처럼 혼자보다는 팀으로 일할 때 빛나는 타입이야.",
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
    description: "너 설명 잘하는 타입이구나? 기술 얘기할 때도 '어떻게 쉽게 설명하지?' 하면서 차근차근 풀어서 말해주는 사람. 후배들이 '이거 뭐예요?' 하면 '아 그거 쉽게 설명해줄게' 하면서 친절하게 알려주는 스타일. CodeKoGPT처럼 실력도 좋고 가르치는 것도 좋아하는 타입이야.",
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
    description: "너 센스 있는데 쉬운 걸 좋아하는 타입이구나? '예쁘게 만들고 싶은데 포토샵은 너무 어려워' 할 때 '아 이거면 되겠네' 하면서 간단하게 만들어내는 사람. 친구들이 '이거 어떻게 만든 거야?' 하면 '그냥 쉽게 했어' 라고 말하는 스타일. Canva Magic처럼 간단해도 예쁘게 나오는 타입이야.",
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
    description: "너 완벽주의자 타입이구나? 사진 편집할 때 '어 여기 조금 더 있네' 하면서 꼼꼼히 지우는 사람. 친구들이 '이거 누가 편집한 거야? 완전 깔끔하다' 하면서 놀랄 그런 퀄리티로 만드는 스타일. Remove.bg처럼 디테일에 진심인 타입이야.",
    strengths: ["세심함", "완벽 추구", "전문성"],
    jobs: ["이미지 편집", "품질 관리", "세부 작업"],
    color: "from-green-400 to-teal-500",
    category: "이미지 편집"
  }
};
