import { useState } from "react";
import { INotification, Notifications } from "../../data";
import { Notification } from "../Notification";
import { Pill } from "../Pill";
import styles from "./modal.module.css";

export const Modal = () => {
  const [data, setData] = useState<Array<INotification>>(Notifications);
  const notificationCounter = data.filter(
    (notification) => !notification.read
  ).length;

  const onClick = (id: number) => {
    const newData = data.map((item) => {
      if (item.id === id) return { ...item, read: true };
      return item;
    });
    setData(newData);
  };

  const markAllAsRead = () => {
    const newData = data.map((item) => ({ ...item, read: true }));
    setData(newData);
  };

  return (
    <section className={styles.modal}>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <div className={styles.modal__header__left}>
            <h2 className={styles.modal__title}>Notifications</h2>
            {notificationCounter > 0 && <Pill value={notificationCounter} />}
          </div>
          <span className={styles.modal__mark} onClick={markAllAsRead}>
            Mark all as read
          </span>
        </div>
        <div className={styles.modal__body}>
          {data.map((notification) => {
            return (
              <Notification
                data={notification}
                onClick={(id: number) => onClick(id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
