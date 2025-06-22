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
    description: "야 너 진짜 근본 그 자체네! 완전 지식왕 DNA 타고났구나? 뭔 질문을 해도 '아 그거? 내가 알지~' 이러면서 척척 답해주는 그런 캐릭터야. 친구들이 카톡방에서 '이거 뭐야?' 하면 3초 안에 링크 던져주는 그런 사람! ChatGPT처럼 만능 해결사 느낌~ 완전 믿고 맡기는 타입이야 ㅋㅋ",
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
    description: "야 너 완전 현자 타입이구나? 뭔가 결정할 때 엄청 신중하고 '잠깐 이거 한 번 더 생각해보자' 하는 그런 킹받게 똑똑한 타입ㅋㅋ 친구들이 연애상담이나 중요한 결정할 때 '야 ㅇㅇ아 너 생각은 어때?' 하면서 찾아오는 그런 현명한 존재! Claude처럼 뇌섹남/녀 느낌 물씬~ 진짜 믿음직스러워 ㄷㄷ",
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
    description: "야야야 너 완전 예술혼 충만하구나?! 머릿속이 24시간 갤러리야 갤러리ㅋㅋ 뭔가 예쁜 거 보면 '헐 미쳤다 이거 어떻게 만들지?' 하면서 바로 상상의 나래를 펼치는 그런 타입! Midjourney처럼 '어? 이거 진짜 내가 상상한 거네?' 하면서 소름돋는 작품 만들어내는 진짜 아티스트야~ 인스타도 완전 갤러리 수준일듯ㄷㄷ",
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
    description: "어어어? 너 혹시 만능 캐릭터 아니야?ㅋㅋㅋ 진짜 다빈치급 멀티플레이어구나! '그림도 그려, 디자인도 해, 코딩도 해' 이런 사기캐 느낌이야~ 친구들이 '야 이거 어떻게 만들지?' 하면 '아 그거? 쉽지 내가 해줄게' 하면서 뚝딱뚝딱 만들어내는 그런 타입! Leonardo AI처럼 완전 멀티버스 창조자야 진짜ㄷㄷ",
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
    description: "야 너 완전 트렌드 킹이네?! 새로운 거 나오면 1빠로 써보는 그런 얼리어답터 DNA 타고났구나ㅋㅋ '어 이거 이렇게 하면 어떨까?' 하면서 온갖 실험 다 해보는 그런 미친 창의력! Runway처럼 '헐 이런 것도 되네?' 하면서 완전 SF급 영상 만들어내는 진짜 마법사야~ 틱톡 조회수 백만 찍을 상남자/상녀자ㅋㅋㅋ",
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
    description: "어머 당신 완전 감성 돌이/순이구나?ㅋㅋ 뭔 영상을 찍어도 '아 이거 왜 이렇게 감동적이야...' 하게 만드는 그런 마법 같은 능력 있지? 친구들이 '야 너 진짜 뭘 해도 심쿵하게 만든다' 하면서 부러워할 그런 타입! Pika Labs처럼 '헐 이거 누가 만든 거야? 완전 웜하다...' 소리 듣는 그런 영상 마술사야~",
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
    description: "야야 너 진짜 목소리 깡패구나?! 말만 해도 사람들이 '어? 이 사람 뭔가 다르네?' 하는 그런 카리스마 장착! 친구들이 '야 너 목소리로 돈 벌어야 해' 이런 말 자주 들을 거야ㅋㅋ ElevenLabs처럼 '헐 이 목소리 진짜야?' 소리 들으면서 사람들 홀리는 그런 보이스 마법사! 라디오 DJ 하면 찐짜 대박날듯~",
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
    description: "오오오 너 진짜 음악 DNA 타고났구나?! 플레이리스트 만드는 거 완전 장인 수준이고, '이 노래 들어봐 진짜 미쳤다' 하면서 친구들한테 음악 추천해주는 그런 타입이지? Supertone처럼 '헐 이거 진짜 AI가 만든 거야? 완전 띵곡인데?' 소리 들을 그런 사운드 마법사! 기타 한 번 잡으면 완전 주인공 등장씬ㅋㅋㅋ",
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
    description: "야 너 완전 정리 마니아구나?ㅋㅋㅋ 뭔가 어수선한 거 보면 못 참는 그런 타입이지? '아 이거 왜 이렇게 되어있어?' 하면서 바로바로 정리정돈 들어가는 그런 킹받는 완벽주의자! 친구들이 '야 너 진짜 어떻게 사는 거야? 집도 완전 깔끔하겠다' 하면서 부러워할 그런 사람~ Notion AI처럼 뭐든 체계화시키는 진짜 조직왕!",
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
    description: "어 너 진짜 한국어 마스터구나?! 뭔가 말 한 마디 한 마디에 뉘앙스가 살아있는 그런 타입이야~ '이거 어떻게 말하지?' 할 때 딱 '아 그거 이렇게 하면 되지!' 하면서 찰떡같이 표현해주는 그런 언어 천재! KoGPT처럼 완전 한국인 감성 + 트렌디함 둘 다 잡은 그런 완벽한 밸런스야ㅋㅋ 번역기보다 나을듯?",
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
    description: "야 너 완전 호기심 덩어리구나?ㅋㅋ 뭔가 궁금한 거 있으면 못 참고 바로 찾아보는 그런 타입이지? '어 이거 뭐지?' 하면서 검색의 검색을 거듭하는 그런 탐구생활자! 친구들이 '야 이거 진짜야?' 하면 '잠깐만 찾아볼게' 하면서 완전 정확한 정보 가져다주는 그런 인간 백과사전! Perplexity처럼 궁금증 해결사야 완전~",
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
    description: "야 너 진짜 문서 장인이구나?! 뭔가 복잡한 서류 보면 '어 이거 재밌네?' 하면서 파고드는 그런 이상한(?) 타입ㅋㅋ 친구들이 '야 이 계약서 뭔 소리야?' 하면 '잠깐만 내가 봐줄게' 하면서 한 줄 한 줄 다 읽어주는 그런 꼼꼼함의 끝판왕! Upstage Docu AI처럼 '와 이 사람한테 맡기면 안전하다' 소리 듣는 진짜 믿음직한 분석러~",
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
    description: "야 너 완전 코딩 마신이구나?! 문제 보면 '어 이거 어떻게 풀지?' 하면서 바로 논리적으로 쪼개는 그런 개발자 DNA 타고났어ㅋㅋ '이거 자동화하면 편할 텐데?' 하면서 뚝딱뚝딱 만들어내는 그런 타입! GitHub Copilot처럼 혼자보다는 팀플할 때 완전 MVP! 버그 잡는 거 진짜 재밌어하는 그런 디버깅 장인~",
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
    description: "어 너 완전 착한 개발자네?ㅋㅋ 기술 얘기할 때도 '음.. 이거 어떻게 설명하지?' 하면서 정말 쉽게 풀어서 설명해주는 그런 타입이야! 후배들이 '선배 이거 뭐예요?' 하면 '아 그거? 잠깐만 쉽게 설명해줄게' 하면서 완전 친절하게 알려주는 그런 사람~ CodeKoGPT처럼 실력도 좋고 성격도 좋은 완전 사기캐릭터! 멘토 재질이야 진짜ㅋㅋ",
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
    description: "야 너 완전 센스 있는데 귀찮은 거 싫어하는 타입이구나?ㅋㅋ '예쁘게 만들고 싶은데 포토샵은 너무 어려워...' 할 때 딱 '아 이거면 되겠네!' 하면서 뚝딱 만들어내는 그런 타입! 친구들이 '야 이거 어떻게 만든 거야? 완전 예쁘다' 하면 '그냥 간단하게 했어~' 라고 말하는 그런 은근 실력자! Canva Magic처럼 쉽게 해도 퀄리티 미쳤다는 소리 들을 거야~",
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
    description: "야 너 진짜 완벽주의자구나?ㅋㅋ 사진 편집할 때 '어 여기 털 하나 더 있네?' 하면서 픽셀 단위로 지우는 그런 미친 디테일러! 친구들이 '헐 이거 누가 편집한 거야? 완전 프로 수준인데?' 하면서 놀랄 그런 퀄리티로 만드는 완전 장인! Remove.bg처럼 '이 정도면 됐지' 라는 말을 모르는 그런 완벽주의 끝판왕이야ㅋㅋㅋ",
    strengths: ["세심함", "완벽 추구", "전문성"],
    jobs: ["이미지 편집", "품질 관리", "세부 작업"],
    color: "from-green-400 to-teal-500",
    category: "이미지 편집"
  }
};
