"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Navigation, Shield, AlertTriangle, Cpu, Satellite } from "lucide-react"

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "NavIC Sentinel Project",
    description:
      "A real-time tracking and border monitoring system using NavIC satellite navigation to enhance maritime safety.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["NavIC", "Embedded Systems", "Maritime Safety", "Real-time Tracking"],
    githubUrl: "#",
    isNavicProject: true,
    longDescription:
      "Fishermen often face detention or execution for unintentionally crossing the International Maritime Boundary Line (IMBL) due to unclear maritime borders. The NavIC Sentinel system addresses this by using NavIC satellite navigation to continuously track vessel location. A controller board compares real-time coordinates with predefined boundary values. If a vessel nears the danger zone, alerts are triggered via display, buzzer, and base station warnings. Additionally, an emergency assistance button allows fishermen to request immediate help.",
    features: [
      {
        title: "Real-time Tracking",
        description: "Continuous monitoring of vessel location using NavIC satellite navigation.",
        icon: <Navigation className="h-5 w-5 text-primary" />,
      },
      {
        title: "Geofencing Alerts",
        description: "Instant alerts when approaching or crossing pre-defined geofences.",
        icon: <MapPin className="h-5 w-5 text-primary" />,
      },
      {
        title: "Multi-level Warning System",
        description: "Visual displays, audible alarms, and base station notifications.",
        icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      },
      {
        title: "Emergency Assistance",
        description: "Dedicated button for requesting immediate help in emergency situations.",
        icon: <Shield className="h-5 w-5 text-primary" />,
      },
    ],
    technology: [
      {
        title: "NavIC Receiver",
        description: "High-precision location data within India, crucial for accurate border monitoring.",
        icon: <Satellite className="h-5 w-5 text-primary" />,
      },
      {
        title: "MPU6050 Sensor",
        description: "Enables motion detection and speed analysis, improving system accuracy.",
        icon: <Cpu className="h-5 w-5 text-primary" />,
      },
      {
        title: "OLED Display & Buzzer",
        description: "Provides real-time user alerts, ensuring immediate feedback when approaching border zones.",
        icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      },
      {
        title: "Haversine-based Distance Calculation",
        description: "Ensures accurate geofencing alerts through precise distance calculations on the Earth's surface.",
        icon: <Shield className="h-5 w-5 text-primary" />,
      },
    ],
    results: [
      { value: "95%", label: "Tracking Accuracy" },
      { value: "±10m", label: "Detection Precision" },
      { value: "20%", label: "Faster Response Time" },
      { value: "18%", label: "Fewer False Alarms" },
    ],
  },
  {
    id: 2,
    title: "Wazuh SIEM Dashboard",
    description:
      "Configured and maintained Wazuh for log analysis and threat detection, providing real-time security monitoring.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Cybersecurity", "SIEM", "Log Analysis", "Threat Detection"],
    githubUrl: "#",
    longDescription:
      "Implemented and configured Wazuh SIEM (Security Information and Event Management) system to monitor network activity, detect threats, and analyze security logs in real-time. The dashboard provides comprehensive visibility into security events, allowing for quick identification and response to potential security incidents.",
  },
  {
    id: 3,
    title: "Reverse Engineering & Exploit Dev",
    description:
      "Used Ghidra to analyze software and identify RCE vulnerabilities, enhancing security assessment capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Reverse Engineering", "Exploit Development", "Ghidra", "Vulnerability Assessment"],
    githubUrl: "#",
    longDescription:
      "Conducted reverse engineering of software applications using Ghidra to identify potential security vulnerabilities. Developed proof-of-concept exploits to demonstrate the impact of identified vulnerabilities and provided detailed remediation recommendations to address security issues.",
  },
  {
    id: 4,
    title: "Smart Yoga Mat with AI & IoT",
    description: "Built a real-time posture correction system using Raspberry Pi, ESP32, and machine learning models.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["IoT", "Machine Learning", "Raspberry Pi", "ESP32"],
    githubUrl: "#",
    longDescription:
      "Developed an intelligent yoga mat that uses pressure sensors and machine learning to detect yoga poses and provide real-time feedback on posture. The system uses a Raspberry Pi for processing and an ESP32 for sensor data collection, with a mobile app interface for user interaction and progress tracking.",
  },
  {
    id: 5,
    title: "Yoga Pose Detection Model",
    description:
      "Trained EfficientNetB3 to classify 107+ yoga postures with high accuracy for real-time feedback applications.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Machine Learning", "Computer Vision", "EfficientNetB3", "TensorFlow"],
    githubUrl: "#",
    longDescription:
      "Created a machine learning model using EfficientNetB3 architecture to accurately classify over 107 different yoga poses from images and video. The model achieves high accuracy and can be deployed on edge devices for real-time pose detection and feedback in yoga applications.",
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)

  const openProjectDetails = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Projects</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Here are some of my projects showcasing my skills in cybersecurity, IoT, and embedded systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg cursor-pointer"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                onClick={() => openProjectDetails(project)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      activeProject === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && closeProjectDetails()}>
        <DialogContent className="max-w-4xl w-[90vw]">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>

              <div className="relative aspect-video w-full overflow-hidden rounded-md mt-4">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-6">
                <p className="mb-4">{selectedProject.longDescription}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {selectedProject.isNavicProject && (
                  <Tabs defaultValue="features" className="w-full mt-6">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="features">Features</TabsTrigger>
                      <TabsTrigger value="technology">Technology</TabsTrigger>
                      <TabsTrigger value="results">Results</TabsTrigger>
                    </TabsList>

                    <TabsContent value="features" className="mt-6 space-y-6">
                      <div className="space-y-4">
                        {selectedProject.features?.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="mt-1 bg-primary/10 p-2 rounded-full">{feature.icon}</div>
                            <div>
                              <h4 className="text-lg font-semibold">{feature.title}</h4>
                              <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="technology" className="mt-6 space-y-6">
                      <div className="space-y-4">
                        {selectedProject.technology?.map((tech, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="mt-1 bg-primary/10 p-2 rounded-full">{tech.icon}</div>
                            <div>
                              <h4 className="text-lg font-semibold">{tech.title}</h4>
                              <p className="text-muted-foreground">{tech.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="results" className="mt-6">
                      <div className="grid grid-cols-2 gap-4">
                        {selectedProject.results?.map((result, idx) => (
                          <Card key={idx}>
                            <CardContent className="p-6">
                              <div className="text-center">
                                <h4 className="text-3xl font-bold text-primary mb-2">{result.value}</h4>
                                <p className="text-sm text-muted-foreground">{result.label}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                )}

                <div className="mt-6 flex justify-end">
                  <Button variant="outline" onClick={closeProjectDetails}>
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
