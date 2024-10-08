'use client'

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { default as NextImage } from "next/image";
import Link from "next/link";
import mdg from '@/public/images/mdg.gif'
import mwm from '@/public/images/mwm.png'
import bcom from '@/public/images/become.png'
import kinhub from '@/public/images/kinhub.png'
import flower from '@/public/images/flower.gif'
import { Rethink_Sans } from "next/font/google";
import CodeText from "@/components/codeText";
import BlueText from "@/components/blueText";
import GreenText from "@/components/greenText";
import LinkCard from "@/components/linkCard";
import HorizontalScroll from "@/components/horizontalScroll";
import { Cutive_Mono } from "next/font/google"
import takboCover from '@/public/images/takbo-cover.png'
import ExperienceGained from "@/components/experienceGained";
import ContentCard from "@/components/contentCard";

const rethink = Rethink_Sans({ subsets: ['latin'] })
const cutive = Cutive_Mono({ weight: "400", subsets: ['latin'] })

export default function Landing() {
  const [textExpanded, setTextExpanded] = useState(false);
  const [coolText, setCoolText] = useState("awesome");
  const ballRef = useRef<HTMLDivElement>(null)
  const ball2Ref = useRef<HTMLDivElement>(null)
  const cloudRef = useRef<HTMLDivElement>(null)

  const mouseTextRef = useRef<HTMLSpanElement>(null)

  function shuffleCoolText() {
    const words = ["wow so cool", "✨ awesome ✨", "how'd he do that?", "lit 🔥", "fire 🔥", "✨ amazing ✨", "siiick"];
    const wordIndex = Math.floor(Math.random() * words.length)
    return words[wordIndex]
  }

  function handleMouseMove(e: MouseEvent) {
    if (mouseTextRef.current) {
      mouseTextRef.current.style.top = ((e.clientY - mouseTextRef.current.offsetHeight) + window.scrollY) + "px";
      mouseTextRef.current.style.left = (e.clientX - (mouseTextRef.current.offsetWidth / 2)) + "px";
    }
  }

  useEffect(() => {
    function handleScroll() {
      setTextExpanded(false)
    }
    document.onmousemove = handleMouseMove;
    document.onscroll = handleScroll;

  }, [])



  return (
    <div className="relative bg-black overflow-x-clip flex flex-col w-full items-center">
      <span ref={mouseTextRef} id="hover-text" style={{ 'pointerEvents': 'none' }} className={clsx("z-[9] origin-center text-black absolute", !textExpanded && "opacity-0", textExpanded && "text-white")}>{coolText}</span>
      <div className="relative overflow-hidden flex flex-col w-full">
        <div className="z-[3] bg-opacity-[90%] noselect w-[100%] flex flex-col items-start px-[10%] justify-center h-[100vh] tracking-widest text-white text-[64px]">
          <span onMouseOver={() => { setCoolText(shuffleCoolText()); setTextExpanded(true); }} onMouseLeave={() => { setTextExpanded(false); }} ><span className="">hi.</span> i&apos;m ryan.</span>
          <span onMouseOver={() => { setCoolText(shuffleCoolText()); setTextExpanded(true); }} onMouseLeave={() => { setTextExpanded(false); }} className=" flex flex-row items-center gap-x-4">i develop stuff</span>
        </div>
        <div ref={ballRef} className="ball absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]" />
        <div ref={ball2Ref} className="ball2 absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%]" />

        <div className="cloud absolute top-[50%] left-[50%]" />
        <div className="cloud-v absolute top-[50%] left-[50%]" />
        <div className="cloud-1 absolute top-[50%] left-[50%]" />
      </div>

      {/* WORKS SECTION */}
      <HorizontalScroll className="bg-yablue" backwards>work experience stuff  /// work experience stuff /// work experience stuff</HorizontalScroll>
      <HorizontalScroll className="bg-yagreen">work experience stuff  /// work experience stuff /// work experience stuff</HorizontalScroll>
      <div className="gap-y-12 flex flex-col items-start w-full px-[15%] pt-[3%] pb-[5%]">
        <div className="flex flex-col items-start w-full">
          {/* KINHUB SECTION */}
          <span className="text-yawhite pb-4">working at <Link target="_blank" className="cursor-yapointer text-yablue outline-none" href="https://kinhub.com">kinhub</Link> <span className="text-xs">(2023<span className="text-sm"> - present</span>)</span></span>

          <div className="flex flex-row w-full gap-x-[64px]">
            <div className={clsx("text-yawhite flex w-[32%] flex-col text-sm tracking-wide", rethink.className)}>
              <LinkCard className="bg-white" gif source={kinhub} link="https://kinhub.com" />

              <BlueText className="text-lg font-bold pt-2 pb-1"># junior full-stack developer</BlueText>
              <span>
                kinhub has been my home for the past year and a few. i started working freelance for them back when i was still in highschool. working here has been one of the most valuable experiences of my career in terms of both the technical skills and connections acquired.
              </span>
              <ExperienceGained
                blues={[{ emphasis: 'agile-based work environment', parenthesis: 'sprints, tickets, stand-ups' }]}
                greens={
                  [
                    { emphasis: 'frontend development skills', parenthesis: 'next.js, react, tailwind' },
                    { emphasis: 'backend development skills', parenthesis: 'APIs, databases, docker' }
                  ]
                }
              />

            </div>
            <div className="w-[65%] flex flex-row gap-x-[64px]">
              <div className={clsx("text-yawhite flex w-[50%] flex-col text-sm tracking-wide", rethink.className)}>
                <span>
                  <BlueText className="text-lg font-bold leading-none pb-1"># a notable output</BlueText>
                  <br />
                  this flower input field is by far the most fun i&apos;ve had designing a frontend component for kinhub. being an input field, it was the perfect blend of frontend and backend. it was designed after <Link className="outline-none text-yared cursor-yapointer" href="https://www.6seconds.org/2022/03/13/plutchik-wheel-emotions/" target="_blank">[ Robert Plutchik&apos;s wheel of emotions ]</Link> and is compatible with <CodeText>react hook form</CodeText>.
                  <br />
                  <br />
                  <BlueText className="text-lg font-bold"># positioning the elements</BlueText>
                  <br />
                  i positioned <CodeText>&lt;input&gt;</CodeText> tags in a circle using polar coordinates. a petal svg was positioned over each <CodeText>&lt;input&gt;</CodeText> with the origin point at one end of the petal / <CodeText>&lt;input&gt;</CodeText>.
                  <br />
                  <br />
                  <BlueText className="text-lg font-bold"># changing the petal lengths</BlueText>
                  <br />
                  to calculate for the petal lengths, i used <CodeText>react hook form</CodeText>&apos;s <CodeText>watch</CodeText> function to track the respective <CodeText>&lt;input&gt;</CodeText> elements&apos; values then mutliplied by some factor when scaling the petals. this resulted in a linear scale so i used a bezier curve to have the petals scale properly. finally, i used tailwind&apos;s <CodeText>transition</CodeText> class to animate the petals for that extra ✨
                </span>
              </div>
              <div className="bg-[#fbfbfb] relative w-[50%] h-[100%] rounded-md p-16">
                <div className="bg-[#fbfbfb] relative w-full h-[100%] rounded-md">
                  <NextImage unoptimized alt='flower' src={flower} fill objectFit="contain" />
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="flex flex-col items-start w-full">
          {/* GOLAUNCH SECTION */}
          <span className="text-yawhite pb-4">projects at <GreenText><Link target="_blank" className="outline-none cursor-yapointer" href="https://golaunch.live">golaunch.live</Link></GreenText></span>
          <div className="grid grid-cols-2 gap-x-[64px] gap-y-[64px] w-full">
            <ContentCard color="green" imageSource={mdg} title="museo del galeon" link="https://museodelgaleon.org">
              museo del galeon was the first project i worked on at <GreenText><Link target="_blank" className="outline-none cursor-yapointer" href="https://golaunch.live">[ golaunch.live ]</Link></GreenText> as well as using a website builder (elementor at first then the gutenberg editor).
              it was pretty daunting having to learn so much on a very tight timeline. overall, a nice and simplistic website.
              <ExperienceGained yellows={
                [
                  { emphasis: 'wordpress developer skills', parenthesis: 'elementor, gutenberg editor' },
                ]
              }
                blues={
                  [
                    { emphasis: 'domain management skills', parenthesis: 'hostinger, elementor' },
                  ]
                } />
            </ContentCard>
            <ContentCard color="blue" imageSource={bcom} title="become" link="https://be-come.org">
              after museo del galeon, we decided to move forward with the gutenberg editor. become was the first website we built fully using this editor and it turned out quite well (imo).
              working with custom posts and custom layouts was extremely tedious tho.
              <ExperienceGained yellows={
                [
                  { emphasis: 'custom wordpress posts', parenthesis: 'custom fields, templates, etc' },
                ]
              }
                greens={
                  [
                    { emphasis: 'multilingual site', parenthesis: 'english, spanish' },
                  ]
                } />
            </ContentCard>
            <ContentCard color="yellow" imageSource={mwm} title="mind what matters" link="https://mindwhatmatters.com.sg">
              mind what matters was the straw that broke my back (being the camel that i am). custom posts, custom filtering, dozens of post data to transfer manually--this project was... taxing to say the least.
              <ExperienceGained yellows={
                [
                  { emphasis: 'more wordpress skills', parenthesis: 'custom filtering, multiple custom templates, tagging' },
                ]
              }
                reds={
                  [
                    { emphasis: 'mental fortitude 💀' },
                  ]
                } />
            </ContentCard>
          </div>
        </div>
      </div >

      {/* CONTACT SECTION */}
      <HorizontalScroll className="bg-yared" backwards>cool, i made that /// cool, i made that /// cool, i made that</HorizontalScroll>
      <HorizontalScroll className="bg-yablue">cool, i made that /// cool, i made that /// cool, i made that</HorizontalScroll>

      <div className="gap-y-12 flex flex-col items-start w-full px-[15%] pt-[3%] pb-[5%]">

        <div className="grid grid-cols-2 gap-x-[64px] w-full">
          <ContentCard color="yellow" imageSource={takboCover} title="Takbo.io" link="https://stells.design/takbo">
            takbo was a game <GreenText><Link href='https://stells.design' target="_blank" className="cursor-yapointer">Stella</Link></GreenText>, Ramon, and i created back in 2022. we made in 2 weeks and got hella players before dying off right after 😅
            <br />
            <br />
            i&apos;m not great with words so check out the case study <GreenText><Link href='https://stells.design' target="_blank" className="cursor-yapointer">Stella</Link></GreenText> made by clicking the card above. the game isn&apos;t &quot;officially&quot; hosted anywhere anymore, but i made the repository soooo <BlueText><Link href='https://jrbuizon.github.io/takbo.io/public/' className="text-xs cursor-yapointer" target="_blank">(click here)</Link></BlueText>
          </ContentCard>
        </div>
      </div>
      {/* <div className="px-[10%] pt-[1%] bg-yawhite h-[11vh] w-full">
          <div className="flex flex-row gap-x-4">
            <span className="text-[24px] text-black font-bold tracking-widest">where i&apos;m @</span>
            <Link href="https://www.instagram.com/jeremiahbuizon/" className="text-[24px] text-black tracking-widest hover:opacity-[50%] cursor-yapointer transition-all duration-300 ease-out delay-50">instagram</Link>
            <Link href="https://www.linkedin.com/in/jeremiah-ryan-buizon-8ba4342b2/" className="text-[24px] text-black tracking-widest hover:opacity-[50%] cursor-yapointer transition-all duration-300 ease-out delay-50">linkedin</Link>
          </div>
        </div> */}
    </div >
  );
}
