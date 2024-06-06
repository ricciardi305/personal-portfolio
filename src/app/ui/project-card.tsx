import Image from 'next/image'

interface ProjectCardProps {
  readonly title: string
  readonly image: string
  readonly stack: string
  readonly demo?: string
  readonly repo?: string
  readonly svgList?: JSX.Element[]
}

export default function ProjectCard({
  title,
  image,
  demo,
  repo,
  svgList,
  stack,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col items-center w-60 h-[270px] rounded-md bg-black-500 p-2 hover:scale-125 transition-transform hover:cursor-pointer">
      <p className="text-white-500 text-center font-semibold pb-2 text-lg">
        {title}
      </p>
      <p className="text-white-700 text-center pb-2 text-base">
        {' '}
        Stack - {stack}
      </p>
      <div className="w-full h-60">
        <Image
          src={image}
          alt="Imagem representando o projeto"
          width={240}
          height={240}
        />
      </div>
      <div className="flex mt-2 w-full">
        <div className="flex gap-1 items-center pl-2">
          {svgList?.map((svg) => svg)}
        </div>
        <div className="flex justify-end items-center w-full gap-2 mr-2">
          {demo && (
            <a target="blank" href={demo}>
              <button className="p-1 border-b-2 border-teal-500 text-white-500 hover:rounded-md hover:bg-teal-700 hover:text-black-100 font-semibold flex justify-center items-center">
                Demo
              </button>
            </a>
          )}
          {repo && (
            <a target="blank" href={repo}>
              <button className="p-1 border-b-2 hover:border-0 border-teal-500 text-white-500 hover:rounded-md hover:bg-teal-700 hover:text-black-100 font-semibold flex justify-center items-center">
                Repo
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
