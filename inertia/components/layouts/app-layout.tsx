import { FunctionComponent, HTMLAttributes } from 'react'
import { cn } from '~/lib/utils'
import { Topbar } from '../topbar'
import { Head } from '@inertiajs/react'

export type AppLayoutProps = HTMLAttributes<HTMLDivElement> & { title: string; description: string }

export const AppLayout: FunctionComponent<AppLayoutProps> = ({
  className,
  children,
  title,
  description,
  ...props
}) => {
  return (
    <div className={cn('', className)} {...props}>
      <Head title={title}>
        <meta name="description" content={description} />
      </Head>
      <Topbar />
      <main className="pt-6">{children}</main>
    </div>
  )
}
