import { BestSellerSection } from '~/components/best-seller-section'
import { FeatureBookSection } from '~/components/feature-book-section'
import { HomeHero } from '~/components/home-hero'
import { AppLayout } from '~/components/layouts/app-layout'
import { ShopSection } from '~/components/shop-section'
import { TestimonialSection } from '~/components/testimonial-section'
import { BookCardProps } from '~/components/ui/book-card'

interface PageProps {
  title: string
  description: string
  books: BookCardProps[]
}
export default function Home({ title, description, books }: PageProps) {
  return (
    <AppLayout title={title} description={description}>
      <HomeHero />
      <ShopSection />
      <BestSellerSection books={books} />
      <FeatureBookSection />
      <TestimonialSection />
    </AppLayout>
  )
}
