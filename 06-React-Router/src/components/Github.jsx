import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();
  return (
    <div>
      <h1>Github followers:{data.followers} </h1>
      <h1>Name: {data.name}</h1>
      <img src={data.avatar_url} alt="github img" />
    </div>
  );
}

export const getData = async () => {
  const response = await fetch(
    "https://api.github.com/users/priyanshutiwari584"
  );
  const Data = await response.json();
  console.log(Data);
  return Data;
};
