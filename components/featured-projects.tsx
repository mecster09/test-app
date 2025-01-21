import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    title: "Music Master",
    description: "A NextJS web application that enables users to sync playlists between Spotify and YouTube Music. Features OAuth login for both platforms and seamless playlist transfer functionality.",
    link: "https://github.com/mecster09/music-master"
  },
  {
    title: "Building Blocks",
    description: "A responsive NextJS progressive web application designed for efficient task management. Allows users to easily add and manage their tasks with a modern interface.",
    link: "https://github.com/mecster09/building-blocks"
  },
  {
    title: "Godot Game",
    description: "A top-down game created using Godot 4 engine. This project serves as a learning experience for game development with the Godot engine.",
    link: "https://github.com/mecster09/godot-game "
  }
]

export function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
        <Link 
          key={project.title} 
          href={project.link} target="_blank" rel="noopener noreferrer"
          className="group transition-transform hover:-translate-y-1"
        >
          <Card className="h-full bg-zinc-950 border-zinc-800 hover:border-zinc-700 transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex items-center text-blue-400 text-sm">
                Learn more 
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
} 