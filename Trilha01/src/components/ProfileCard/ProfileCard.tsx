import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src="trilhas\public"
        alt="Foto de perfil"
      />
      <h2 className={styles.name}>João Silva</h2>
      <p className={styles.description}>
        Desenvolvedor Front-End apaixonado por React.
      </p>
    </div>
  );
};

export default ProfileCard;
