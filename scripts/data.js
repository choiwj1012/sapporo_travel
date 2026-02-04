// 여행 일정 데이터 - Ver.3 (호텔 온천, 석식 상세, 마지막날 점심 추가)
const travelData = {
  day1: [
    {
      time: "11:15",
      place: "신치토세 공항 도착",
      icon: "✈️",
      category: "transport",
      categoryLabel: "이동",
      desc: "CTS 11:15 도착. 입국 심사 후 수하물 수령, 렌터카 카운터로 이동",
      mapsUrl: "https://maps.google.com/?q=New+Chitose+Airport"
    },
    {
      time: "11:30 - 12:30",
      place: "공항 점심식사",
      icon: "🍜",
      category: "restaurant",
      categoryLabel: "식사",
      desc: "국내선 터미널 3층 'Gourmet World'에서 홋카이도 대표 음식으로 첫 끼니. 렌터카 픽업 전 든든하게 배를 채우세요.",
      image: "images/hokkaido_ramen_1770163813335.png",
      recommendations: [
        { 
          icon: "🍜", 
          name: "이치겐 에비소바 (一幻 えびそば)", 
          desc: "홋카이도 5대 라멘 중 하나! 진한 새우 육수가 시그니처. 오리지널 새우 육수 또는 돈코츠 블렌드 선택 가능. 굵은면과 가는면 중 선택할 수 있어요.", 
          price: "¥950~1,200",
          mapsUrl: "https://maps.google.com/?q=一幻+新千歳空港"
        },
        { 
          icon: "🍣", 
          name: "그루메 회전초밥 칸타로 (函太郎)", 
          desc: "하코다테 직송 신선한 해산물을 저렴하게 즐기는 회전초밥. 줄이 길지만 그만큼 가치 있는 맛. 성게, 연어, 이쿠라 강추!", 
          price: "¥1,500~3,000",
          mapsUrl: "https://maps.google.com/?q=函太郎+新千歳空港"
        },
        { 
          icon: "🦀", 
          name: "키쿠요 쇼쿠도 (きくよ食堂)", 
          desc: "하코다테 아침시장 본점의 공항 분점. 성게, 연어알, 게살이 듬뿍 올라간 호화로운 카이센동(해산물덮밥)이 시그니처.", 
          price: "¥1,800~2,500",
          mapsUrl: "https://maps.google.com/?q=きくよ食堂+新千歳空港"
        }
      ],
      alternatives: [
        { name: "홋카이도 라멘도장", desc: "국내선 3층 라멘 골목. 삿포로, 아사히카와, 하코다테 등 홋카이도 각지의 유명 라멘집 8곳 입점" },
        { name: "시마노히토", desc: "럭셔리 해산물 덮밥 전문. 성게덮밥, 이쿠라덮밥 등 고급 메뉴" },
        { name: "편의점 도시락", desc: "시간이 촉박하면 세이코마트에서 홋카이도 한정 도시락 구매 후 차에서 식사" }
      ]
    },
    {
      time: "12:30 - 13:30",
      place: "Budget 렌터카",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      desc: "도착구 3번 게이트 인근 카운터 방문 → 픽업 진행. 보험 옵션 및 네비게이션 사용법 확인",
      location: { address: "758-206 Bibi, Chitose, Hokkaido" },
      mapsUrl: "https://maps.google.com/?q=Budget+Rent+a+Car+New+Chitose"
    },
    {
      time: "13:30 - 14:30",
      place: "조잔케이 이동",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 1시간" },
      desc: "신치토세 공항 → 조잔케이 온천. 국도 230호선 경유, 점점 눈 덮인 산길 풍경이 펼쳐짐"
    },
    {
      time: "14:30 - 15:00",
      place: "조잔케이 뷰 호텔",
      icon: "🏨",
      category: "hotel",
      categoryLabel: "숙소",
      transport: { method: "car", duration: "도착" },
      desc: "호텔 도착 및 체크인 (14:00부터 가능). 짐 정리 후 가벼운 복장으로 온천마을 산책 준비",
      location: { address: "2-111 Jozankei Onsen Higashi, Minami-ku, Sapporo", hours: "체크인 14:00 / 체크아웃 10:00" },
      mapsUrl: "https://maps.google.com/?q=Jozankei+View+Hotel"
    },
    {
      time: "15:00 - 17:00",
      place: "상점가 & 카페 투어",
      icon: "☕",
      category: "cafe",
      categoryLabel: "카페",
      transport: { method: "walk", duration: "도보 5분" },
      desc: "호텔에서 온천거리까지 도보 이동. 조잔케이 온천거리의 아기자기한 카페와 베이커리 탐방. 눈 덮인 거리를 걸으며 따뜻한 음료와 함께 겨울 정취를 만끽하세요.",
      image: "images/jozankei_cafe_1770163828676.png",
      recommendations: [
        { 
          icon: "☕", 
          name: "tocchan café (とっちゃんカフェ)", 
          desc: "2020년 오픈. 전 일본 국가대표 프로 스노보더가 운영하는 감성 카페. 부부가 직접 원두를 로스팅하며, 고양이와 자전거를 좋아하는 부부의 취향이 인테리어 곳곳에 묻어남. 따뜻한 분위기에서 수제 디저트와 핸드드립 커피를 즐길 수 있어요.", 
          price: "커피 ¥500~",
          mapsUrl: "https://maps.google.com/?q=tocchan+cafe+jozankei"
        },
        { 
          icon: "🥐", 
          name: "Exclamation Bakery (エクスクラメーションベーカリー)", 
          desc: "2021년 오픈. 원시림에 둘러싸인 프리미엄 베이커리. 마가린·쇼트닝 無첨가, 빵 장인과 일식·양식 요리사 협업으로 약 30종류의 개성 있는 빵 제공. 족욕 공간 완비! 런치 빵 코스(칼피스 버터 빵, 새우 빵, 100% 소고기 미트 빵 등) 인기.", 
          price: "빵 ¥300~600",
          mapsUrl: "https://maps.google.com/?q=Exclamation+Bakery+jozankei"
        },
        { 
          icon: "🍡", 
          name: "조잔케이 온천 만쥬", 
          desc: "조잔케이 명물! 온천거리 곳곳에서 판매하는 갓 찐 따끈한 온천 만쥬. 달콤한 팥앙금이 가득, 추운 날 간식으로 최고.", 
          price: "¥150~" 
        }
      ],
      alternatives: [
        { name: "아메노히토 유키노히 (雨ノ日と雪ノ日)", desc: "Exclamation Bakery 대각선 맞은편 위치. '비오는 날과 눈오는 날'이라는 뜻의 감성 카페. 창밖 눈 풍경을 바라보며 디저트 즐기기" },
        { name: "조잔케이 팜", desc: "현지 농산물로 만든 젤라또와 스무디 전문. 겨울에도 인기! 홋카이도 우유 맛이 진함" },
        { name: "온천 호빵 가게", desc: "겨울 한정! 온천수로 찐 호빵. 팥, 고기, 피자 맛 3종류. 손난로 대용으로도 딱" }
      ]
    },
    {
      time: "17:15 - 19:30",
      place: "호헤이쿄 온천",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      transport: { method: "car", duration: "약 20분" },
      desc: "호텔에서 렌터카로 이동. 설경을 바라보며 즐기는 노천탕 체험. 홋카이도 최고의 온천 중 하나로 손꼽히는 명소. 해질녘~저녁 시간대가 가장 아름다워요.",
      location: { address: "608-2 Jozankei, Minami Ward, Sapporo", hours: "10:00 ~ 22:30 (마감 21:45)" },
      recommendations: [
        { 
          icon: "🍛", 
          name: "ONsen Shokudo 인도 커리", 
          desc: "온천 내 식당의 전설적인 시그니처 메뉴! '일본에서 가장 맛있는 인도 커리'라는 별명. 정통 인도인 셰프가 만드는 본격 커리. 난과 함께 주문 필수. 온천 후 석식으로 완벽.", 
          price: "¥1,200~1,500" 
        },
        { icon: "🧖", name: "설경 노천탕", desc: "눈 덮인 산을 바라보며 즐기는 노천탕. 100% 원천 방류식 온천수. 해질녘 핑크빛 하늘과 눈의 조화가 환상적" }
      ],
      mapsUrl: "https://maps.google.com/?q=Hoheikyo+Onsen"
    },
    {
      time: "20:00 - 22:00",
      place: "호텔 복귀 & 휴식",
      icon: "🏨",
      category: "hotel",
      categoryLabel: "숙소",
      transport: { method: "car", duration: "약 20분" },
      desc: "호헤이쿄 온천에서 호텔로 렌터카 복귀. 호텔 내 온천에서 하루의 피로를 풀고 편안한 휴식. 호텔 온천도 수질이 좋으니 꼭 이용하세요."
    }
  ],
  day2: [
    {
      time: "06:30 - 07:30",
      place: "호텔 온천",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "이른 아침 호텔 대욕장에서 상쾌한 온천욕. 아침 햇살을 받으며 노천탕을 즐기면 하루가 개운하게 시작됩니다. 조식 전 1시간 여유롭게!"
    },
    {
      time: "07:30 - 08:30",
      place: "조식",
      icon: "🍳",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "호텔 뷔페 조식. 홋카이도 신선한 해산물과 현지 식재료로 만든 요리를 마음껏 즐기세요.",
      recommendations: [
        { icon: "🥛", name: "홋카이도 우유", desc: "신선한 홋카이도 우유는 필수! 진하고 고소한 맛이 다릅니다" },
        { icon: "🍣", name: "해산물 코너", desc: "연어, 이쿠라(연어알), 게살 등 신선한 해산물. 아침부터 호화롭게!" },
        { icon: "🍚", name: "일본식 조식 세트", desc: "된장국, 생선구이, 낫토, 절임류 등 전통 일식 조식" }
      ]
    },
    {
      time: "08:30 - 10:00",
      place: "체크아웃 준비",
      icon: "🧳",
      category: "hotel",
      categoryLabel: "숙소",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "짐 정리 및 10:00 체크아웃. 남은 온천거리 산책도 좋아요"
    },
    {
      time: "10:00 - 12:30",
      place: "노보리베츠 이동",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 2시간 30분" },
      desc: "조잔케이 → 노보리베츠 이동. 중간에 휴게소에서 잠시 휴식하며 홋카이도 겨울 풍경 감상"
    },
    {
      time: "12:30 - 13:30",
      place: "점심식사",
      icon: "🍜",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "walk", duration: "도보 5분" },
      desc: "레스토랑까지 도보 이동. 노보리베츠 온천마을 도착 후 점심. 온천거리에는 유명 맛집들이 밀집해 있어요.",
      recommendations: [
        { 
          icon: "🦀", 
          name: "온천시장 (温泉市場)", 
          desc: "노보리베츠 대표 해산물 식당! 카이센동(해산물덮밥), 가리비구이, 털게 등 신선한 해산물이 주메뉴. 규동 등 저렴한 메뉴도 있어 부담 없이 방문 가능. 점심은 물론 저녁에 술과 함께 즐기기도 좋아요.", 
          price: "¥1,500~3,000",
          mapsUrl: "https://maps.google.com/?q=温泉市場+登別温泉"
        },
        { 
          icon: "🍜", 
          name: "아지노다이오 (味の大王)", 
          desc: "노보리베츠 명물 '지옥라멘' 원조! 지옥계곡 테마에 맞는 자극적인 매운맛 라멘으로 유명. 매운 음식 좋아하면 도전 추천. 빨간 육수가 인상적.", 
          price: "¥900~1,200",
          mapsUrl: "https://maps.google.com/?q=味の大王+登別温泉"
        },
        { 
          icon: "🍮", 
          name: "도산코 푸린 (Dosanko Purin)", 
          desc: "노보리베츠 온천 최초 푸딩 전문점! 우유·달걀·생크림·설탕만으로 황금비율 수제 푸딩. '옛날 푸딩' 추천. 스프 카레도 유명해요.", 
          price: "푸딩 ¥400~",
          mapsUrl: "https://maps.google.com/?q=Dosanko+Purin+Noboribetsu"
        },
        { 
          icon: "🍣", 
          name: "스시처 노보리베츠 (寿司処 登別)", 
          desc: "노보리베츠 온천마을의 정통 스시집! 홋카이도 근해에서 잡은 신선한 생선으로 만든 니기리 스시가 일품. 점심 세트 메뉴가 가성비 좋아요. 카운터석에서 장인의 손놀림 감상 가능.", 
          price: "런치세트 ¥1,500~2,500",
          mapsUrl: "https://maps.google.com/?q=寿司処+登別温泉"
        }
      ],
      alternatives: [
        { name: "소바도코로 후쿠안 (そば処 福庵)", desc: "노보리베츠 소바 맛집. 텐동(튀김덮밥)도 인기. 깔끔한 인테리어로 가족 방문 적합. 11:30~14:00만 영업하니 서두르세요!" },
        { name: "밀키하우스 낙농관", desc: "지옥계곡 주변 카페. 현지 우유로 만든 아이스크림이 유명. 소프트크림 필수" },
        { name: "호텔 레스토랑", desc: "체크인 전이라도 호텔 레스토랑 이용 가능. 편하게 식사하고 싶다면 추천" }
      ]
    },
    {
      time: "14:00 - 17:00",
      place: "다이이치 타키모토칸",
      icon: "🏨",
      category: "hotel",
      categoryLabel: "숙소",
      transport: { method: "walk", duration: "도보 3분" },
      desc: "식당에서 호텔까지 도보 이동. 체크인(14:00~) 후 일본 최대급 온천 시설 체험! 35개의 다양한 탕에서 유황천, 철천, 망초천 등 7종류 온천수를 경험하세요.",
      image: "images/noboribetsu_onsen_1770163846089.png",
      location: { address: "55 Noboribetsuonsencho, Noboribetsu", hours: "체크인 14:00 / 체크아웃 10:00" },
      recommendations: [
        { icon: "♨️", name: "대욕장 35개 탕", desc: "일본 최대급! 유황천, 철천, 망초천 등 7종류 온천수를 35개 탕에서 체험" },
        { icon: "👹", name: "지옥계곡 산책", desc: "호텔에서 도보 5분. 유황 연기가 피어오르는 지옥계곡 탐방" }
      ],
      mapsUrl: "https://maps.google.com/?q=Dai-ichi+Takimotokan"
    },
    {
      time: "17:00 - 18:00",
      place: "온천마을 쇼핑",
      icon: "🛍️",
      category: "shopping",
      categoryLabel: "쇼핑",
      transport: { method: "walk", duration: "도보 5분" },
      desc: "호텔에서 도보 이동. 노보리베츠 온천거리 산책 및 기념품 쇼핑. 지옥계곡 테마의 오니(도깨비) 상품이 인기!",
      recommendations: [
        { 
          icon: "🎎", 
          name: "다이코쿠야 민예점 (大黒屋民芸店)", 
          desc: "노보리베츠 전통 공예품과 기념품 전문점. 오니(도깨비) 인형, 목각 인형, 일본 전통 소품 등. 손글씨 그림엽서와 수제 도자기도 인기. 40년 이상 운영된 노포.", 
          price: "소품 ¥500~",
          mapsUrl: "https://maps.google.com/?q=大黒屋民芸店+登別"
        },
        { 
          icon: "🍠", 
          name: "와카사이모 본점 (わかさいも本舗)", 
          desc: "노보리베츠 대표 과자! 고구마 모양의 달콤한 만쥬 '와카사이모'. 겉은 바삭, 속은 촉촉한 식감. 홋카이도 대표 선물용 과자로 공항에서도 인기지만 본점에서 갓 구운 것이 최고!", 
          price: "6개입 ¥800~",
          mapsUrl: "https://maps.google.com/?q=わかさいも本舗+登別"
        },
        { icon: "👹", name: "오니 기념품", desc: "지옥계곡의 상징 오니(도깨비) 캐릭터 상품. 열쇠고리, 인형, 과자, 티셔츠 등 다양" }
      ],
      alternatives: [
        { name: "Yunomachi Gift Shop", desc: "호텔 내 기념품샵. 노보리베츠 한정 상품과 과자류. 늦은 시간에도 이용 가능" },
        { name: "염라대왕당 (閻魔堂)", desc: "지옥계곡 입구의 명소 겸 기념품샵. 무서운 염라대왕상 포토존과 오니 상품 다수" },
        { name: "편의점 쇼핑", desc: "세이코마트에서 홋카이도 한정 과자와 음료 구매. 가성비 좋은 선물" }
      ]
    },
    {
      time: "18:00 - 19:30",
      place: "석식",
      icon: "🍽️",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "walk", duration: "도보 5분" },
      desc: "호텔에서 도보 이동. 노보리베츠 온천마을에서 홋카이도 해산물과 현지 요리로 저녁 식사. 이자카야 분위기로 술 한잔도 좋아요!",
      recommendations: [
        { 
          icon: "🍶", 
          name: "이세쿠라 (Isekura / 伊勢鞠)", 
          desc: "노보리베츠에서 가장 분위기 좋은 이자카야! 현지인과 관광객 모두에게 사랑받는 곳. 신선한 사시미, 꼬치구이, 해산물 요리와 함께 일본 사케를 즐길 수 있어요. 아늑한 일본식 인테리어가 매력적.", 
          price: "¥2,500~4,000",
          mapsUrl: "https://maps.google.com/?q=伊勢鞠+登別温泉"
        },
        { 
          icon: "🍜", 
          name: "이자카야 라멘 치바 (Izakaya Ramen Chiba)", 
          desc: "라멘과 이자카야의 완벽한 조합! 꼬치구이, 교자, 에다마메 등 안주류와 시원한 생맥주를 즐기다가 마무리로 라멘 한 그릇. 현지 분위기 물씬.", 
          price: "¥1,500~3,000",
          mapsUrl: "https://maps.google.com/?q=ラーメンちば+登別温泉"
        },
        { 
          icon: "🍜", 
          name: "엔마켄 (Enmaken / 閻魔軒)", 
          desc: "지옥계곡 테마의 '엔마 라멘'이 시그니처! 매운맛과 순한맛 선택 가능. 독특한 인테리어와 함께 노보리베츠만의 라멘 경험. 저녁에도 영업해서 편하게 방문 가능.", 
          price: "¥900~1,300",
          mapsUrl: "https://maps.google.com/?q=閻魔軒+登別温泉"
        },
        { 
          icon: "🦀", 
          name: "카니야 노보리베츠 (かに家 登別)", 
          desc: "게 요리 전문점! 홋카이도 명물 털게, 대게, 킹크랩을 다양한 조리법으로 즐길 수 있어요. 게 샤브샤브, 게 스키, 구이 등 풀코스도 가능. 특별한 저녁을 원한다면 강추!", 
          price: "게 코스 ¥5,000~8,000",
          mapsUrl: "https://maps.google.com/?q=かに家+登別温泉"
        }
      ],
      alternatives: [
        { name: "온천시장 (温泉市場)", desc: "저녁 8시까지 영업. 해산물 덮밥과 생맥주로 가볍게 식사하기 좋음" },
        { name: "호텔 뷔페", desc: "다이이치 타키모토칸 내 뷔페 레스토랑. 편하게 다양한 요리를 즐기고 싶다면 추천" },
        { name: "편의점 야식", desc: "늦은 시간이면 세이코마트에서 도시락과 맥주. 방에서 편하게 즐기기" }
      ]
    },
    {
      time: "20:00 - 22:00",
      place: "휴식 & 야간 온천",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      transport: { method: "walk", duration: "도보 5분" },
      desc: "식당에서 호텔 복귀 후 야간 온천욕. 조명이 켜진 밤 온천의 분위기가 또 다른 매력. 35개 탕을 천천히 돌아보세요!"
    }
  ],
  day3: [
    {
      time: "06:00 - 07:00",
      place: "호텔 온천",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "체크아웃 전 마지막 호텔 온천! 이른 아침 한적한 대욕장에서 여유롭게 온천욕을 즐기세요. 스키 전 근육을 풀어주는 효과도 있어요."
    },
    {
      time: "07:00 - 08:00",
      place: "조식",
      icon: "🍳",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "호텔 조식 뷔페. 오늘 스키를 위해 든든하게 에너지 충전!",
      recommendations: [
        { icon: "🥚", name: "오믈렛 스테이션", desc: "눈앞에서 만들어주는 신선한 오믈렛. 토핑 선택 가능" },
        { icon: "🍞", name: "홋카이도 버터 토스트", desc: "홋카이도 우유로 만든 버터와 현지 잼. 진한 풍미가 다릅니다" }
      ]
    },
    {
      time: "08:00 - 10:00",
      place: "체크아웃 & 준비",
      icon: "🧳",
      category: "hotel",
      categoryLabel: "숙소",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "짐 정리 및 10:00 체크아웃. 스키복으로 환복하면 렌탈샵에서 시간 절약! 출발 전 주유소에서 연료 가득 채우기"
    },
    {
      time: "10:00 - 11:40",
      place: "루스츠 이동",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 1시간 40분" },
      desc: "노보리베츠 → 루스츠 이동. 눈길 운전 주의, 여유 있게 출발"
    },
    {
      time: "11:40 - 12:00",
      place: "Amuse Sports 렌탈",
      icon: "⛷️",
      category: "ski",
      categoryLabel: "스키",
      desc: "스키/보드, 부츠, 헬멧 장비 픽업. 예약 캡처 화면 보여주면 빠른 진행!",
      location: { address: "144 Izumikawa, Rusutsu, Abuta District", hours: "리조트에서 차로 5분" },
      mapsUrl: "https://maps.google.com/?q=Amuse+Sports+Rusutsu"
    },
    {
      time: "12:00 - 13:00",
      place: "점심식사",
      icon: "🍜",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "car", duration: "약 5분" },
      desc: "렌탈샵에서 리조트로 렌터카 이동. 루스츠 리조트 내 레스토랑에서 스키 전 든든한 점심",
      image: "images/rusutsu_ski_1770163862533.png",
      recommendations: [
        { 
          icon: "🍕", 
          name: "코스타 테라짜 (Costa Terrazza)", 
          desc: "루스츠 리조트 호텔 북쪽 윙 위치. 정통 이탈리안 레스토랑. 벽돌 오븐에서 구운 나폴리 피자와 홋카이도 식재료 파스타가 시그니처. 분위기도 좋아요.", 
          price: "¥1,500~2,500",
          mapsUrl: "https://maps.google.com/?q=Costa+Terrazza+Rusutsu"
        },
        { 
          icon: "🍛", 
          name: "펍 크리켓 (Pub Cricket)", 
          desc: "캐주얼 비어 & 그릴. 수프 카레, 루스츠 고원 돼지고기 카레라이스, 돼지고기 덮밥 등 든든한 점심 메뉴. 스키 전 에너지 충전에 딱!", 
          price: "¥1,000~1,800",
          mapsUrl: "https://maps.google.com/?q=Pub+Cricket+Rusutsu"
        },
        { 
          icon: "🍜", 
          name: "푸드코트", 
          desc: "빠르게 식사하고 싶다면 푸드코트! 라멘, 카레, 우동 등 다양한 메뉴. 가성비 좋음", 
          price: "¥800~1,200" 
        },
        { 
          icon: "🍣", 
          name: "벨뷰 해산물 스테이크 (Belle Vue)", 
          desc: "루스츠 리조트 내 해산물 전문점! 야간 슬로프를 바라보며 식사. 킹크랩, 대게 등 호화로운 해산물 플래터가 일품. 예약 없이 바로 입장 가능!", 
          price: "¥3,000~6,000",
          mapsUrl: "https://maps.google.com/?q=Belle+Vue+Rusutsu+Resort"
        }
      ],
      alternatives: [
        { name: "올데이 다이닝 아트리움", desc: "웨스틴 루스츠 리조트 내 레스토랑. 자연 채광 좋은 개방형 공간에서 홋카이도 뷔페" },
        { name: "카자하나 일식당", desc: "웨스틴 내 전통 일본 요리. 정갈한 정식 메뉴" },
        { name: "편의점 간식", desc: "시간 절약하려면 편의점에서 주먹밥과 빵 구매 후 바로 스키장으로" }
      ]
    },
    {
      time: "13:00 - 16:30",
      place: "루스츠 리조트 스키",
      icon: "⛷️",
      category: "ski",
      categoryLabel: "스키",
      transport: { method: "walk", duration: "리조트 내" },
      desc: "리조트 내 도보 이동. 홋카이도 최대급 스키 리조트에서 파우더 스노우 체험! 3개 산, 37개 코스의 광활한 슬로프를 즐기세요.",
      location: { address: "13 Izumikawa, Rusutsu, Abuta District" },
      recommendations: [
        { icon: "🎿", name: "이조라 마운틴", desc: "초중급자 추천! 완만한 경사와 넓은 슬로프. 요테이산 전망도 최고" },
        { icon: "⛷️", name: "이스트 마운틴", desc: "중상급자 추천. 다양한 지형과 트리런 가능. 파우더 찾는 분들께 인기" },
        { icon: "📸", name: "요테이산 포토존", desc: "스키장 정상에서 요테이산 배경으로 인생샷! 맑은 날 필수 코스" }
      ],
      mapsUrl: "https://rusutsu.com/lift-tickets/"
    },
    {
      time: "17:00 - 18:30",
      place: "미도리노카제 리조트 이동",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 40분" },
      desc: "루스츠 → 기타유자와 미도리노카제 리조트 이동. 장비 반납 후 바로 출발"
    },
    {
      time: "18:30 - 19:00",
      place: "미도리노카제 리조트 체크인",
      icon: "🏨",
      category: "hotel",
      categoryLabel: "숙소",
      transport: { method: "car", duration: "도착" },
      desc: "기타유자와 도착 및 체크인. 20개의 다양한 노천탕을 보유한 프리미엄 온천 리조트!",
      location: { address: "300-2 Kitayuzawaonsencho, Date, Hokkaido", hours: "체크인 15:00 / 체크아웃 11:00" },
      mapsUrl: "https://maps.google.com/?q=Midori+no+Kaze+Resort"
    },
    {
      time: "19:00 - 20:00",
      place: "석식",
      icon: "🍽️",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "미도리노카제 리조트 내 레스토랑에서 저녁 뷔페. 스키 후 최고의 보상!",
      recommendations: [
        { 
          icon: "🍱", 
          name: "뷔페 레스토랑 세세라기", 
          desc: "아시아식~서양식 90가지 이상 요리! 현지 농산물 사용, 오픈 키친에서 라이브 조리. 홋카이도 해산물, 스테이크, 스시 등 다양. 어린이 메뉴도 제공.", 
          price: "숙박 포함 또는 ¥4,000~" 
        },
        { 
          icon: "🍶", 
          name: "모리노카제 사료", 
          desc: "프리미엄 옵션. 모던 일식 코스 다이닝. 자연과 추상적 테마의 개인실에서 홋카이도 계절 요리를 코스로 제공. 특별한 저녁을 원한다면 추천.", 
          price: "코스 ¥8,000~" 
        },
        { 
          icon: "🦀", 
          name: "해산물 라이브 코너 (ビュッフェ)", 
          desc: "세세라기 뷔페 내 해산물 라이브 코너! 오픈 키친에서 홋카이도 신선한 스시, 사시미, 해산물 구이를 라이브로 즐길 수 있어요. 게, 연어, 성게 등 시즌 해산물을 마음껏!", 
          price: "뷔페 포함" 
        }
      ]
    },
    {
      time: "20:30 - 22:30",
      place: "온천 & 휴식",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "스키로 지친 몸을 20개 노천탕에서 풀어주세요. 숲 속 노천탕, 암반욕 등 다양한 시설. 밤하늘 별 보며 온천욕 최고!"
    }
  ],
  day4: [
    {
      time: "07:00 - 08:00",
      place: "호텔 온천",
      icon: "♨️",
      category: "onsen",
      categoryLabel: "온천",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "마지막 호텔 온천! 체크아웃 전 20개 노천탕 중 아직 못 가본 탕을 돌아보세요. 아침 햇살 받으며 여유롭게 온천욕으로 여행 마무리."
    },
    {
      time: "08:00 - 09:00",
      place: "조식",
      icon: "🍳",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "호텔 조식 뷔페. 마지막 홋카이도 아침 식사를 여유롭게 즐기세요",
      recommendations: [
        { icon: "🥛", name: "홋카이도 유제품", desc: "우유, 요거트, 치즈 등 꼭 한번 더 맛보세요" },
        { icon: "🍙", name: "오니기리", desc: "연어, 명란 등 홋카이도 재료 주먹밥. 차에서 먹을 간식으로도 좋아요" }
      ]
    },
    {
      time: "09:00 - 11:00",
      place: "휴식 & 체크아웃",
      icon: "🧳",
      category: "hotel",
      categoryLabel: "숙소",
      transport: { method: "walk", duration: "호텔 내" },
      desc: "짐 정리 및 11:00 체크아웃. 여유롭게 준비하세요"
    },
    {
      time: "11:00 - 12:00",
      place: "공항 방면 이동",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 1시간" },
      desc: "미도리노카제 → 치토세 방면 이동. 점심 식사를 위해 치토세 시내에서 잠시 정차"
    },
    {
      time: "12:00 - 13:00",
      place: "점심식사",
      icon: "🍜",
      category: "restaurant",
      categoryLabel: "식사",
      transport: { method: "car", duration: "도착" },
      desc: "치토세 시내에 렌터카로 도착. 공항 가는 길, 치토세 시내에서 마지막 홋카이도 식사! 공항보다 여유롭고 현지 맛집을 즐길 수 있어요.",
      recommendations: [
        { 
          icon: "🍛", 
          name: "스프카레 라비 (Soup Curry Lavi)", 
          desc: "홋카이도 명물 스프카레 전문점! 진한 풍미의 카레 국물에 큼직한 야채와 치킨이 들어간 시그니처 메뉴. 맵기 조절 가능, 토핑 추가 가능. 신치토세 공항에도 지점이 있지만 여유롭게 먹으려면 치토세 시내가 좋아요.", 
          price: "¥1,200~1,800",
          mapsUrl: "https://maps.google.com/?q=Soup+Curry+Lavi+千歳"
        },
        { 
          icon: "🍖", 
          name: "부타동 메이진 (豚丼名人)", 
          desc: "홋카이도 토카치 명물 부타동(돼지고기 덮밥) 전문점! 양념 간장을 여러 번 발라 숯불에 구운 돼지고기의 불맛이 일품. 달콤짭짤한 양념과 밥의 조화가 완벽. 든든하게 먹고 공항가기 딱!", 
          price: "¥900~1,400",
          mapsUrl: "https://maps.google.com/?q=豚丼名人+千歳"
        },
        { 
          icon: "🍜", 
          name: "멘야 레이 (麺屋 零)", 
          desc: "미슐랭 가이드 홋카이도 2017 빕 구르망 수상! 돼지뼈, 닭뼈, 해산물을 블렌딩한 진한 육수의 간장 라멘이 시그니처. 로컬 맛집 분위기에서 정통 홋카이도 라멘을 마지막으로 맛보세요.", 
          price: "¥850~1,100",
          mapsUrl: "https://maps.google.com/?q=麺屋零+千歳"
        },
        { 
          icon: "🍣", 
          name: "스시도코로 키타노하나 (鮨処 きたのはな)", 
          desc: "치토세 최고의 스시집! 공항과 가까워 전국 각지에서 항공으로 공수한 신선한 식재료로 만드는 제철 스시. 점심 코스가 가성비 좋고, 카운터석에서 장인의 손놀림을 감상할 수 있어요.", 
          price: "런치세트 ¥2,000~3,500",
          mapsUrl: "https://maps.google.com/?q=鮨処+きたのはな+千歳"
        }
      ],
      alternatives: [
        { name: "도레모 르타오 (Doremo LeTAO)", desc: "르타오 본점 카페. 유명한 치즈케이크 외에도 팬케이크, 오믈렛, 파스타 등 식사 메뉴도 있음" },
        { name: "살몬파크 치토세", desc: "미치노에키(도로휴게소)에 위치. 부타동 톤스케, 피자도 등 여러 음식점 입점" },
        { name: "공항에서 식사", desc: "시간이 촉박하면 공항 도착 후 식사. 라멘도장, 스프카레 등 선택 다양" }
      ]
    },
    {
      time: "13:00 - 14:00",
      place: "공항 이동 & 렌터카 반납",
      icon: "🚗",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "car", duration: "약 15분" },
      desc: "치토세 → 신치토세 공항 이동. Budget 렌터카 반납. 연료 가득 채워서 반납하면 빠른 정산!"
    },
    {
      time: "14:00 - 17:45",
      place: "출국",
      icon: "✈️",
      category: "transport",
      categoryLabel: "이동",
      transport: { method: "walk", duration: "공항 내" },
      desc: "출국 수속, 면세점 쇼핑 후 17:45 탑승. 마지막 쇼핑 기회! 시간 여유 있으니 천천히 둘러보세요.",
      recommendations: [
        { 
          icon: "🍫", 
          name: "로이스 초콜릿 (ROYCE')", 
          desc: "홋카이도 대표 초콜릿! 나마초코(생초콜릿)는 입에서 녹는 식감. 포테토칩 초콜릿, 바통쿠키 등도 인기. 공항 한정 상품도 있어요.", 
          price: "¥800~2,000",
          mapsUrl: "https://maps.google.com/?q=ROYCE+新千歳空港"
        },
        { 
          icon: "🧈", 
          name: "르타오 치즈케이크 (LeTAO)", 
          desc: "신치토세 공항 인기 1위 디저트! 더블 프로마쥬 치즈케이크는 위아래 다른 식감이 특징. 냉동 상태로 판매해 한국까지 신선하게 가져갈 수 있어요.", 
          price: "¥1,800~",
          mapsUrl: "https://maps.google.com/?q=LeTAO+新千歳空港"
        },
        { icon: "🦀", name: "게 과자 (かに太郎)", desc: "게살이 들어간 센베이. 바삭한 식감과 진한 게 풍미. 선물용으로 인기", price: "¥600~1,200" }
      ]
    }
  ]
};
