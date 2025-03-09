"use client";

import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

import Profile from "@/assets/profile.png";
import Server1 from "@/assets/server1.gif";
import Server2 from "@/assets/server2.gif";

const Card = styled.div`
  position: relative;
  height: 100%;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 15px;
    right: 15px;
    bottom: 0;
    border-top: 1px solid #9f9f9f;
    border-bottom: 1px solid #9f9f9f;
  }
  &::after {
    content: "";
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    bottom: 15px;
    border-left: 1px solid #9f9f9f;
    border-right: 1px solid #9f9f9f;
  }
`;

const ArrowTL = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    width: 2px;
    height: 8px;
    background: white;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 2px;
    background: white;
  }
`;
const ArrowTR = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    right: 0;
    width: 2px;
    height: 8px;
    background: white;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 2px;
    background: white;
  }
`;
const ArrowBL = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 10px;
  height: 10px;
  &::before {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 2px;
    height: 8px;
    background: white;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 2px;
    background: white;
  }
`;
const ArrowBR = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  &::before {
    content: "";
    position: absolute;
    bottom: 2px;
    right: 0;
    width: 2px;
    height: 8px;
    background: white;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 2px;
    background: white;
  }
`;

const Arrows = () => (
  <div className="absolute top-0 left-0 right-0 bottom-0">
    <ArrowTL />
    <ArrowTR />
    <ArrowBL />
    <ArrowBR />
  </div>
);

