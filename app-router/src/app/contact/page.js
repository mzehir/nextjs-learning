"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Contact = () => {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <h1>App Router Contact Page</h1>
      <Link href="/about"> {`Go to about page - element: <Link />`}</Link>

      <button
        type="button"
        onClick={() => {
          router.push("/about");
        }}
      >
        {`Go to about page - element: <button />`}
      </button>
    </div>
  );
};

export default Contact;
