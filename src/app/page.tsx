'use client'

import { About, Contacts, GeneralInfos, Header, Projects, Stacks } from './ui'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center bg-gradient-to-br from-black-500 to-cyan-800">
      {/* Header */}
      <Header />

      <div className="w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center">
          <div>
            {/* Body */}
            <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory flex flex-col w-full gap-10 md:gap-52">
              {/* Geral */}
              <GeneralInfos />

              {/* About */}
              <About />

              {/* Stacks */}
              <Stacks />

              {/* Projects */}
              <Projects />

              {/* Contact */}
              <Contacts />

              {/* Footer */}
              <div className="md:snap-start my-28 flex items-center w-full">
                <p className="text-center text-white-700 text-sm w-full">
                  © Rafael Ricciardi {new Date().getFullYear()} - Todos os
                  direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
