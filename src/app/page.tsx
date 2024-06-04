import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 px-20 bg-black-500">
      <div className="max-w-7xl w-full flex flex-col">
        <div className="flex justify-between w-full items-center">
          <p className="text-teal-300 font-semibold text-2xl">Portfolio</p>
          <nav className="flex justify-between w-[50%]">
            <p>
              <span className="text-teal-500">{`<`}</span>Sobre Mim
              <span className="text-teal-500">{`>`}</span>
            </p>
            <p>
              <span className="text-teal-500">{`<`}</span>Stacks
              <span className="text-teal-500">{`>`}</span>
            </p>
            <p>
              <span className="text-teal-500">{`<`}</span>Soft
              <span className="text-teal-500">{`>`}</span>
            </p>
            <p>
              <span className="text-teal-500">{`<`}</span>Projetos
              <span className="text-teal-500">{`>`}</span>
            </p>
            <p>
              <span className="text-teal-500">{`<`}</span>Contato
              <span className="text-teal-500">{`>`}</span>
            </p>
          </nav>
        </div>
        <div className="flex justify-between w-full mt-20 h-90">
          <div className="absolute top-[245px] left-[245px] flex flex-col gap-5">
            <a target="blank" href="https://github.com/ricciardi305">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github w-8 h-8"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/rafaelricciardi/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin w-8 h-8"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
            <a
              target="blank"
              href="https://wa.me/5582987673523?text=Ol%C3%A1%21"
            >
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-whatsapp w-8 h-8"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
          </div>
          <div className=" flex flex-col w-full gap-6">
            <h1 className="flex flex-col text-6xl justify-start gap-2">
              <span>Olá, meu nome é</span>
              <p className="text-teal-500">Rafael Ricciardi</p>
            </h1>
            <h3 className="max-w-[70%] text-xl">Desenvolvedor full-stack</h3>
            <div className="flex gap-4">
              <button className="p-2 rounded-lg bg-teal-500 text-black-500 hover:bg-cyan-700 hover:text-black-100 font-semibold flex items-center gap-2">
                Download CV{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5" />
                  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" />
                </svg>
              </button>
              <a
                target="blank"
                className="p-2 rounded-lg bg-teal-500 text-black-500 hover:bg-cyan-700 hover:text-black-100 font-semibold flex items-center gap-2"
                href="mailto:ricciardi.rafael1997@gmail.com"
              >
                Entre em contato{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-arrow-up"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Image
              src="/personal-image.png"
              alt="Foto Rafael Ricciardi"
              width={300}
              height={300}
              className="bg-teal-700 rounded-full mr-10"
            />
          </div>
        </div>
        <div>
          <h2>Sobre mim</h2>
          <p>
            Sou um desenvolvedor full-stack com experiência em desenvolvimento
            de aplicações web e mobile.
          </p>
        </div>
      </div>
    </main>
  )
}
