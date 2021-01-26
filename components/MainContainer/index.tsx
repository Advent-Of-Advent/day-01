import React from "react";

import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: Props) => {
  return <main className={styles.container}>{children}</main>;
};

export default MainContainer;
