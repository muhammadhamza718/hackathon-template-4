import React from "react";
import HektoDemo from "./HektoDemo";

export default function HektoDemoSection() {
  return (
    <>
      <section className="w-full bg-[#F6F5FF]">
        <div className="max-w-7xl mx-auto py-24 px-6 ">
          <h1 className="text-4xl font-bold font-josefin mb-4 text-[#101750] josefin">
            Hekto Demo
          </h1>
        </div>
      </section>

      <HektoDemo />
    </>
  );
}
