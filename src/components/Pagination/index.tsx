import React from "react";
import "./pagination.css";

const Pagination: React.FC<any> = ({
  cardsPerPage,
  totalCards,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage >= totalCards / cardsPerPage) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <nav data-testid="pagination">
      <ul className="pagination">
        <li className="page-item">
          <button
            onClick={handlePrev}
            className="page-link  button"
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              data-testid={number}
              className={`page-link  button ${
                currentPage === number ? "active" : ""
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            onClick={handleNext}
            className="page-link  button"
            disabled={currentPage >= totalCards / cardsPerPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
