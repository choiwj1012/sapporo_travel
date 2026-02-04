// 요테이산·맛카리 드라이브 여행 일정 데이터
const travelData = {
  day1: [
    {
      time: "11:15",
      place: "신치토세 공항 도착",
      icon: "✈️",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "walk", duration: "입국" },
      desc: "CTS 11:15 도착. 입국 수속 및 수하물 수령 후 렌터카 카운터로 이동",
      mapsUrl: "https://maps.google.com/?q=New+Chitose+Airport"
    },
    {
      time: "12:00 - 12:30",
      place: "Budget 렌터카 픽업",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "shuttle", duration: "약 10분" },
      desc: "셔틀버스로 포플러/스즈란 영업소 이동. 차량 인수 및 네비게이션 설정. 스노타이어 장착 확인!",
      location: { address: "758-206 Bibi, Chitose, Hokkaido" },
      mapsUrl: "https://maps.google.com/?q=Budget+Rent+a+Car+New+Chitose"
    },
    {
      time: "12:30 - 14:00",
      place: "조잔케이 이동",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 1시간 30분" },
      desc: "신치토세 공항 → 조잔케이 온천. 고속도로/국도 상황 체크. 눈길 운전 주의!",
      recommendations: [
        { icon: "⛽", name: "출발 전 주유", desc: "첫 주유는 공항 근처에서! 조잔케이 근처보다 저렴합니다" }
      ]
    },
    {
      time: "14:00",
      place: "조잔케이뷰 호텔 체크인",
      icon: "🏨",
      category: "hotel",
      categoryLabel: "숙소",
      transport: { method: "car", duration: "도착" },
      desc: "2박 거점 확보! 짐 풀고 가벼운 복장으로 온천마을 산책 준비. 주차 무료.",
      location: { address: "2-111 Jozankeionsenhigashi, Minami Ward, Sapporo", hours: "체크인 14:00 / 체크아웃 10:00" },
      mapsUrl: "https://maps.google.com/?q=Jozankei+View+Hotel"
    },
    {
      time: "14:30 - 17:00",
      place: "온천마을 산책 & 카페",
      icon: "☕",
      category: "cafe",
      categoryLabel: "카페",
      transport: { method: "walk", duration: "도보 5분" },
      desc: "호텔에서 온천거리까지 도보 이동. 아기자기한 카페와 베이커리 탐방. 온천 만쥬도 꼭 맛보세요!",
      recommendations: [
        { 
          icon: "☕", 
          name: "tocchan café (とっちゃんカフェ)", 
          desc: "아늑한 실내에서 스무디와 커피를 즐기는 감성 카페. 부부가 운영하며 고양이와 자전거를 좋아하는 취향이 곳곳에 묻어남.", 
          price: "커피 ¥500~",
          mapsUrl: "https://maps.google.com/?q=tocchan+cafe+jozankei"
        },
        { 
          icon: "🥐", 
          name: "Exclamation Bakery", 
          desc: "족욕을 하며 빵을 즐길 수 있는 프리미엄 베이커리! 마가린·쇼트닝 無첨가, 약 30종류의 개성 있는 빵 제공.", 
          price: "빵 ¥300~600",
          mapsUrl: "https://maps.google.com/?q=Exclamation+Bakery+jozankei"
        },
        { 
          icon: "🍡", 
          name: "조잔케이 온천 만쥬", 
          desc: "조잔케이 명물! 갓 찐 따끈한 온천 만쥬. 달콤한 팥앙금이 가득.", 
          price: "¥150~" 
        }
      ],
      alternatives: [
        { name: "아메노히토 유키노히", desc: "'비오는 날과 눈오는 날'이라는 뜻의 감성 카페. 창밖 눈 풍경이 예쁨" },
        { name: "조잔케이 팜", desc: "현지 농산물로 만든 젤라또와 스무디" }
      ]
    },
    {
      time: "17:00 - 18:30",
      place: "호헤이쿄 온천 (선택)",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      transport: { method: "car", duration: "약 20분" },
      desc: "호텔에서 렌터카로 이동. 눈 내리는 노천탕에서 설경 감상! 온천 내 식당의 인도 커리가 매우 유명.",
      location: { address: "608-2 Jozankei, Minami Ward, Sapporo", hours: "10:00 ~ 22:30" },
      recommendations: [
        { 
          icon: "🍛", 
          name: "ONsen Shokudo 인도 커리", 
          desc: "'일본에서 가장 맛있는 인도 커리'라는 별명. 정통 인도인 셰프가 만드는 본격 커리. 난과 함께 주문 필수!", 
          price: "¥1,200~1,500" 
        },
        { icon: "🧖", name: "설경 노천탕", desc: "눈 덮인 산을 바라보며 즐기는 노천탕. 해질녘이 가장 아름다움" }
      ],
      mapsUrl: "https://maps.google.com/?q=Hoheikyo+Onsen"
    },
    {
      time: "19:00 ~",
      place: "저녁 식사 & 호텔 휴식",
      icon: "🍽️",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "car", duration: "약 20분" },
      desc: "호헤이쿄 온천에서 호텔 복귀. 호텔 뷔페 또는 근처 식당에서 저녁. 첫날이니 일찍 쉬세요!",
      recommendations: [
        { icon: "🍱", name: "호텔 뷔페", desc: "조잔케이뷰 호텔 내 뷔페. 홋카이도 해산물과 다양한 요리" },
        { icon: "♨️", name: "호텔 대욕장", desc: "식사 후 호텔 온천에서 하루 마무리" }
      ]
    }
  ],
  day2: [
    {
      time: "08:00 - 09:00",
      place: "조식 & 출발 준비",
      icon: "🍳",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "호텔 뷔페 조식. 오늘은 드라이브 데이! 가벼운 차림, 온천 도구 지참.",
      recommendations: [
        { icon: "🥛", name: "홋카이도 우유", desc: "진하고 고소한 홋카이도 우유 필수!" },
        { icon: "🍙", name: "오니기리 테이크아웃", desc: "드라이브 중 간식으로 주먹밥 챙기기" }
      ]
    },
    {
      time: "09:30",
      place: "호텔 출발",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 1시간" },
      desc: "조잔케이 → 교고쿠 후키다시 공원. 요테이산이 보이는 국도(230번, 66번) 드라이브를 즐기세요!",
      recommendations: [
        { icon: "📸", name: "드라이브 포인트", desc: "요테이산 뷰가 나오면 잠시 정차해서 사진 찍기!" }
      ]
    },
    {
      time: "10:30 - 11:30",
      place: "교고쿠 후키다시 공원",
      icon: "⛰️",
      category: "sightseeing",
      categoryLabel: "관광",
      transport: { method: "car", duration: "도착" },
      desc: "요테이산 뷰포인트 + 명수(名水) 시음! 홋카이도 최고의 약수를 받아갈 수 있어요. 빈 물통 지참 추천.",
      image: "images/fukidashi_park_yotei.png",
      location: { address: "Kyogoku, Abuta District, Hokkaido", hours: "24시간 개방 (상점은 주간)" },
      recommendations: [
        { 
          icon: "💧", 
          name: "교고쿠 명수", 
          desc: "요테이산에서 내려온 천연 용천수. '일본 명수 100선' 선정. 빈 물통으로 받아가세요!", 
          price: "무료" 
        },
        { icon: "📸", name: "요테이산 포토존", desc: "눈 쌓인 공원에서 요테이산 배경으로 인생샷!" }
      ],
      mapsUrl: "https://maps.google.com/?q=Fukidashi+Park+Kyogoku"
    },
    {
      time: "11:30 - 12:30",
      place: "점심 식사",
      icon: "🍜",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "car", duration: "약 15분" },
      desc: "맛카리/니세코 지역에서 점심. 홋카이도 신선 식재료로 만든 요리를 즐기세요!",
      recommendations: [
        { 
          icon: "🍕", 
          name: "니세코 다카하시 목장 PRATIVO", 
          desc: "요테이산 파노라마 뷰를 보면서 식사! 현지 치즈로 만든 피자와 홋카이도 신선 야채 샐러드. 가성비 좋은 런치 세트 인기!", 
          price: "¥800~1,800",
          mapsUrl: "https://maps.google.com/?q=PRATIVO+Niseko"
        },
        { 
          icon: "🍜", 
          name: "라멘 야마오카야 (Yamaokaya)", 
          desc: "홋카이도 원조 된장 라멘 체인점! 진한 된장 육수와 차슈 돼지고기가 일품. 가성비 최고.", 
          price: "¥850~1,200",
          mapsUrl: "https://maps.google.com/?q=Yamaokaya+Kutchan"
        },
        { 
          icon: "🍣", 
          name: "스시 하나요시 (Sushi Hanayoshi)", 
          desc: "니세코역 도보 10분. 신선한 해산물로 셰프 추천 니기리 스시와 바라치라시!", 
          price: "¥1,500~3,000",
          mapsUrl: "https://maps.google.com/?q=Sushi+Hanayoshi+Niseko"
        },
        { 
          icon: "☕", 
          name: "Makkari Base Café", 
          desc: "맛카리 마을 내 컨테이너 스타일 카페. 나고야식 토스트/샌드위치 등 간식. 요테이산 뷰!", 
          price: "¥800~1,500",
          mapsUrl: "https://maps.google.com/?q=Makkari+Base+Cafe"
        }
      ],
      alternatives: [
        { name: "Boulangerie Jin (불랑제리 진)", desc: "홋카이도 최고 수준의 시골 빵집! 품절 빠름 주의" },
        { name: "Green Farm Cafe (니세코)", desc: "히라후 중심가, 서양식 브런치 및 커피" }
      ]
    },
    {
      time: "13:00 - 15:00",
      place: "맛카리 온천",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      transport: { method: "car", duration: "약 10분" },
      desc: "★ 오늘의 하이라이트! 노천탕에서 요테이산을 정면으로 바라보는 압도적 뷰. 11시 오픈이니 점심 후 방문이 최적!",
      image: "images/makkari_onsen_yotei.png",
      location: { address: "174-3 Midorioka, Makkari Village, Abuta District", hours: "11:00 ~ 21:00 (동절기)" },
      recommendations: [
        { 
          icon: "🗻", 
          name: "요테이산 노천탕", 
          desc: "온천에 앉으면 요테이산이 바로 앞에! 홋카이도 최고의 온천 뷰. 사진은 금지지만 눈에 담아가세요.", 
          price: "성인 ¥500~600" 
        },
        { icon: "🛁", name: "실내탕", desc: "날씨가 너무 추우면 실내 욕탕에서 몸을 녹인 후 노천탕으로" }
      ],
      mapsUrl: "https://maps.google.com/?q=Makkari+Onsen"
    },
    {
      time: "14:30 - 16:30",
      place: "니세코 카페 투어 & 눈 액티비티",
      icon: "☕",
      category: "cafe",
      categoryLabel: "카페",
      transport: { method: "car", duration: "약 20분" },
      desc: "요테이산 뷰 카페에서 휴식하고 저렴한 눈 액티비티를 즐기세요! 성인도 즐길 수 있는 옵션들입니다.",
      recommendations: [
        { 
          icon: "🛷", 
          name: "★ 튜브 파크 (HANAZONO) - 성인 추천!", 
          desc: "커다란 튜브를 타고 눈 슬로프를 신나게 내려오세요! 매직 카펫으로 언덕 위까지 편하게 이동. 성인도 충분히 스릴 만끽! 3세 이상 누구나 가능.", 
          price: "¥4,500/60분",
          mapsUrl: "https://hanazononiseko.com/en/winter/activities/tube-park"
        },
        { 
          icon: "🏔️", 
          name: "★ 설경 산책 (무료!)", 
          desc: "눈 덮인 니세코 마을을 천천히 걸으며 풍경을 감상하세요. 요테이산 뷰포인트에서 사진 찍기 좋아요! 히라후 마을 주변 산책 코스 추천.", 
          price: "무료",
          mapsUrl: "https://maps.google.com/?q=Niseko+Hirafu+View+Point"
        },
        { 
          icon: "♨️", 
          name: "유고코로테이 온천 (ゆごころ亭)", 
          desc: "히라후 마을 내 당일치기 노천탕. 액티비티 후 따뜻한 온천에서 피로 풀기! 실내외 욕탕 모두 있음.", 
          price: "¥900~1,000",
          mapsUrl: "https://maps.google.com/?q=Yugokorotei+Onsen+Hirafu"
        },
        { 
          icon: "☕", 
          name: "sanshoku (サンショク)", 
          desc: "2024년 리뉴얼 오픈! 마운틴 센터 2층, 유리창 너머로 요테이산 파노라마 뷰가 펼쳐지는 감성 카페. 인스타 필수 방문!", 
          price: "커피 ¥500~800",
          mapsUrl: "https://maps.google.com/?q=sanshoku+Niseko+Hirafu"
        },
        { 
          icon: "🍦", 
          name: "다카하시 목장 밀크 코보 (高橋牧場)", 
          desc: "홋카이도 최고의 소프트아이스크림! 치즈 타르트와 슈크림도 인기. 넓은 창문으로 전원 풍경과 요테이산 뷰!", 
          price: "소프트 ¥350~, 치즈타르트 ¥250~",
          mapsUrl: "https://maps.google.com/?q=高橋牧場+ニセコミルク工房"
        },
        { 
          icon: "☕", 
          name: "% ARABICA (아라비카)", 
          desc: "세계적으로 유명한 인스타 감성 카페 체인! 히라후자카에 위치. 세련된 인테리어와 퀄리티 높은 커피.", 
          price: "라떼 ¥550~",
          mapsUrl: "https://maps.google.com/?q=%25ARABICA+Niseko"
        }
      ],
      alternatives: [
        { name: "안누푸리 눈썰매장 (무료)", desc: "키즈랜드지만 한산할 때 성인도 이용 가능. 썰매/튜브 무료 대여, 에스컬레이터 무료" },
        { name: "그라우뷘덴 카페", desc: "독일 스타일 산장 카페, 장작난로가 있는 따뜻한 분위기 (커피 ¥500~)" },
        { name: "눈사람 만들기", desc: "눈쌓인 곳 어디서든 무료! 사진 찍기 좋아요 😊" }
      ],
      mapsUrl: "https://maps.google.com/?q=Niseko+Hirafu"
    },
    {
      time: "16:30 - 17:30",
      place: "니세코 히라후 쇼핑거리",
      icon: "🛍️",
      category: "shopping",
      categoryLabel: "쇼핑",
      transport: { method: "car", duration: "약 10분" },
      desc: "액티비티 후 히라후 쇼핑! 고급 아웃도어 샵, 기념품 가게 구경. 16:30 이후라 가게가 일찍 닫을 수 있으니 관심 매장 우선 방문!",
      image: "images/niseko_hirafu_street.png",
      location: { address: "Middle Hirafu / Hirafu-zaka Street, Niseko" },
      recommendations: [
        { 
          icon: "🧥", 
          name: "아웃도어 브랜드 샵", 
          desc: "파타고니아, 노스페이스 등 일본 한정 제품. 스키복, 장갑, 고글 등 품질 좋은 아이템" 
        },
        { 
          icon: "☕", 
          name: "아후리 라멘 (Afuri)", 
          desc: "히라후 빌리지 내 인기 라멘. 유자 시오 라멘 시그니처!", 
          price: "¥950~1,300",
          mapsUrl: "https://maps.google.com/?q=Afuri+Ramen+Niseko"
        }
      ],
      mapsUrl: "https://maps.google.com/?q=Niseko+Hirafu"
    },
    {
      time: "17:30 - 18:30",
      place: "조잔케이 복귀",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 1시간" },
      desc: "니세코 → 조잔케이 복귀. 해가 지면 어두우니 안전 운전! 16:30경 해가 지기 시작해요."
    },
    {
      time: "19:00 ~",
      place: "호텔 2박차 휴식",
      icon: "🏨",
      category: "hotel",
      categoryLabel: "숙소",
      transport: { method: "car", duration: "도착" },
      desc: "호텔 복귀 후 저녁 식사 및 온천욕. 호텔 뷔페 또는 근처 맛집에서 드라이브 마무리!",
      recommendations: [
        { icon: "🍱", name: "호텔 뷔페", desc: "편하게 호텔에서 저녁. 홋카이도 해산물과 다양한 요리" },
        { 
          icon: "🍜", 
          name: "라멘 츠이스이 (追粋)", 
          desc: "조잔케이 온천거리 내 라멘집! 홋카이도 된장 라멘 전문점. 드라이브 후 뜨끈한 라멘 한 그릇으로 마무리.", 
          price: "¥900~1,200",
          mapsUrl: "https://maps.google.com/?q=追粋+定山渓"
        },
        { 
          icon: "🍣", 
          name: "스시 사한 (寄はな)", 
          desc: "조잔케이 온천 근처 스시집. 신선한 해산물로 만든 니기리 스시 세트. 가격대비 만족도 높음!", 
          price: "¥2,000~4,000",
          mapsUrl: "https://maps.google.com/?q=寄はな+定山渓"
        },
        { 
          icon: "🍲", 
          name: "조잔케이 징기스칸", 
          desc: "홈메이드 징기스칸(양고기 구이) 전문점. 드라이브 후 추울 때 따뜻한 징기스칸으로 몸 녹이기!", 
          price: "¥1,200~1,800" 
        },
        { icon: "♨️", name: "호텔 대욕장", desc: "식사 후 드라이브 피로를 온천에서 풀기" }
      ],
      alternatives: [
        { name: "세이코마트", desc: "편의점에서 홋카이도 한정 도시락과 맥주. 방에서 편하게" }
      ]
    }
  ],
  day3: [
    {
      time: "07:00 - 10:00",
      place: "조식 & 체크아웃",
      icon: "🍳",
      category: "hotel",
      categoryLabel: "숙소",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "마지막 조잔케이 아침! 조식 뷔페 후 10:00 체크아웃. 짐 챙겨서 차량 탑승.",
      recommendations: [
        { icon: "🧳", name: "스키복 환복", desc: "호텔에서 스키복으로 갈아입으면 렌탈샵에서 시간 절약!" }
      ]
    },
    {
      time: "10:00 - 11:00",
      place: "루스츠 이동",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 50분" },
      desc: "조잔케이 → 루스츠 리조트 이동. 눈길 운전 주의, 여유 있게 출발!"
    },
    {
      time: "11:00 - 11:30",
      place: "Amuse Sports 렌탈 픽업",
      icon: "⛷️",
      category: "ski",
      categoryLabel: "스키",
      transport: { method: "car", duration: "약 5분" },
      desc: "리조트에서 렌탈샵으로 이동. 스키/보드, 부츠, 헬멧 장비 픽업. 예약 캡처 화면 보여주면 빠른 진행!",
      location: { address: "144 Izumikawa, Rusutsu, Abuta District" },
      mapsUrl: "https://maps.google.com/?q=Amuse+Sports+Rusutsu"
    },
    {
      time: "12:00 - 16:00",
      place: "루스츠 리조트 스키/보드",
      icon: "⛷️",
      category: "ski",
      categoryLabel: "스키",
      transport: { method: "car", duration: "약 5분" },
      desc: "홋카이도 최대급 스키 리조트! 오후권 또는 4시간권 활용. 3개 산, 37개 코스의 광활한 슬로프!",
      location: { address: "13 Izumikawa, Rusutsu, Abuta District" },
      recommendations: [
        { icon: "🎿", name: "이조라 마운틴", desc: "초중급자 추천! 완만한 경사와 넓은 슬로프. 요테이산 전망 최고" },
        { icon: "⛷️", name: "이스트 마운틴", desc: "중상급자 추천. 다양한 지형과 트리런 가능" },
        { icon: "🎫", name: "오후권", desc: "4시간권 약 ¥5,000~, 오후권 약 ¥4,000~" }
      ],
      mapsUrl: "https://rusutsu.com/lift-tickets/"
    },
    {
      time: "16:00 - 17:00",
      place: "Daniel Street Cafe 휴식",
      icon: "☕",
      category: "cafe",
      categoryLabel: "카페",
      transport: { method: "walk", duration: "리조트 내" },
      desc: "스키 후 따뜻한 커피와 페이스트리로 휴식! 리조트 내 카페/패스트리 거리.",
      recommendations: [
        { icon: "☕", name: "핫초콜릿", desc: "스키 후 달달한 핫초코가 최고" },
        { icon: "🍰", name: "케이크 & 페이스트리", desc: "현지에서 만든 디저트" }
      ]
    },
    {
      time: "17:00 - 18:00",
      place: "기타유자와 이동",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 40분" },
      desc: "루스츠 → 기타유자와 미도리노카제 리조트 이동. 장비 반납 후 바로 출발!"
    },
    {
      time: "18:00 - 19:00",
      place: "미도리노카제 리조트 체크인",
      icon: "🏨",
      category: "hotel",
      categoryLabel: "숙소",
      transport: { method: "car", duration: "도착" },
      desc: "기타유자와 도착! 20개의 다양한 노천탕을 보유한 프리미엄 온천 리조트.",
      location: { address: "300-2 Kitayuzawaonsencho, Date, Hokkaido", hours: "체크인 15:00 / 체크아웃 11:00" },
      mapsUrl: "https://maps.google.com/?q=Midori+no+Kaze+Resort"
    },
    {
      time: "19:00 ~",
      place: "저녁 & 온천 휴식",
      icon: "🍽️",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "호텔 뷔페에서 저녁 식사 후 스키로 지친 몸을 온천에서 풀어주세요!",
      recommendations: [
        { 
          icon: "🍱", 
          name: "뷔페 레스토랑 세세라기", 
          desc: "90가지 이상 요리! 홋카이도 해산물, 스테이크, 스시 등 다양.", 
          price: "숙박 포함 또는 ¥4,000~" 
        },
        { icon: "♨️", name: "20개 노천탕", desc: "숲 속 노천탕, 암반욕 등 다양한 시설. 밤하늘 별 보며 온천욕!" }
      ]
    }
  ],
  day4: [
    {
      time: "07:00 - 11:00",
      place: "조식 & 아침 온천 & 체크아웃",
      icon: "🏨",
      category: "hotel",
      categoryLabel: "숙소",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "마지막 호텔 온천! 조식 뷔페 후 여유롭게 온천욕. 11:00 체크아웃.",
      recommendations: [
        { icon: "♨️", name: "아침 노천탕", desc: "아침 햇살 받으며 여유롭게 온천욕으로 여행 마무리" },
        { icon: "🥛", name: "홋카이도 우유", desc: "마지막 홋카이도 우유 한 잔!" }
      ]
    },
    {
      time: "11:00 - 13:00",
      place: "신치토세 공항 이동",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 1시간 30분" },
      desc: "기타유자와 → 신치토세 공항. 중간에 점심 식사 포함, 여유롭게 이동."
    },
    {
      time: "12:00 - 13:00",
      place: "점심 식사 (이동 중)",
      icon: "🍜",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "car", duration: "도착" },
      desc: "치토세 시내 또는 공항에서 마지막 홋카이도 식사!",
      recommendations: [
        { 
          icon: "🍛", 
          name: "스프카레 라비", 
          desc: "홋카이도 명물 스프카레! 진한 풍미의 카레 국물에 큼직한 야채와 치킨.", 
          price: "¥1,200~1,800",
          mapsUrl: "https://maps.google.com/?q=Soup+Curry+Lavi+千歳"
        },
        { 
          icon: "🍜", 
          name: "이치겐 에비소바 (공항)", 
          desc: "홋카이도 5대 라멘! 진한 새우 육수가 시그니처.", 
          price: "¥950~1,200",
          mapsUrl: "https://maps.google.com/?q=一幻+新千歳空港"
        }
      ],
      alternatives: [
        { name: "공항 라멘도장", desc: "8개 유명 라멘집 입점. 시간 촉박하면 공항에서 해결" }
      ]
    },
    {
      time: "14:00 - 15:00",
      place: "Budget 렌터카 반납",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 15분" },
      desc: "주유 후 렌터카 반납. 연료 가득 채워서 반납하면 빠른 정산! 공항 셔틀 탑승.",
      mapsUrl: "https://maps.google.com/?q=Budget+Rent+a+Car+New+Chitose"
    },
    {
      time: "15:00 - 17:45",
      place: "출국 수속 & 면세점",
      icon: "✈️",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "walk", duration: "공항 내" },
      desc: "출국 수속 후 면세점 쇼핑! 마지막 쇼핑 기회. 17:45 출발편 탑승.",
      recommendations: [
        { 
          icon: "🍫", 
          name: "로이스 초콜릿 (ROYCE')", 
          desc: "홋카이도 대표 초콜릿! 나마초코는 입에서 녹는 식감. 공항 한정 상품도!", 
          price: "¥800~2,000",
          mapsUrl: "https://maps.google.com/?q=ROYCE+新千歳空港"
        },
        { 
          icon: "🧈", 
          name: "르타오 치즈케이크", 
          desc: "공항 인기 1위! 더블 프로마쥬는 냉동 상태로 판매해 한국까지 신선하게.", 
          price: "¥1,800~",
          mapsUrl: "https://maps.google.com/?q=LeTAO+新千歳空港"
        },
        { icon: "🦀", name: "게 과자 (かに太郎)", desc: "게살 센베이. 바삭한 식감과 진한 게 풍미. 선물용 인기", price: "¥600~1,200" }
      ]
    }
  ]
};
