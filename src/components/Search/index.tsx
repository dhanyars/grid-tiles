import React from "react";
import styles from "../../index.module.scss";

interface searchProps {
  tile: tile[];
  setTile: (x: tile[]) => void;
  setCurrentPage: (x: number) => void;
}

interface tile {
  title: string;
  description: string;
  imagePath: string;
}

export const Search: React.FC<searchProps> = ({
  tile,
  setTile,
  setCurrentPage,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [noResults, setNoResults] = React.useState(false);

  const handleSearchInput = React.useCallback(
    (event: any) => {
      setSearchQuery(event.target.value);
    },
    [setSearchQuery]
  );

  React.useEffect(() => {
    const newData = tile.filter((item) =>
      item.title?.toLowerCase().includes(searchQuery)
    );
    setTile(newData);
    if (newData.length > 0) {
      setNoResults(false);
      setCurrentPage(1);
    } else {
      setNoResults(true);
    }
  }, [searchQuery]);

  return (
    <div>
      <input
        type="text"
        onChange={handleSearchInput}
        placeholder="search for a tile"
        data-testid="search"
      />
      {noResults && <div className={styles.tileSearch}>No search results</div>}
    </div>
  );
};
