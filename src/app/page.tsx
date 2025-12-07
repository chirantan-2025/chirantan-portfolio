"use client";
import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Sparkles,
  Rocket,
  Zap,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // handle scroll + mouse for subtle parallax
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const skills = [
    { name: "React", level: 95, color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900" },
    { name: "Laravel", level: 85, color: "from-red-500 to-orange-500" },
    { name: "PostgreSQL", level: 80, color: "from-blue-600 to-indigo-600" },
    { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-cyan-500" },
    { name: "REST APIs", level: 88, color: "from-purple-500 to-pink-500" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // demo behavior - replace with API call if needed
    alert("Message sent! (Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white antialiased overflow-x-hidden">
      {/* Animated background orbs (pointer-events-none, no overflow) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-500/18 rounded-full blur-3xl transition-transform will-change-transform"
          style={{
            transform: `translate3d(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px, 0)`,
            top: "6%",
            left: "6%",
          }}
        />
        <div
          className="absolute w-72 h-72 md:w-96 md:h-96 bg-cyan-500/18 rounded-full blur-3xl transition-transform will-change-transform"
          style={{
            transform: `translate3d(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px, 0)`,
            bottom: "6%",
            right: "6%",
          }}
        />
      </div>

      {/* Header */}
      <header
        className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/40 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-md opacity-60 -z-10" />
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm md:text-lg shadow">
                  CB
                </div>
              </div>
              <div>
                <h1 className="text-sm md:text-base font-semibold text-white leading-tight">Chirantan Bramhachari</h1>
                <p className="text-xs text-gray-400">Full-Stack Developer</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}

              <a
                href="/Chirantan_Bramhachari_Resume.pdf"
                download
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-medium hover:shadow-lg transition-transform hover:scale-105"
              >
                Resume
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMenuOpen((s) => !s)}
                className="p-2 rounded-md hover:bg-slate-800/40 transition-colors"
                type="button"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <nav className="md:hidden mt-3 pb-4 space-y-2 animate-in fade-in slide-in-from-top-5">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-slate-800/40 transition-colors"
                >
                  {item}
                </a>
              ))}

              <a
                href="/Chirantan_Bramhachari_Resume.pdf"
                download
                className="block mx-4 mt-2 px-4 py-2 text-center rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-sm font-medium"
              >
                Download Resume
              </a>
            </nav>
          )}
        </div>
      </header>

      <main className="relative">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-xs md:text-sm text-gray-300">Available for opportunities</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Building</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Digital Magic</span>
                  </h2>
                  <p className="text-base md:text-lg text-gray-400 max-w-2xl">
                    Full-stack developer crafting responsive, scalable web experiences with React, Next.js, and Laravel.
                    Turning ideas into elegant code.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-purple-500 text-white hover:bg-purple-500/10 transition"
                  >
                    View Work
                    <Rocket className="w-4 h-4" />
                  </a>

                  <a
                    href="mailto:chirantanbramhacharimia2@gmail.com"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:scale-[1.02] transition"
                  >
                    <Zap className="w-4 h-4" />
                    Let's Talk
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Next.js", "Laravel", "PostgreSQL", "Tailwind", "REST APIs"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-slate-800/40 border border-slate-700/40 text-xs md:text-sm text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills Card */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 blur-3xl -z-10" />
                <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-slate-700/50 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Code className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl md:text-2xl font-bold">Tech Arsenal</h3>
                  </div>

                  <div className="space-y-5">
                    {skills.map((skill, idx) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-700/40 rounded-full overflow-hidden mt-2">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                            aria-hidden
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-700/40 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                        3+
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                        15+
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Projects Built</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <span className="text-sm text-purple-300 font-medium">About Me</span>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-slate-700/40">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer who transforms complex problems into elegant solutions. With
                expertise in React, Next.js, and Laravel, I build responsive and performant web applications that deliver
                exceptional user experiences. My approach combines clean code practices, modern toolchains, and a keen eye
                for design.
              </p>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed mt-4">
                I graduated with a BCA (CGPA: 8.6) and have gained real-world experience through internships and full-time
                development work. When I'm not coding, I'm exploring new technologies and contributing to the developer
                community.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-950/60">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <span className="text-sm text-purple-300 font-medium">Experience</span>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Web Developer",
                  company: "Maity Innovations Pvt. Ltd.",
                  period: "May 2025 – Present",
                  tags: ["React", "Next.js", "RTK Query"],
                  points: [
                    "Developed and maintained full-stack applications using React, Next.js and Laravel",
                    "Implemented RTK Query for optimized data fetching and state management",
                    "Built and integrated REST APIs, created responsive mobile UI components with React Native",
                  ],
                },
                {
                  title: "Web Developer Intern",
                  company: "Maity Innovations",
                  period: "Nov 2024 – May 2025",
                  tags: ["React", "Laravel", "Tailwind"],
                  points: [
                    'Led development of "Computer Store" informational website',
                    "Built responsive UI components and implemented backend CRUD operations",
                  ],
                },
                {
                  title: "Business Development Executive",
                  company: "Maity Innovations",
                  period: "Aug 2024 – Nov 2024",
                  tags: ["Client Communications"],
                  points: ["Gathered client requirements and coordinated between technical and business teams"],
                },
              ].map((job, i) => (
                <article
                  key={i}
                  className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/40 hover:border-purple-500/40 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-white">{job.title}</h4>
                      <p className="text-purple-300 font-medium">{job.company}</p>
                      <p className="text-sm text-gray-400 mt-1">{job.period}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      {job.tags.map((t) => (
                        <span key={t} className="px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-300">
                    {job.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▸</span>
                        <p>{p}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <span className="text-sm text-purple-300 font-medium">Featured Projects</span>
            </div>

            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              {[
                {
                  title: "OTT Platform",
                  date: "May 2025",
                  tech: "React Native · API Integration",
                  description:
                    "Mobile streaming app with seamless API integration. Features movie listings, streaming capabilities, and optimized performance with clean UI.",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "Doctor Appointment System",
                  date: "July 2023",
                  tech: "Django · SQLite · Bootstrap",
                  description:
                    "Comprehensive booking platform for medical appointments with prescription management, scheduling system, and user profile functionality.",
                  gradient: "from-cyan-500 to-blue-500",
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="relative group bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-6 rounded-3xl border border-slate-700/40 hover:border-slate-600 transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-8 rounded-3xl -z-10`} />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-white">{project.title}</h4>
                        <p className="text-sm text-gray-400">{project.date}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </div>

                    <p className="text-xs text-purple-300 font-medium mt-2">{project.tech}</p>
                    <p className="text-gray-300 mt-3">{project.description}</p>

                    <div className="flex gap-4 pt-4">
                      <a href="#" className="text-sm text-purple-300 hover:text-purple-200">
                        Live Demo
                      </a>
                      <a href="#" className="text-sm text-gray-400 hover:text-gray-300 flex items-center gap-2">
                        <Github className="w-3 h-3" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <span className="text-sm text-purple-300 font-medium">Get In Touch</span>
            </div>

            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 items-start">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Let's Work Together
                </h3>
                <p className="text-gray-400">
                  I'm open to full-time opportunities and exciting projects. Reach out and let's build something amazing.
                </p>

                <div className="space-y-3">
                  {[
                    { icon: Mail, label: "Email", value: "chirantanbramhacharimia2@gmail.com", href: "mailto:chirantanbramhacharimia2@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+91-9064469835", href: "tel:+919064469835" },
                    { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/chirantan-bramhachari-93682127a/" },
                  ].map((c, i) => (
                    <a
                      key={i}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/40 hover:border-purple-500/40 transition"
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10">
                        <c.icon className="w-5 h-5 text-purple-300" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">{c.label}</p>
                        <p className="font-medium">{c.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-6 rounded-3xl border border-slate-700/40">
                <div className="space-y-4">
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/40 border border-slate-700/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                  />

                  <input
                    required
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/40 border border-slate-700/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                  />

                  <textarea
                    required
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/40 border border-slate-700/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:scale-[1.02] transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-800/40">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Chirantan Bramhachari. Crafted with passion.</p>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/chirantan-bramhachari-93682127a/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800/30 border border-slate-700/40">
              <Linkedin className="w-5 h-5 text-gray-300" />
            </a>
            <a href="mailto:chirantanbramhacharimia2@gmail.com" className="p-2 rounded-lg bg-slate-800/30 border border-slate-700/40">
              <Mail className="w-5 h-5 text-gray-300" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
