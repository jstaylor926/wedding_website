"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function DressCodeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle ESC key to close
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const modalContent = (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal content container */}
      <div
        className={`relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col items-center justify-center transition-all duration-300 transform ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-10"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute -top-12 right-0 md:-right-12 md:top-0 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[#ff000d] text-white hover:bg-[#ff4d57] transition-all shadow-xl hover:scale-110 active:scale-95"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Wrapper */}
        <div className="relative w-full h-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-black flex items-center justify-center">
          <Image
            src="/dress_code.png"
            alt="Dress code inspiration"
            width={1200}
            height={1600}
            priority
            className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff000d]/80 text-white hover:bg-[#ff000d] transition-all transform hover:scale-110 active:scale-95 shadow-lg"
        aria-label="View dress code inspiration"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-3.5 h-3.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>

      {isMounted && createPortal(modalContent, document.body)}
    </>
  );
}
