import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'
import { SlPhone } from 'react-icons/sl'
import { useInView } from 'react-intersection-observer'

export function Contacts() {
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
    <div className="md:snap-start mt-10 md:mt-40 flex flex-col gap-4 px-10 items-center w-full">
      <h2 className="text-white-500 text-2xl border-b-2 border-teal-500">
        <div id="contatos">Contatos</div>
      </h2>
      <motion.div
        animate={controls}
        initial="hidden"
        variants={motionVariants}
        ref={ref}
        className="flex flex-wrap gap-20 md:gap-40 w-full items-center justify-center mt-10"
      >
        <div className="flex flex-col items-center gap-1">
          <div className="w-20 h-20 bg-black-500 flex items-center justify-center rounded-full hover:scale-110 hover:cursor-pointer transition-transform p-2">
            <a target="blank" href="mailto:ricciardi.rafael1997@gmail.com">
              {' '}
              <SiGmail className="w-12 h-12" fill="#38c0dc" />
            </a>
          </div>
          <p className="mt-1">Email</p>
          <p className="text-white-700">ricciardi.rafael1997@gmail.com</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-20 h-20 bg-black-500 flex items-center justify-center rounded-full hover:scale-110 hover:cursor-pointer transition-transform p-2">
            <a target="blank" href="https://github.com/ricciardi305">
              <SiGithub className="w-12 h-12" fill="#38c0dc" />
            </a>
          </div>
          <p className="mt-1">GitHub</p>
          <p className="text-white-700">@ricciardi305</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-20 h-20 bg-black-500 flex items-center justify-center rounded-full hover:scale-110 hover:cursor-pointer transition-transform p-2">
            <a
              target="blank"
              href="https://www.linkedin.com/in/rafaelricciardi/"
            >
              <SiLinkedin className="w-12 h-12" fill="#38c0dc" />
            </a>
          </div>
          <p className="mt-1">Linkedin</p>
          <p className="text-white-700">@rafaelricciardi</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-20 h-20 bg-black-500 flex items-center justify-center rounded-full hover:scale-110 hover:cursor-pointer transition-transform p-2">
            <a
              target="blank"
              href="https://wa.me/5582987673523?text=Ol%C3%A1%21"
            >
              <SlPhone className="w-12 h-12" fill="#38c0dc" />
            </a>
          </div>
          <p className="mt-1">Telefone</p>
          <p className="text-white-700">+55 (82) 98767-3523</p>
        </div>
      </motion.div>
    </div>
  )
}
