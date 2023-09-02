import { ReactNode } from "react"
import Header from "./Header"
import SEO from "./SEO"

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
      <footer>
        built with Next.js, Prisma and{" "}
        <a
          href="https://gist.github.com/broken-vagrant/d5cfdef2d1b7767e8df321f9fd56f79b"
          className="link"
        >
          Open source
        </a>
        . by{" "}
        <a href="https://twitter.com/broken_vagrant" className="link">
          @broken_vagrant
        </a>
      </footer>
      <style jsx>{`
        footer {
          margin: 1rem;
          padding: 0.5rem;
          text-align: center;
        }
      `}</style>
    </>
  )
}
export default Layout
