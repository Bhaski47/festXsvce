import React, { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/page/workshops.module.css";
import { NavLink } from "react-router-dom";
const Workshops: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className={styles.space}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>Workshops</h1>
        <div className={styles.workContainer}>
          <NavLink to={"/"} className={styles.button}>
            Coming Soon!!
            <span></span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Workshops;
