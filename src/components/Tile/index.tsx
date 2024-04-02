import React from "react";
import styles from "../../index.module.scss";

interface tileProps {
  title: string;
  image: string;
  description: string;
}

export const Tile: React.FC<tileProps> = ({ title, image, description }) => {
  return (
    <div className={styles.tileItem}>
      <div className={styles.tileTitle}>{title}</div>
      <div className={styles.tileImage}>
        <img src={image} alt={description} />
      </div>
    </div>
  );
};
