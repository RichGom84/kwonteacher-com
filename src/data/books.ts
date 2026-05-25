export type Book = {
  no: number;
  title: string;
  tagline: string;
  store: "yes24" | "kyobobook";
  url: string;
  /**
   * 표지 이미지 경로. `/books/book-1.jpg` 처럼 public 폴더 기준 절대 경로.
   * 비워두면 자동으로 플레이스홀더 카드가 표시됩니다.
   */
  cover?: string;
  pending?: boolean;
};

export const BOOKS: Book[] = [
  {
    no: 1,
    title: "AI 시대의 첫걸음 누구나 배우는 AI리터러시",
    tagline: "AI를 처음 접하는 사람을 위한 가장 친절한 입문서",
    store: "yes24",
    url: "https://www.yes24.com/Product/Goods/152299950",
    cover: "/books/book-1.jpg",
  },
  {
    no: 2,
    title: "AI에이전트 시대 젠스파크 AI 300배 활용법",
    tagline: "Genspark로 업무 생산성 폭발시키는 실전 가이드",
    store: "yes24",
    url: "https://www.yes24.com/Product/Goods/152119137",
    cover: "/books/book-2.jpg",
  },
  {
    no: 3,
    title: "AI 리터러시 실전편 기계와 대화하는 법",
    tagline: "프롬프트로 대화하는 실전 트레이닝",
    store: "yes24",
    url: "https://www.yes24.com/Product/Goods/152922944",
    cover: "/books/book-3.jpg",
  },
  {
    no: 4,
    title: "공저서 (제목 확인 중)",
    tagline: "AI 활용 실무 가이드 공저",
    store: "yes24",
    url: "https://www.yes24.com/Product/Goods/163458554",
    cover: "/books/book-4.jpg",
    pending: true,
  },
  {
    no: 5,
    title: "AI가 고객을 데려오는 시대 GEO마케팅 완전정복",
    tagline: "검색의 패러다임이 바뀌는 GEO 시대, 마케팅 완전정복",
    store: "yes24",
    url: "https://www.yes24.com/Product/Goods/182758744",
    cover: "/books/book-5.jpg",
  },
  {
    no: 6,
    title: "공저서 (제목 확인 중)",
    tagline: "AI 시대 실무 가이드 공저",
    store: "kyobobook",
    url: "https://product.kyobobook.co.kr/detail/S000219414047",
    cover: "/books/book-6.jpg",
    pending: true,
  },
];
