import './global.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 overflow-auto h-screen" >
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
