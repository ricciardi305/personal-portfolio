'use client'

import { About, Contacts, GeneralInfos, Header, Projects, Stacks } from './ui'

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth flex flex-col justify-between bg-gradient-to-br from-black-500 to-cyan-800">
      {/* Header */}
      <Header />

      <GeneralInfos />

      <About />

      <Stacks />

      <Projects />

      <Contacts />

      {/* Footer */}
      <div className="mb-28 mt-20 flex items-center w-full">
        <p className="text-center text-white-700 text-sm w-full">
          © Rafael Ricciardi {new Date().getFullYear()} - Todos os direitos
          reservados.
        </p>
      </div>
    </main>
  )
}
