import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export function About() {
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
    <div className="mt-10 md:snap-center md:mt-40 flex flex-col gap-4 items-center w-full">
      <h2 className="text-white-500 text-2xl border-b-2 border-teal-500">
        <div id="sobre">Sobre mim</div>
      </h2>
      <motion.p
        animate={controls}
        initial="hidden"
        variants={motionVariants}
        ref={ref}
        className="text-center md:w-[70%] text-base mt-5"
      >
        Desenvolvedor com 2 anos de experiência em TypeScript, React.js,
        Next.js, Redux, Material-UI, Tailwind css, Styled Components, Nest.js,
        .NetCore, Postgres e Docker. Sempre comprometido com a integridade e
        qualidade das aplicações. Foco na manutenção do código e excelência do
        projeto é essencial para garantir a longevidade e confiabilidade da
        aplicação. Sempre atento aos padrões do mercado, como ferramentas
        atuais, padrões de projetos, boas práticas utilizando as linguagens de
        programação mais eficientes em resolver os problemas, para assegurar que
        os produtos entregues sejam de alta qualidade e atendam as expectativas
        dos clientes.
      </motion.p>
    </div>
  )
}
