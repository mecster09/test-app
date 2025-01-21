import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary py-4">
      <div className="container mx-auto px-4 flex justify-center space-x-4">
        <Link href="https://github.com/mecster09" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6" />
        </Link>
        <Link href="https://linkedin.com/in/gkphillips" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6" />
        </Link>
        <Link href="mailto:gkp2105@gmail.com">
          <Mail className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  )
}

