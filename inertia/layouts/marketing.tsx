import Logo from '~/components/logo'
import { type ReactNode } from 'react'
import FlashToasts from '~/components/flash_toasts'
import ThemeToggle from '~/components/theme_toggle'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="header header--floating">
        <div className="header__inner">
          <Logo size={28} />
          <div className="header__right">
            <ThemeToggle />
          </div>
        </div>
      </header>
      {children}
      <FlashToasts />
    </>
  )
}
