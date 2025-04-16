"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "./Mode-toggle";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="container flex h-16 items-center justify-between px-4 max-w-4xl mx-auto">
        <Link href="/" className="font-bold text-xl">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Portfolio
          </motion.div>
        </Link>
        <nav className="flex items-center gap-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#home"
              className="text-sm font-medium hover:text-primary"
            >
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary"
            >
              Projetos
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contato
            </Link>
          </motion.div>
          <ModeToggle />
        </nav>
      </div>
    </motion.header>
  );
}
