import React from "react";

interface IProps {
  title: string;
  subTitle: string;
}
function Box(props: IProps) {
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

export function App() {
  return (
    <div className="min-w-screen flex items-center justify-center p-6 min-h-screen bg-veryDarkBlue">
      <main className="flex flex-col-reverse text-white bg-darkDesaturatedBlue rounded overflow-hidden md:flex-row">
        <div className="flex flex-col px-20 py-14 max-w-lg">
          <h1 className="text-3xl font-bold">
            Get <span className="text-softViolet">insights</span> that help your
            business grow.
          </h1>
          <p className="flex-1 mb-4 mt-8 text-white75">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <Box title="10k+" subTitle="COMPANIES" />
            <Box title="314" subTitle="TEMPLATES" />
            <Box title="12M+" subTitle="QUERIES" />
          </div>
        </div>
        <div
          style={{
            height: 446,
            width: 540,
            background: `linear-gradient(hsla(277, 64%, 61%, 0.6),hsla(277, 64%, 61%, 0.6)) ,url(../frontendmentor/images/image-header-desktop.jpg)`,
          }}
        />
      </main>
    </div>
  );
}
