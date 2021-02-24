import CandidatePage from "../components/candidate";
import Navbar from "../components/nav";


const candidateDetail = {
  name: 'Will Castle',
  image: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg',
  inclination: 'Monarchie',
  voteCount: '2.560.032',
  totalElectors: 80,
  timeToEnd: 20
}

export default function Candidate() {
  return(
    <div className="bg-fairenough h-screen">
      <Navbar isFor='profile'/>
      <CandidatePage candidate={candidateDetail}/>
    </div>
  )
}