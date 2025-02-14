"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timeframe: "",
    size: "",
    quantity: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    timeframe: "",
    size: "",
    quantity: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const formErrors = { ...errors };  // Changed from 'let' to 'const'
    let isValid = true;
  
    // Check name
    if (!formData.name) {
      formErrors.name = "Name is required.";
      isValid = false;
    } else {
      formErrors.name = "";
    }
  
    // Check email
    if (!formData.email) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid.";
      isValid = false;
    } else {
      formErrors.email = "";
    }
  
    // Check phone number
    if (!formData.phone) {
      formErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number must be 10 digits.";
      isValid = false;
    } else {
      formErrors.phone = "";
    }
  
    // Check timeframe
    if (!formData.timeframe) {
      formErrors.timeframe = "Time frame is required.";
      isValid = false;
    } else {
      formErrors.timeframe = "";
    }
  
    // Check size
    if (!formData.size) {
      formErrors.size = "Size is required.";
      isValid = false;
    } else {
      formErrors.size = "";
    }
  
    // Check quantity
    if (!formData.quantity) {
      formErrors.quantity = "Quantity is required.";
      isValid = false;
    } else if (parseInt(formData.quantity) <= 0) {
      formErrors.quantity = "Quantity must be greater than 0.";
      isValid = false;
    } else {
      formErrors.quantity = "";
    }
  
    // Check description
    if (!formData.description) {
      formErrors.description = "Project description is required.";
      isValid = false;
    } else {
      formErrors.description = "";
    }
  
    setErrors(formErrors);
    return isValid;
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      // Proceed with form submission logic here
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-[32px] sm:text-[36px] md:text-[42px] font-bold tracking-[-0.02em] font-['Roboto_Condensed'] uppercase text-center text-gray-800 mb-8">
        REQUEST A QUOTE
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 text-[16px] sm:text-[20px] font-['Inter']">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-blue-300 bg-[#eeece9]"
              required
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-[16px] sm:text-[20px] font-['Inter']">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-blue-300 bg-[#eeece9]"
              required
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 text-[16px] sm:text-[20px] font-['Inter']">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-blue-300 bg-[#eeece9]"
              required
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
          </div>

          {/* Time Frame */}
          <div>
            <label className="block text-gray-700 text-[16px] sm:text-[20px] font-['Inter']">Time Frame</label>
            <select
              name="timeframe"
              value={formData.timeframe}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-blue-300 bg-[#eeece9]"
              required
            >
              <option value="">Select Time Frame</option>
              <option value="1-2 weeks">1-2 Weeks</option>
              <option value="1 month">1 Month</option>
              <option value="More than 1 month">More than 1 Month</option>
            </select>
            {errors.timeframe && <p className="text-red-600 text-sm">{errors.timeframe}</p>}
          </div>

          {/* Size */}
          <div>
            <label className="block text-gray-700 text-[16px] sm:text-[20px] font-['Inter']">Size</label>
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-blue-300 bg-[#eeece9]"
              required
            >
              <option value="">Select Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Custom">Custom</option>
            </select>
            {errors.size && <p className="text-red-600 text-sm">{errors.size}</p>}
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-gray-700 text-[16px] sm:text-[20px] font-['Inter']">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-blue-300 bg-[#eeece9]"
              required
            />
            {errors.quantity && <p className="text-red-600 text-sm">{errors.quantity}</p>}
          </div>
        </div>

        {/* Project Description */}
        <div className="mt-6">
          <label className="block text-gray-700 text-[16px] sm:text-[20px] font-['Inter']">Please Describe Your Project</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Choose a project type..."
            className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-blue-300 bg-[#eeece9]"
            required
          />
          {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
        </div>

        {/* Terms & Conditions */}
        <p className="text-gray-600 text-center text-sm mt-6">
          By submitting this form you agree to our{" "}
          <a href="#" className="text-blue-600 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>.
        </p>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-3 text-white bg-blue-600 flex items-center gap-2 text-[16px] sm:text-[18px] font-semibold rounded-lg transition hover:bg-blue-700"
          >
            Loerum Ipsum <ArrowRight size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
