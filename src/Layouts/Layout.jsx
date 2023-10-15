
import Headers from './Headers'
import Footer from './Footer'

const Layout = ({children}) => {
  return (<>
    <Headers />
<main className='overflow-hidden'>
    {children}
</main>
    <Footer />
    </>
  )
}

export default Layout
