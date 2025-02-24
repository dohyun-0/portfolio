import Link from "next/link";
import Image from "next/image";

import Profile from "../../../public/profile.png";
import Banner from "../../../public/profile_banner.png";

export default function About() {
  return (
    <main className="h-screen font-sans">
      <div
        className="w-full flex flex-col"
        style={{ alignItems: "center", padding: "20px" }}
      >
        <article className="w-full max-w-[800px] bg-white/10 shadow-md rounded-lg p-6">
          <section>
            <div className="w-full h-full bg-gray-200 rounded-md">
              <Image alt="" src={Banner} />
            </div>
          </section>
        </article>
        <article className="w-full max-w-[800px] flex flex-col gap-10">
          <section className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-10">
              <div className="mt-[-80px]">
                <Image
                  alt=""
                  src={Profile}
                  width={150}
                  className="rounded-full"
                />
              </div>
              <h1 className="text-4xl font-bold text-gray-100">
                도현 (DOHYUN)
              </h1>
            </div>
            <div>
              <div className="w-full p-5 border-l-4 border-blue-500 rounded-md bg-white/10">
                <p className="text-gray-300">응애</p>
              </div>
            </div>
          </section>
          <hr className="border-white/20" />
          <section className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold text-gray-100">소개</h1>
              <div className="border-l-4 border-blue-500 pl-5">
                <p className="text-gray-200">
                  개발을 취미로 하고 있는 도현이라고 합니다.
                </p>
                <p className="text-gray-200">
                  주로 웹 개발을 하고 있으며 React를 주로 작업하고 있습니다.
                </p>
                <br />
                <p className="text-gray-200">
                  현재 디스코드 月구인구직 이라는 서버에 소유주로 활동하고
                  있으며
                </p>
                <p className="text-gray-200">
                  Team. Darkcircle에 악성유저 검토자로 활동하고 있습니다.
                </p>
              </div>
            </div>
            <hr className="border-white/20" />
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold text-gray-100">기술 스택</h1>
              <div className="flex flex-col gap-3 border-l-4 border-blue-500 pl-5">
                <div>
                  <h3 className="text-xl font-bold">Language</h3>
                  <ul className="flex gap-3">
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Web Framework</h3>
                  <ul className="flex gap-3">
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Database</h3>
                  <ul className="flex gap-3">
                    <li>MongoDB</li>
                    <li>SQLite</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Infra</h3>
                  <ul className="flex gap-3">
                    <li>Google Cloud Platform</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="border-white/20" />
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold text-gray-100">프로젝트</h1>
              <div className="border-l-4 border-blue-500 pl-5">
                <ul className="flex flex-col gap-3">
                  <li>
                    <h3 className="text-xl font-bold">
                      PRISM (Private Project)
                    </h3>
                    <p>Discord.py와 Lavalink를 이용한 디스코드 노래봇 제작</p>
                    <Link
                      href="https://github.com/dohyun-0/project1"
                      className="text-blue-500"
                    >
                      GitHub 링크
                    </Link>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold">
                      Discord Bot Dashboard (Private Project)
                    </h3>
                    <p>
                      Next.js를 이용한 서버 구축 및 디스코드 봇 대시보드 제작
                    </p>
                    <Link
                      href="https://github.com/dohyun-0/project2"
                      className="text-blue-500"
                    >
                      GitHub 링크
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
