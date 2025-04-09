import { FunctionComponent } from 'react'

export type CategoryCardProps = {
  name: string
  cover: string
}

export const CategoryCard: FunctionComponent<CategoryCardProps> = ({ name, cover }) => {
  return (
    <a href="/books?category=" className={'rounded-3xl bg-primary-soft'}>
      <img src={cover} alt={name} className={'w-full aspect-[512/306] object-cover rounded-2xl'} />
      <div className="p-6 text-xl sm:text-2xl font-bold">{name.toLocaleUpperCase()}</div>
    </a>
  )
}
