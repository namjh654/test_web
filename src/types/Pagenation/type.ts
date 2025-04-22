// 페이지네이션 정보

export interface PagingInfo {
  offset:number;
  size:number;
  total:number;
}

export interface PageProps {
  page: number;
  total: number;
  size: number;
  onPageChange: (page: number) => void;
  onSizeChange?: (size: number) => void;
}
