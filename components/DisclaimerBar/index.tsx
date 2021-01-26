import React from "react";

import styles from "./index.module.css";

type Props = {
  link: string;
};

const DisclaimerBar = ({ link }: Props) => {
  return (
    <header className={styles.header}>
      <p>
        This is an incremental build from a project to recreate{" "}
        <a href="https://adventofcode.com/2020/about">Advent of Code</a> from scratch. <br />
        (You should go <a href="https://adventofcode.com/2020/">solve puzzles</a> over there, as any
        progress you make won’t be permanently saved here.)
        <br />
        <br />
        Read{" "}
        <a href="https://adventofadvent.com/about" target="_blank">
          about the project
        </a>
        , or about{" "}
        <a href={link} target="_blank">
          this build step
        </a>
        .
      </p>
    </header>
  );
};

export default DisclaimerBar;
