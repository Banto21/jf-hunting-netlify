"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-lg mx-auto text-black bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Formularz kontaktowy</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Imię i nazwisko"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Twój e-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Wiadomość"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-neutral-600 text-white p-3 rounded-lg hover:bg-neutral-800 transition"
        >
          Wyślij wiadomość
        </button>
      </form>

      {status === "sending" && <p className="text-blue-500 mt-4">Wysyłanie...</p>}
      {status === "success" && <p className="text-neutral-700 mt-4">Wiadomość wysłana</p>}
      {status === "error" && <p className="text-red-500 mt-4">Błąd podczas wysyłania.</p>}
    </div>
  );
};

export default ContactForm;
