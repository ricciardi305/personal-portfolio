import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { FaHtml5 } from 'react-icons/fa6'
import { RiTailwindCssLine } from 'react-icons/ri'
import {
  SiCss3,
  SiJavascript,
  SiMui,
  SiNestjs,
  SiTypescript,
} from 'react-icons/si'
import { useInView } from 'react-intersection-observer'
import { ProjectCard } from './project-card'

export function ProjectList() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const motionVariants = {
    visible: {
      x: [-300, 0],
      transition: {
        type: 'spring',
      },
    },
    hidden: { x: [0, -300] },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      animate={controls}
      initial="hidden"
      variants={motionVariants}
      ref={ref}
      className="flex flex-wrap gap-20 mt-10 justify-center lg:w-[70%] lg:mx-auto mx-10"
    >
      <ProjectCard
        title="Admin Dashboard"
        image="/admin-dashboard-home.png"
        repo="https://github.com/ricciardi305/admin-dashboard"
        stack="Frontend"
        svgList={[
          <SiNestjs key={1} fill="#38c0dc" className="w-full h-full" />,
          <SiMui key={2} fill="#38c0dc" className="w-full h-full" />,
          <RiTailwindCssLine
            key={3}
            fill="#38c0dc"
            className="w-full h-full"
          />,
        ]}
      />
      <ProjectCard
        title="Tools HUB"
        image="/nodejs-1-logo-png-transparent.png"
        repo="https://github.com/ricciardi305/tools-hub"
        stack="Backend"
        svgList={[
          <SiJavascript key={1} fill="#38c0dc" className="w-full h-full" />,
          <SiTypescript key={2} fill="#38c0dc" className="w-full h-full" />,
        ]}
      />
      <ProjectCard
        title="Food Restaurant"
        image="/landing-page-restaurant.png"
        repo="https://github.com/ricciardi305/landing-page-restaurant"
        demo="https://ricciardi305.github.io/landing-page-restaurant/"
        stack="Frontend"
        svgList={[
          <SiCss3 key={1} fill="#38c0dc" className="w-full h-full" />,
          <FaHtml5 key={2} fill="#38c0dc" className="w-full h-full" />,
          <SiJavascript key={3} fill="#38c0dc" className="w-full h-full" />,
        ]}
      />
    </motion.div>
  )
}
