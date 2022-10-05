import styles from "./notification.module.css";
import { INotification } from "../../data";

interface INotificationProps {
  data: INotification;
  onClick: (id: number) => void;
}

export const Notification: React.FC<INotificationProps> = ({
  data,
  onClick,
}) => {
  return (
    <div
      className={`${styles.notification__item} ${!data.read && styles.unread}`}
      tabIndex={0}
      onClick={() => onClick(data.id)}
    >
      <img
        src={`/assets/images/${data.user.avatar}`}
        alt={data.user.name}
        className={styles.profile__img}
      />
      <div className={styles.notification__section}>
        <div className={styles.notification__wrapper}>
          <span className={styles.notification__name}>{data.user.name}</span>
          <span className={styles.notification__action__text}>
            {` ${data.action} `}
          </span>
          {data.link ? (
            <a
              href={data.link}
              className={`${styles.notification__detail} ${styles.notification__detail__link}`}
            >
              {data.notification}
            </a>
          ) : (
            <span className={`${styles.notification__detail}`}>
              {data.notification}
            </span>
          )}
          {!data.read && <div className={styles.pin} />}
        </div>
        <span className={styles.time}>{data.time}</span>
        {data.message && <p className={styles.message}>{data.message}</p>}
      </div>
      {data.notification_img && (
        <img
          src={`/assets/images/${data.notification_img}`}
          alt={data.user.name}
          className={styles.notification__image}
        />
      )}
    </div>
  );
};
