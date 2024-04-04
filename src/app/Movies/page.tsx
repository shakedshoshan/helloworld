"use client";

import Link from "next/link";


export default function Movies() {
  const moviesId = 100;
  return (
    <div className="flex flex-col space-y-5">
      <h1>Welcome to our Movies dataBase!</h1>
      <ul className="flex flex-col space-y-5">
        <li ><Link href="Movies/1">Movie 1</Link></li>
        <li ><Link href="Movies/2">Movie 2</Link></li>
        <li ><Link href="Movies/3">Movie 3</Link></li>
        <li ><Link href="Movies/${moviesId}">Movie {moviesId}</Link></li>
      </ul>
      </div>
  );
}