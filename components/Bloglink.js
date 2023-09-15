import React from "react";

const Bloglink = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <button
      className="text-lg bg-secondary w-full h-[5rem] rounded-lg p-3 flex flex-row justify-start items-start blogLink"
      onClick={handleClick()}
    >
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-3xl">[Pre W-1] IoC and Beans Injection</h1>
        <h3 className="text-textshade">9-15-2023</h3>
      </div>
    </button>
  );
};

export default Bloglink;
