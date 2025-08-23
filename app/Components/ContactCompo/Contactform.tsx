"use client";
 
import { useState } from "react";
import emailjs from "@emailjs/browser";
 
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
 
// Phone number patterns for different countries
const phonePatterns: { [key: string]: { pattern: RegExp; message: string } } = {
  "+91": { pattern: /^[6-9]\d{9}$/, message: "Indian phone number must be 10 digits starting with 6-9" },
  "+1": { pattern: /^\d{10}$/, message: "US phone number must be 10 digits" },
  "+44": { pattern: /^[1-9]\d{8,10}$/, message: "UK phone number must be 9-11 digits" },
  "+61": { pattern: /^[2-9]\d{8}$/, message: "Australian phone number must be 9 digits" },
  "+81": { pattern: /^[1-9]\d{9,10}$/, message: "Japanese phone number must be 10-11 digits" },
  "+49": { pattern: /^[1-9]\d{10,11}$/, message: "German phone number must be 11-12 digits" },
  "+33": { pattern: /^[1-9]\d{8}$/, message: "French phone number must be 9 digits" },
  "+86": { pattern: /^1[3-9]\d{9}$/, message: "Chinese phone number must be 11 digits starting with 1" },
  "+7": { pattern: /^9\d{9}$/, message: "Russian phone number must be 10 digits starting with 9" },
};
 
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
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
 
  // EmailJS configuration - Replace these with your actual values
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
 
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    
    // Real-time validation for specific fields
    if (name === "name") {
      // Remove numbers and special characters except spaces, hyphens, and apostrophes
      const cleanedValue = value.replace(/[^a-zA-Z\s\-']/g, "");
      setForm({ ...form, [name]: cleanedValue });
    } else if (name === "phone") {
      // Only allow numbers
      const cleanedValue = value.replace(/\D/g, "");
      setForm({ ...form, [name]: cleanedValue });
    } else {
      setForm({ ...form, [name]: value });
    }
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    
    // Clear general messages
    setSuccessMsg("");
    setErrorMsg("");
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
    setErrorMsg("");
  };
 
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (form.name.trim().length > 50) {
      newErrors.name = "Name must be less than 50 characters";
    } else if (!/^[a-zA-Z\s\-']+$/.test(form.name.trim())) {
      newErrors.name = "Name can only contain letters, spaces, hyphens, and apostrophes";
    }
 
    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    } else if (form.email.length > 254) {
      newErrors.email = "Email address is too long";
    }
 
    // Phone validation with country-specific patterns
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const phonePattern = phonePatterns[form.countryCode];
      if (phonePattern && !phonePattern.pattern.test(form.phone)) {
        newErrors.phone = phonePattern.message;
      } else if (!phonePattern && (form.phone.length < 7 || form.phone.length > 15)) {
        newErrors.phone = "Phone number must be between 7-15 digits";
      }
    }
 
    // Category validation
    if (!form.category) {
      newErrors.category = "Please select a category";
    }
 
    // Message validation (optional)
    if (form.message.trim() && form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters if provided";
    } else if (form.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }
 
    return newErrors;
  };
 
  const sendEmail = async () => {
    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: `${form.countryCode} ${form.phone}`,
        category: form.category,
        message: form.message?form.message:" ",
      };
 
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
 
      return { success: true };
    } catch (error) {
      console.error("EmailJS Error:", error);
      return { success: false, error };
    }
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous messages
    setSuccessMsg("");
    setErrorMsg("");
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
 
    setIsSubmitting(true);
    setErrors({});
 
    try {
      const result = await sendEmail();
      
      if (result.success) {
        setSuccessMsg("Thank you! Your message has been sent successfully. We'll get back to you soon.");
        alert("Your response has been submitted successfully"); // alert 
        handleClear();
      } else {
        setErrorMsg("Sorry, there was an error sending your message. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMsg("Sorry, there was an error sending your message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
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
          Let&apos;s Build Something That Works <br className="hidden sm:block" />{" "}
          for You!
        </h2>
      </div>
 
      {/* Success message */}
      {successMsg && (
        <div className="text-center mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg">
          <p className="text-green-400 font-semibold">{successMsg}</p>
        </div>
      )}
 
      {/* Error message */}
      {errorMsg && (
        <div className="text-center mb-6 p-4 bg-red-900/30 border border-red-500 rounded-lg">
          <p className="text-red-400 font-semibold">{errorMsg}</p>
        </div>
      )}
 
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full"
      >
        {/* Name */}
        <div>
          <label className="block font-semibold mb-2">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your Full Name"
            maxLength={50}
            className="w-full bg-transparent border-b border-white focus:border-[#57BFFF] outline-none py-2 transition-colors duration-300"
            disabled={isSubmitting}
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          <p className="text-gray-400 text-xs mt-1">{form.name.length}/50 characters</p>
        </div>
 
        {/* Category */}
        <div>
          <label className="block font-semibold mb-2">
            Category <span className="text-red-400">*</span>
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white focus:border-[#57BFFF] outline-none py-2 transition-colors duration-300"
            disabled={isSubmitting}
          >
            <option value="">Select a Service</option>
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
            <option value="design">UI/UX Design</option>
            <option value="consulting">Technology Consulting</option>
            <option value="maintenance">Website Maintenance</option>
            <option value="other">Other</option>
          </select>
          {errors.category && (
            <p className="text-red-400 text-sm mt-1">{errors.category}</p>
          )}
        </div>
 
        {/* Email */}
        <div>
          <label className="block font-semibold mb-2">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Your Email Address"
            maxLength={254}
            className="w-full bg-transparent border-b border-white focus:border-[#57BFFF] outline-none py-2 transition-colors duration-300"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>
 
        {/* Message */}
        <div className="md:row-span-2">
          <label className="block font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project requirements..."
            rows={5}
            maxLength={1000}
            className="w-full bg-transparent border-b border-white focus:border-[#57BFFF] outline-none py-2 resize-none transition-colors duration-300"
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
          <p className="text-gray-400 text-xs mt-1">{form.message.length}/1000 characters</p>
        </div>
 
        {/* Phone */}
        <div>
          <label className="block font-semibold mb-2">
            Phone <span className="text-red-400">*</span>
          </label>
          <div className="flex gap-2 border-b border-white focus-within:border-[#57BFFF] transition-colors duration-300">
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="bg-transparent text-[#868686] outline-none py-2 w-24"
              disabled={isSubmitting}
            >
              {countryCodes.map((c, idx) => (
                <option key={idx} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="w-full bg-transparent outline-none py-2"
              disabled={isSubmitting}
            />
          </div>
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
 
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 md:col-span-2 justify-center pt-8 px-4 mt-2">
          {/* Clear Button */}
          <button
            type="button"
            onClick={handleClear}
            disabled={isSubmitting}
            className="border border-[#57BFFF] text-white font-semibold px-7 py-3 rounded-2xl hover:bg-[#1a1a1a] transition duration-300 cursor-pointer text-[15px] md:w-auto mx-auto sm:mx-0 w-full min-w-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear
          </button>
 
 
 
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#57BFFF] text-white font-semibold px-7 py-3 rounded-2xl hover:bg-[#3ba7dd] transition duration-300 cursor-pointer text-[15px] md:w-auto mx-auto sm:mx-0 w-full min-w-[120px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
 