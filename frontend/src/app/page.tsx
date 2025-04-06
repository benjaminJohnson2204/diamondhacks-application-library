"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { BookCard } from "@/components/BookCard";
import { useEffect, useState } from "react";

interface Book {
  _id: string;
  title: string;
  description: string;
  author: string;
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>();

  useEffect(() => {
    fetch("http://localhost:3001/api/book")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      {books?.map((book) => (
        <BookCard
          key={book._id}
          title={book.title}
          description={book.description}
          author={book.author}
        />
      ))}
    </div>
  );
}
