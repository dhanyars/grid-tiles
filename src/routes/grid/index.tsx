import React, { useState } from "react";
import styles from "../../index.module.scss";
import { Tile } from "../../components/Tile";
import { PaginatedList } from "react-paginated-list";
import { Search } from "../../components/Search";
import tiles from "../../mocks/tile";
import Pagination from "../../components/Pagination";

export const Grid: React.FC = () => {
  const tileList = tiles;
  //Remove duplicates
  const ids = tileList.map(({ title }) => title);
  const filtered = tileList.filter(
    ({ title }, index) => !ids.includes(title, index + 1)
  );

  const originalData = filtered;
  const [tile, setTile] = React.useState(tileList);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);
  // Get current Cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = tile.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section>
      <h1>Grid Tile</h1>
      <Search
        tile={originalData}
        setTile={setTile}
        setCurrentPage={setCurrentPage}
      />
      {/* <PaginatedList
        list={tile}
        itemsPerPage={6}
        renderList={(tile) => (
          <div className={styles.tileContainer}>
            {tile.map((item) => {
              return (
                <Tile
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  image={item.imagePath}
                />
              );
            })}
          </div>
        )}
      /> */}
      <div className={styles.tileContainer}>
        {currentCards.map((item) => {
          return (
            <Tile
              key={item.title + item.imagePath}
              title={item.title}
              description={item.description}
              image={item.imagePath}
            />
          );
        })}
      </div>
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={tile.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};
