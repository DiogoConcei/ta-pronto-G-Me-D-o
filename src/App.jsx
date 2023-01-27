import './App.css'
import { Footer } from "./components/Footer/Footer"
import { Routermain } from "./Routermain"

function App() {
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Vai perder essa oportunidade?"
  })
  window.addEventListener("focus", () => {
    document.title = docTitle
  })
  return (
    <div>
      <Routermain />
      <Footer />
    </div>
  )
}

export default App
