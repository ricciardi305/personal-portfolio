interface StackCardProps {
  readonly title: string
  readonly svg: JSX.Element
}

export function StackCard({ title, svg }: StackCardProps) {
  return (
    <div className="flex flex-col items-center gap-1 w-20 h:24 sm:w-28 sm:h-30 text-base text-white-500 rounded-t-lg font-semibold bg-black-500 border-b-2 border-teal-500 hover:scale-[1.1] hover:cursor-pointer transition-transform p-2">
      <h3>{title}</h3>
      <div className="pb-1 w-full h-full">{svg}</div>
    </div>
  )
}
