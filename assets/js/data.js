// 모호소 건축사사무소 — 사이트 데이터 (단일 소스)
// 이 파일은 편집기(../편집기)에서 "저장"하면 자동으로 갱신됩니다.
// 손으로 직접 고쳐도 됩니다. 편집기가 저장할 때는 같은 구조(PROJECTS, SITE)를 유지합니다.

const PROJECTS = [
  {
    slug: "kg-tower-remodeling",
    title: "New Face, New Phase",
    titleKo: "KG그룹 사옥 리모델링",
    category: "업무 · 리모델링",
    year: "2023",
    size: "45,450㎡",
    program: "업무시설 · 판매시설 · 문화시설",
    award: "지명설계공모 당선 (1st Prize)",
    credit: "AA아키그룹 건축사사무소 재직 시 수행 — 전략·개념 정리 및 성과물 전체 총괄",
    location: "서울",
    abstract:
      "시간이 쌓인 사옥에 새로운 켜를 입히는 작업. 기존 구조의 가치를 존중하면서 수직 루버와 프리즘 글래스, 슬라브 일체형 미디어 파사드로 외피를 재구성해 'KG New Prism Tower'라는 새 정체성을 부여했다. 저층부에는 쇼룸·하모니홀 등 열린 프로그램을 더해 기업의 얼굴과 도시 가로의 활력을 동시에 회복한다.",
    images: ["hero.jpg", "01.jpg", "02.jpg", "03.jpg"],
  },
  {
    slug: "everland-parking-tower",
    title: "Parking Forest",
    titleKo: "에버랜드 정문 주차타워",
    category: "교통 · 복합",
    year: "2023",
    size: "13,166㎡",
    program: "주차장 · 판매시설",
    award: "지명설계공모 당선 (1st Prize)",
    credit: "AA아키그룹 건축사사무소 재직 시 수행 — 전략·개념 정리 및 성과물 전체 총괄",
    location: "경기 용인",
    abstract:
      "테마파크의 설렘이 주차장에서부터 시작되도록. 3,000대 이상을 담는 대규모 주차타워를 숲 속의 곡선 매스로 풀어내고, 모듈러 플랜트박스와 옥상 정원으로 건물 전체를 또 하나의 풍경으로 만들었다. 저층부의 에버플랫폼(굿즈숍·키즈존·그랜드 스테어)과 루프탑 파크가 주차라는 행위를 방문 경험의 첫 장면으로 바꾼다.",
    images: ["hero.jpg", "01.jpg", "02.jpg", "03.jpg"],
  },
  {
    slug: "national-archives",
    title: "Horizontal Layered Archive",
    titleKo: "국가문헌보존관 건립 국제설계공모",
    category: "교육 · 연구",
    year: "2021",
    size: "51,461㎡",
    program: "교육연구시설 · 도서관",
    award: "국제설계공모 3등 (3rd Prize)",
    credit: "포스코 A&C 재직 시 수행 — 전략·개념 정리 및 성과물 전체 총괄, 협력업체 관리",
    location: "강원 평창",
    abstract:
      "국가의 기록을 담는 수평의 켜. 평창의 산과 호수에 순응하는 낮고 긴 매스 위에 보존·열람·연구의 프로그램을 여섯 개의 밴드(Band)로 재배치하고, 문화 정원과 공용 회랑이 그 사이를 가로지른다. 반투명 파사드 너머로 드러나는 서고의 풍경이 기록문화의 영속성을 보여준다.",
    images: ["hero.jpg", "01.jpg", "02.jpg", "03.jpg"],
  },
  {
    slug: "seoul-station-north",
    title: "The Valley Forena",
    titleKo: "서울역 북부역세권 개발사업",
    category: "복합개발",
    year: "2020",
    size: "359,089㎡",
    program: "업무시설 · 판매시설 · 문화 및 집회시설 · 숙박시설 · 오피스텔",
    award: "민간현상설계공모 당선 (1st Prize) · with Henning Larsen, Benoy",
    credit: "시아플랜 건축사사무소 재직 시 수행 — 전략·개념 정리 및 시각 표현 총괄",
    location: "서울 중구",
    abstract:
      "서울역 북부 유휴부지를 도시와 다시 잇는 대규모 복합개발. 네 개의 타워와 선형의 밸리(계곡형 옥외 상업가로)를 통해 단절된 도시 조직을 연결하고, 업무·호텔·오피스텔·MICE가 결합된 프로그램으로 서울역 일대의 새로운 도시적 목적지를 제안했다.",
    images: ["hero.jpg", "01.jpg", "02.jpg", "03.jpg"],
  },
  {
    slug: "jeonju-station",
    title: "Borrowed Scenery",
    titleKo: "전주역사 국제설계공모",
    category: "교통 · 인프라",
    year: "2019",
    size: "3,448㎡",
    program: "교통여객시설 (역무 · 주차 · 지원시설)",
    award: "국제설계공모 당선 (1st Prize)",
    credit: "시아플랜 건축사사무소 재직 시 수행 — 전략·개념 정리 및 시각화 표현 총괄",
    location: "전북 전주",
    abstract:
      "풍경이 되는 건축, 풍경을 빌리는 역사(借景). 한옥의 결을 현대적 구축 언어로 풀어낸 큰 지붕 아래 떠 있는 정원(Floating Garden)을 두어, 기차를 기다리는 시간이 정원을 거니는 시간이 되도록 했다. 전주의 첫인상이 되는 관문으로서, 도시의 풍경과 이용객의 흐름이 자연스럽게 이어지는 열린 역사를 제안했다.",
    images: ["hero.jpg", "01.jpg", "02.jpg", "03.jpg"],
  },
  {
    slug: "conversion-platform",
    title: "Conversion Platform",
    titleKo: "창동·상계 창업 및 문화산업단지",
    category: "문화 · 창업",
    year: "2018",
    size: "156,263㎡",
    program: "문화 집객시설 · 문화 창업시설 · 창업 창작 레지던스",
    award: "국제설계공모 당선 (1st Prize)",
    credit: "시아플랜 건축사사무소 재직 시 수행 — 전략·개념 정리 및 설계설명서 시각화",
    location: "서울 도봉구",
    abstract:
      "창동·상계 창업 및 문화산업단지 조성사업의 핵심은 '문화'다. 사업구역 내 문화 콘텐츠를 분류해 문화공간을 다층화하고, 각각을 잇는 연속적인 열린 공간을 계획해 단계적으로 도시와 연결한다. 수평·수직으로 계획된 열린 공간은 사람들을 그 안으로 끌어들이고, 그곳에서 벌어지는 다양한 경험과 이야기가 도시를 풍부하게 만든다.",
    images: ["hero.jpg", "01.jpg", "02.jpg", "03.jpg"],
  },
];

