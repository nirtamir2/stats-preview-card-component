import React from "react";

interface IProps {
  title: string;
  subTitle: string;
}
function Box(props: IProps) {
  const { title, subTitle } = props;

  return (
    <div>
      <div className="mb-0.5 text-white text-xl font-bold">{title}</div>
      <div className="text-white75 text-xs tracking-widest">{subTitle}</div>
    </div>
  );
}

export function App() {
  return (
    <div className="bg-veryDarkBlue flex items-center justify-center px-52 w-screen h-screen">
      <main className="bg-darkDesaturatedBlue flex text-white rounded overflow-hidden">
        <div className="flex flex-col px-20 py-16 max-w-lg">
          <h1 className="text-3xl font-bold">
            Get <span className="text-softViolet">insights</span> that help your
            business grow.
          </h1>
          <p className="text-white75 flex-1 mt-8">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex items-center justify-between">
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
