import React from "react";
import { useParams } from "react-router-dom";

export default function Project1() {
  const { projectId } = useParams();
  return (
    <div>
      <h1>Project Id: {projectId}</h1>
    </div>
  );
}
