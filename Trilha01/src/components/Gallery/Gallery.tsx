import React from "react";
import styles from "./Gallery.module.css";

const images = ["@assets/react.svg"];

const Gallery: React.FC = () => {
  return (
    <div className={styles.gallery}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Imagem ${index + 1}`}
          className={styles.image}
        />
      ))}
    </div>
  );
};

export default Gallery;
