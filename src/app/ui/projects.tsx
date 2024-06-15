import { ProjectList } from './project-list'

export function Projects() {
  return (
    <div className="md:snap-start mt-10 md:mt-40 flex flex-col gap-4 items-center w-full">
      <h2 className="text-white-500 text-2xl border-b-2 border-teal-500">
        <div id="projetos">Projetos</div>
      </h2>
      <ProjectList />
    </div>
  )
}
