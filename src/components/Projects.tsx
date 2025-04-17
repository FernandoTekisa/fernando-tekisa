"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "landing page Marting place",
    description: "Impulsionamos marcas com estratégias criativas de marketing digital, redes sociais e branding. Conecte-se com seu público e cresça de verdade.",
    image: "/images/marting.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/FernandoTekisa/marting-place",
    demo: "https://marting-place.vercel.app/",
  },
  {
    id: 2,
    title: "Site Advice",
    description: "Conselhos que fazem a diferença. Simples, úteis e reais.",
    image: "/images/Advices.png",
    tags: ["Next.js", "TypeScript","Tailwind CSS"],
    github: "https://github.com/FernandoTekisa/advice_web",
    demo: "https://advice-ochre.vercel.app/",
  },
  {
    id: 3,
    title: "App de Produtividade",
    description: "Conte, acompanhe e controle — tudo em um só lugar",
    image: "/images/count.png",
    tags: ["Next.js","Tailwind CSS"],
    github: "https://github.com/FernandoTekisa",
    demo: "https://count-next.vercel.app/",
  },
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projetos
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Uma seleção dos meus trabalhos recentes em desenvolvimento front-end e
          design de interfaces.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <motion.div
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden border border-border/40 bg-background/60 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
