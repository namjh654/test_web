import { PageProps } from "../types/Pagenation/type";

export const Pagination = ({ page, total, size, onPageChange }: PageProps) => {
  const totalPages = Math.ceil(total / size);
  const maxButtons = 4;

  let startPage = Math.max(1, page - Math.floor(maxButtons / 2));
  let endPage = startPage + maxButtons - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, idx) => startPage + idx
  );

  const isFirst = page === 1;
  const isLast = page === totalPages;

  return (
    <div className="flex justify-center mt-6">
      <div className="flex gap-1 items-center">
        <button
          onClick={() => onPageChange(1)}
          disabled={isFirst}
          className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          &laquo; 처음
        </button>
        {/* <button
          onClick={() => onPageChange(page - 1)}
          disabled={isFirst}
          className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          &lt; 이전
        </button> */}

        {pageNumbers.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            disabled={p === page}
            className={`px-3 py-1 rounded ${
              p === page
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {p}
          </button>
        ))}

        {/* <button
          onClick={() => onPageChange(page + 1)}
          disabled={isLast}
          className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          다음 &gt;
        </button> */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={isLast}
          className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          끝 &raquo;
        </button>
      </div>
    </div>
  );
};
