"use client";

import {
  Github,
  Instagram,
  Camera,
  Search,
  UiChecks,
} from "react-bootstrap-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurBackground } from "@/components/blur-background";
import Image from "next/image";
import {
  AnimatedCard,
  AnimatedSection,
  AnimatedTitle,
} from "@/components/animated-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-white relative">
      <BlurBackground />

      <header className="sticky top-0 z-10 border-b border-zinc-800/50 bg-black/40 backdrop-blur-md">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex w-full justify-between">
            <a className="mr-6 flex items-center space-x-2 font-black" href="/">
              <span>yuchan's portfolio</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm">
              <a
                className="transition-colors hover:text-zinc-400"
                href="#about"
              >
                About
              </a>
              <a
                className="transition-colors hover:text-zinc-400"
                href="#projects"
              >
                Projects
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 relative z-1">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:justify-between">
              <AnimatedSection className="flex flex-col justify-center space-y-4">
                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <h1
                    className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl"
                    style={{
                      background: "linear-gradient(180deg, #ffffff, #adadad)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Yuchan Park
                  </h1>
                  <p className="text-xl text-zinc-300">
                    Student & Web Developer
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-white hover:bg-white/80 text-black"
                    onClick={() =>
                      window.open("https://github.com/dohyun-0", "_blank")
                    }
                  >
                    <Github className="mr-1" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() =>
                      window.open("https://instagram.conm/yu.ch_09", "_blank")
                    }
                  >
                    <Instagram className="mr-1" />
                    Instagram
                  </Button>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="flex justify-center">
                <Image
                  alt="프로필 이미지"
                  className="w-[200px] sm:w-[300px] rounded-full object-cover border border-zinc-800/50"
                  height="300"
                  width="300"
                  src="/profile.png"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 소개 및 기술 섹션 */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 relative z-1">
            <div className="flex flex-col items-center justify-center space-y-8">
              <AnimatedTitle className="text-center">
                <h2 className="text-3xl font-black tracking-tighter sm:text-4xl lg:text-5xl">
                  소개 및 기술
                </h2>
              </AnimatedTitle>

              <div className="grid gap-8 lg:grid-cols-2">
                <AnimatedCard
                  delay={0.1}
                  className="space-y-4 bg-zinc-900/30 backdrop-blur-sm p-6 rounded-lg border border-zinc-700/30"
                >
                  <h3 className="text-xl font-bold text-white">자기소개</h3>
                  <div className="space-y-4">
                    <p className="text-zinc-300 break-keep">
                      <strong>안녕하세요!</strong> 저는 개발을 취미로 삼고 있는
                      고등학생 개발자 <strong>박유찬</strong>입니다.
                      <br />
                      효율적이고 깔끔한 코드를 작성하는 데에 열정을 가지고
                      있으며, 프로젝트를 기획하고 개발하여, 누군가에게 보여주는
                      것을 좋아합니다.
                      <strong>Vue.js, React, Next.js</strong> 등을 활용해
                      프론트엔드 위주의 개발을 하고 있습니다.
                    </p>
                    <p className="text-zinc-300 break-keep">
                      현재 <strong>명진고등학교</strong>에 재학 중이며,{" "}
                      <strong>방송부</strong>에서 활동하고 있습니다. <br />
                      개발뿐만 아니라 시스템 장비, 영상 편집, 드론 등 여러
                      분야에도 관심을 가지고 있습니다.
                    </p>
                    <p className="text-zinc-300 break-keep">
                      저만의 속도로 꾸준히 배우고, 만들고, 도전하고 있습니다.
                      <br />
                      앞으로도 <strong>새로운 기술과 아이디어</strong>에
                      도전하면서, 더 나은 개발자가 되기 위해 계속
                      노력하겠습니다.
                    </p>
                  </div>
                </AnimatedCard>

                <AnimatedCard
                  delay={0.2}
                  className="space-y-4 bg-zinc-900/30 backdrop-blur-sm p-6 rounded-lg border border-zinc-700/30"
                >
                  <h3 className="text-xl font-bold text-white">기술 스택</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Frontend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="px-3 py-1.5 bg-[#61DAFB80] hover:bg-[#61DAFBbb] border border-[#61DAFB] text-white">
                          React
                        </Badge>
                        <Badge className="px-3 py-1.5 bg-[#00000080] hover:bg-[#000000bb] border border-[#000000] text-white">
                          Next.js
                        </Badge>
                        <Badge className="px-3 py-1.5 bg-[#42B88380] hover:bg-[#42B883bb] border border-[#42B883] text-white">
                          Vue.js
                        </Badge>
                        <Badge className="px-3 py-1.5 bg-[#3178C680] hover:bg-[#3178C6bb] border border-[#3178C6] text-white">
                          TypeScript
                        </Badge>
                        <Badge className="px-3 py-1.5 bg-[#38BDF880] hover:bg-[#38BDF8bb] border border-[#38BDF8] text-white">
                          Tailwind CSS
                        </Badge>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Database
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="px-3 py-1.5 bg-[#47A24880] hover:bg-[#47A248bb] border border-[#47A248] text-white">
                          MongoDB
                        </Badge>
                        <Badge className="px-3 py-1.5 bg-[#003B5780] hover:bg-[#003B57bb] border border-[#003B57] text-white">
                          SQLite
                        </Badge>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Tools & Others
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="px-3 py-1.5 bg-[#3776AB80] hover:bg-[#3776ABbb] border border-[#3776AB] text-white">
                          Python
                        </Badge>
                        <Badge className="px-3 py-1.5 bg-[#47848F80] hover:bg-[#47848Fbb] border border-[#47848F] text-white">
                          Electron
                        </Badge>
                        <Badge className="px-3 py-1.5 bg-[#007ACC80] hover:bg-[#007ACCbb] border border-[#007ACC] text-white">
                          VSCode
                        </Badge>
                        <Badge className="px-3 py-1.5 bg-[#1f1f1f80] hover:bg-[#1f1f1fbb] border border-[#1f1f1f] text-white">
                          Cursor
                        </Badge>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </section>

        {/* 프로젝트 섹션 */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 relative z-1">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedTitle className="space-y-2">
                <h2 className="text-3xl font-black tracking-tighter sm:text-4xl lg:text-5xl">
                  프로젝트
                </h2>
              </AnimatedTitle>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatedCard delay={0.1}>
                  <Card className="bg-zinc-900/30 border-zinc-700/30 text-white backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-center items-center mb-6">
                        <div className="w-24 h-24 rounded-full bg-zinc-800/70 flex items-center justify-center">
                          <Camera className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Life4Cuts</h3>
                        <p className="text-zinc-300 break-keep">
                          Vue.js와 Electron을 활용해 외부 카메라로 촬영한 사진을
                          선택하여 프레임 디자인과 함께 콜라주 형태로 저장하는
                          인생네컷 스타일의 포토부스 프로그램을 개발했습니다.
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
                            Electron
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-zinc-700/50 text-zinc-300"
                          >
                            Web API
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
                <AnimatedCard delay={0.2}>
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
                        <p className="text-zinc-300 break-keep">
                          Python과 Selenium을 활용해 Bing 이미지 검색 자동화를
                          구현하여 입력된 이미지와 유사한 이미지를 탐색하고
                          저장하는 도구를 개발했습니다.
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
                </AnimatedCard>
                <AnimatedCard delay={0.3}>
                  <Card className="bg-zinc-900/30 border-zinc-700/30 text-white backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-center items-center mb-6">
                        <div className="w-24 h-24 rounded-full bg-zinc-800/70 flex items-center justify-center">
                          <UiChecks className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">
                          Dashboard UI (Private Projects)
                        </h3>
                        <p className="text-zinc-300 break-keep">
                          Next.js와 TypeScript를 사용하여 Discord Bot의 대시보드
                          UI를 통해 유저가 봇의 기능을 설정하고 서버에 맞게끔
                          조절할 수 있는 개발했습니다.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
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
                            React
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-zinc-700/50 text-zinc-300"
                          >
                            TypeScript
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-zinc-800/50 bg-black/40 backdrop-blur-sm relative z-1">
        <p className="text-xs text-zinc-500">
          © 2024 박유찬. All rights reserved.
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
        </nav>
      </footer>
    </div>
  );
}
