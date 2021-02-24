export default function RankingList({ ranks }) {
  return(
    <div>
      <p className="text-2xl text-white text-center my-20">RANKING</p>
      <div className="w-3/4 ml-20">
        <p>FIRST</p>
        <div>
          {
            ranks.map(rank => {
              return (
                <div className="flex mb-3" key={rank.name}>
                  <img className="md:h-28 h-16 border-4 border-black mr-4" src={rank.image} alt={rank.name}/>
                  <div className="text-white">
                    <p className="md:text-2xl leading-tight md:leading-loose">{rank.name}</p>
                    <p>{rank.inclination}</p>
                    <p className="md:text-2xl leading-tight md:leading-loose">{rank.voteCount}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
        <div className="mt-20 md:w-1/3 md:mx-auto">
          <div className="mt-3 w-1/3 mx-auto">
            <progress className="flex justify-center" value="90" max="100">TIME TO GO</progress>
            <p className="text-white text-center mt-2">TIME TO GO</p>
          </div>
          <div className="mt-3 w-1/3 mx-auto">
            <progress className="flex justify-center" value="35" max="100">TOTAL ELECTORS</progress>
            <p className="text-white text-center mt-2">TOTAL ELECTORS</p>
          </div>
        </div>
    </div>
  )
}