"use client";

import React, { useEffect, useRef, useState } from "react";

const ResumeButton: React.FC = () => {
  return (
    <button
      className="
        group flex items-center cursor-pointer border border-accent-foreground
        rounded-[14px] bg-zinc-950/35 bg-blend-color text-zinc-100 text-[15px]
        px-[1em] py-[0.65em] pl-[0.9em]
        transition-all duration-200
      hover:bg-zinc-300 active:scale-95

      "
    >
      <div
        className="
          flex items-center justify-center
          transition-transform duration-300 ease-in-out
          group-hover:scale-110
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="26"
          height="26"
          className="
            block origin-center fill-zinc-400
            transition-all duration-300 ease-in-out
            group-hover:translate-x-7.5 group-hover:scale-110
            group-hover:fill-zinc-900
            font-light
          "
        >
          <path d="M12 3a1 1 0 011 1v8.59l2.3-2.3a1 1 0 111.4 1.42l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.42L11 12.59V4a1 1 0 011-1z" />
          <path d="M4 19a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" />
        </svg>
      </div>

      {/* Text */}
      <span
        className="
          ml-[0.35em]
          transition-all duration-300 ease-in-out
          group-hover:opacity-0
          font-mono
        "
      >
        Resume
      </span>
    </button>
  );
};

const SocialButtons: React.FC = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-50 h-25  flex items-center justify-between"
    >
      {/* GitHub */}
      <a
        href="https://github.com/Divam23"
        target="_blank"
        className={`
          group absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-12 h-12 flex items-center justify-center
          rounded-md  border border-zinc-700
          transition-all duration-300 delay-75
          
          ${
            open
              ? "-translate-x-[170%] duration-300 opacity-100 bg-zinc-950"
              : "opacity-80 pointer-events-none  animate-[spin_10s_linear_infinite] "
          }
        `}
      >
        {/* tooltip */}
        <span className="absolute -top-8 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition">
          GitHub
        </span>

        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.66-.22.66-.48v-1.68c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.08 1.56 1.08 1.56 1.08.9 1.6 2.37 1.14 2.95.87.1-.68.35-1.14.64-1.4-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.38-2.03 1-2.75-.1-.26-.44-1.3.1-2.7 0 0 .82-.27 2.7 1.05A9.2 9.2 0 0112 6.8c.82 0 1.65.12 2.42.35 1.88-1.32 2.7-1.05 2.7-1.05.54 1.4.2 2.44.1 2.7.62.72 1 1.63 1 2.75 0 3.93-2.34 4.8-4.58 5.05.36.32.68.94.68 1.9v2.8c0 .26.16.58.67.48A10.26 10.26 0 0022 12.26C22 6.58 17.52 2 12 2z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/divam-dubey"
        target="_blank"
        className={`
          group absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-12 h-12 flex items-center justify-center
          rounded-md  border border-zinc-700
          transition-all duration-300 delay-150
          
          ${
            open
              ? "translate-x-[70%] duration-300 opacity-100 bg-indigo-600"
              : "opacity-80 pointer-events-none animate-[spin_10s_linear_infinite] "
          }
        `}
      >
        <span className="absolute -top-8 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition">
          LinkedIn
        </span>

        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.66H9.33V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.44v6.3zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
      </a>

      {/* Center Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`
          group absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-12 h-12 flex items-center justify-center
          rounded-md 
          transition-all duration-300
          active:scale-90
          mx-auto

          ${open ? "bg-red-500" : "bg-red-500"}
        `}
      >
        <span className="absolute -top-8 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition">
          Contact
        </span>

        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12 13.5L2 6.75V18h20V6.75L12 13.5zM12 11L2 4h20L12 11z" />
        </svg>
      </button>
    </div>
  );
};

interface Props {
  textToCopy: string;
}

const CopyButton: React.FC<Props> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);

      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`
          absolute -top-10 left-1/2 -translate-x-1/2
          px-2 py-1 text-xs rounded-md
          bg-zinc-800 text-zinc-200 border border-zinc-700
          whitespace-nowrap
          transition-all duration-200
          ${hovered || copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
        `}
      >
        {copied ? "Copied!" : "Copy email"}
      </div>

      {/* Button */}
      <button
        onClick={handleCopy}
        className="
          relative w-30 h-15 rounded-2xl
          
          bg-linear-to-b from-[#282828] to-[#202020]
          shadow-[inset_-8px_0_8px_rgba(0,0,0,0.15),inset_0_-8px_8px_rgba(0,0,0,0.25),0_0_0_2px_rgba(0,0,0,0.75),10px_20px_25px_rgba(0,0,0,0.4)]
          overflow-hidden select-none
          outline-none
          border-none
          active:translate-y-0.5
          active:shadow-[inset_-4px_0_4px_rgba(0,0,0,0.1),inset_0_-4px_4px_rgba(0,0,0,0.15),0_0_0_2px_rgba(0,0,0,0.5),5px_10px_15px_rgba(0,0,0,0.3)]
          transition-all duration-100
        "
      >
        {/* inner surface */}
        <span
          className="
            absolute top-0.75 left-1 right-3 bottom-3.5
            rounded-full
            bg-linear-to-r from-[#232323] to-[#4a4a4a]
            shadow-[-10px_-10px_10px_rgba(255,255,255,0.25),10px_5px_10px_rgba(0,0,0,0.15)]
            border-l border-black/30 border-b  border-t 
          "
        />

        {/* text */}
        <span
          className="
            absolute left-3 top-3
            text-zinc-200 text-[15px] font-semibold
            transition-transform duration-100
            active:translate-y-px
          "
        >
          {copied ? "✓" : "CTRL + C"}
        </span>
      </button>

      {/* audio */}
      <audio ref={audioRef} src="./rizz.mp3" preload="none"/>
    </div>
  );
};


type GitHubButtonProps = {
  href: string;
  className?: string;
};

const GitHubButton =  ({
  href,
  className = "",
}: GitHubButtonProps)=> {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center border border-zinc-800 rounded-lg overflow-hidden cursor-pointer transition-colors duration-300 hover:border-indigo-500 ${className}`}
    >
      {/* Icon */}
      <div className="bg-zinc-900 p-2 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 text-zinc-400"
          fill="currentColor"
        >
          <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.297 12 0.297Z" />
        </svg>
      </div>

      {/* Flip Container */}
      <div className="relative w-20 h-8 transform-3d transition-transform duration-300 group-hover:transform:[rotateX(90deg)]">
        
        {/* Front */}
        <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-zinc-400 bg-zinc-900">
          Code
        </span>

        {/* Top (flip) */}
        <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white bg-indigo-600 transform:[rotateX(-90deg)_translateY(50%)]">
          GitHub
        </span>
      </div>
    </a>
  );
}

export { ResumeButton, SocialButtons, CopyButton, GitHubButton };
