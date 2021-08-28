import React from "react";
import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({ totalPages, page, changePage }) => {
	const pagesCount = usePagination(totalPages);

	return (
		<div className="pagination">
			{pagesCount.map((p) => (
				<span
					onClick={() => changePage(p)}
					key={p}
					className={p === page ? "page current" : "page"}
				>
					{p}
				</span>
			))}
		</div>
	);
};

export default Pagination;
