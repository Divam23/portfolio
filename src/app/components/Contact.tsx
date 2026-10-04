"use client";
import { CopyButton, SocialButtons } from "./Button";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState<string>("");

  const handleReset = () => {
    setName("");
    setEmail("");
    setDescription("");
  };

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !description.trim()) {
      setStatus("error");
      setStatusMsg("Please fill all the fields.");
      return;
    }
    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          description,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to send the message");
      }
      handleReset();
      setStatus("success");
      setStatusMsg("Message Recieved!!! We'll contact you soon.");
    } catch (error) {
      console.log("Contact form submission failed: ", error);
      setStatus("error");
      setStatusMsg(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 text-white overflow-hidden max-w-6xl mx-auto scroll-mt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.12),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight">Get in touch</h2>

        <p className="mt-4 text-zinc-400 max-w-lg mx-auto">
          Open to opportunities, collaborations, or just a quick chat. Feel free
          to reach out.
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5 mt-10 w-full">
          <input
            readOnly
            type="email"
            id="email"
            placeholder="divamdubey@gmail.com"
            className="text-lg text-zinc-200 font-medium border border-zinc-700 p-4 rounded-2xl outline-none cursor-copy"
            value={"divamdubey@gmail.com"}
          />
          <CopyButton textToCopy="divamdubey@gmail.com" />
        </div>
        <div className="mt-12 flex justify-center">
          <SocialButtons />
        </div>
        <div className="mb-30"></div>
        <div className="">
          <div className="mb-5">
            <h2 className="text-4xl font-bold tracking-tight">
              Waiting to hear from you.
            </h2>
            <p className="mt-4 text-zinc-400 max-w-lg mx-auto">
              Got a project? Or want to discuss an opportunity? Just send a dm
              and we will contact you.
            </p>
          </div>

          <form onSubmit={handleFormSubmission} method="post">
            <div className="flex flex-col gap-4 justify-center items-center">
              <input
                type="text"
                id="name"
                placeholder="Your good name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg w-1/2 text-zinc-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-medium border border-zinc-700 p-3 rounded-xl outline-none"
              />
              <input
                type="email"
                id="email"
                placeholder="Your email here"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-lg w-1/2 text-zinc-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-medium border border-zinc-700 p-3 rounded-xl outline-none"
              />
              <textarea
                id="description"
                placeholder="Any comments or details regarding project..."
                required
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="text-lg w-1/2 text-zinc-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-medium border border-zinc-700 p-3 rounded-xl outline-none resize-none scrollbar-none"
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-indigo-500 hover:shadow-lg hover:shadow-violet-500/20 active:scale-95 cursor-pointer"
                >
                  {isSubmitting ? "Transmitting..." : "Transmit"}
                </button>
                <button
                  type="reset"
                  disabled={isSubmitting}
                  onClick={handleReset}
                  className="rounded-xl border border-zinc-700 bg-zinc-900/50 px-6 py-3 font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white active:scale-95 cursor-pointer"
                >
                  Clear
                </button>
              </div>
            </div>
            {status !== "idle" && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm mt-2 ${
                  status === "success" ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {statusMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
