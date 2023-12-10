"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const About = () => {
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
      <h1>App Router About Page</h1>
      <Link href="/contact"> {`Go to contact page - element: <Link />`}</Link>

      <button
        type="button"
        onClick={() => {
          router.push("/contact");
        }}
      >
        {`Go to contact page - element: <button />`}
      </button>
    </div>
  );
};

export default About;
