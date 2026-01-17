'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Mail, Layers, GraduationCap, Code2 } from "lucide-react";

// Updated Data
const PROJECTS = [
  {
    title: "The Vault.",
    description: "Secure, end-to-end asset repository on Sui. Engineered for speed, providing a streamlined environment for tracking data.",
    tech: ["Sui Move", "NextJS", "TypeScript"],
    link: "https://github.com/ramosdalrymple-afk/vault-sui-escrow.git",
    featured: true, // Takes up 2 columns
  },
  {
    title: "Glitch Freak Marketplace",
    description: "Specialized NFT platform with genetic sequences and on-chain volatility attributes.",
    tech: ["Sui Move", "React", "Tailwind"],
    link: "https://github.com/ramosdalrymple-afk/glitch-freak-nft-marketplace",
    featured: false,
  },
  {
    title: "Beats Music",
    description: "Decentralized music ecosystem allowing artists to tokenize tracks as unique objects.",
    tech: ["Sui Move", "React", "TypeScript"],
    link: "https://github.com/ramosdalrymple-afk/beats-music-nft-marketplace",
    featured: false,
  },
  {
    title: "LinguaAR",
    description: "AR-based learning platform for Filipino Sign Language with real-time recognition.",
    tech: ["Flutter", "ML", "Python"],
    link: "https://github.com/ramosdalrymple-afk/LinguaAR",
    featured: true, // Takes up 2 columns
  },
];

export default function Home() {
  return (
    // Usage of 'bg-background' and 'text-foreground' ensures strict adherence to globals.css variables
    <main className="min-h-screen bg-background px-6 pt-12 pb-32 md:pt-24 md:pb-40 font-sans text-foreground selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <div className="mx-auto max-w-2xl space-y-16">
        
        {/* --- HERO SECTION --- */}
        <section className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-4 max-w-lg">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Zeena Myloves
              </h1>
              <p className="text-lg text-muted-foreground mt-1 font-medium">
                UI/UX Designer
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Currently pursuing my IT degree at the University of Pangasinan, I find my passion at the intersection of <span className="text-foreground font-medium">development and design</span>. I’ve developed a keen eye for <span className="text-foreground font-medium">UI/UX design</span>, aiming to build digital solutions that feel seamless to the end-user. 
            I enjoy the process of turning a design concept into a working product, and while I’m always striving to improve my technical skills.
            </p>
            
            {/* Social Mini-Links */}
            <div className="flex gap-4 pt-2">
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswLwPwFlbRcwMgFmHCQSFNxXQRSWhcPcCQcTnPQDLtVbTCPSNKSFkdVSxDdpHdzmzbPv" className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <Link href="https://github.com/zeendc" target="_blank" className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-4 w-4" /> GitHub
              </Link>
            </div>
          </div>

          <div className="relative h-25 w-25 md:h-35 md:w-35 shrink-0 overflow-hidden rounded-full border-2 border-border bg-muted shadow-sm">
            <Image 
              src="/zzz.png" 
              alt="Zeena Dela Cruz-Ramos" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* --- BENTO GRID: WORK & EDUCATION --- */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-foreground font-semibold text-lg">
            <Layers className="h-4 w-4" />
            <h2>Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {PROJECTS.map((project) => (
              <Link 
                key={project.title}
                href={project.link}
                target="_blank"
                // FIX: Using 'bg-card' and 'text-card-foreground' forces the component to use the CSS variables defined in globals.css
                // This prevents the "Dark Mode in Light Mode" bug by relying on the global theme state.
                className={`
                  group relative flex flex-col justify-between overflow-hidden rounded-2xl 
                  border border-border 
                  bg-card text-card-foreground
                  p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300
                  ${project.featured ? 'md:col-span-2' : 'md:col-span-1'}
                `}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    // Using 'bg-muted' ensures this tag is light gray in Light Mode and dark gray in Dark Mode automatically
                    <span key={t} className="inline-flex items-center rounded-md bg-muted border border-border px-2 py-1 text-[10px] font-medium text-foreground uppercase tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}

          </div>
        </section>

        {/* --- EDUCATION & SKILLS SPLIT --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Education Card */}
          <div className="rounded-2xl border border-border p-6 bg-card text-card-foreground">
            <div className="flex items-center gap-2 mb-4 text-foreground font-medium">
              <GraduationCap className="h-4 w-4" />
              <h3>Education</h3>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">BS Information Technology</p>
              <Link href="https://up.phinma.edu.ph/" target="_blank" className="text-xs text-muted-foreground hover:underline">
                PHINMA University of Pangasinan
              </Link>
              <p className="text-xs text-muted-foreground mt-2">2022 — Present</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Software Development, Data Structures, and emerging web technologies.
              </p>
            </div>
          </div>

          {/* Stack Card */}
          <div className="rounded-2xl border border-border p-6 bg-card text-card-foreground">
             <div className="flex items-center gap-2 mb-4 text-foreground font-medium">
              <Code2 className="h-4 w-4" />
              <h3>Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Next.js", "TypeScript", "Sui Move", "Tailwind", "React", "Node.js", "Git"
              ].map((skill) => (
                <span key={skill} className="px-2.5 py-1 rounded-md bg-muted text-xs text-foreground border border-border cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </section>

        {/* --- FOOTER --- */}
        <footer className="pt-12 pb-4 text-center">
          <p className="text-muted-foreground text-xs font-mono">
            © {new Date().getFullYear()} Zeena Dela Cruz. All rights reserved.
          </p>
        </footer>

      </div>
    </main>
  );
}