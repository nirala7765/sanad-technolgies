"use client";

import { useState } from "react";

export default function Contactform() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      category: "",
      message: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section
      id="contact"
      className="bg-black text-white px-6 py-12 pt-[100px] md:pt-[200px] md:px-20 lg:px-32"
      style={{ scrollMarginTop: "120px" }} // matches sticky navbar height
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight pb-8">
          Let’s Build Something That Works <br /> for You!
        </h2>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {/* Name */}
        <div>
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full bg-transparent border-b border-gray-500 focus:border-[#57BFFF] outline-none py-2"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-2">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-500 focus:border-[#57BFFF] outline-none py-2"
          >
            <option value="">Select</option>
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
            <option value="design">UI/UX Design</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="w-full bg-transparent border-b border-gray-500 focus:border-[#57BFFF] outline-none py-2"
          />
        </div>

        {/* Message */}
        <div className="md:row-span-2">
          <label className="block font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message Here..."
            rows={5}
            className="w-full bg-transparent border-b border-gray-500 focus:border-[#57BFFF] outline-none py-2 resize-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-2">Phone</label>
          <div className="flex items-center gap-2 border-b border-gray-500 focus-within:border-[#57BFFF]">
            <span className="text-gray-400">+91</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone No"
              className="w-full bg-transparent outline-none py-2"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 md:col-span-2 justify-center pt-6">
          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-2 rounded-lg border border-[#57BFFF] hover:bg-gray-800"
          >
            Clear
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-[#57BFFF] hover:bg-[#3ba7dd]  text-black font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
