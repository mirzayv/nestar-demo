import { useState } from "react";

const Community = () => {
  console.log("COMMUNITY COMPONENT -PAGES ROUTER");
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
export default Community;
