"use client";

import { motion } from "framer-motion";
import { HyperText } from "@/components/magicui/hyper-text";
import { Button } from "@/components/ui/button";
import fernando from "@/image/fernando.jpg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Olá, sou o{" "}
              <HyperText className="text-primary">Fernando Tekisa</HyperText>
            </h1>
            <h2 className="text-2xl font-semibold mt-2">
              Desenvolvedor Front-end
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-muted-foreground"
          >
            Especializado em criar interfaces modernas e responsivas com React,
            Next.js e TypeScript. Transformo designs em código limpo e
            eficiente, focando na experiência do usuário.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <a href="#projects">
                  Ver projetos <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src={fernando}
              alt="Foto de perfil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
