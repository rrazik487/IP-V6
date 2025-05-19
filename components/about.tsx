"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, Award, Trophy } from "lucide-react"
import Image from "next/image"

// Detailed internship data
const internships = [
  {
    title: "Evalanche Club – Technical Committee Head",
    company: "Evalanche Club",
    period: "Aug 2024 – Present",
    description: [
      "Built and led security-focused projects in penetration testing and digital forensics.",
      "Led ethical hacking workshops and mentored 100+ students on cyber threats and mitigation.",
      "Organized cybersecurity events and competitions to promote security awareness.",
      "Developed training materials and hands-on labs for practical security education.",
    ],
  },
  {
    title: "The Red Users – Cybersecurity Intern",
    company: "The Red Users",
    period: "Jan 2025 – Feb 2025",
    description: [
      "Performed black-box penetration testing and assisted in vulnerability assessments.",
      "Documented XSS, SQL injection findings and provided risk mitigation strategies.",
      "Participated in security code reviews and identified potential vulnerabilities.",
      "Assisted in creating security reports and documentation for clients.",
    ],
  },
  {
    title: "Edunet Foundation – Cyber Security Intern",
    company: "Edunet Foundation",
    period: "Jan 2025 – Feb 2025 · Remote",
    description: [
      "Conducted penetration testing and ethical hacking assessments as part of AICTE virtual internship.",
      "Practiced secure coding and vulnerability detection techniques in lab simulations.",
      "Strengthened foundational knowledge in network security and exploit mitigation.",
      "Completed hands-on projects in security analysis and threat detection.",
    ],
  },
]

// Detailed certification data
const certifications = [
  {
    title: "Cybersecurity Analyst Simulation",
    issuer: "Tata Consultancy Services",
    date: "February 2024",
    description:
      "Comprehensive simulation covering threat detection, incident response, and security analysis in enterprise environments.",
  },
  {
    title: "Ethical Hacking Series (Foot printing, Web App Hacking)",
    issuer: "LinkedIn",
    date: "January 2024",
    description:
      "In-depth training on reconnaissance techniques, web application security testing, and vulnerability identification methodologies.",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    date: "January 2024",
    description:
      "Core principles of cybersecurity including threat landscapes, security controls, risk management, and security operations.",
  },
  {
    title: "Cyber Security & Applied Ethical Hacking",
    issuer: "Infosys",
    date: "December 2023",
    description:
      "Practical training in ethical hacking methodologies, penetration testing techniques, and security assessment procedures.",
  },
  {
    title: "VLSI SoC Design using Verilog HDL",
    issuer: "Maven Silicon",
    date: "September 2024",
    description:
      "Advanced training in VLSI design principles, Verilog hardware description language, and system-on-chip architecture.",
  },
  {
    title: "Introduction to Cybersecurity Tools & Cyber Attacks",
    issuer: "IBM",
    date: "November 2023",
    description:
      "Overview of essential cybersecurity tools, common attack vectors, and defense mechanisms in modern computing environments.",
  },
  {
    title: "Network Security & Database Vulnerabilities",
    issuer: "Cisco Networking Academy",
    date: "October 2023",
    description:
      "Specialized training in network security protocols, database security, and vulnerability assessment techniques.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">About Me</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Get to know more about my background, experience, and what drives me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">S. Razikur Rahman</h3>
                <p className="text-muted-foreground mb-4">
                  Electronics & Communication Engineer | Cybersecurity Enthusiast
                </p>
                <p className="mb-4">
                  Passionate about cybersecurity with hands-on experience in threat detection, log analysis, and
                  penetration testing. Knowledgeable about secure SDLC procedures, adept with SIEM tools like Wazuh, and
                  proficient in Python.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/s-razikur-rahman-304415235"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/rrazik487"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="mailto:rrazik487@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="experience" className="flex flex-col items-center gap-2 py-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Experience</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="flex flex-col items-center gap-2 py-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Education</span>
                </TabsTrigger>
                <TabsTrigger value="certifications" className="flex flex-col items-center gap-2 py-2">
                  <Award className="h-4 w-4" />
                  <span>Certifications</span>
                </TabsTrigger>
                <TabsTrigger value="achievements" className="flex flex-col items-center gap-2 py-2">
                  <Trophy className="h-4 w-4" />
                  <span>Achievements</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="mt-6 space-y-6">
                <div className="space-y-6">
                  {internships.map((internship, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-muted-foreground/20 pb-6">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                      <h4 className="text-xl font-semibold">{internship.title}</h4>
                      <p className="text-muted-foreground">{internship.period}</p>
                      <ul className="mt-2 space-y-1 list-disc pl-5">
                        {internship.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="education" className="mt-6 space-y-6">
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-muted-foreground/20">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                    <h4 className="text-xl font-semibold">
                      Bachelor of Technology (B.Tech), Electronics & Communication Engineering
                    </h4>
                    <p className="text-muted-foreground">
                      Jain (Deemed-to-be University), Bengaluru · Aug 2023 – Sep 2027
                    </p>
                    <p className="mt-2">
                      Specializing in electronics, communication systems, and cybersecurity. Built real-world embedded
                      security solutions as coursework projects. Set up and configured Wazuh SIEM dashboard to monitor
                      device activity and analyze logs.
                    </p>
                    <div className="mt-4">
                      <h5 className="font-medium">Key Coursework:</h5>
                      <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-5">
                        <li>Digital Electronics & Communication</li>
                        <li>Network Security Fundamentals</li>
                        <li>Embedded Systems Design</li>
                        <li>Signal Processing & Analysis</li>
                        <li>Microcontroller Programming</li>
                        <li>Wireless Communication Systems</li>
                        <li>Cybersecurity Principles</li>
                        <li>VLSI Design & Implementation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="certifications" className="mt-6 space-y-6">
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-muted-foreground/20 pb-6">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                      <h4 className="text-xl font-semibold">{cert.title}</h4>
                      <p className="text-muted-foreground">
                        {cert.issuer} ({cert.date})
                      </p>
                      <p className="mt-2">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="mt-6">
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2">CTF Competitions</h4>
                      <p>Top 10 placement in Nexus & Hack The Boo 2024 competitions.</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Demonstrated advanced skills in web exploitation, reverse engineering, and cryptography
                        challenges.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2">Vulnerability Detection</h4>
                      <p>Detected and mitigated 5+ vulnerabilities in real-world web applications.</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Identified critical security flaws including XSS, CSRF, and SQL injection vulnerabilities.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2">INAC 3.0</h4>
                      <p>Secured 1st place for the NavIC Sentinel project presentation.</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Recognized for innovation, technical excellence, and addressing a critical real-world problem.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2">VISAI-2025</h4>
                      <p>
                        Recognition for presenting the NavIC Sentinel project, highlighting its innovation and practical
                        significance.
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Showcased the project's potential impact on maritime safety and border security.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
