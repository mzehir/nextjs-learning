"use client";

import React from "react";
import Link from "next/link";

let usersData = [
  {
    id: "1000001",
    name: "Mümin",
    surname: "Zehir",
    age: "31",
    phone: "05419525920",
  },
  {
    id: "1000002",
    name: "Ahmet Faruk",
    surname: "Turgut",
    age: "30",
    phone: "05419525921",
  },
  {
    id: "1000003",
    name: "Abdulkadir",
    surname: "Kara",
    age: "33",
    phone: "05419525922",
  },
  {
    id: "1000004",
    name: "Ensar",
    surname: "Öztürk",
    age: "29",
    phone: "05419525923",
  },
  {
    id: "1000005",
    name: "Kemal",
    surname: "Mızrak",
    age: "35",
    phone: "05419525924",
  },
];

const Users = () => {
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
      <h1>App Router Users Page</h1>

      <br />
      <br />

      <table style={{ border: "1px solid white" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid white", padding: "50px" }}>Name</th>
            <th style={{ border: "1px solid white", padding: "50px" }}>
              Surname
            </th>
            <th style={{ border: "1px solid white", padding: "50px" }}>Age</th>
            <th style={{ border: "1px solid white", padding: "50px" }}>
              Phone
            </th>
            <th style={{ border: "1px solid white", padding: "50px" }}>*</th>
          </tr>
        </thead>

        <tbody>
          {usersData.map((item, index) => (
            <tr key={index.toString()}>
              <th style={{ border: "1px solid white" }}>{item.name}</th>
              <th style={{ border: "1px solid white" }}>{item.surname}</th>
              <th style={{ border: "1px solid white" }}>{item.age}</th>
              <th style={{ border: "1px solid white" }}>{item.phone}</th>

              <th style={{ border: "1px solid white", padding: "50px" }}>
                <Link
                  href={`/users/${item.id}`}
                  className="bg-green-400 w-fit rounded-lg p-4"
                >
                  Detaya git
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
