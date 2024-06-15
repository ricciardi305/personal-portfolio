export function Header() {
  return (
    <div className="w-full py-4 px-10">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h2 className="text-teal-300 font-semibold text-2xl w-full text-center md:w-auto md:text-left">
          Portfólio
        </h2>
        <div className="hidden md:flex flex-wrap justify-end w-[50%] gap-3">
          <a href="#sobre">
            <span className="text-teal-500">{`<`}</span>Sobre Mim
            <span className="text-teal-500">{`>`}</span>
          </a>
          <a href="#stacks">
            <span className="text-teal-500">{`<`}</span>Stacks
            <span className="text-teal-500">{`>`}</span>
          </a>
          <a href="#projetos">
            <span className="text-teal-500">{`<`}</span>Projetos
            <span className="text-teal-500">{`>`}</span>
          </a>
          <a href="#contatos">
            <span className="text-teal-500">{`<`}</span>Contato
            <span className="text-teal-500">{`>`}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
