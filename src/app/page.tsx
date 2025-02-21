import Image from "next/image";
import Link from "next/link";

import Profile from "../../public/profile.png";
import Server1 from "../../public/server1.gif";
import Server2 from "../../public/server2.png";

export default function Home() {
  return (
    <main className="h-full 1200:h-screen">
      <div className="w-full h-full p-10 1200:p-0 flex justify-center items-center">
        <article className="max-w-6xl grid grid-cols-1 1200:grid-cols-2 gap-10 gap-x-14">
          <section className="flex flex-col items-center">
            <div className="relative top-[13px] px-4 bg-black">PROFILE</div>
            <div className="w-full p-5 flex flex-col 516:flex-row items-center 516:items-start gap-5 border-2">
              <Image alt="" src={Profile} width={128}/>
              <div className="w-full h-full flex flex-col justify-between custom-items-start custom-items-center">
                <h1 className="text-4xl font-bold tracking-wide">DOHYUN</h1>
                <p className="text-lg text-white/70">Student Developer</p>
                <ul className="w-full flex flex-col 375:flex-row justify-center 516:justify-start gap-3">
                  <button className="px-3 py-1 border-2">
                    {" "}
                    {/* border-[#5865F2] */}
                    <Link href="https://discord.gg/tTfRgx52">DISCORD</Link>
                  </button>
                  <button className="px-3 py-1 border-2">
                    {" "}
                    {/* border-[#2B3137] */}
                    <Link href="https://github.com/dohyun-0">GITHUB</Link>
                  </button>
                </ul>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center">
            <div className="relative top-[13px] px-4 bg-black">ABOUT ME</div>
            <div className="w-full h-full p-5 flex flex-col justify-center gap-3 border-2">
              <p className="break-keep">
                안녕하세요, 디스코드에서 활동하고 있는 도현이라고 합니다.
              </p>
              <p className="break-keep">
                현재 月구인구직 소유자 및 블랙리스트 악성유저 검토자로 활동하고
                있습니다.
              </p>
            </div>
          </section>
          <section className="flex flex-col items-center">
            <div className="relative top-[13px] px-4 bg-black">
              TECHNOLOGIES
            </div>
            <div className="w-full h-full p-5 flex flex-col justify-center border-2">
              <ul className="h-full flex flex-col justify-between items-center">
                <div className="relative top-[13px] px-4 bg-black">
                  LANGUAGE
                </div>
                <li className="w-full px-2 py-4 flex justify-center gap-3 border-2">
                  <div>PYTHON</div>
                  <div>JAVASCRIPT</div>
                </li>
                <div className="relative top-[13px] px-4 bg-black">
                  WEB FRAMEWORK
                </div>
                <li className="w-full px-2 py-4 flex flex-col 375:flex-row justify-center items-center 375:items-start gap-3 border-2">
                  <div>NEXT.JS</div>
                  <div>REACT</div>
                  <div>Tailwind CSS</div>
                </li>
                <div className="relative top-[13px] px-4 bg-black">
                  DATABASE
                </div>
                <li className="w-full px-2 py-4 flex justify-center gap-3 border-2">
                  <div>MongoDB</div>
                  <div>SQLite</div>
                </li>
              </ul>
            </div>
          </section>
          <section className="flex flex-col items-center">
            <div className="relative top-[13px] px-4 bg-black">TEAM</div>
            <div className="w-full h-full p-5 flex flex-col justify-center border-2">
              <ul className="flex flex-col justify-between items-center">
                <div className="relative top-[13px] px-4 bg-black">No. 1</div>
                <Link className="w-full p-5 flex flex-col 516:flex-row justify-center gap-3 border-2" href="https://discord.gg/AxQmXA4hDW">
                  <Image className="w-full 516:w-[84px]" alt="" src={Server1} />
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-bold">月구인구직</h3>
                    <p className="break-keep">
                      月구인구직은 디스코드 서버의 구인구직을 모은 곳입니다.
                    </p>
                  </div>
                </Link>
                <div className="relative top-[13px] px-4 bg-black">No. 2</div>
                <Link className="w-full p-5 flex flex-col 516:flex-row justify-center gap-3 border-2" href="https://discord.gg/BeA3HVYtx5">
                  <Image className="w-full 516:w-[84px]" alt="" src={Server2} />
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-bold">블랙리스트 & 솔이봇</h3>
                    <p className="break-keep">
                      블랙리스트는 공론화, 블랙리스트 공유 커뮤니티 서버입니다.
                    </p>
                  </div>
                </Link>
              </ul>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
