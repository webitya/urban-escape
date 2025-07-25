import "./globals.css"
import FloatingButtons from "../components/Layout/FloatingButtons"

export const metadata = {
  title: "Urban Escape Wellness - Premium Massage Services",
  description: "Professional massage and wellness services in New Delhi",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}
