import React, { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/page/proshows.module.css";
import { NavLink } from "react-router-dom";
const Proshows: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Proshows | Technoways"
  }, []);
  return (
    <>
      <Header />
      <div className={styles.space}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>Proshows</h1>
        <br />
        <div className={styles.workContainer}>
          <NavLink to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Coming Soon!!
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Proshows;
