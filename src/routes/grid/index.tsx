import React from "react";
import styles from "../../index.module.scss";
import { Tile } from "../../components/Tile";
import { PaginatedList } from "react-paginated-list";
import { Search } from "../../components/Search";
import tiles from "../../mocks/tile";

export const Grid: React.FC = () => {
  const tileList = tiles;
  const originalData = tileList;
  const [tile, setTile] = React.useState(tileList);
  return (
    <section>
      <h1>Grid Tile</h1>
      <Search tile={originalData} setTile={setTile} />
      <PaginatedList
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
      />
    </section>
  );
};
