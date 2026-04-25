import { CopyButton, SocialButtons } from "./Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 text-white overflow-hidden max-w-6xl mx-auto scroll-mt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.12),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold tracking-tight">Get in touch</h2>

        <p className="mt-4 text-zinc-400 max-w-lg mx-auto">
          Open to opportunities, collaborations, or just a quick chat.  
          Feel free to reach out.
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5 mt-10 w-full"> 
          <input readOnly type="email" id="email"  placeholder="divamdubey@gmail.com" className="text-lg text-zinc-200 font-medium border border-zinc-700 p-4 rounded-2xl outline-none cursor-copy" value={"divamdubey@gmail.com"}/>
          <CopyButton textToCopy="divamdubey@gmail.com"/>
        </div>
        <div className="mt-12 flex justify-center">
          <SocialButtons />
        </div>
      </div>
    </section>
  );
}