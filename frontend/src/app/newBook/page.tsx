"use client";

import { FormEvent } from "react";

export default function NewBookPage() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);

    const title = data.get("title");
    const description = data.get("description");
    const author = data.get("author");

    fetch("http://localhost:3001/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description,
        author
      })
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book added successfully");
      })
      .catch((error) => {
        alert(`Error: ${error}`);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Add a new book</h1>
      <div>
        <label>Title</label>
        <input name="title" />
      </div>
      <div>
        <label>Description</label>
        <input name="description" />
      </div>
      <div>
        <label>Author</label>
        <input name="author" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
