"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function Page() {
  const param = useParams();
  console.log(param);
  return <p>Post:{param.postId}</p>;
}
