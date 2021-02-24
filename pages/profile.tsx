import Navbar from "../components/nav";
import ProfilePage from "../components/profilePage"


const profileDetail = {
  name: 'Helena Trust',
  image: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg',
  electorNumber: 4143123,
  balance: 10
}

export default function Profile() {
  return(
    <div className="bg-fairenough h-screen">
      <Navbar isFor='profile'/>
      <ProfilePage profile={profileDetail}/>
    </div>
  )
}