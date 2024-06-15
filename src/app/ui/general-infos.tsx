import Image from 'next/image'
import { GrDocumentPdf } from 'react-icons/gr'
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si'

export function GeneralInfos() {
  return (
    <div className="md:snap-start flex flex-col md:flex-row mt-10 md:mr-8 items-center gap-10">
      <div className="flex w-full mt-10 md:mt-20">
        <div className="hidden md:flex flex-col self-start items-center justify-center gap-4 w-20 pt-10">
          <a target="blank" href="https://github.com/ricciardi305">
            <SiGithub
              className="w-8 h-8 hover:scale-110 transition-transform"
              fill="#38c0dc"
            />
          </a>
          <a target="blank" href="https://www.linkedin.com/in/rafaelricciardi/">
            <SiLinkedin
              className="w-8 h-8 hover:scale-110 transition-transform"
              fill="#38c0dc"
            />
          </a>
          <a target="blank" href="https://wa.me/5582987673523?text=Ol%C3%A1%21">
            <SiWhatsapp
              className="w-8 h-8 hover:scale-110 transition-transform"
              fill="#38c0dc"
            />
          </a>
        </div>
        <div className="flex flex-col gap-6 md:flex-row justify-between w-full">
          <div className="flex md:hidden flex-col items-center">
            <Image
              src="/personal-image.png"
              alt="Foto Rafael Ricciardi"
              width={240}
              height={240}
              className="bg-teal-700 rounded-full"
            />
          </div>
          <div className="flex flex-col items-center md:items-start w-full gap-6">
            <h1 className="flex flex-col text-4xl md:text-6xl text-center md:text-left gap-2">
              <span>Olá, eu sou o</span>
              <p className="text-teal-500">Rafael Ricciardi</p>
            </h1>
            <h3 className="md:max-w-[70%] text-lg md:text-xl">
              Desenvolvedor full-stack
            </h3>
            <div className="flex flex-col items-center md:flex-row gap-3">
              <a href="/cv/cv-rafael-ricciardi.pdf" download>
                <button className="p-2 w-[170px] rounded-lg bg-teal-500 text-black-500 hover:bg-cyan-700 hover:text-black-100 font-semibold flex justify-center items-center gap-2">
                  Download CV <GrDocumentPdf className="w-5 h-5" />
                </button>
              </a>
              <a
                target="blank"
                className="p-2 w-[180px] rounded-lg bg-teal-500 text-black-500 hover:bg-cyan-700 hover:text-black-100 font-semibold flex justify-center items-center gap-2"
                href="mailto:ricciardi.rafael1997@gmail.com"
              >
                Entre em contato <SiGmail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center md:items-start hover:scale-125 transition-transform hover:cursor-pointer">
            <a
              target="blank"
              href="https://www.linkedin.com/in/rafaelricciardi/"
            >
              <Image
                src="/personal-image.png"
                alt="Foto Rafael Ricciardi"
                width={300}
                height={300}
                className="bg-teal-700 rounded-full md:mr-10"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
