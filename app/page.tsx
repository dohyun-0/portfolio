"use client";

import { Github, Instagram, CameraIcon, Search, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurBackground } from "@/components/blur-background";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-white relative">
      <BlurBackground />

      {/* 헤더 */}
      <header className="sticky top-0 z-10 border-b border-zinc-800/50 bg-black/40 backdrop-blur-md">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a
              className="mr-6 flex items-center space-x-2 font-bold cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.querySelector("#home");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span>Yuchan's Portfolio</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a
                className="transition-colors hover:text-zinc-400 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.querySelector("#about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                About
              </a>
              <a
                className="transition-colors hover:text-zinc-400 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.querySelector("#projects");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Project
              </a>
              <a
                className="transition-colors hover:text-zinc-400 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.querySelector("#contact");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center md:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <span className="sr-only">메뉴</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 relative z-1">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white font-paper9">
                    Yuchan Park
                  </h1>
                  <p className="text-xl text-zinc-300">
                    Web Developer & <br />
                    Student Developer
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    className="bg-white text-black hover:bg-zinc-200 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => {
                      const aboutSection = document.querySelector("#about");
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    See More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  alt="프로필 이미지"
                  className="rounded-full object-cover border border-zinc-800/50"
                  height="400"
                  width="400"
                  src="./profile.png"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 소개 및 기술 섹션 */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 relative z-1">
            <div className="flex flex-col items-center justify-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center text-white">
                About
              </h2>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-4 bg-zinc-900/30 backdrop-blur-sm p-6 rounded-lg border border-zinc-700/30">
                  <h3 className="text-xl font-bold text-white">Introducing</h3>
                  <div className="space-y-4">
                    <p className="text-zinc-300">
                      안녕하세요, 개발이 취미인 학생 개발자 유찬이라고 합니다.
                      <br />
                      주로 React나 Next.js, Vue.js등을 이용해서 웹 개발을 하고
                      있습니다.
                      <br />
                      현재 명진고등학교에서 재학 중이며 방송부로 활동 하고
                      있습니다.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 bg-zinc-900/30 backdrop-blur-sm p-6 rounded-lg border border-zinc-700/30">
                  <h3 className="text-xl font-bold text-white">Skill Stacks</h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    <Badge className="px-3 py-1.5 bg-[#e34f263f] text-white hover:bg-[#d8431c6f] border-[#e34f26]/50">
                      HTML
                    </Badge>
                    <Badge className="px-3 py-1.5 bg-[#1572b63f] text-white hover:bg-[#1261a06f] border-[#1572b6]/50">
                      CSS
                    </Badge>
                    <Badge className="px-3 py-1.5 bg-[#3178c63f] text-white hover:bg-[#2565b46f] border-[#3178c6]/50">
                      TypeScript
                    </Badge>
                    <Badge className="px-3 py-1.5 bg-[#f7df1e3f] text-white hover:bg-[#e6cf1b6f] border-[#f7df1e]/50">
                      JavaScript
                    </Badge>
                    <Badge className="px-3 py-1.5 bg-[#06b6d43f] text-white hover:bg-[#05a6c06f] border-[#06b6d4]/50">
                      Tailwind CSS
                    </Badge>
                    <Badge className="px-3 py-1.5 bg-[#61dafb3f] text-white hover:bg-[#52c0e06f] border-[#61dafb]/50">
                      React
                    </Badge>
                    <Badge className="px-3 py-1.5 bg-[#0000003f] text-white hover:bg-[#1a1a1a6f] border-[#000000]/50">
                      Next.js
                    </Badge>
                    <Badge className="px-3 py-1.5 bg-[#47848f3f] text-white hover:bg-[#3c737c6f] border-[#47848f]/50">
                      Electron
                    </Badge>
                    <Badge className="px-3 py-1.5 bg-[#43853d3f] text-white hover:bg-[#386d336f] border-[#43853d]/50">
                      Node.js
                    </Badge>
                    <Badge className="px-3 py-1.5 bg-[#3776ab3f] text-white hover:bg-[#2f67966f] border-[#3776ab]/50">
                      Python
                    </Badge>
                    <Badge className="px-3 py-1.5 bg-[#47a2483f] text-white hover:bg-[#3d8f3e6f] border-[#47a248]/50">
                      MongoDB
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 프로젝트 섹션 */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 relative z-1">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Projects
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-zinc-900/30 border-zinc-700/30 text-white backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-center items-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-zinc-800/70 flex items-center justify-center">
                        <CameraIcon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">
                        Life4Cuts (인생네컷)
                      </h3>
                      <p className="text-zinc-300">
                        Vue.js와 Electron을 활용하여 외부 카메라를 통해
                        인생네컷을 찍어서 사진을 저장할 수 있는 기능을
                        구현했습니다.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Badge
                          variant="outline"
                          className="border-zinc-700/50 text-zinc-300"
                        >
                          Vue.js
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-zinc-700/50 text-zinc-300"
                        >
                          CSS
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-zinc-700/50 text-zinc-300"
                        >
                          Typescript
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-zinc-700/50 text-zinc-300"
                        >
                          Electron
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-900/30 border-zinc-700/30 text-white backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-center items-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-zinc-800/70 flex items-center justify-center">
                        <Search className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">
                        Search Similar Image
                      </h3>
                      <p className="text-zinc-300">
                        Python과 Selenium을 이용해서 구글 이미지 검색을 통해
                        비슷한 이미지를 검색하는 기능을 구현했습니다.
                        <br />
                        (인증 문제로 개발 중단)
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Badge
                          variant="outline"
                          className="border-zinc-700/50 text-zinc-300"
                        >
                          Python
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-zinc-700/50 text-zinc-300"
                        >
                          Selenium
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-900/30 border-zinc-700/30 text-white backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-center items-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-zinc-800/70 flex items-center justify-center">
                        <BarChart3 className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">
                        대시보드 UI (Private Project)
                      </h3>
                      <p className="text-zinc-300">
                        React와 TypeScript를 사용하여 개발한 관리자 대시보드
                        UI입니다. 데이터 시각화, 사용자 관리, 설정 기능 등을
                        구현했습니다.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Badge
                          variant="outline"
                          className="border-zinc-700/50 text-zinc-300"
                        >
                          React
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-zinc-700/50 text-zinc-300"
                        >
                          Next.js
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-zinc-700/50 text-zinc-300"
                        >
                          Typescript
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 relative z-1">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Contact
              </h2>
              <div className="mx-auto flex max-w-sm items-center gap-6 py-6 lg:max-w-4xl lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-700/30 bg-zinc-900/30 p-6 backdrop-blur-sm">
                  <Github className="h-12 w-12 text-white" />
                  <h3 className="text-xl font-bold text-white">GitHub</h3>
                  <p className="text-zinc-300">github.com/dohyun-0</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-700/30 bg-zinc-900/30 p-6 backdrop-blur-sm">
                  <Instagram className="h-12 w-12 text-white" />
                  <h3 className="text-xl font-bold text-white">Instagram</h3>
                  <p className="text-zinc-300">instagram.com/yu.ch_09</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-zinc-800/50 bg-black/40 backdrop-blur-sm relative z-1">
        <p className="text-xs text-zinc-500">
          © 2025 박유찬. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:text-zinc-400 text-zinc-500"
            href="#about"
          >
            About
          </a>
          <a
            className="text-xs hover:text-zinc-400 text-zinc-500"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-xs hover:text-zinc-400 text-zinc-500"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </footer>
    </div>
  );
}
