import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from "../property/libs/components/layout/LayoutBasic";

const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("HELLO DIANA");
  return (
    <div>
      COMMUNITY{" "}
      <button
        onClick={() => alert("Hello MIT")}
        style={{ margin: "15px", backgroundColor: "pink" }}
      >
        PressMe
      </button>
    </div>
  );
};
export default withLayoutBasic(Community);
