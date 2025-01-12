import React from "react";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-[#eae4e9] to-[#d5c6e0] py-10">
      <div className="text-center mx-4 md:mx-10 lg:mx-20">
        <h2 className="text-[#192a51] text-4xl md:text-5xl font-castoro">
          Reach Out to the <span className="text-[#192a51]">STARS!</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-[#2d2d2d] font-epilogue">
          Reach out to us across the galaxy! Share your thoughts, ask a question, or simply say
          hello. Send us a message and let's explore the universe together!
        </p>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full md:w-1/3 p-3 rounded-lg border border-[#d9d9d9] text-base"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full md:w-1/3 p-3 rounded-lg border border-[#d9d9d9] text-base"
        />
        <button className="w-full md:w-1/6 bg-gradient-to-r from-[#d5c6e0] to-[#9f86c0] text-white font-semibold rounded-lg p-3">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Contact;
