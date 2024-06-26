import React from 'react';
import {headerHeightPx} from "@/app/consts";

export const Page = ({title, children}: { title: string; children: React.ReactNode }) => {
  return (
    <>
      {/*<div className="px-4 mt-6">*/}
      {/*  /!*<h1 className="font-bold text-3xl">{title}</h1>*!/*/}
      {/*</div>*/}
      <main style={{ minHeight: `calc(100svh - ${headerHeightPx}px)` }}>
        {children}
      </main>
    </>
  );
}
