import { LayoutContent } from '@/types/Type'
import Footer from './footer'
import Header from './header'

const Layout: React.FC<LayoutContent> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
