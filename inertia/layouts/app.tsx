import Logo from '~/components/logo'
import { type ReactNode } from 'react'
import { ListChecks, Settings } from 'lucide-react'
import FlashToasts from '~/components/flash_toasts'
import ThemeToggle from '~/components/theme_toggle'
import NavLink, { type NavItem } from '~/components/nav_link'

const nav: NavItem[] = [
  { label: 'Quiz', route: 'quiz', icon: ListChecks },
  { label: 'Configuration', route: 'configuration', icon: Settings },
]

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="header header--bar">
        <div className="header__inner">
          <Logo size={28} />
          <div className="header__right">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <nav className="subnav">
        <div className="subnav__inner">
          {nav.map(({ label, route, icon: Icon }) => (
            <NavLink key={label} route={route} exact className="subnav__item">
              {Icon && <Icon size={14} />}
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="app-main">{children}</div>
      <FlashToasts />
    </>
  )
}
