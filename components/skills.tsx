"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Shield, Server, Smartphone, Terminal, Layers, GitBranch, Eye } from "lucide-react"

const skills = [
  {
    category: "Cybersecurity",
    icon: <Shield className="h-8 w-8 mb-4 text-primary" />,
    items: [
      "Threat Detection",
      "SIEM Monitoring",
      "Incident Response",
      "Log Analysis",
      "Penetration Testing",
      "Vulnerability Assessment",
    ],
  },
  {
    category: "Tools & Frameworks",
    icon: <Terminal className="h-8 w-8 mb-4 text-primary" />,
    items: ["Wazuh SIEM", "Splunk (basic)", "Wireshark", "Nmap", "Ghidra", "Metasploit", "Burp Suite", "OWASP ZAP"],
  },
  {
    category: "Languages & Scripting",
    icon: <Code className="h-8 w-8 mb-4 text-primary" />,
    items: ["Python", "Bash", "PowerShell (basic)", "C", "Verilog", "HTML/CSS/JS"],
  },
  {
    category: "Operating Systems",
    icon: <Server className="h-8 w-8 mb-4 text-primary" />,
    items: ["Windows", "Linux", "Unix", "Kali Linux", "macOS", "iOS (basic exposure)"],
  },
  {
    category: "ML & Data Frameworks",
    icon: <Layers className="h-8 w-8 mb-4 text-primary" />,
    items: ["TensorFlow", "OpenCV", "NumPy"],
  },
  {
    category: "Frameworks & Standards",
    icon: <GitBranch className="h-8 w-8 mb-4 text-primary" />,
    items: ["MITRE ATT&CK (familiar)", "ISO 27001 (familiar)", "NIST 800-53 (familiar)"],
  },
  {
    category: "Communication",
    icon: <Smartphone className="h-8 w-8 mb-4 text-primary" />,
    items: ["Technical Documentation", "Security Reporting", "Report Writing", "Team Collaboration"],
  },
  {
    category: "Threat Intelligence",
    icon: <Eye className="h-8 w-8 mb-4 text-primary" />,
    items: ["Threat Modeling", "Security Automation", "Digital Forensics"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">My Skills</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            I've developed expertise in various cybersecurity domains, tools, and technologies throughout my education
            and projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    {skill.icon}
                    <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
