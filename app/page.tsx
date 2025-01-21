import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FeaturedProjects } from "@/components/featured-projects"
import { Mail } from "lucide-react"
import { AboutDrawer } from "@/components/about-drawer"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Gareth Phillips</h1>
      <p className="text-xl md:text-2xl text-center mb-8">Tech Leader, AI Enthusiast, Tech Geek & Gamer</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="block h-full">
          <AboutDrawer />
        </div>
        <Link href="https://github.com/mecster09" target="_blank" rel="noopener noreferrer" className="block h-full">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>My Github Projects</CardTitle>
              <CardDescription>Explore my open-source contributions and personal projects</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/career" className="block h-full">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>Career History</CardTitle>
              <CardDescription>Discover my professional journey and experiences</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
      <h2 className="text-3xl font-bold mb-6 px-4 mt-8">Featured Projects</h2>
      <FeaturedProjects />   
      <div className="flex justify-center mt-0">
        <Link 
          href="mailto:your.email@example.com" 
          className="group p-8 rounded-full hover:bg-zinc-800/50 transition-colors"
        >
          <Mail className="w-16 h-16 text-zinc-400 group-hover:text-blue-400 transition-colors" />
        </Link>
      </div>
    </div>
  )
}

