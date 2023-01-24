import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'
import { ContextProvider } from '../components/utils/ContextProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>
    </>
  )
}
