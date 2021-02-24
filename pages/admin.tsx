import AdminPanel from "../components/admin";
import Navbar from "../components/nav";

export default function Admin() {
  return(
    <div className="bg-fairenough h-screen">
      <Navbar isFor='admin'/>
      <AdminPanel />
    </div>
  )
}