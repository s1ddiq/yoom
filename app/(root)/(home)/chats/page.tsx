import Loader from "@/components/Loader";
import React from "react";

const Chats = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Chats</h1>

      <div className="rounded-xl bg-dark-1 opacity-80 flex justify-center items-center h-64 flex-col relative">
        <p className="absolute bottom-6">Check back later for this feature.</p>
        <Loader />
      </div>

      <div className="rounded-xl bg-dark-1 opacity-80 flex justify-center items-center h-64 flex-col relative">
        <p className="absolute bottom-6">Check back later for this feature.</p>
        <Loader />
      </div>

      <div className="rounded-xl bg-dark-1 opacity-80 flex justify-center items-center h-64 flex-col relative">
        <p className="absolute bottom-6">Check back later for this feature.</p>
        <Loader />
      </div>
    </section>
  );
};

export default Chats;
