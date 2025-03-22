"use client";

import styles from "./page.module.css";

const Css = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>
    </main>
  );
};

export default Css;
