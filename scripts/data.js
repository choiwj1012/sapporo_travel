// 도야 코한테이 3박 4일 여행 데이터 v3 - 완전판
// 목표: 여행 중 추가 검색 없이 이 데이터만으로 완벽한 여행 가이드

const travelData = {
  // ========== 여행 기본 정보 ==========
  tripInfo: {
    title: "도야 코한테이 & 시코츠호 3박 4일",
    dates: "2026.02.07(토) ~ 02.10(화)",
    flightInfo: {
      arrival: "CTS 11:15 도착",
      departure: "CTS 17:45 출발"
    },
    accommodation: {
      name: "도야 코한테이 (洞爺 湖畔亭)",
      nameJp: "洞爺湖畔亭",
      address: "〒049-5721 北海道虻田郡洞爺湖町洞爺湖温泉7-8",
      addressKr: "홋카이도 아부타군 도야호초 도야코온센 7-8",
      phone: "0142-75-2211",
      phonePlus: "+81-142-75-2144",
      mapCode: "321 519 271*66",
      checkIn: "15:00",
      checkOut: "10:00",
      parking: "무료 (100대)",
      onsen: {
        hours: "6:00~24:00 (대욕장)",
        rooftop: "6:00~22:00 (옥상 노천탕)",
        features: ["도야호 전망 노천탕", "사우나", "자쿠지", "옥상 노천탕"]
      },
      mapsUrl: "https://maps.google.com/?q=洞爺湖畔亭"
    },
    rentalCar: {
      company: "TOYOTA렌터카 신치토세공항점",
      phone: "0123-45-8100",
      pickupLocation: "신치토세공항 1층 도착로비 → 무료셔틀버스 5분",
      returnLocation: "동일 (만땅 주유 후 반납)",
      mapCode: "113 846 573*17",
      estimated: "3박4일 ¥30,000~50,000"
    },
    budget: {
      total: "1인당 약 15~20만엔",
      breakdown: {
        accommodation: "¥60,000~105,000 (3박 1박2식)",
        rentalCar: "¥30,000~50,000",
        gasoline: "¥8,000~12,000",
        skiRental: "¥8,000~10,000",
        activities: "¥3,000~5,000",
        snacks: "¥5,000~10,000"
      }
    },
    emergency: {
      police: "110",
      fire: "119",
      consulateKR: "+81-11-218-0288",
      consulateKRNote: "삿포로 대한민국 총영사관",
      jaf: "#8139",
      jafNote: "일본자동차연맹 긴급지원",
      toyaOnsenAssoc: "0142-75-2446",
      noboribetsuAssoc: "0143-84-3311"
    }
  },

  // ========== 날씨 & 복장 가이드 ==========
  weatherInfo: {
    temperature: "-5°C ~ 2°C (낮 최고)",
    feelsLike: "바람 때문에 체감온도 더 낮음",
    sunset: "17:00 전후",
    snowProbability: "수시로 눈 가능성 높음",
    clothing: {
      outer: ["다운 패딩 (방수/방풍)", "스키 재킷 (스키날 필수)"],
      top: ["히트텍 이너", "플리스 또는 니트"],
      bottom: ["기모 바지", "스키 팬츠"],
      accessories: ["방한 장갑", "목도리/넥워머", "비니/귀마개", "선글라스 (눈 반사)"],
      footwear: ["방한 부츠 (미끄럼 방지)", "스키 부츠 (렌탈)"]
    }
  },

  // ========== 준비물 체크리스트 ==========
  packingList: [
    { item: "여권 & 항공권", category: "필수", checked: false },
    { item: "국제면허증", category: "필수", checked: false },
    { item: "신용카드 & 현금 (엔화)", category: "필수", checked: false },
    { item: "해외여행 보험", category: "필수", checked: false },
    { item: "휴대폰 충전기", category: "전자기기", checked: false },
    { item: "보조배터리", category: "전자기기", checked: false },
    { item: "카메라", category: "전자기기", checked: false },
    { item: "빈 페트병 (샘물용)", category: "기타", checked: false },
    { item: "선크림 (눈 반사용)", category: "기타", checked: false },
    { item: "상비약", category: "기타", checked: false },
    { item: "수영복 (온천 혼욕탕용)", category: "온천", checked: false },
    { item: "소형 타올", category: "온천", checked: false }
  ],

  // ========== DAY 1: 도착 & 도야호 ==========
  day1: [
    {
      time: "11:15",
      place: "신치토세 공항 도착",
      icon: "✈️",
      category: "transport",
      categoryLabel: "도착",
      desc: "CTS 11:15 도착. 입국심사(30~40분), 수하물 수령 후 1층 도착로비로 이동.",
      location: {
        address: "New Chitose Airport, Hokkaido",
        mapCode: "113 846 573*17"
      },
      mapsUrl: "https://maps.google.com/?q=New+Chitose+Airport",
      tips: [
        "입국심사 30~40분 소요 예상",
        "수하물 찾은 후 1층 도착로비로 이동",
        "공항 내 점심 가능 (라멘, 스시 등)"
      ]
    },
    {
      time: "12:00 - 12:30",
      place: "공항 점심식사",
      icon: "🍜",
      category: "restaurant",
      categoryLabel: "식사",
      desc: "국내선 터미널 3층 라멘 도코로에서 홋카이도 라멘으로 배 채우기!",
      recommendations: [
        { icon: "🍜", name: "라멘 도코로", desc: "미소라멘, 쇼유라멘 등 다양한 홋카이도 라멘", price: "¥900~1,200" },
        { icon: "🍣", name: "스시 처", desc: "신선한 해산물 스시, 덮밥", price: "¥1,000~1,500" }
      ],
      tips: ["도야까지 1시간 30분이니 든든히 먹기"]
    },
    {
      time: "12:30 - 13:00",
      place: "TOYOTA렌터카 픽업",
      icon: "🚗",
      category: "transport",
      categoryLabel: "렌터카",
      desc: "셔틀버스로 렌터카 영업소 이동 (5분). 차량 인수 시 스터드리스 타이어 확인 필수!",
      location: {
        address: "신치토세공항 인근 TOYOTA렌터카",
        phone: "0123-45-8100",
        mapCode: "113 846 573*17"
      },
      mapsUrl: "https://maps.google.com/?q=Toyota+Rent+a+Car+New+Chitose",
      tips: [
        "예약 확인서 & 국제면허증 지참",
        "스터드리스 타이어 장착 여부 확인",
        "네비에 MapCode 입력법 숙지"
      ]
    },
    {
      time: "13:00 - 14:45",
      place: "도야호 이동",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 1시간 45분" },
      desc: "신치토세공항 → 도오 자동차도 → 아부타 도야코IC → 국도 230호선 → 도야코온센",
      location: {
        mapCode: "321 519 271*66",
        distance: "약 95km"
      },
      recommendations: [
        { icon: "🚽", name: "키무라PA (Kimura PA)", desc: "중간 휴게소. 화장실 & 간단 휴식" }
      ],
      tips: [
        "도오자동차도 유료 (ETC 카드 사용 가능)",
        "터널 출입구 빙판 주의",
        "네비에 MapCode: 321 519 271*66 입력"
      ]
    },
    {
      time: "15:00",
      place: "도야 코한테이 체크인",
      icon: "🏨",
      category: "hotel",
      categoryLabel: "숙소",
      desc: "도착! 3박 연박이므로 짐을 편하게 풀고 시설 둘러보기. 조금 일찍 도착해도 짐 보관 가능.",
      location: {
        address: "홋카이도 아부타군 도야호초 도야코온센 7-8",
        addressJp: "〒049-5721 北海道虻田郡洞爺湖町洞爺湖温泉7-8",
        phone: "0142-75-2211",
        mapCode: "321 519 271*66",
        hours: "체크인 15:00 / 체크아웃 10:00",
        parking: "무료 (100대)"
      },
      mapsUrl: "https://maps.google.com/?q=洞爺湖畔亭",
      tips: [
        "프론트에서 온천 이용 시간 확인",
        "저녁 식사 시간 확인 (보통 18:00~20:00)",
        "불꽃놀이 시간 확인 (20:30)"
      ]
    },
    {
      time: "15:00 - 18:00",
      place: "온천가 산책 & 소품샵 투어",
      icon: "🛍️",
      category: "shopping",
      categoryLabel: "쇼핑",
      transport: { method: "walk", duration: "도보 3~10분" },
      desc: "체크인 후 도야호 온천가를 천천히 산책. 감성 소품샵과 카페를 둘러보기.",
      recommendations: [
        { 
          icon: "🛍️", 
          name: "HOLIDAY MARKET TOYA", 
          desc: "온천 마을의 로컬 셀렉트 잡화점. 텍스타일, 문구, 생활소품, 오리지널 굿즈. '뻔한 기념품' 대신 '실제로 쓰는 물건'이 많음!",
          mapsUrl: "https://maps.google.com/?q=HOLIDAY+MARKET+TOYA"
        },
        { 
          icon: "🧵", 
          name: "테즈쿠리 하우스 아이비 (手作りハウス あいびぃ)",
          desc: "핸드메이드 소품샵. 아기자기한 기념품 가득.",
          mapsUrl: "https://maps.google.com/?q=手作りハウス+あいびぃ"
        },
        {
          icon: "🍰",
          name: "와카사이모 본포 (わかさいも本舗)",
          desc: "도야 명물 '와카사이모' 과자. 도보 3분 거리 본점.",
          mapsUrl: "https://maps.google.com/?q=わかさいも本舗+洞爺湖"
        },
        {
          icon: "☕",
          name: "Toya Arts & Crafts",
          desc: "공예품과 커피/맥주를 함께 즐기는 복합 공간. 따뜻한 음료 한잔하기 좋음."
        }
      ],
      tips: [
        "영업시간이 17:00~18:00에 끝나는 곳이 많으니 서두르기",
        "HOLIDAY MARKET은 Day 1에 들르는 게 가장 좋음"
      ]
    },
    {
      time: "18:00 - 19:30",
      place: "호텔 석식",
      icon: "🍽️",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "호텔 뷔페 또는 회석 코스. 홋카이도 해산물, 와규, 신선한 야채를 마음껏!",
      recommendations: [
        { icon: "🥩", name: "호텔 뷔페", desc: "일식·양식 혼합. 홋카이도 우유, 신선한 야채, 해산물", price: "숙박 포함" }
      ],
      alternatives: [
        {
          name: "Boyotei (ぼうよてい)",
          desc: "호텔 식사 대신 양식이 땡긴다면! 함박스테이크로 유명한 70년 전통 맛집. 도보 10분.",
          price: "¥1,500~2,500",
          note: "라스트오더 확인 필수 (보통 19:30~20:00)"
        }
      ]
    },
    {
      time: "19:30 - 20:30",
      place: "일루미네이션 터널 산책",
      icon: "✨",
      category: "sightseeing",
      categoryLabel: "관광",
      transport: { method: "walk", duration: "도보 5분" },
      desc: "도야호 온천가 일루미네이션 터널. 겨울밤의 로맨틱한 불빛 산책로.",
      location: {
        address: "도야호 온천가 일대 (호반 산책로)",
        hours: "일몰 ~ 22:00"
      },
      mapsUrl: "https://maps.google.com/?q=洞爺湖温泉+イルミネーション",
      tips: [
        "방한복 필수! (영하 5~10도)",
        "20:30 전에 호숫가로 이동하면 좋은 자리 확보"
      ]
    },
    {
      time: "20:30 - 20:45",
      place: "🎆 도야코 온센 겨울 불꽃놀이",
      icon: "🎇",
      category: "sightseeing",
      categoryLabel: "불꽃놀이",
      transport: { method: "walk", duration: "호숫가" },
      desc: "★ 하이라이트! 겨울 한정 롱런 불꽃놀이. 약 15분간 도야호 위로 쏘아올리는 불꽃!",
      image: "images/toya_fireworks.png",
      location: {
        address: "도야호 호숫가",
        hours: "20:30 ~ 20:45 (약 15분)",
        period: "2월 겨울 기간 매일"
      },
      tips: [
        "★ 2월 7일~10일 매일 20:30 시작!",
        "호텔 노천탕에서도 볼 수 있음 (원거리)",
        "호숫가에서 보면 더 가까이 감상 가능",
        "핫팩과 따뜻한 음료 챙기기"
      ]
    },
    {
      time: "21:00 - 22:30",
      place: "호텔 온천 & 휴식",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      desc: "도야호를 바라보는 노천탕에서 하루 마무리. 옥상 노천탕은 22:00까지!",
      location: {
        hours: "대욕장 6:00~24:00 / 옥상노천탕 6:00~22:00"
      },
      tips: [
        "옥상 노천탕은 22:00까지만 운영",
        "타투 있어도 입장 가능 (확인 필요)",
        "수건은 객실에서 가져가기"
      ]
    }
  ],

  // ========== DAY 2: 드라이브 투어 & 튜빙 ==========
  day2: [
    {
      time: "07:30 - 08:30",
      place: "호텔 조식",
      icon: "🍳",
      category: "restaurant",
      categoryLabel: "식사",
      desc: "든든하게 조식 뷔페! 홋카이도 우유, 신선한 야채, 다양한 일식·양식.",
      tips: ["드라이브 코스가 길으니 든든히 먹기", "08:30까지 식사 마치고 출발 준비"]
    },
    {
      time: "08:45 - 09:30",
      place: "실로 전망대 (サイロ展望台)",
      icon: "🗻",
      category: "sightseeing",
      categoryLabel: "관광",
      transport: { method: "car", duration: "약 15분" },
      desc: "도야호 최고의 파노라마 뷰포인트! 맑은 날 나카지마 섬과 요테이산을 한 프레임에.",
      image: "images/shiro_observatory.png",
      location: {
        address: "北海道洞爺湖町成香3-5",
        phone: "0142-87-2221",
        mapCode: "321 395 617*74",
        hours: "8:30~17:00 (11~4월)",
        admission: "무료",
        parking: "무료 (50대)"
      },
      mapsUrl: "https://maps.google.com/?q=サイロ展望台",
      recommendations: [
        { icon: "☕", name: "레스트하우스 카페", desc: "전망대 내 카페에서 따뜻한 음료와 기념품 구경" }
      ],
      tips: [
        "맑은 날 아침이 최고의 뷰!",
        "도야호 + 나카지마 섬 + 요테이산 한 프레임 촬영",
        "기념품샵에서 도야호 굿즈 구매 가능"
      ]
    },
    {
      time: "09:45 - 10:30",
      place: "레이크힐 팜 (Lake Hill Farm)",
      icon: "🧀",
      category: "cafe",
      categoryLabel: "카페",
      transport: { method: "car", duration: "약 10~15분" },
      desc: "요테이산 뷰 목장 카페! 신선한 우유로 만든 젤라또와 소프트아이스크림이 일품.",
      image: "images/lake_hill_farm.png",
      location: {
        address: "北海道洞爺湖町花和127",
        phone: "0142-83-3376",
        mapCode: "321 517 177*77",
        hours: "9:00~17:00 (10~4월)",
        closed: "연중무휴",
        parking: "무료"
      },
      mapsUrl: "https://maps.google.com/?q=レイクヒルファーム",
      recommendations: [
        { icon: "🍦", name: "수제 젤라토", desc: "신선한 우유로 만든 젤라토. 딸기, 밀크, 블루베리 등", price: "¥400~" },
        { icon: "🥛", name: "갓 짜낸 우유", desc: "농장에서 바로 짜낸 신선한 우유", price: "¥300~" }
      ],
      tips: [
        "창가 자리에서 요테이산 뷰 감상",
        "체험 프로그램 (버터/젤라토 만들기) 사전 예약 필요",
        "10:30까지 마치고 다음 목적지로"
      ]
    },
    {
      time: "10:30 - 11:00",
      place: "츠바야마 포인트 (椿山ポイント)",
      icon: "📸",
      category: "sightseeing",
      categoryLabel: "포토스팟",
      transport: { method: "car", duration: "국도 230호선 이동 중" },
      desc: "★ 인생샷 스팟! 일직선 도로와 요테이산이 완벽하게 정렬되는 포토 포인트.",
      image: "images/tsubayama_point.png",
      location: {
        mapCode: "385 707 548*45",
        note: "국도 230호선 연변, 안전 주차 공간 있음"
      },
      mapsUrl: "https://cafe-deck.scenicbyway.jp/deck32",
      tips: [
        "도로 한가운데서 촬영 금지! 안전한 갓길에서만",
        "차량 왕래 주의",
        "맑은 날 요테이산이 선명하게 보임",
        "레이크힐 → 루스츠 이동 중 잠깐 정차"
      ]
    },
    {
      time: "11:15 - 12:15",
      place: "루스츠 스노우 튜빙 🛷",
      icon: "🛷",
      category: "ski",
      categoryLabel: "액티비티",
      transport: { method: "car", duration: "츠바야마에서 약 15분" },
      desc: "★ 겨울 액티비티! 'Samurai Kid's Park'에서 튜브 썰매 타기. 스키 안 타도 신나게 눈 위에서!",
      image: "images/rusutsu_tubing.png",
      location: {
        address: "루스츠 리조트 스노우 액티비티 파크",
        mapCode: "385 554 772*72",
        hours: "9:00~16:00"
      },
      mapsUrl: "https://rusutsu.com/en/news-and-topics/samurai-kids/",
      recommendations: [
        { icon: "🛷", name: "스노우 튜빙", desc: "튜브를 타고 눈 슬로프를 내려오는 액티비티", price: "요금 현장 확인" },
        { icon: "⛄", name: "눈사람 만들기", desc: "아이들과 함께 눈놀이" }
      ],
      tips: [
        "장갑, 모자, 방한화 필수!",
        "운영 시간/요금은 시즌별 변동, 출발 전 확인",
        "스노우 에스컬레이터로 편하게 올라가기"
      ]
    },
    {
      time: "12:15 - 12:45",
      place: "마카리 이동",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 30분" },
      desc: "루스츠 → 마카리. 요테이산 기슭을 따라 드라이브. 설경 감상!",
      tips: ["도로 결빙 주의", "요테이산이 점점 가까워지는 느낌"]
    },
    {
      time: "12:45 - 13:30",
      place: "요테이노와키미즈 & 점심",
      icon: "💧",
      category: "sightseeing",
      categoryLabel: "관광/식사",
      desc: "요테이산 용수가 솟아나는 명수 포인트. 빈 페트병에 물 담아가기! 인근에서 점심.",
      image: "images/fukidashi_park.png",
      location: {
        address: "마카리 마을 내",
        mapCode: "385 691 450*03",
        admission: "무료",
        parking: "무료"
      },
      recommendations: [
        { 
          icon: "🥢", 
          name: "와키미즈노사토 (두부 공방)", 
          desc: "명수로 만든 두부와 두부 도넛. 시식 가능!",
          price: "¥500~1,000"
        },
        { 
          icon: "🍞", 
          name: "Boulangerie JIN (부랑제리 진)", 
          desc: "★ 마카리의 전설적 빵집! 빵만 사러 오는 사람 많음. 조기 매진 주의!",
          price: "¥300~800",
          note: "점심 전 도착 권장"
        }
      ],
      tips: [
        "★ 빈 페트병 꼭 챙기기! (무료 명수)",
        "부랑제리 진은 오후에 품절되는 빵 많음",
        "두부 도넛 꼭 먹어보기"
      ]
    },
    {
      time: "13:30 - 14:30",
      place: "마카리 온천 (まっかり温泉)",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      desc: "★ 요테이산 정면 뷰 노천탕! 이 여행의 베스트 온천 뷰 중 하나.",
      image: "images/makkari_onsen.png",
      location: {
        address: "真狩村字緑岡174-3",
        phone: "0136-45-2717",
        mapCode: "385 691 629*06",
        hours: "11:00 ~ 21:00",
        closed: "⚠️ 월요일 휴무 (공휴일인 경우 다음날)",
        admission: "성인 ¥700, 어린이 ¥300"
      },
      mapsUrl: "https://maps.google.com/?q=まっかり温泉",
      tips: [
        "★ 월요일 휴무 주의! (Day 3이 월요일)",
        "Day 2(일요일)에 방문하는 이유!",
        "노천탕에서 요테이산 직접 조망",
        "타올은 가져가거나 현장 구매"
      ]
    },
    {
      time: "14:30 - 16:00",
      place: "니세코 뷰 플라자 & 귀가",
      icon: "🛍️",
      category: "shopping",
      categoryLabel: "쇼핑",
      transport: { method: "car", duration: "마카리 → 니세코 → 도야 약 1시간" },
      desc: "니세코 뷰 플라자(휴게소)에서 홋카이도 농산물, 특산품 구경 후 호텔 복귀.",
      recommendations: [
        { icon: "🎁", name: "니세코 뷰 플라자", desc: "현지 농산물, 과자, 기념품 다양", mapsUrl: "https://maps.google.com/?q=ニセコビュープラザ" },
        { icon: "☕", name: "The Day (니세코)", desc: "돌아가는 길에 들르기 좋은 스페셜티 커피 카페" }
      ],
      tips: [
        "16:00까지 호텔 복귀 목표",
        "저녁 식사 전 온천 한번 더 즐기기"
      ]
    },
    {
      time: "18:00 - 19:30",
      place: "호텔 석식",
      icon: "🍽️",
      category: "restaurant",
      categoryLabel: "식사",
      desc: "오늘도 호텔 뷔페 또는 회석 코스로 풍성한 저녁."
    },
    {
      time: "20:30 - 20:45",
      place: "🎆 불꽃놀이 (2일차)",
      icon: "🎇",
      category: "sightseeing",
      categoryLabel: "불꽃놀이",
      desc: "오늘도 20:30 불꽃놀이! 어제와 다른 장소에서 보는 것도 추천.",
      tips: [
        "호텔 옥상 노천탕에서 보기 (22:00 전)",
        "또는 호숫가 다른 지점에서 감상"
      ]
    },
    {
      time: "21:00 - 22:30",
      place: "온천 & 취침",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      desc: "내일은 스키 데이! 푹 쉬기."
    }
  ],

  // ========== DAY 3: 루스츠 스키 데이 ==========
  day3: [
    {
      time: "07:00 - 08:00",
      place: "호텔 조식 (일찍)",
      icon: "🍳",
      category: "restaurant",
      categoryLabel: "식사",
      desc: "스키장 일찍 도착하려면 조식도 일찍! 든든하게 먹고 체력 비축.",
      tips: ["에너지바, 초콜릿 등 간식 챙기기", "스키복으로 갈아입고 출발"]
    },
    {
      time: "08:30 - 09:30",
      place: "루스츠 이동 & 렌탈",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 40분" },
      desc: "도야 → 루스츠 리조트 이동. Amuse Sports 등에서 장비 렌탈.",
      location: {
        mapCode: "385 554 772*72",
        parking: "West Mt Station 근처: 무료"
      },
      recommendations: [
        {
          icon: "🎿",
          name: "Amuse Sports (스키 렌탈)",
          desc: "리조트 외부 렌탈샵. 리조트 내부보다 저렴할 수 있음. 사전 온라인 예약 권장.",
          price: "1일 풀세트 ¥6,000~8,000",
          location: "루스츠 리조트 인근"
        },
        {
          icon: "🎿",
          name: "리조트 내 렌탈 (North Wing)",
          desc: "North Wing 1F, 2F에 렌탈샵. 편리하지만 가격 높음.",
          price: "1일 ¥8,000~10,000"
        }
      ],
      tips: [
        "예약 내역 캡처/프린트 지참",
        "국제면허증, 신분증 지참",
        "주말은 일찍 도착 권장 (혼잡)"
      ]
    },
    {
      time: "10:00 - 12:00",
      place: "오전 슬로프 라이딩",
      icon: "⛷️",
      category: "ski",
      categoryLabel: "스키",
      desc: "루스츠의 파우더 스노우를 즐기자! 3개 산(West, East, Isola)을 넘나들며 라이딩.",
      image: "images/rusutsu_ski.png",
      location: {
        address: "ルスツリゾート",
        mapCode: "385 554 772*72",
        liftPass: "1일권 성인 ¥6,900 (2024-25 시즌 기준)"
      },
      mapsUrl: "https://maps.google.com/?q=Rusutsu+Resort",
      recommendations: [
        { icon: "🟢", name: "초급 코스 (Green)", desc: "West Mt 하단부 연습 슬로프. 완만한 경사로 초보자도 OK." },
        { icon: "🔵", name: "중급 코스 (Blue)", desc: "East Mt → Isola 연결 슬로프. 경치 좋고 적당한 난이도." },
        { icon: "⚫", name: "상급 코스 (Black)", desc: "Mt. Isola 정상에서 Heavenly Canyon. 파우더 천국!" }
      ],
      tips: [
        "리프트권은 렌탈 시 같이 구매하면 편리",
        "오전에 컨디션 좋은 코스 먼저 공략",
        "중간중간 휴식하며 체력 관리"
      ]
    },
    {
      time: "12:00 - 13:00",
      place: "리조트 내 점심",
      icon: "🍽️",
      category: "restaurant",
      categoryLabel: "식사",
      desc: "슬로프 중간에서 따뜻한 점심. 카레, 라멘, 덮밥 등 다양한 메뉴.",
      recommendations: [
        { icon: "🍛", name: "Cafeteria Steamboat", desc: "North Wing 2F. 카레, 우동, 덮밥 등", price: "¥1,000~1,500" },
        { icon: "🍜", name: "Izumiya", desc: "South Wing 1F. 라멘, 소바", price: "¥1,000~1,500" },
        { icon: "🍔", name: "Westin Deli", desc: "South Wing 1F. 주먹밥, 샌드위치 테이크아웃", price: "¥500~1,000" }
      ],
      tips: ["12시~13시는 혼잡. 11:30 또는 13:30 추천", "오후 체력을 위해 탄수화물 충분히"]
    },
    {
      time: "13:00 - 15:30",
      place: "오후 라이딩",
      icon: "⛷️",
      category: "ski",
      categoryLabel: "스키",
      desc: "오후에는 Mt. Isola 쪽을 탐험! 비교적 한적하고 뷰가 좋음.",
      tips: [
        "15:00 이후 리프트 마감 시간 확인",
        "체력 고려해서 무리하지 않기",
        "마지막 라이딩 후 장비 반납"
      ]
    },
    {
      time: "15:30 - 16:00",
      place: "장비 반납 & 귀가",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 40분" },
      desc: "렌탈 장비 반납 후 도야 코한테이로 복귀.",
      tips: [
        "렌탈받은 곳과 동일한 곳에서 반납",
        "장비 확인 후 반납 완료",
        "17:00까지 호텔 복귀 목표"
      ]
    },
    {
      time: "17:00 - 18:00",
      place: "휴식 & 온천",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      desc: "스키로 지친 몸을 온천에서 풀기! 근육 회복에 최고.",
      tips: ["물 많이 마시기 (탈수 주의)", "스트레칭으로 근육 풀기"]
    },
    {
      time: "18:00 - 19:30",
      place: "호텔 석식",
      icon: "🍽️",
      category: "restaurant",
      categoryLabel: "식사",
      desc: "스키 후 꿀맛 같은 저녁 식사. 오늘은 특히 맛있게 느껴질 것!"
    },
    {
      time: "20:30 - 20:45",
      place: "🎆 불꽃놀이 (3일차)",
      icon: "🎇",
      category: "sightseeing",
      categoryLabel: "불꽃놀이",
      desc: "마지막 밤 불꽃놀이. 내일은 체크아웃이니 오늘 밤을 만끽!",
      tips: ["오늘이 도야호에서의 마지막 밤!", "사진 많이 찍어두기"]
    },
    {
      time: "21:00 - 22:00",
      place: "온천 & 취침",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      desc: "마지막 밤 온천. 내일은 시코츠호!"
    }
  ],

  // ========== DAY 4: 시코츠호 & 귀국 ==========
  day4: [
    {
      time: "07:30 - 08:30",
      place: "호텔 조식",
      icon: "🍳",
      category: "restaurant",
      categoryLabel: "식사",
      desc: "마지막 호텔 조식. 든든히 먹고 출발 준비!"
    },
    {
      time: "08:30 - 10:00",
      place: "마지막 온천 & 체크아웃 준비",
      icon: "♨️",
      category: "hotel",
      categoryLabel: "숙소",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "조식 후 마지막 온천욕! 대욕장은 체크아웃 직전까지 이용 가능.",
      tips: [
        "옥상 노천탕 마지막 이용 (08:30~10:00 사이)",
        "짐 정리하면서 잊은 물건 없는지 확인",
        "렌터카에 짐 미리 싣기"
      ]
    },
    {
      time: "10:00",
      place: "체크아웃",
      icon: "🧳",
      category: "hotel",
      categoryLabel: "숙소",
      desc: "프론트에서 체크아웃 & 정산. 렌터카에 짐 싣고 출발!",
      tips: [
        "와이파이 공유기 반납 확인",
        "카드키 반납",
        "주차장에서 안전하게 출발"
      ]
    },
    {
      time: "10:00 - 12:00",
      place: "시코츠호 이동",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 90~120분" },
      desc: "도야 → 시코츠호 (支笏湖). 겨울 도로 상황에 따라 시간 유동적. 설경 드라이브!",
      location: {
        mapCode: "867 063 472*22",
        distance: "약 100km"
      },
      tips: [
        "오로푸레 고개 경유 (국도 453호선)",
        "도로 제설 상황에 따라 90~120분",
        "중간에 휴게소 없으니 출발 전 화장실"
      ]
    },
    {
      time: "12:00 - 14:00",
      place: "시코츠호 산책 & 점심",
      icon: "🌊",
      category: "sightseeing",
      categoryLabel: "관광",
      desc: "시코츠호 블루! 일본에서 가장 투명한 호수 중 하나. 비지터센터, 호숫가 산책, 얼음축제 구경.",
      image: "images/shikotsu_lake_winter.png",
      location: {
        address: "北海道千歳市支笏湖温泉",
        mapCode: "867 063 472*22"
      },
      mapsUrl: "https://maps.google.com/?q=支笏湖",
      recommendations: [
        { 
          icon: "🏛️", 
          name: "시코츠호 비지터센터", 
          desc: "호수와 자연에 대한 전시. 겨울 영업 9:30~16:30",
          admission: "무료"
        },
        { 
          icon: "🧊", 
          name: "효토마츠리 (氷濤まつり) ★", 
          desc: "1월말~2월 개최. 호수 물을 얼려 만든 거대한 얼음 조각! 야간 라이트업 환상적.",
          price: "입장료 확인 필요",
          mapsUrl: "https://hyoutou-special.asia/"
        },
        { 
          icon: "🐟", 
          name: "히메마스 요리 (ヒメマス)", 
          desc: "시코츠호 특산물 각시송어. 회, 소금구이, 튀김 등으로 즐기기!",
          price: "¥1,500~2,500"
        },
        {
          icon: "🍽️",
          name: "미즈노우타 런치 뷔페",
          desc: "호텔 츠루가 리조트 스파의 헬시 뷔페. 사전 예약 권장!",
          price: "런치 ¥2,500~3,500",
          note: "⚠️ '입욕만'은 불가, 런치+입욕 세트만 가능"
        }
      ],
      tips: [
        "호숫가 산책로에서 '시코츠호 블루' 촬영",
        "효토마츠리는 낮에도 예쁘지만 야간 라이트업이 더 감동적",
        "점심은 히메마스 요리 또는 미즈노우타 뷔페 추천"
      ]
    },
    {
      time: "14:00 - 15:30",
      place: "당일치기 온천",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      desc: "공항 가기 전 마지막 온천! 미끌미끌한 미인탕으로 여행 마무리.",
      recommendations: [
        { 
          icon: "♨️", 
          name: "미즈노우타 (水の歌) ★", 
          desc: "고급스러운 온천 리조트. 런치+입욕 세트로 이용.",
          price: "런치+입욕 ¥4,000~5,000",
          note: "⚠️ 입욕만 불가, 세트만 허용"
        },
        { 
          icon: "♨️", 
          name: "마루코마 온천 (丸駒温泉)", 
          desc: "★ 수면과 눈높이가 같은 비탕! 호수에 들어간 듯한 착각.",
          price: "당일치기 ¥1,000~1,500",
          note: "차로 15분 이동",
          mapsUrl: "https://www.marukoma.co.jp/"
        },
        { 
          icon: "♨️", 
          name: "큐카무라 (休暇村)", 
          desc: "가성비 좋은 당일치기 온천. 접근성 좋음.",
          price: "당일치기 ¥800~1,000",
          mapsUrl: "https://www.qkamura.or.jp/shikotsu/"
        }
      ],
      tips: [
        "선택 1: 미즈노우타 (고급) - 런치+입욕 세트",
        "선택 2: 마루코마 (비탕 체험) - 시간 여유 필요",
        "선택 3: 큐카무라 (가성비) - 빠른 이용"
      ]
    },
    {
      time: "15:30 - 16:30",
      place: "상점 & 디저트",
      icon: "🍰",
      category: "cafe",
      categoryLabel: "카페",
      desc: "온천 후 달달한 마무리! 기념품 구매 & 디저트 타임.",
      recommendations: [
        { icon: "🎁", name: "미즈노오토 (水の音)", desc: "시코츠호 기념품/잡화 샵" },
        { icon: "🍰", name: "파티시에 라보", desc: "슈크림, 롤케이크 등 디저트 맛집!" },
        { icon: "🍦", name: "메메루", desc: "테이크아웃 젤라토, 간편식" }
      ],
      tips: [
        "16:30까지 시코츠호 출발",
        "공항까지 약 40분 소요"
      ]
    },
    {
      time: "16:30 - 17:00",
      place: "공항 이동 & 주유",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 40분" },
      desc: "시코츠호 → 신치토세공항. 반납 전 주유 필수! 공항 인근 주유소 이용.",
      location: {
        mapCode: "113 846 573*17"
      },
      tips: [
        "★ 반납 전 주유 필수! (만땅 반납 조건)",
        "공항 인근 ENEOS, Shell 등 이용",
        "17:00까지 렌터카 센터 도착 목표"
      ]
    },
    {
      time: "17:00 - 17:15",
      place: "렌터카 반납",
      icon: "🚗",
      category: "transport",
      categoryLabel: "반납",
      desc: "주유 영수증 지참하고 렌터카 센터에서 반납. 셔틀버스로 공항 이동.",
      tips: [
        "[ ] 만땅 주유 확인",
        "[ ] 차량 외관 확인",
        "[ ] 개인 짐 확인 (좌석 아래, 트렁크)",
        "[ ] ETC 카드, 네비 SD 카드 등 회수"
      ]
    },
    {
      time: "17:15 - 17:45",
      place: "출국 수속",
      icon: "✈️",
      category: "transport",
      categoryLabel: "귀국",
      desc: "셔틀로 공항 터미널 이동. 체크인 카운터에서 수속.",
      tips: [
        "국제선 체크인 마감 보통 출발 1시간 전",
        "17:45 출발이면 16:45까지 체크인 권장"
      ]
    },
    {
      time: "17:45 전",
      place: "마지막 쇼핑 (시간 있으면)",
      icon: "🛒",
      category: "shopping",
      categoryLabel: "쇼핑",
      desc: "시간 여유 있으면 면세점에서 마지막 쇼핑!",
      recommendations: [
        { icon: "🍫", name: "Royce' 생초콜릿", desc: "홋카이도 대표 초콜릿. 생초콜릿이 가장 인기!" },
        { icon: "🍪", name: "시로이 코이비토 (白い恋人)", desc: "홋카이도 클래식 기념품 쿠키" },
        { icon: "🍬", name: "육화정 (六花亭)", desc: "마루세이 버터샌드 등 홋카이도 과자" },
        { icon: "🧀", name: "LeTAO 더블 프로마쥬", desc: "치즈케이크의 명가" }
      ]
    },
    {
      time: "17:45",
      place: "출국 ✈️",
      icon: "✈️",
      category: "transport",
      categoryLabel: "귀국",
      desc: "안녕 홋카이도! 다음에 또 올게요~ 즐거운 여행 되셨길 바랍니다!"
    }
  ],

  // ========== 공항 근처 추가 옵션 ==========
  airportOptions: [
    {
      name: "사케의고향 치토세 수족관 (サケのふるさと 千歳水族館)",
      desc: "연어의 생태를 볼 수 있는 수족관. 아이와 함께라면 추천! 공항에서 차로 10분.",
      location: {
        address: "北海道千歳市花園2-312",
        mapCode: "113 819 752*33",
        hours: "9:00~17:00 (겨울)"
      },
      admission: "성인 ¥800, 어린이 ¥400",
      mapsUrl: "https://chitose-aq.jp/"
    },
    {
      name: "도레노모리 (道の駅 サーモンパーク千歳)",
      desc: "공항 가기 전 마지막 휴게소 & 쇼핑. 홋카이도 농산물, 기념품.",
      location: {
        address: "千歳市花園2-4-2",
        hours: "9:00~18:00"
      }
    }
  ],

  // ========== 겨울 운전 팁 ==========
  drivingTips: [
    {
      icon: "⛽",
      title: "주유 타이밍",
      tips: [
        "출발 전 연료 상태 항상 확인",
        "도야호 주변: ENEOS 도야코점 (MapCode: 321 518 482*17)",
        "루스츠 방면: 향응 GS 루스츠점",
        "반납 전: 공항 인근 주유소 필수 (만땅 반납)"
      ]
    },
    {
      icon: "🌨️",
      title: "눈길 운전",
      tips: [
        "급브레이크, 급출발, 급핸들 절대 금지!",
        "차간거리 평소의 2배 이상",
        "터널 출입구 빙판 주의 (가장 위험)",
        "커브 전 미리 감속, 제동거리 2~5배",
        "화이트아웃 시 비상등 켜고 서행 또는 정차"
      ]
    },
    {
      icon: "🚗",
      title: "차량 점검",
      tips: [
        "스터드리스 타이어 장착 확인 (필수!)",
        "와이퍼 세워서 주차 (눈 무게 방지)",
        "워셔액(한랭지용) 충분한지 확인",
        "헤드라이트 조기 점등 (16:00 이후)"
      ]
    },
    {
      icon: "🆘",
      title: "비상 상황",
      tips: [
        "JAF 긴급 연락: #8139",
        "렌터카 회사 긴급 연락처 저장",
        "눈에 갇히면 차내 대기, 엔진 간헐적 가동",
        "배기구(마후라) 눈으로 막히지 않도록 확인"
      ]
    }
  ],

  // ========== 긴급 연락처 ==========
  emergencyContacts: [
    { name: "경찰", number: "110", desc: "사건/사고 신고" },
    { name: "소방/구급", number: "119", desc: "화재/응급 상황" },
    { name: "삿포로 총영사관", number: "+81-11-218-0288", desc: "대한민국 영사 지원 (긴급)" },
    { name: "JAF", number: "#8139", desc: "일본자동차연맹 긴급지원 (배터리, 잠금, 견인)" },
    { name: "TOYOTA렌터카", number: "0123-45-8100", desc: "렌터카 관련 문의/긴급상황" },
    { name: "도야 코한테이", number: "0142-75-2211", desc: "숙소 연락" },
    { name: "도야코 온센 관광협회", number: "0142-75-2446", desc: "관광 정보/도움" }
  ],

  // ========== 기념품 쇼핑 가이드 ==========
  shoppingGuide: [
    { name: "Royce' 생초콜릿", where: "공항 면세점", price: "약 ¥780~", must: true },
    { name: "시로이 코이비토", where: "어디서나", price: "약 ¥1,200~", must: true },
    { name: "육화정 마루세이 버터샌드", where: "공항, 백화점", price: "약 ¥1,000~", must: true },
    { name: "LeTAO 더블 프로마쥬", where: "공항", price: "약 ¥1,800~", must: false },
    { name: "홋카이도 우유 과자", where: "어디서나", price: "다양", must: false },
    { name: "와카사이모 (도야 명물)", where: "도야 온센가", price: "약 ¥800~", must: false },
    { name: "마리모 키링", where: "도야 기념품샵", price: "약 ¥500~", must: false }
  ]
};
