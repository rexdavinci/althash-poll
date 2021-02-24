import Navbar from "../components/nav";
import RankingList from "../components/ranking";
const rankList = [
  {
    name: 'JOHN NOTAX',
    inclination: 'ANARCOCAPITALISM',
    voteCount: '5.958.732',
    image: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg',
    rank: 1
  },
  {
    name: 'WILL CASTLE',
    inclination: 'MONARCHIE',
    voteCount: '2.560.032',
    image: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg',
    rank: 2
  }
]


export default function Ranking() {
  return(
    <div className="bg-fairenough h-screen">
      <Navbar isFor='ranking'/>
      <RankingList ranks={rankList}/>
    </div>
  )
}