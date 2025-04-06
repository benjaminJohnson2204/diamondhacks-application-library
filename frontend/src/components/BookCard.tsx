import styles from "./BookCard.module.css";

interface BookCardsProps {
  title: string;
  description: string;
  author: string;
}

export const BookCard = ({ title, description, author }: BookCardProps) => {
  return (
    <div className={styles.card}>
      <b>{title}</b>
      <p>{description}</p>
      <p>By {author}</p>
    </div>
  );
};
