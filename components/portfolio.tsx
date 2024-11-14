'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail} from 'lucide-react'
import { Button } from "@/components/ui/button"

const sections = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
]

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'GraphQL', level: 70 },
]

const projects = [
  { name: 'E-commerce Platform', description: 'Built a scalable e-commerce solution using Next.js and GraphQL' },
  { name: 'AI Chatbot', description: 'Developed an AI-powered chatbot using natural language processing' },
  { name: 'Data Visualization Dashboard', description: 'Created an interactive dashboard for big data analysis' },
]

export function PortfolioComponent() {
  const [currentSection, setCurrentSection] = useState('home')
  const [loading, setLoading] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 1
      })
    }, 30)
    return () => clearInterval(timer)
  }, [])

  const nextSection = () => {
    const currentIndex = sections.findIndex(section => section.id === currentSection)
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1].id)
    }
  }

  return (
    <div className="relative min-h-screen bg-[#001524] text-white overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />

      {/* Navigation */}
      <nav className="absolute top-4 left-4 z-50">
        <ul className="flex space-x-4">
          {sections.map((section) => (
            <li key={section.id}>
              <Button
                variant="ghost"
                className={`text-sm ${currentSection === section.id ? 'text-teal-400' : 'text-gray-400'} hover:text-teal-300`}
                onClick={() => setCurrentSection(section.id)}
              >
                {section.title}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social links */}
      <div className="absolute bottom-4 left-4 z-50 flex space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:contact@example.com" className="text-gray-400 hover:text-teal-400">
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* Main content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4"
        >
          {currentSection === 'home' && (
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-light mb-4">
                Hi i&apos;m
              </h1>
              <div className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 font-light tracking-[0.2em] mb-8">
                Bat Orshikh
              </div>
              {loading < 100 ? (
                <div className="w-full max-w-xl">
                  <div className="relative">
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent relative">
                      <div className="absolute inset-0 flex justify-between">
                        {Array.from({ length: 50 }).map((_, i) => (
                          <div key={i} className="w-[2px] h-[2px] bg-gray-700 rounded-full" />
                        ))}
                      </div>
                    </div>
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: `${loading}%` }}
                      transition={{ duration: 0.1 }}
                      className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-teal-400 to-blue-400"
                      style={{ boxShadow: "0 0 20px rgba(45, 212, 191, 0.5)" }}
                    />
                  </div>
                  <div className="mt-4 text-center text-sm text-gray-400">
                    Loading... {loading}%
                  </div>
                </div>
              ) : (
                <Button
                  variant="outline"
                  className="text-teal-400 border-teal-400 hover:bg-teal-400/10"
                  onClick={nextSection}
                >
                  Explore My Work
                </Button>
              )}
            </div>
          )}

          {currentSection === 'about' && (
            <div className="max-w-2xl text-center">
              <h2 className="text-3xl font-light mb-6 text-teal-400">About Me</h2>
              <p className="text-lg mb-6">
                Im a passionate frontend developer with 5+ years of experience in creating
                responsive and user-friendly web applications. My expertise lies in React,
                TypeScript, and Next.js, and Im always eager to learn new technologies.
              </p>
              <Button
                variant="outline"
                className="text-teal-400 border-teal-400 hover:bg-teal-400/10"
                onClick={nextSection}
              >
                View My Skills
              </Button>
            </div>
          )}

          {currentSection === 'skills' && (
            <div className="max-w-2xl w-full">
              <h2 className="text-3xl font-light mb-6 text-center text-teal-400">My Skills</h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-400 bg-teal-200/10">
                          {skill.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-teal-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  className="text-teal-400 border-teal-400 hover:bg-teal-400/10"
                  onClick={nextSection}
                >
                  View My Projects
                </Button>
              </div>
            </div>
          )}

          {currentSection === 'projects' && (
            <div className="max-w-4xl w-full">
              <h2 className="text-3xl font-light mb-6 text-center text-teal-400">My Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-teal-400">{project.name}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  className="text-teal-400 border-teal-400 hover:bg-teal-400/10"
                  onClick={nextSection}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          )}

          {currentSection === 'contact' && (
            <div className="max-w-md w-full">
              <h2 className="text-3xl font-light mb-6 text-center text-teal-400">Get In Touch</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-teal-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-teal-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-2 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-teal-400"
                />
                <Button
                  type="submit"
                  className="w-full bg-teal-400 text-[#001524] hover:bg-teal-500"
                >
                  Send Message
                </Button>
              </form>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Next section button */}
      {currentSection !== 'contact' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 right-4 z-50"
        >
          <Button
            variant="ghost"
            className="text-teal-400 hover:text-teal-300 hover:bg-teal-400/10"
            onClick={nextSection}
          >
            <ChevronDown className="w-6 h-6" />
          </Button>
        </motion.div>
      )}
    </div>
  )
}