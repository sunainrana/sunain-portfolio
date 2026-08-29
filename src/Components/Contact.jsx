
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_loqy1tf",
        "template_zrbjmam",
        form.current,
        {
          publicKey: "mDMSe1p428lsuS1go",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          console.log("Email Error:", error);
          setStatus("Something went wrong ❌");
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-950 px-6 py-28">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-purple-500">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Contact <span className="text-purple-500">Me</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Have a project in mind? Send me a message.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gray-900 p-6 sm:p-8">

          <h2 className="text-3xl font-bold text-white">
            Send a Message
          </h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-8 space-y-5"
          >

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                required
                placeholder="Enter subject"
                className="w-full rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Message
              </label>

              <textarea
                name="message"
                required
                rows="6"
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
              ></textarea>
            </div>

            {/* Send */}
            <button
              type="submit"
              className="w-full rounded-xl bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-700"
            >
              Send Message
            </button>

            {/* Status */}
            {status && (
              <p className="text-center text-sm text-gray-300">
                {status}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
