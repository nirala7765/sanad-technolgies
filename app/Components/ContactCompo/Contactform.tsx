"use client";

import { useState } from "react";

const countryCodes = [
  { code: "+91", name: "India" },
  { code: "+1", name: "USA" },
  { code: "+44", name: "UK" },
  { code: "+61", name: "Australia" },
  { code: "+81", name: "Japan" },
  { code: "+49", name: "Germany" },
  { code: "+33", name: "France" },
  { code: "+86", name: "China" },
  { code: "+7", name: "Russia" },
];

export default function Contactform() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    category: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleClear = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      countryCode: "+91",
      category: "",
      message: "",
    });
    setErrors({});
    setSuccessMsg("");
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{7,15}$/.test(form.phone))
      newErrors.phone = "Phone number must be 7–15 digits";
    if (!form.category) newErrors.category = "Please select a category";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMsg("");
      return;
    }

    console.log("Form submitted:", form);
    setSuccessMsg("Your response has been submitted successfully!");
    handleClear();
  };

  return (
    <section
      id="contact-form"
      className="
        bg-black text-white 
        px-4 sm:px-6 md:px-20 lg:px-32
        py-12 
        pt-[120px] sm:pt-[150px] md:pt-[200px]
      "
      style={{ scrollMarginTop: "120px" }}
    >
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight pb-6 sm:pb-8">
          Let’s Build Something That Works <br className="hidden sm:block" /> for You!
        </h2>
      </div>

      {/* Success message */}
      {successMsg && (
        <div className="text-center mb-6 text-green-400 font-semibold">
          {successMsg}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full"
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
            className="w-full bg-transparent border-b border-white focus:border-[#57BFFF] outline-none py-2"
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-2">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white focus:border-[#57BFFF] outline-none py-2"
          >
            <option value="">Select</option>
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
            <option value="design">UI/UX Design</option>
          </select>
          {errors.category && (
            <p className="text-red-400 text-sm">{errors.category}</p>
          )}
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
            className="w-full bg-transparent border-b border-white focus:border-[#57BFFF] outline-none py-2"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}
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
            className="w-full bg-transparent border-b border-white focus:border-[#57BFFF] outline-none py-2 resize-none"
          />
          {errors.message && (
            <p className="text-red-400 text-sm">{errors.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-2">Phone</label>
          <div className="flex gap-2 border-b border-white focus-within:border-[#57BFFF]">
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="bg-transparent text-[#868686] outline-none py-2 w-24"
            >
              {countryCodes.map((c, idx) => (
                <option key={idx} value={c.code}>
                  {c.code} ({c.name})
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone No"
              className="w-full bg-transparent outline-none py-2"
            />
          </div>
          {errors.phone && (
            <p className="text-red-400 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 md:col-span-2 justify-center pt-8">
          <button
            type="button"
            onClick={handleClear}
            className="w-[180px] py-3 rounded-2xl border border-[#57BFFF] text-white font-semibold text-lg hover:bg-[#1a1a1a] transition duration-300"
          >
            Clear
          </button>
          <button
            type="submit"
            className="w-[180px] py-3 rounded-2xl bg-[#57BFFF] text-white font-semibold text-lg hover:bg-[#3ba7dd] transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