export default function Page() {
  return (
    <div className="p-10 flex justify-center">
      <main className="max-w-7xl grid grid-cols-1 gap-10">
        <article className="flex flex-col lg:flex-row gap-10">
          <section className="w-full h-full">
            <Card>
              <div className="px-5 py-3 border-b border-[#9f9f9f] font-bold">
                Profile
              </div>
              <div className="p-5 flex flex-col [@media(min-width:441px)]:flex-row items-center [@media(min-width:441px)]:items-start gap-5">
                <Image
                  src={Profile}
                  alt=""
                  className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] duration-150"
                />
                <div className="h-[100px] sm:h-[150px] flex flex-col justify-between items-center [@media(min-width:441px)]:items-start gap-2">
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <h1 className="text-3xl sm:text-4xl font-black">
                      dohyun.0
                    </h1>
                    <p className="text-md">Student Developer</p>
                  </div>
                  <div className="flex gap-2 sm:gap-5 z-99">
                    <Link
                      className="px-2 py-1 sm:px-4 sm:py-2 border text-sm sm:text-base duration-150 hover:bg-white/90 hover:text-black"
                      href="https://discord.com/users/912950179055935489"
                    >
                      Discord
                    </Link>
                    <Link
                      className="px-2 py-1 sm:px-4 sm:py-2 border text-sm sm:text-base duration-150 hover:bg-white/90 hover:text-black"
                      href="https://github.com/dohyun-0"
                    >
                      Github
                    </Link>
                  </div>
                </div>
              </div>
              <Arrows />
            </Card>
          </section>
          <section className="w-full h-full">
            <Card>
              <div className="px-5 py-3 border-b border-[#9f9f9f] font-bold">
                About
              </div>
              <div className="p-5 flex flex-col gap-3">
                <p className="break-keep">
                  안녕하세요, 개발이 취미인 학생 개발자 도현이라고 합니다.
                </p>
                <p className="break-keep">
                  주로 React를 이용한 프론트엔드 개발과 discord.py를 사용하여
                  디스코드 봇 개발 등 여러 활동을 하고 있는 고등학생
                  개발자입니다.
                </p>
                <p className="break-keep">
                  현재 디스코드 플랫폼에서 月구인구직 소유자 및 블랙리스트 &
                  솔이봇 악성유저 검토자로 활동하고 있습니다.
                </p>
              </div>
              <Arrows />
            </Card>
          </section>
        </article>
        <article className="flex flex-col lg:flex-row gap-10">
          <section className="w-full">
            <Card>
              <div className="px-5 py-3 border-b border-[#9f9f9f] font-bold">
                Project
              </div>
              <div className="p-5 flex flex-col gap-5">
                <Card className="w-full">
                  <div className="p-5 flex flex-col gap-3">
                    <h1 className="text-xl font-bold">search-similar-image</h1>
                    <p className="break-keep text-sm sm:text-base duration-150">
                      해당 프로젝트는 디스코드 친목 서버에서 얼공방 도용을
                      방지하기 위해 제작되었습니다. Python의 Selenium으로
                      이용하여 Bing Visual Search에 이미지를 검색 하여 해당 이미지와 비슷한 이미지를
                      로컬에 저장을 합니다.
                    </p>
                  </div>
                  <Arrows />
                </Card>
                <Card className="w-full">
                  <div className="p-5 flex flex-col gap-3">
                    <h1 className="text-xl font-bold">discord-music-bot</h1>
                    <p className="break-keep text-sm sm:text-base duration-150">
                      개인 공부 목적으로 제작한 프로젝트 입니다. discord.py와
                      Lavalink를 이용하여 디스코드 음성채널에서 노래를 재생하는
                      봇 입니다.
                    </p>
                  </div>
                  <Arrows />
                </Card>
                <Card className="w-full">
                  <div className="p-5 flex flex-col gap-3">
                    <h1 className="text-xl font-bold">discord-bot-dashboard</h1>
                    <p className="break-keep text-sm sm:text-base duration-150">
                      개인 공부 목적으로 제작한 프로젝트 입니다. Next.js와
                      TailwindCSS를 이용해서 디스코드 봇의 간단한 세부 설정을
                      하는 웹 사이트 입니다.
                    </p>
                  </div>
                  <Arrows />
                </Card>
              </div>
              <Arrows />
            </Card>
          </section>
          <section className="w-full">
            <Card>
              <div className="px-5 py-3 border-b border-[#9f9f9f] font-bold">
                Tech Stacks
              </div>
              <div className="p-5 flex flex-col gap-5">
                <Card className="w-full">
                  <div className="p-5 flex flex-col gap-3">
                    <h1 className="text-xl font-bold">Language</h1>
                    <div className="flex flex-wrap gap-3">
                      <div className="w-fit px-2 py-1 border text-sm">
                        Python
                      </div>
                      <div className="w-fit px-2 py-1 border text-sm">
                        Javascript
                      </div>
                      <div className="w-fit px-2 py-1 border text-sm">
                        Typescript
                      </div>
                    </div>
                  </div>
                  <Arrows />
                </Card>
                <Card className="w-full">
                  <div className="p-5 flex flex-col gap-3">
                    <h1 className="text-xl font-bold">Web Framework</h1>
                    <div className="flex flex-wrap gap-3">
                      <div className="px-2 py-1 border text-sm">
                        React
                      </div>
                      <div className="px-2 py-1 border text-sm">
                        Tailwind CSS
                      </div>
                      <div className="px-2 py-1 border text-sm">
                        Next.js
                      </div>
                      <div className="px-2 py-1 border text-sm">
                        Bootstrap
                      </div>
                    </div>
                  </div>
                  <Arrows />
                </Card>
                <Card className="w-full">
                  <div className="p-5 flex flex-col gap-3">
                    <h1 className="text-xl font-bold">Database</h1>
                    <div className="flex flex-wrap gap-3">
                      <div className="px-2 py-1 border text-sm">
                        MongoDB
                      </div>
                      <div className="px-2 py-1 border text-sm">
                        SQLite
                      </div>
                    </div>
                  </div>
                  <Arrows />
                </Card>
              </div>
              <Arrows />
            </Card>
          </section>
        </article>
        <article className="flex gap-10">
          <section className="w-full">
            <Card>
              <div className="px-5 py-3 border-b border-[#9f9f9f] font-bold">
                Server
              </div>
              <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <Link href="https://discord.gg/AxQmXA4hDW" className="z-99">
                  <Card className="w-full p-5 flex flex-col [@media(min-width:441px)]:flex-row gap-5 duration-150 hover:scale-102">
                    <Image
                      src={Server1}
                      alt=""
                      className="w-[100px] h-[100px]"
                    />
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl sm:text-2xl font-bold duration-150">
                        月구인구직
                      </h1>
                      <p className="break-keep text-md sm:text-lg duration-150">
                        月구인구직은 디스코드 서버의 구인 구직을 모아놓은 서버
                        입니다.
                      </p>
                    </div>
                    <Arrows />
                  </Card>
                </Link>
                <Link href="https://discord.gg/soribot" className="z-99">
                  <Card className="w-full p-5 flex flex-col [@media(min-width:441px)]:flex-row gap-5 duration-150 hover:scale-102">
                    <Image
                      src={Server2}
                      alt=""
                      className="w-[100px] h-[100px]"
                    />
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl sm:text-2xl font-bold break-keep duration-150">
                        블랙리스트 & 솔이봇
                      </h1>
                      <p className="break-keep text-md sm:text-lg duration-150">
                        블랙리스트는 솔이봇의 유저 블랙리스트를 공유하는
                        커뮤니티 서버 입니다.
                      </p>
                    </div>
                    <Arrows />
                  </Card>
                </Link>
              </div>
              <Arrows />
            </Card>
          </section>
        </article>
      </main>
    </div>
  );
}
