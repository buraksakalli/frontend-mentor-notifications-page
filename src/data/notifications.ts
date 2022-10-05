export type INotification = {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  time: string;
  read: boolean;
  notification: string;
  message?: string;
  link?: string;
  notification_img?: string;
};

export const Notifications: Array<INotification> = [
  {
    id: 1,
    user: {
      name: "Mark Webber",
      avatar: "avatar-mark-webber.webp",
    },
    action: "reacted to your recent post",
    notification: "My first tournament today!",
    time: "1m ago",
    read: false,
  },
  {
    id: 2,
    user: {
      name: "Angela Gray",
      avatar: "avatar-angela-gray.webp",
    },
    action: "followed you",
    notification: "",
    time: "5m ago",
    read: false,
  },
  {
    id: 3,
    user: {
      name: "Jacob Thompson",
      avatar: "avatar-jacob-thompson.webp",
    },
    action: "has joined your group",
    notification: "Chess Club",
    link: "/chess-club",
    time: "1day ago",
    read: false,
  },
  {
    id: 4,
    user: {
      name: "Rizky Hasanuddin",
      avatar: "avatar-rizky-hasanuddin.webp",
    },
    action: "sent you a private message",
    notification: "",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    read: true,
  },
  {
    id: 5,
    user: {
      name: "Kimberly Smith",
      avatar: "avatar-kimberly-smith.webp",
    },
    action: "commented on your picture",
    notification: "",
    message: "",
    time: "1 week ago",
    read: true,
    notification_img: "image-chess.webp",
  },
  {
    id: 6,
    user: {
      name: "Nathan Peterson",
      avatar: "avatar-nathan-peterson.webp",
    },
    action: "reacted to your recent post",
    notification: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    read: true,
  },
  {
    id: 7,
    user: {
      name: "Anna Kim",
      avatar: "avatar-anna-kim.webp",
    },
    action: "left the group",
    notification: "Chess Club",
    link: "/chess-club",
    message: "",
    time: "2 weeks ago",
    read: true,
  },
];
