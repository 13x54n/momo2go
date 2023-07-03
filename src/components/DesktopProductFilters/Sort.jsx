import React from "react";

export default function Sort() {
  const [checked, setChecked] = React.useState("");

  const checkHandler = (e) => {
    setChecked(e.target.value);
  };
  return (
    <>
      <div className="flex align-center gap-3 mb-2">
        <input
          type="radio"
          value="default"
          checked={checked === "default"}
          onChange={checkHandler}
        />
        <p className="text-sm">Picked For You (default)</p>
      </div>
      <div className="flex align-center gap-3 mb-2">
        <input
          type="radio"
          value="popular"
          checked={checked === "popular"}
          onChange={checkHandler}
        />
        <p className="text-sm">Most popular</p>
      </div>
      <div className="flex align-center gap-3 mb-2">
        <input
          type="radio"
          value="rating"
          checked={checked === "rating"}
          onChange={checkHandler}
        />
        <p className="text-sm">Rating</p>
      </div>
      <div className="flex align-center gap-3">
        <input
          type="radio"
          value="readyTime"
          checked={checked === "readyTime"}
          onChange={checkHandler}
        />
        <p className="text-sm">Ready time</p>
      </div>
    </>
  );
}
