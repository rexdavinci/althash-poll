import '../styles/Home.module.css'
import Navbar from '../components/nav'
import Candidates from '../components/candidates'

export default function Home() {
  return (
    <div className="bg-fairenough h-screen">
      <div className="mx-auto">
        <Navbar isFor='home'/>
        <Candidates />
      </div>
    </div>
  )
}
