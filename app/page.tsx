'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { ArrowDownCircle, Download, FileText, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import Link from 'next/link'



interface SectionWrapperProps {
  children: React.ReactNode
  id: string
}

const SectionWrapper = ({ children, id }: SectionWrapperProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20"
      id={id}
    >
      {children}
    </motion.section>
  )
}

export default function SmoothScrollingPortfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const scrollContainerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  })

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const opacity = useTransform(smoothScrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const sections = ['hero', 'about', 'experience', 'skills', 'projects']

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={scrollContainerRef} className="min-h-screen bg-gradient-to-br from-teal-500 via-blue-500 to-indigo-600 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-4">
            {['hero', 'about', 'experience', 'skills', 'projects'].map((section) => (
              <li key={section}>
                <Button
                  variant="ghost"
                  className={`text-white hover:text-teal-200 ${activeSection === section ? 'border-b-2 border-white' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-20">
      <motion.div
  className="fixed top-0 left-0 right-0 h-1 bg-teal-300 z-50"
  style={{ scaleX: scrollYProgress }}
/>

        <SectionWrapper id="hero">
          <div className="min-h-screen flex flex-col justify-center items-center text-center">


          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.05 }}
  transition={{
    duration: 1.2,
    delay: 0.5,
    ease: [0.2, 0.8, 0.2, 1],
  }}
  className="relative w-[220px] h-[220px] rounded-full bg-gradient-to-tr from-blue-500 via-teal-400 to-indigo-500 p-[4px] shadow-2xl flex items-center justify-center cursor-pointer glow-border"
>
  <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
    <Image
      src="/pratap_zoom.jpg"
      alt="Pratap Puttaswamy"
      width={200}
      height={200}
      className="rounded-full"
    />
  </div>
  
  {/* Floating Particles */}
  <div className="absolute inset-0 w-[250px] h-[250px] -z-10 pointer-events-none flex justify-center items-center">
    {Array.from({ length: 21 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-float"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${2 + Math.random() * 3}s`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
</motion.div>

<style jsx>{`
  .glow-border {
    animation: glow 3s ease-in-out infinite;
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 10px 4px rgba(0, 200, 255, 0.5), 0 0 20px 10px rgba(0, 200, 255, 0.3);
    }
    50% {
      box-shadow: 0 0 20px 8px rgba(0, 200, 255, 0.7), 0 0 30px 15px rgba(0, 200, 255, 0.5);
    }
  }

  .animate-float {
    position: absolute;
    animation: floatUpDown linear infinite;
  }

  @keyframes floatUpDown {
    0% { transform: translateY(0); opacity: 0.8; }
    50% { transform: translateY(-8px); opacity: 0.5; }
    100% { transform: translateY(0); opacity: 0.8; }
  }
`}</style>




            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-8 mt-8"
            >
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Pratap Puttaswamy</h1>
                <h2 className="text-2xl md:text-3xl mb-8">Business Analyst & Data Scientist</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
  <Link href="https://www.linkedin.com/in/pratap-puttaswamy/" target="_blank" aria-label="LinkedIn Profile">
    <Button
      variant="outline"
      size="icon"
      className="bg-white text-blue-600 hover:bg-blue-100"
    >
      <Linkedin />
    </Button>
  </Link>
  <Link href="https://github.com/pratap-puttaswamy" target="_blank" aria-label="GitHub Profile">
    <Button
      variant="outline"
      size="icon"
      className="bg-white text-blue-600 hover:bg-blue-100"
    >
      <Github />
    </Button>
  </Link>
  <Link href="mailto:puttaswamy.p@northeastern.edu" aria-label="Email">
    <Button
      variant="outline"
      size="icon"
      className="bg-white text-blue-600 hover:bg-blue-100"
    >
      <Mail />
    </Button>
  </Link>
  <Link href="https://drive.google.com/file/d/1uvTN-4rEsOOshoQpDFrES6mI1qjLre1r/view" download aria-label="Download Resume">
    <Button
      variant="outline"
      className="bg-white text-blue-600 hover:bg-blue-100"
    >
      <FileText className="mr-2" />
      Download Resume
    </Button>
  </Link>
</div>
            </motion.div>
            <motion.div style={{ opacity }} className="absolute bottom-10">
              <Button
                variant="ghost"
                size="icon"
                className="animate-bounce"
                onClick={() => scrollToSection('about')}
                aria-label="Scroll to About section"
              >
                <ArrowDownCircle size={60} />
              </Button>
            </motion.div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="about">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <Card className="bg-white bg-opacity-10 backdrop-blur-md">
            <CardContent className="p-6 md:p-8">
              <p className="text-base md:text-lg leading-relaxed">
As a dynamic Business Analyst and Data Scientist, I thrive on uncovering stories hidden in data and transforming them into powerful, actionable insights. My journey in the world of analytics has been nothing short of an exhilarating puzzle-solving adventure—one where I marry technical prowess with strategic thinking to deliver innovative solutions.

Currently, I’m wrapping up my Master’s in Business Analytics at Northeastern University, where I’ve sharpened my skills in cutting-edge data analysis, visualization, and governance practices. Along the way, I’ve gained hands-on experience across diverse industries, diving into projects that involve everything from enhancing data governance frameworks to crafting interactive dashboards that make decision-making a breeze for stakeholders.

But it’s not just about the tools and techniques—it’s about the impact. Whether leading cloud migrations, streamlining operations, or improving data quality, I’m driven by the joy of turning chaos into clarity. Think of me as the translator who speaks the languages of both tech geeks and business executives, bridging gaps to ensure data-driven strategies don’t just make sense—they make a difference.

What sets me apart? A curious mind that’s always eager to learn, a knack for collaboration, and a genuine passion for finding solutions that work in the real world. Add a splash of humor and a sprinkle of creativity, and you’ve got someone who believes that data analysis should be as much about discovery as it is about delivering results.

I’m on a mission to channel my expertise into opportunities where I can innovate, collaborate, and help businesses unlock their full potential. If you’re looking for someone who brings both technical savvy and strategic insight to the table—with a healthy dose of enthusiasm—let’s connect!              </p>
            </CardContent>
          </Card>
        </SectionWrapper>

        <SectionWrapper id="experience">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Data Science and Analytics Intern",
                company: "WSP, Boston, USA",
                date: "June 2024 - Sep 2024",
                responsibilities: [
                  "Improved data governance with Profisee MDM",
                  "Developed and maintained Power BI dashboards",
                  "Optimized data validation tool in Python"
                ]
              },
              {
                title: "Associate Consultant Business Intelligence and Micro Automation",
                company: "Eli Lilly, Bangalore, India",
                date: "Aug 2021 - May 2022",
                responsibilities: [
                  "Led design and development of Power BI dashboards and Power Apps",
                  "Translated customer requirements into problem statements",
                  "Engineered VBA macro solutions for process automation"
                ]
              },
              {
                title: "Senior Consultant",
                company: "Quinnox, Bangalore, India",
                date: "Mar 2018 – June 2022",
                responsibilities: [
                  "Directed Cloud migration projects of RESTful web services",
                  "Led team in implementing data-driven solutions for Waste Management, USA",
                  "Developed fleet management applications",
                  "Spearheaded advancements in data warehousing and ETL architectures"
                ]
              }
            ].map((job, index) => (
              <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-md">
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription className="text-teal-200">{job.company} | {job.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="skills">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
  { 
    title: "Data Science & Analysis", 
    skills: [
      "Python (Pandas, NumPy, Scikit-learn)", 
      "SQL", 
      "Java", 
      "R", 
      "Data Profiling", 
      "Data Cleansing", 
      "Machine Learning", 
      "Data Pipelines", 
      "Data Automation", 
      "Alteryx", 
      "NLP (Natural Language Processing)", 
      "TensorFlow", 
      "PyTorch"
    ] 
  },
  { 
    title: "Data Visualization", 
    skills: [
      "Power BI (DAX, Data Modeling)", 
      "Advanced Excel (VLOOKUP, Pivot Table, Power Query)", 
      "Tableau", 
      "Looker", 
      "QlikView"
    ] 
  },
  { 
    title: "Programming & Automation", 
    skills: [
      "Python", 
      "R", 
      "VBA", 
      "Power Automate", 
      "Restful APIs", 
      "Alteryx"
    ] 
  },
  { 
    title: "Database Management", 
    skills: [
      "MySQL", 
      "PostgreSQL", 
      "Microsoft SQL Server", 
      "Oracle Fusion SSMS", 
      "ETL Processes"
    ] 
  },
  { 
    title: "Software Testing & Integration", 
    skills: [
      "UAT", 
      "Unit Testing", 
      "End-to-End System Testing", 
      "Postman", 
      "SoapUI", 
      "JMeter", 
      "Web Servers"
    ] 
  },
  { 
    title: "Data Management", 
    skills: [
      "Data Migration", 
      "Data Cleansing", 
      "Legacy Data Mapping", 
      "Master Data Management (Profisee, Informatica)", 
      "Data Pipelines", 
      "Data Flows"
    ] 
  },
  { 
    title: "Cloud Platforms & Big Data", 
    skills: [
      "AWS (Redshift, SageMaker, S3)", 
      "Azure (Synapse Analytics, Data Factory)", 
      "IBM DB2", 
      "Google Cloud (BigQuery)", 
      "Apache Spark", 
      "Hadoop", 
      "Airflow", 
      "Kafka", 
      "Version Control (Git, GitHub)"
    ] 
  },
  { 
    title: "Project Management & Documentation", 
    skills: [
      "Agile Methodologies", 
      "Jira", 
      "SDLC", 
      "Microsoft Word", 
      "Excel", 
      "PowerPoint", 
      "PPM Pro", 
      "Stakeholder Communication", 
      "Risk Management", 
      "PMP Concepts"
    ] 
  },
  { 
    title: "Advanced Analytics", 
    skills: [
      "Forecasting", 
      "Predictive Modeling", 
      "Regression", 
      "Variance Analysis", 
      "Time Series Analysis", 
      "Optimization Techniques", 
      "Bayesian Analysis"
    ] 
  },
  { 
    title: "Business Skills", 
    skills: [
      "Stakeholder Management", 
      "Technical Documentation", 
      "Business Process Modeling", 
      "Data Governance Policies", 
      "KPI Design and Optimization", 
      "Cost-Benefit Analysis", 
      "Requirements Gathering"
    ] 
  },
  { 
    title: "Statistics & Mathematics", 
    skills: [
      "Hypothesis Testing", 
      "Probability and Statistics", 
      "Time Series Analysis", 
      "Optimization Techniques", 
      "Bayesian Analysis"
    ] 
  },
  { 
    title: "Soft Skills", 
    skills: [
      "Collaboration", 
      "Critical Thinking", 
      "Problem Solving", 
      "Leadership", 
      "Mentoring", 
      "Adaptability", 
      "Effective Communication"
    ] 
  }
]
.map((category, index) => (
              <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-md">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-teal-500 text-white">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="projects">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
          <div className="space-y-8">
            {[{
              title: "Transportation Data Analysis for MBTA",
              date: "Mar 2018 – June 2022",
              description: [
                "Conducted extensive data analysis on MBTA data",
                "Developed interactive dashboards in Plotly and Power BI"
              ]
            }, {
              title: "Sales Performance Analysis for NOVICA on Amazon",
              date: "Sep 2024 – Dec 2024",
              description: [
                "Analyzed NOVICA's product sales data on Amazon",
                "Implemented statistical and machine learning models for sales forecasting"
              ]
            }, {
              title: "Twitter Trends Analysis",
              date: "March 2025",
              description: [
                "Developed an interactive Power BI dashboard to analyze Twitter trends, user engagement, and influencer statistics.",
                "Implemented dynamic filtering for tweet sources, user interactions, and daily/weekly trends.",
                "Leveraged DAX and Power Query to generate real-time insights on the most influential tech profiles."
              ],
              image: "/twitter_trends_analysis.png"
            }].map((project, index) => (
              <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-md">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-teal-200">{project.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  {project.image && (
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={700} 
                      height={500} 
                      className="rounded-xl shadow-lg mt-4"
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      </main>

      <footer className="bg-white bg-opacity-10 backdrop-blur-md py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Pratap Puttaswamy. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="mailto:puttaswamy.p@northeastern.edu" aria-label="Email">
              <Button variant="ghost" size="icon" className="text-white hover:text-teal-200">
                <Mail />
              </Button>
            </Link>
            <Link href="tel:+18704134505" aria-label="Phone">
              <Button variant="ghost" size="icon" className="text-white hover:text-teal-200">
                <Phone />
              </Button>
            </Link>
            <Link href="https://maps.app.goo.gl/EhqAbWxQfnBvxJeR9" target="_blank" aria-label="Location">
              <Button variant="ghost" size="icon" className="text-white hover:text-teal-200">
                <MapPin />
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
