// app/page.tsx
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="container mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">CB</div>
          <div>
            <h1 className="text-lg font-semibold">Chirantan Bramhachari</h1>
            <p className="text-sm text-gray-600">Full‑Stack Web Developer — React · Next.js · Laravel</p>
          </div>
        </div>

        <nav className="flex gap-4 items-center">
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a
            href="/Chirantan_Bramhachari_Resume.pdf"
            download
            className="ml-4 inline-block rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700"
          >
            Download Resume
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-6">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">Hello — I build web experiences</h2>
            <p className="mt-4 text-gray-700 max-w-2xl">
              I am a passionate Full‑Stack Web Developer with hands-on experience in React, Next.js, Laravel, REST APIs, PostgreSQL
              and modern frontend tools like Tailwind CSS. I build responsive, scalable applications and user-friendly mobile UIs.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="rounded-md border border-indigo-600 px-4 py-2 text-indigo-700 font-medium hover:bg-indigo-50"
              >
                View Projects
              </a>
              <a href="mailto:chirantanbramhacharimia2@gmail.com" className="rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700">
                Hire Me
              </a>
            </div>

            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-600">
              <li>React</li>
              <li>Next.js</li>
              <li>Laravel</li>
              <li>Drizzle ORM</li>
              <li>PostgreSQL</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-md">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-sm text-gray-600 mt-2">Chirantan Bramhachari</p>
            <p className="text-sm text-gray-600">Email: chirantanbramhacharimia2@gmail.com</p>
            <p className="text-sm text-gray-600">Phone: +91-9064469835</p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.linkedin.com/in/chirantan-bramhachari-93682127a/" target="_blank" rel="noreferrer" className="text-indigo-600 underline text-sm">LinkedIn</a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I build responsive and performant web apps using modern toolchains. My recent work includes full‑stack projects using React,
              Next.js, Laravel, and state management with RTK Query. I enjoy building clean UIs, integrating APIs, and shipping production-ready
              code fast. I graduated with a BCA (CGPA: 8.6) and have real-world experience through internships and full-time development work.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-12">
          <h3 className="text-2xl font-semibold">Experience</h3>
          <div className="mt-6 grid gap-6">
            <article className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Maity Innovations Pvt. Ltd. — Web Developer</h4>
                  <p className="text-sm text-gray-600">May 2025 – Present</p>
                </div>
                <div className="text-sm text-gray-500">React · Next.js · RTK Query</div>
              </div>

              <ul className="mt-4 list-disc ml-5 text-gray-700">
                <li>Developed and maintained full-stack applications using React, Next.js and Laravel.</li>
                <li>Implemented RTK Query for optimized data fetching and state management.</li>
                <li>Built and integrated REST APIs, and created responsive mobile UI components with React Native.</li>
              </ul>
            </article>

            <article className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Web Developer Intern — Maity Innovations</h4>
                  <p className="text-sm text-gray-600">Nov 2024 – May 2025</p>
                </div>
                <div className="text-sm text-gray-500">React · Laravel · Tailwind</div>
              </div>

              <ul className="mt-4 list-disc ml-5 text-gray-700">
                <li>Led development of an informational website “Computer Store” and improved online visibility.</li>
                <li>Built responsive UI components and implemented backend CRUD operations.</li>
              </ul>
            </article>

            <article className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Business Development Executive — Maity Innovations</h4>
                  <p className="text-sm text-gray-600">Aug 2024 – Nov 2024</p>
                </div>
                <div className="text-sm text-gray-500">Client Communications</div>
              </div>

              <p className="mt-4 text-gray-700">Gathered client requirements and coordinated between technical and business teams.</p>
            </article>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold">Projects</h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold">OTT Platform (May 2025)</h4>
              <p className="text-sm text-gray-600 mt-1">React Native · API Integration</p>
              <p className="mt-3 text-gray-700">Mobile app that lists and streams movies by consuming APIs. Focused on clean UI and performance.</p>
              <div className="mt-4 flex gap-2">
                <a className="text-indigo-600 underline text-sm" href="#">Live Demo</a>
                <a className="text-indigo-600 underline text-sm" href="#">Source</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold">Doctor Appointment System (July 2023)</h4>
              <p className="text-sm text-gray-600 mt-1">Django · SQLite · Bootstrap</p>
              <p className="mt-3 text-gray-700">Web application for booking doctor appointments and receiving prescriptions online. Implemented scheduling and user profiles.</p>
              <div className="mt-4 flex gap-2">
                <a className="text-indigo-600 underline text-sm" href="#">Live Demo</a>
                <a className="text-indigo-600 underline text-sm" href="#">Source</a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12 mb-24">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="mt-2 text-gray-700">I'm open to full-time opportunities. Email me or use the contact details to get in touch.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium">chirantanbramhacharimia2@gmail.com</p>

                <p className="mt-4 text-sm text-gray-600">Phone</p>
                <p className="font-medium">+91-9064469835</p>

                <p className="mt-4 text-sm text-gray-600">LinkedIn</p>
                <a href="https://www.linkedin.com/in/chirantan-bramhachari-93682127a/" target="_blank" rel="noreferrer" className="font-medium text-indigo-600 underline">View Profile</a>
              </div>

              <form className="space-y-4">
                <input type="text" name="name" placeholder="Your name" className="w-full rounded-md border px-3 py-2" />
                <input type="email" name="email" placeholder="Your email" className="w-full rounded-md border px-3 py-2" />
                <textarea name="message" rows={4} placeholder="Message" className="w-full rounded-md border px-3 py-2"></textarea>
                <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 py-8 border-t">
        <div className="container mx-auto px-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} Chirantan Bramhachari — Built with Next.js & Tailwind CSS</div>
      </footer>
    </div>
  );
}
