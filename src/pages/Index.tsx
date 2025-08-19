import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaDocker,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaAws,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaDownload,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import { SiDjango, SiKubernetes, SiTailwindcss, SiVite } from "react-icons/si";
import heroBackground from "@/assets/hero-background.jpg";
import profileAvatar from "@/assets/profile-avatar.jpg";

export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-body text-foreground bg-background">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full nav-glass z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-foreground"
            >
              Elangovan
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Experience', id: 'experience' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                    activeSection === item.id ? 'text-primary shadow-glow' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setNavOpen(!navOpen)}
            >
              <div className="space-y-1">
                <div className={`w-5 h-0.5 bg-muted-foreground transition-all ${navOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-muted-foreground transition-all ${navOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-muted-foreground transition-all ${navOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-border"
            >
              <div className="flex flex-col space-y-3 pt-4">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'About', id: 'about' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Experience', id: 'experience' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setNavOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-hero relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 18, 28, 0.8), rgba(13, 18, 28, 0.9)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">
                  Elango
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6 font-light">
                Full Stack Developer & DevOps Engineer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                I specialize in building scalable web applications with Python Django, 
                React, and modern DevOps practices. Passionate about creating efficient, 
                user-friendly solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover-glow transition-all duration-300 font-medium flex items-center gap-2 justify-center"
                >
                  <FaDownload size={16} />
                  Download CV
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-8 py-3 glass text-foreground rounded-lg hover-glow transition-all duration-300 font-medium text-center"
                >
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-primary rounded-full p-1 shadow-glow">
                  <div className="w-full h-full rounded-full overflow-hidden bg-card">
                    <img 
                      src={profileAvatar} 
                      alt="Elangovan - Full Stack Developer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-success rounded-full border-4 border-background animate-glow"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-surface">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Full Stack Developer with DevOps Expertise
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate developer with over 3 years of experience in building 
                scalable web applications. My expertise spans across Python Django backend 
                development, React frontend, and modern DevOps practices.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I love solving complex problems and creating efficient solutions that 
                make a real impact. When I'm not coding, you'll find me exploring new 
                technologies or contributing to open-source projects.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Frontend", desc: "React, JavaScript, HTML/CSS" },
                  { title: "Backend", desc: "Python, Django, REST APIs" },
                  { title: "DevOps", desc: "Docker, Kubernetes, AWS" },
                  { title: "Database", desc: "PostgreSQL, MongoDB" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: <FaCode className="text-primary" size={20} />, title: "Clean Code", desc: "Writing maintainable, scalable code" },
                { icon: <FaServer className="text-success" size={20} />, title: "DevOps", desc: "Automation & deployment expertise" },
                { icon: <FaDatabase className="text-secondary" size={20} />, title: "Database Design", desc: "Efficient data architecture" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-xl hover-lift"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {[
              { icon: <FaPython size={40} />, name: "Python", color: "text-yellow-400" },
              { icon: <SiDjango size={40} />, name: "Django", color: "text-green-400" },
              { icon: <FaReact size={40} />, name: "React", color: "text-blue-400" },
              { icon: <SiVite size={40} />, name: "Vite", color: "text-purple-400" },
              { icon: <SiTailwindcss size={40} />, name: "Tailwind", color: "text-teal-400" },
              { icon: <FaDocker size={40} />, name: "Docker", color: "text-blue-500" },
              { icon: <SiKubernetes size={40} />, name: "Kubernetes", color: "text-blue-600" },
              { icon: <FaAws size={40} />, name: "AWS", color: "text-orange-400" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3 p-4 glass rounded-xl hover-lift group"
              >
                <div className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-surface">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution built with Django and React, featuring payment integration and admin dashboard.",
                tech: ["Django", "React", "PostgreSQL", "Stripe"],
                gradient: "bg-gradient-to-br from-primary/20 to-primary/40"
              },
              {
                title: "Task Management App",
                description: "Collaborative task management application with real-time updates and team collaboration features.",
                tech: ["React", "Node.js", "Socket.io", "MongoDB"],
                gradient: "bg-gradient-to-br from-success/20 to-success/40"
              },
              {
                title: "DevOps Pipeline",
                description: "Automated CI/CD pipeline with Docker containerization and Kubernetes deployment on AWS.",
                tech: ["Docker", "Kubernetes", "AWS", "Jenkins"],
                gradient: "bg-gradient-to-br from-secondary/20 to-secondary/40"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-xl overflow-hidden hover-lift group"
              >
                <div className={`h-48 ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-foreground/30 text-4xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 text-primary hover:text-primary-glow font-medium transition-colors">
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors">
                      <FaGithub size={14} />
                      Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Senior Full Stack Developer",
                company: "Tech Solutions Inc.",
                period: "2022 - Present",
                description: "Led development of scalable web applications using Django and React. Implemented DevOps practices and mentored junior developers.",
                achievements: [
                  "Reduced deployment time by 60% through CI/CD automation",
                  "Built microservices architecture serving 100K+ users",
                  "Mentored 5 junior developers"
                ]
              },
              {
                title: "DevOps Engineer",
                company: "Cloud Systems Ltd.",
                period: "2021 - 2022",
                description: "Managed cloud infrastructure and implemented automated deployment pipelines using Docker and Kubernetes.",
                achievements: [
                  "Migrated legacy systems to containerized architecture",
                  "Achieved 99.9% uptime for production systems",
                  "Reduced infrastructure costs by 40%"
                ]
              }
            ].map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground font-medium mt-2 md:mt-0 px-3 py-1 bg-muted rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-surface">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: <FaEnvelope className="text-primary" size={20} />, title: "Email", value: "elango@example.com" },
                { icon: <FaPhone className="text-success" size={20} />, title: "Phone", value: "+1 (555) 123-4567" },
                { icon: <FaMapMarkerAlt className="text-secondary" size={20} />, title: "Location", value: "San Francisco, CA" }
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 hover-lift"
                >
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{contact.title}</h4>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </div>
                </motion.div>
              ))}

              <div className="flex gap-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 bg-card rounded-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-glow"
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:bg-primary-glow transition-all duration-300 shadow-glow"
                >
                  <FaLinkedin size={20} />
                </motion.a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-foreground placeholder:text-muted-foreground"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover-glow transition-all duration-300 font-medium"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Elangovan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Full Stack Developer passionate about creating scalable web applications 
                and implementing modern DevOps practices.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Elangovan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}