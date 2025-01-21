import Link from 'next/link'
import { Timeline } from '@/components/timeline'
import { Button } from "@/components/ui/button"
import { Home } from 'lucide-react'

const careerEvents = [
  {
    date: new Date('2020-06-15'),
    company: "Tech Innovations Inc.",
    role: "Chief Technology Officer",
    summary: "Leading the company's technological vision and strategy, overseeing AI integration across all products, and managing a team of 50+ engineers."
  },
  {
    date: new Date('2015-03-01'),
    company: "AI Solutions Ltd.",
    role: "Lead AI Engineer",
    summary: "Spearheaded the development of cutting-edge AI algorithms, resulting in a 40% improvement in product performance and expanding the company's market share."
  },
  {
    date: new Date('2010-09-20'),
    company: "Software Dynamics",
    role: "Senior Software Developer",
    summary: "Developed robust and scalable software solutions for enterprise clients, specializing in cloud-based applications and data analytics."
  },
  {
    date: new Date('2005-11-10'),
    company: "GameCraft Studios",
    role: "Game Developer",
    summary: "Contributed to the development of several successful video game titles, focusing on AI-driven NPC behaviors and procedural content generation."
  },
  {
    date: new Date('2000-07-01'),
    company: "WebTech Solutions",
    role: "Junior Web Developer",
    summary: "Started career in web development, working on e-commerce platforms and content management systems for small to medium-sized businesses."
  },
  {
    date: new Date('1997-09-01'),
    company: "TechStart University",
    role: "Computer Science Student",
    summary: "Began journey in technology, focusing on algorithms, data structures, and the foundations of artificial intelligence."
  }
]

export default function Career() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Career History</h1>
        <Link href="/" passHref>
          <Button variant="outline" size="sm">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
        </Link>
      </div>
      <Timeline events={careerEvents} />
    </div>
  )
}

