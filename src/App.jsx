import Employees from "./Employees"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Clients from "./Clients"  // Add this import statement

export default function App() {
  return (
    <div>
      <Navbar />
      <Employees />
      <Clients />
      <Footer />
    </div>
  )
}
