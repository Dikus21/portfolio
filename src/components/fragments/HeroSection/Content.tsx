import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-[750px] order-2 lg:order-1">
      <p className="text-primary lg:text-5xl text-4xl">Hi, Andika Here 👋</p>
      <p className="text-textContent lg:text-3xl text-2xl">
        <span>A software developer from jakarta, Indonesia </span>
        <span>id</span>
      </p>
      <p className="text-textContent lg:text-3xl text-2xl">
        I like to develop full-stack application and focus on making them
        intuitive and efficient, ensuring they work seamlessly
      </p>
      <p className="text-textContent lg:text-3xl text-2xl">
        Let&apos;s build something useful and reliable
      </p>
    </div>
  );
};

export default Content;
