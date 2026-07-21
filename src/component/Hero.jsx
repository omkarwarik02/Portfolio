import {
  SquareTerminal,
  Users,
  Mail,
  FileUserIcon,
  Link2,
  Code,
} from "lucide-react";
import Devlens from "../assets/Devlens.jpeg";
import Helio from "../assets/Helio.jpeg";
import emoji from "../assets/emoji.jpeg";
import { GitHubCalendar } from 'react-github-calendar';
import Reveal from "./Reveal";

function Hero() {
  return (
    <>
      <div className="mt-16 md:mt-34 mb-8 flex flex-col items-center fade-in">
        <div className="w-full max-w-[672px] px-4 md:px-6">
          {/** first div*/}
          <Reveal className="flex flex-row justify-between items-center">
            <img
              src={emoji}
              alt="omkar"
              className="w-16 h-16 rounded-full object object-cover"
            ></img>
            <div className="flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
              Open to work
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col items-start mt-5">
            <h1 className="text-2xl md:text-[32px] font-bold">
              hi, i'm omkar 👋
            </h1>
            <small className="text-[#444748] mt-1">
              Full Stack Developer · MERN & MEAN Stack · Pune, India
            </small>
            <div className="mt-3 flex flex-row flex-wrap gap-2 items-center">
              <a
                href="https://github.com/omkarwarik02"
                target="_blank"
                className="p-2 border border-[#ebebeb] rounded-lg hover:bg-[#f5f3f3]"
              >
                <SquareTerminal size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/omkar-warik-7360b122b/"
                target="_blank"
                className="p-2 border border-[#ebebeb] rounded-lg hover:bg-[#f5f3f3]"
              >
                <Users size={18} />
              </a>
              <a
                href="mailto:omkarwarik1204@gmail.com"
                className="p-2 border border-[#ebebeb] rounded-lg hover:bg-[#f5f3f3]"
              >
                <Mail size={18} />
              </a>
              <a
                href="/Omkar_Resume.pdf"
                download="Omkar_Resume.pdf"
                className="p-2 bg-[#111111] rounded-lg flex items-center gap-2 cursor-pointer hover:opacity-90"
              >
                <FileUserIcon size={18} className="text-white" />
                <span className="text-white text-xs font-medium">Resume</span>
              </a>
            </div>
          </Reveal>

          {/**2nd div */}
          <Reveal id="about" className="mt-10 flex flex-col items-start">
            <h1 className="text-[24px] font-bold">About</h1>

            <p className="mt-3 text-[#444748] text-left text-sm md:text-base">
              Full-stack developer with hands-on experience building and
              deploying real-time, AI-powered web applications. I work across
              the MERN and MEAN stacks — React, Angular, Node.js, Express,
              MongoDB. I enjoy solving real problems and shipping
              production-ready products. Currently open to entry-level
              full-stack roles.
            </p>
          </Reveal>
          {/**line */}
          <hr className="border-t border-[#ebebeb] my-8" />
          <Reveal className="flex flex-col items-start">
            <h1 className="text-[24px] font-bold">Education</h1>
            <div className="flex flex-row items-center gap-4 py-4">
              <div className="rounded-full bg-purple-600 h-[48px] w-[48px] justify-center items-center flex flex-row shrink-0">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-left">PCET NMIET, SPPU</h1>
                <small className="text-[#444748]">
                  B.E. Computer Engineering · 2021–2025 · CGPA 7.07
                </small>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 py-4">
              <div className="rounded-full bg-blue-500 h-[48px] w-[48px] justify-center items-center flex flex-row shrink-0">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-left">
                  Reliance Foundation School
                </h1>
                <small className="text-[#444748]">
                  HSC · Maharashtra State Board · 2021 · 76.67%
                </small>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 py-4">
              <div className="rounded-full bg-blue-500 h-[48px] w-[48px] justify-center items-center flex flex-row shrink-0">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-left">
                  Reliance Foundation School
                </h1>
                <small className="text-[#444748]">
                  SSC · Maharashtra State Board · 2019 · 82%
                </small>
              </div>
            </div>
          </Reveal>
          <hr className="border-t border-[#ebebeb] my-8" />
          <Reveal className="flex flex-col items-start">
            <h1 className="text-[24px] font-bold">Stack</h1>

            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "JavaScript",
                "TypeScript",
                "Java",
                "React",
                "Angular",
                "Html",
                "CSS",
                "Angular Material",
                "PrimeNG",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "GraphQL",
                "Socket.IO",
                "REST API",
                "Git",
                "Github",
                "Postman",
                "Vercel",
                "Render",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#f4f4f5] text-[#111111] rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
          <hr className="border-t border-[#ebebeb] my-8" />
          <Reveal className="flex flex-col items-start">
            <h1 className="text-[24px] font-bold">Open Source Packages</h1>
            <div className="flex mt-5 flex-col items-start">
              <h1 className="font-bold">
                📦 @omkarwarik1204/stark{" "}
                <span className="ml-3 text-sm font-light">
                  (React Component Library)
                </span>
              </h1>
              <p className="mt-3 font-bold"></p>
              <p className="text-left mt-3 text-[#444748] text-sm md:text-base">
                A collection of reusable React components built with TypeScript
                and Tailwind CSS. Designed to streamline UI development with
                production-ready components.
              </p>
              <p className="text-left mt-3 text-[#444748] text-sm md:text-base">
                Components: - Dynamic Island Navbar, Expands horizontally on
                interaction with smooth transitions and dynamic gap spacing.
                Modern, polished navigation component for sleek UI designs.
              </p>
              <p className="text-left mt-3 text-[#444748] text-sm md:text-base">
                FAQ Accordion, Click to expand/collapse FAQ items with smooth
                transitions. Only one item opens at a time for clean, organized
                content presentation.
              </p>
              <p className="text-left mt-3 text-[#444748] text-sm md:text-base">
                Features: - Full TypeScript support with type declarations -
                Tailwind CSS styling for easy customization - ESM and CommonJS
                module support - Published on npm
              </p>
              <a
                href="https://www.npmjs.com/package/@omkarwarik1204/omkar-ui"
                className="mt-3 "
              >
                Link
              </a>
            </div>
          </Reveal>

          <hr className="border-t border-[#ebebeb] my-8" />
          <div id="projects" className="flex flex-col items-start">
            <Reveal className="flex flex-col items-start">
              <h1 className="text-[24px] font-bold">My Projects</h1>
              <small className="text-[#444748]">Check out my latest work</small>
            </Reveal>

            <Reveal className="flex mt-5 flex-col w-full">
              <img
                src={Devlens}
                alt="DevLens project"
                className="rounded-2xl w-full object-cover"
              ></img>
              <h1 className="font-bold text-left mt-5 text-[#444748]">
                DevLens
              </h1>
              <p className="text-left mt-3 text-[#444748] text-sm md:text-base">
                AI-powered code review tool. Paste your code, get detailed AI
                feedback with ratings, suggestions, and best practices across 6
                languages.
              </p>
              <small className="text-left tracking-widest font-bold mt-3">
                React | TypeScript | Node.js | Express.js | MongoDB | Groq AI
              </small>

              <div className="flex items-center mt-2 gap-4">
                <a
                  href="https://dev-lens-murex.vercel.app/"
                  target="_blank"
                  className="flex flex-row items-center gap-1"
                >
                  <Link2 size={14} className="text-[#7C3AED]" />
                  <small className="text-[#7C3AED] font-bold">Website</small>
                </a>
                <a
                  href="https://github.com/omkarwarik02/DevLens"
                  target="_blank"
                  className="flex flex-row items-center gap-1"
                >
                  <Code size={14} />
                  <small className="font-bold">Source</small>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col mt-12 w-full">
              <img
                src={Helio}
                alt="Helio project"
                className="rounded-2xl w-full object-cover"
              ></img>
              <h1 className="font-bold text-left mt-5 text-[#444748]">Helio</h1>
              <p className="text-left mt-3 text-[#444748] text-sm md:text-base">
                AI-powered study planner. Generates personalised 7-day study
                plans, task breakdowns, and an AI chat assistant from
                user-provided subjects.
              </p>
              <small className="text-left tracking-widest font-bold mt-3">
                Angular | Node.js | Express.js | MongoDB | Groq AI | Better Auth
              </small>

              <div className="flex items-center mt-2 gap-4">
                <a
                  href="https://helio-kohl.vercel.app/"
                  target="_blank"
                  className="flex flex-row items-center gap-1"
                >
                  <Link2 size={14} className="text-[#7C3AED]" />
                  <small className="text-[#7C3AED] font-bold">Website</small>
                </a>
                <a
                  href="https://github.com/omkarwarik02/Helio"
                  target="_blank"
                  className="flex flex-row items-center gap-1"
                >
                  <Code size={14} />
                  <small className="font-bold">Source</small>
                </a>
              </div>
            </Reveal>
          </div>
           <hr className="border-t border-[#ebebeb] my-8" />
              <Reveal className="flex flex-col items-center">
                <GitHubCalendar
                  username = 'omkarwarik02'
                  colorScheme="light"
                  fontSize={12}
                >
                </GitHubCalendar>

              </Reveal>
          <hr className="border-t border-[#ebebeb] my-8" />

          <Reveal id="contact" className="flex flex-col text-center">
            <h1 className="font-bold">Get in touch</h1>
            <small className="mt-3 px-4">
              I'm currently open to full-time entry-level roles. Feel free to
              reach out at omkarwarik1204@gmail.com — I'll respond whenever I
              can.
            </small>
          </Reveal>

          <Reveal delay={0.1} className="flex gap-4 items-center justify-center mt-3">
            <a
              href="mailto:omkarwarik1204@gmail.com"
              className="text-xs text-[#444748] hover:text-[#111111]"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/omkar-warik-7360b122b/"
              target="_blank"
              className="text-xs text-[#444748] hover:text-[#111111]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/omkarwarik02?tab=overview&from=2026-01-01&to=2026-01-12"
              target="_blank"
              className="text-xs text-[#444748] hover:text-[#111111]"
            >
              GitHub
            </a>
          </Reveal>
        </div>
      </div>
      <Reveal className="mt-20 border-t border-[#ebebeb] py-8 w-full text-center">
        <small className="text-[#444748]">
          © 2026 Omkar Warik. Built with precision.
        </small>
      </Reveal>
    </>
  );
}
export default Hero;
