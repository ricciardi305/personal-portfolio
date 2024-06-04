interface StackCardProps {
  readonly title: string
  readonly svg: JSX.Element
}

export default function StackCard({ title, svg }: StackCardProps) {
  return (
    <div className="flex flex-col items-center gap-1 w-28 h-30 text-base text-white-500 rounded-t-lg font-semibold bg-black-500 border-b-2 border-teal-500 hover:scale-[1.1] hover:cursor-pointer transition-transform p-2">
      <h3>{title}</h3>
      <div className="pb-1">{svg}</div>
    </div>
  )
}
