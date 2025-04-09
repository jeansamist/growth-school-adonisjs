import { FunctionComponent } from 'react'

export const BestSellerSection: FunctionComponent = () => {
  return (
    <div className={'w-full px-6 lg:px-12 mx-auto py-16 space-y-14 flex flex-col items-start'}>
      <div className="space-y-4">
        <h1 className=" font-bold text-4xl sm:text-5xl lg:text-[50px] text-balance">
          Meilleures ventes
        </h1>
        <p className=" leading-normal lg:w-3/5 text-xl mx-auto">Découvrez nos best-sellers</p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10"></div>
    </div>
  )
}
