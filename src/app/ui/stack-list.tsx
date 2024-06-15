import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { FaHtml5, FaReact } from 'react-icons/fa6'
import { RiTailwindCssLine } from 'react-icons/ri'
import {
  SiCss3,
  SiDocker,
  SiDotnet,
  SiJavascript,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si'
import { useInView } from 'react-intersection-observer'
import { StackCard } from './stack-card'

export function StackList() {
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
      className="flex flex-wrap gap-24 mt-6 justify-center"
      ref={ref}
    >
      <StackCard
        title="CSS 3"
        svg={<SiCss3 fill="#38c0dc" className="w-full h-full" />}
      />
      <StackCard
        title="HTML 5"
        svg={<FaHtml5 fill="#38c0dc" className="w-full h-full" />}
      />
      <StackCard
        title="JavaScript"
        svg={<SiJavascript fill="#38c0dc" className="w-full h-full" />}
      />
      <StackCard
        title="TypeScript"
        svg={<SiTypescript fill="#38c0dc" className="w-full h-full" />}
      />
      <StackCard
        title="React.js"
        svg={<FaReact fill="#38c0dc" className="w-full h-full" />}
      />
      <StackCard
        title="Next.js"
        svg={<SiNextdotjs fill="#38c0dc" className="w-full h-full" />}
      />
      <StackCard
        title="Redux"
        svg={<SiRedux fill="#38c0dc" className="w-full h-full" />}
      />
      <StackCard
        title="Material-UI"
        svg={<SiMui fill="#38c0dc" className="w-full h-full" />}
      />
      <StackCard
        title="Tailwind css"
        svg={<RiTailwindCssLine fill="#38c0dc" className="w-full h-full" />}
      />
      <StackCard
        title="Styled Components"
        svg={<SiStyledcomponents fill="#38c0dc" className="w-full h-full" />}
      />
      <StackCard
        title="Nest.js"
        svg={<SiNestjs fill="#38c0dc" className="w-full h-full" />}
      />
      <StackCard
        title=".NetCore"
        svg={<SiDotnet fill="#38c0dc" className="w-full h-full" />}
      />
      <StackCard
        title="Postgres"
        svg={<SiPostgresql fill="#38c0dc" className="w-full h-full" />}
      />
      <StackCard
        title="Docker"
        svg={<SiDocker fill="#38c0dc" className="w-full h-full" />}
      />
    </motion.div>
  )
}
