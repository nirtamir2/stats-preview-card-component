import React from "react";
import desktopImg from "./images/image-header-desktop.jpg";
import mobileImg from "./images/image-header-mobile.jpg";
import { Box } from "./Box";

export function App() {
  return (
    <div className="min-w-screen flex items-center justify-center p-6 min-h-screen bg-veryDarkBlue">
      <main className="flex flex-col-reverse text-white bg-darkDesaturatedBlue rounded-lg overflow-hidden md:flex-row">
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
        <picture className="bg-softViolet">
          <source media="(max-width: 980px)" srcSet={mobileImg} sizes="654w" />
          <img
            src={desktopImg}
            alt=""
            sizes="540w"
            className="w-full h-full object-cover mix-blend-multiply"
            style={{ opacity: 0.75 }}
          />
        </picture>
      </main>
    </div>
  );
}
