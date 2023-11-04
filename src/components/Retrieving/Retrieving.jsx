import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClipLoader color="#36D7B7" loading={true} size={50} />
    </div>
  );
};

export default Loading;