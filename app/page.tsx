"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter, Facebook, Youtube } from "lucide-react"
import { motion } from "framer-motion"

import { FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { WorkCard } from "@/components/work-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { ProfileCard } from "@/components/profile-card"
import { FloatingMusicPlayer } from "@/components/floating-music-player"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <ScrollProgress />
      <FloatingNav />
      <FloatingMusicPlayer />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dotted Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/background.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Profile Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <ProfileCard
              name="HunggVN"
              jobTitle="Minecraft Youtuber with 600k subs"
              location="Vietnam"
              avatar="/logo.jpg?height=200&width=200"
              joinedDate="2020"
            />
          </div>

          {/* Right side - Welcome Message */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="inline-block">
                <div className="relative px-4 py-2 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <span className="relative z-10">Welcome to my profile</span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 animate-pulse"></span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block text-white">Learning everything</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  of Minecraft
                </span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-300 max-w-[600px] leading-relaxed">
                They call me the Minecraft Prince
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-blue-500 border-0"
                onClick={() => window.open("https://www.youtube.com/@hungg", "_blank")}
              >
                <span className="relative z-10 flex items-center">
                  Visit my Youtube Channel <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-600 text-zinc-300 hover:text-black hover:border-zinc-400 bg-transparent backdrop-blur-sm"
                onClick={() => window.open("http://discord.gg/hunggvn", "_blank")}
              >
                Join my Discord Server
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <Link href="https://www.facebook.com/RealHunggVN/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white backdrop-blur-sm"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://www.youtube.com/@hungg" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white backdrop-blur-sm"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">Youtube</span>
                </Button>
              </Link>
              <Link href="mailto:hungg.business@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white backdrop-blur-sm"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
               <Link href="discord.gg/hunggvn">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white backdrop-blur-sm"
                >
                  <FaDiscord className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My personal story" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://upload.cdn.akk1to.is-a.dev/content/hunggavt.png"
                  alt="akk1to.dev"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum rutrum ultricies. In auctor gravida neque quis egestas. Aenean dictum nunc nec neque volutpat, quis condimentum ex sollicitudin. Praesent vitae gravida mi. Praesent bibendum tellus eget erat sodales, in iaculis nulla rhoncus. Suspendisse potenti. Vivamus non ultricies tellus. Nunc accumsan enim in leo posuere placerat. Suspendisse potenti.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Integer ut massa sit amet diam pulvinar eleifend. In at facilisis neque. Integer ut eros ultrices, molestie lacus ut, commodo enim. In maximus dignissim arcu id tincidunt. Nunc bibendum sem vel nibh rhoncus, vitae efficitur dolor consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut lobortis ipsum et nibh condimentum sagittis. Suspendisse potenti.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Hưng Lê</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">hungg.business@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Vietnam</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button 
                    className="bg-zinc-800 hover:bg-zinc-700 text-white"
                    onClick={() => window.open("https://www.youtube.com/@hungg", "_blank")}
                  >
                    Visit my Youtube Channel
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Section */}
      <section id="channel" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Youtube Channels" subtitle="My own Youtube Channels" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <WorkCard
              title="HunggVN"
              description="This is my main Youtube Channel. I usually upload my videos about Minecraft here."
              tags={["@Hungg"]}
              image="https://upload.cdn.akk1to.is-a.dev/content/channels4_profile.jpg"
              subs="660.000 subs"
              discordUrl="https://www.youtube.com/@hungg"
            />
            <WorkCard
              title="hungg."
              description="This is my second Youtube Channel. I usually stream Minecraft here."
              tags={["@HunggThe2nd"]}
              image="https://upload.cdn.akk1to.is-a.dev/content/hungg2nd.jpg"
              subs="53.000 subs"
              discordUrl="https://www.youtube.com/@hunggthe2nd"
            />
            <WorkCard
              title="Hungg Too"
              description="Another Youtube Channel! This channel is where I post my Youtube Shorts!"
              tags={["@HunggToo"]}
              image="https://upload.cdn.akk1to.is-a.dev/content/hunggtoo.jpg"
              subs="56.800 subs"
              discordUrl="https://www.youtube.com/@HunggToo"
            />
          </div>
        </div>
      </section>

      <section id="community" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="My Community" subtitle="Some of my community" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="HunggSMP"
              description="My own Minecraft Server, where my friends & members can play Minecraft together!"
              tags={["IP: hunggsmp.org"]}
              image="https://upload.cdn.akk1to.is-a.dev/content/hunggsmp.png"
              demoUrl="http://discord.gg/hunggvn"
              repoUrl="Minecraft"
            />
            <ProjectCard
              title="Hungg's Basement"
              description="Hungg's Basement is where everyone can hang out with each other online!"
              tags={["discord.gg/hunggvn"]}
              image="https://upload.cdn.akk1to.is-a.dev/content/hunggdiscord.png"
              demoUrl="http://discord.gg/hunggvn"
              repoUrl="Discord"
            />
            {/* <ProjectCard
              title="YugiReborn (Private)"
              description="A project of recreating Yugioh Game online"
              tags={["HTML/JSS", "Web Game", "JavaScript", "Firebase"]}
              image="https://upload.cdn.akk1to.is-a.dev/content/project3.jpg"
              demoUrl="https://github.com/akk1to"
              repoUrl="https://github.com/akk1to"
            /> */}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="My Achievements" subtitle="My Youtuber journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">hungg.business@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Facebook className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Facebook</div>
                    <div className="font-medium">facebook.com/RealHunggVN</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Youtube className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Youtube</div>
                    <div className="font-medium">youtube.com/@Hungg</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <FaDiscord className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Discord</div>
                    <div className="font-medium">discord.gg/hunggvn</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for business</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Hungg</span>
              <span className="text-white">VN</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} HunggVN. Made with ❤️ by akk1to.dev
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/RealHunggVN/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white backdrop-blur-sm"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://www.youtube.com/@hungg" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white backdrop-blur-sm"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">Youtube</span>
                </Button>
              </Link>
              <Link href="mailto:hungg.business@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white backdrop-blur-sm"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
               <Link href="discord.gg/hunggvn">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white backdrop-blur-sm"
                >
                  <FaDiscord className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </Button>
              </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
