'use client'

import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
import Draggable from "react-draggable";
import LinkedInIcon from "@/components/icons/linkedin";
import GithubIcon from "@/components/icons/github";
import InstagramIcon from "@/components/icons/instagram";

const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' })

function SocialButton({ icon, link, direction = "v" }: { icon: ReactNode, link: string, direction?: "h" | "v" | "-h" | "-v" }) {
  return (
    <Link className={"fill-white w-[24px] overflow-clip h-[24px] relative"} href={link} target="_blank">
      <div className={clsx("absolute flex w-fit flex-nowrap transition-all duration-500 ease-in-out",
        direction === "h" ? "flex-row  hover:translate-x-[-50%]"
          : direction === "-h" ? "flex-row  translate-x-[-50%] hover:translate-x-[0%]"
            : direction === "v" ? "flex-col hover:translate-y-[-50%]"
              : "flex-col translate-y-[-50%] hover:translate-y-[0%]")}>
        {icon}
        {icon}
      </div>
    </Link>
  )
}

const asciiRows = 15;
const asciiCols = 3;

export default function Landing() {
  // const [contributions, setContributions] = useState<{ totalContributions: number, weeks: { contributionDays: { contributionCount: number, date: string }[] }[] }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [grabbing, setGrabbing] = useState<boolean>(false)
  const [matrix, setMatrix] = useState<String[][]>([])
  useEffect(() => {
    async function getGithubContributions() {
      setLoading(false);


      // i'll fix this when i'm not lazy

      // await fetch("https://nodejs-serverless-function-express-roan-nu.vercel.app/api/github", { cache: "force-cache" })
      //   .then((res) => res.json())
      //   .then((d) => {
      //     setContributions(d.data?.data?.user?.contributionsCollection?.contributionCalendar);
      //     setLoading(false);
      //   });
    }
    getGithubContributions()
  }, [])

  useEffect(() => {
    const interval = setInterval(function () {
      const l = ["#", "/", "?", "%", "&", "!", "$", "[", "]", "{", "}", "1", "0", ".", ":", ";"]
      const m = [];
      for (let row = 0; row < asciiRows; row++) {
        const r = [];
        for (let col = 0; col < asciiCols; col++) {
          const p = Math.floor(Math.random() * l.length);
          r.push(l[p])
        }
        m.push(r)
      }
      setMatrix(m)
    }, 50);
  }, [])

  return (
    <div className={clsx("overflow-hidden text-white relative bg-[#111] grid-cols-1 w-full h-[100vh] flex flex-col items-center justify-center", grabbing && "cursor-grabbing")}>
      <div className={clsx("transition-all duration-[2s] ease-in-out absolute flex flex-col justify-center items-center w-full h-[100%] z-[100] bg-[#fff]", !loading && "translate-x-[-100%]")} />
      <Draggable cancel="a" onStart={() => setGrabbing(true)} onStop={() => setGrabbing(false)} >
        <div className={clsx("relative select-none",)}>
          {matrix.length > 0 && matrix[0].length > 0 && <pre className={clsx("z-[1] absolute top-0 right-0 leading-none font-bold text-[9px] pointer-events-none", mono.className)}>
            {[...Array(asciiRows).keys()].map(row =>
              <div key={`row-${row}`} className="flex flex-row justify-between w-[20px] overflow-clip">
                {[...Array(asciiCols).keys()].map(col => {
                  return <div key={`col-${col}`} className="">{matrix[row][col]}</div>
                })}
              </div>
            )}
          </pre>}
          <div className={clsx("w-[280px] bg-[#222] z-[0] flex flex-col justify-center items-center p-6 py-5", !grabbing && "cursor-grab")}>
            <span className="z-[1] text-2xl font-semibold">ryan buizon</span>
            <span className="z-[1]">full-stack developer</span>
            <div className="w-full flex flex-row items-center mt-4 justify-center gap-2">
              <SocialButton link="https://www.linkedin.com/in/jrbuizon/" icon={<LinkedInIcon />} direction="h" />
              <SocialButton link="https://github.com/JRBuizon" icon={<GithubIcon />} direction="-v" />
              <SocialButton link="https://www.instagram.com/jeremiahbuizon/" icon={<InstagramIcon />} direction="-h" />

            </div>
          </div>
        </div>
      </Draggable>
    </div >
  );
}
