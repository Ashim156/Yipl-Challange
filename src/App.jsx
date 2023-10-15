import Layout from "./Layouts/Layout"
import Intro from "./pages/Intro";
import News from "./pages/News";
import Swipers from "./pages/Swipers";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
function App() {
  

  return (
    <>
<Layout>
  <Home/>
<Intro/>
<Swipers/>
<News/>
<Resources/>
<Contact/>
</Layout>
    </>
  )
}

export default App
