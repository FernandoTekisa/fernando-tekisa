import Home from "@/components/Home"
import Contact from "@/components/Contact"
import { Separator } from "@/components/ui/separator"
import Projects from "@/components/Projects"

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-10 max-w-4xl">
      <div className="space-y-24">
        <Home />
        <Separator className="my-12" />
        <Projects />
        <Separator className="my-12" />
        <Contact />
      </div>
    </main>
  )
}