const SITE = {
  // 메인 상단 인트로
  intro: {
    sub:
      "모호소 건축사사무소는 도시와 사람 사이의 모호한 경계를 탐구합니다. 문화시설부터 역사(驛舍), 복합개발까지 — 설계공모에서 검증된 설계 역량으로 장소의 가능성을 건축으로 번역합니다.",
  },
  // About 페이지
  about: {
    statement:
      "모호소(MOHOSO)는 도시와 건축, 안과 밖, 일상과 비일상 사이의 모호한 경계를 즐겁게 탐구하는 건축사사무소입니다.",
    desc:
      "우리는 건축을 하나의 정답이 아니라 장소가 품은 여러 가능성의 번역이라고 생각합니다. 문화시설, 역사(驛舍), 대규모 복합개발, 리모델링까지 — 규모와 용도를 가리지 않고 전략 수립과 개념 정리, 그리고 그것을 설득력 있는 공간과 이미지로 구현하는 일을 가장 잘하는 일로 삼고 있습니다.",
    principalName: "목현수",
    principalRole: "Hyeonsu Mok — KIRA Architect / Designer",
    career: [
      { yr: "2024 —", text: "모호소 건축사사무소 대표" },
      { yr: "2022 – 2024", text: "AA아키그룹 건축사사무소 (구 현대종합설계) 디자인부문" },
      { yr: "2021 – 2022", text: "포스코 A&C 건축사사무소" },
      { yr: "2018 – 2021", text: "시아플랜 건축사사무소 디자인파트" },
      { yr: "2023", text: "건축사(KIRA) 자격 취득" },
      { yr: "2018", text: "인하대학교 건축학 학사 졸업" },
    ],
    awards: [
      { yr: "2023", text: "KG그룹 사옥 리모델링 지명설계공모 당선" },
      { yr: "2023", text: "에버랜드 정문 주차타워 지명설계공모 당선" },
      { yr: "2022", text: "당진종합체육관 설계공모 당선" },
      { yr: "2021", text: "국가문헌보존관 건립 국제설계공모 3등" },
      { yr: "2020", text: "서울역 북부역세권 개발사업 설계공모 당선" },
      { yr: "2019", text: "전주역사 국제설계공모 당선" },
      { yr: "2018", text: "창동·상계 창업 및 문화산업단지 국제설계공모 당선" },
      { yr: "2018", text: "자곡지식산업센터 지명설계공모 당선" },
    ],
    note:
      "* 2018–2024년 프로젝트는 시아플랜·포스코 A&C·AA아키그룹 재직 시 수행한 작업이며, 각 프로젝트 페이지에 수행 당시의 소속과 역할을 표기했습니다.",
  },
  // Contact 페이지
  contact: {
    email: "hello@mohoso.kr",
    office: "주소 확정 후 기재 예정",
    phone: "전화번호 확정 후 기재 예정",
    instagramHandle: "@mohoso_architects",
    instagramUrl: "#",
  },
};
