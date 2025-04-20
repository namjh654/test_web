import { PageProps } from "../types/Pagenation/type";

export const Pagination = ({ page, total, size, onPageChange }: PageProps) => {
  const totalPages = Math.ceil(total / size);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      {Array.from({ length: totalPages }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onPageChange(idx + 1)}
          disabled={page === idx + 1}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};
