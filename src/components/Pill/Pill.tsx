import styles from "./pill.module.css";

type IProps = {
  value: number;
};

export const Pill: React.FC<IProps> = ({ value = 3 }) => {
  return <div className={styles.pill}>{value}</div>;
};
