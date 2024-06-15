import { StackList } from './stack-list'

export function Stacks() {
  return (
    <div className="md:snap-start mt-10 md:mt-0 flex flex-col gap-4 items-center w-full">
      <h2 className="text-white-500 text-2xl border-b-2 border-teal-500">
        <div id="stacks">Stacks</div>
      </h2>
      <StackList />
    </div>
  )
}
