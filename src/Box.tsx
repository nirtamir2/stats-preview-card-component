import React from "react";

interface IProps {
  title: string;
  subTitle: string;
}

export function Box(props: IProps) {
  const { title, subTitle } = props;

  return (
    <div className="my-4">
      <div className="mb-0.5 text-center text-white text-xl font-bold md:text-left">
        {title}
      </div>
      <div className="text-white75 text-xs tracking-widest">{subTitle}</div>
    </div>
  );
}
