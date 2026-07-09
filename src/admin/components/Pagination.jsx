import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, totalPages, perPage, onPage, onPerPage, total }) {
  const perPageOptions = [10, 25, 50, 100];

  const from = (page - 1) * perPage + 1;
  const to = Math.min(page * perPage, total);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 border-t border-surface-100">
      <div className="flex items-center gap-3">
        <span className="text-sm text-surface-500">Rows per page:</span>
        <select
          value={perPage}
          onChange={(e) => onPerPage(Number(e.target.value))}
          className="text-sm border border-surface-200 rounded-lg px-2 py-1 text-surface-700 font-medium bg-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all"
        >
          {perPageOptions.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <span className="text-sm text-surface-400">
          {total === 0 ? "0 results" : `${from}–${to} of ${total}`}
        </span>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onPage(1)}
          disabled={page === 1}
          className="p-1.5 rounded-lg text-surface-400 hover:text-surface-700 hover:bg-surface-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          title="First page"
        >
          <ChevronLeft size={14} />
        </button>
        <button
          onClick={() => onPage(page - 1)}
          disabled={page === 1}
          className="p-1.5 rounded-lg text-surface-400 hover:text-surface-700 hover:bg-surface-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          title="Previous page"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Page number pills */}
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let p;
          if (totalPages <= 5) {
            p = i + 1;
          } else if (page <= 3) {
            p = i + 1;
          } else if (page >= totalPages - 2) {
            p = totalPages - 4 + i;
          } else {
            p = page - 2 + i;
          }
          return (
            <button
              key={p}
              onClick={() => onPage(p)}
              className={`w-8 h-8 rounded-lg text-sm font-semibold transition-all ${
                p === page
                  ? "bg-primary-600 text-white shadow-sm shadow-primary-600/30"
                  : "text-surface-500 hover:bg-surface-100 hover:text-surface-700"
              }`}
            >
              {p}
            </button>
          );
        })}

        <button
          onClick={() => onPage(page + 1)}
          disabled={page === totalPages}
          className="p-1.5 rounded-lg text-surface-400 hover:text-surface-700 hover:bg-surface-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          title="Next page"
        >
          <ChevronRight size={16} />
        </button>
        <button
          onClick={() => onPage(totalPages)}
          disabled={page === totalPages}
          className="p-1.5 rounded-lg text-surface-400 hover:text-surface-700 hover:bg-surface-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          title="Last page"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
