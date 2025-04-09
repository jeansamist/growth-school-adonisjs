import { HomeHero } from '~/components/home-hero'
import { AppLayout } from '~/components/layouts/app-layout'
import { ShopSection } from '~/components/shop-section'

interface PageProps {
  title: string
  description: string
}
export default function Home({ title, description }: PageProps) {
  return (
    <AppLayout title={title} description={description}>
      <HomeHero />
      <ShopSection />
    </AppLayout>
  )
}
