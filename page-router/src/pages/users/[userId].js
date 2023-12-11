import React from "react";
import { useRouter } from "next/router";

const UserDetail = () => {
  const router = useRouter();

  console.log(router);

  return <div>Page Router - User detail</div>;
};

export default UserDetail;
