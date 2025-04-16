"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="border-t py-6 md:py-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row max-w-4xl">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Twitter
          </motion.a>
        </div>
      </div>
    </motion.footer>
  )
}