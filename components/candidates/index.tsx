const candidates = [
  {
    alt: 'Alice',
    image: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg'
  },
  {
    alt: 'Bob',
    image: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg'
  },
  {
    alt: 'Eve',
    image: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg'
  },
  {
    alt: 'Charles',
    image: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg'
  },
  {
    alt: 'Boyle',
    image: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg'
  },
  {
    alt: 'Prince',
    image: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg'
  },
  {
    alt: 'Ali',
    image: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg'
  },
  {
    alt: 'Rob',
    image: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg'
  },
  {
    alt: 'Amy',
    image: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg'
  }
]

export default function Candidates() {
  return(
    <div className="flex content-center h-full">
      <div className="">
        <div className="mt-5 grid grid-cols-3 gap-1 md:w-1/4 w-11/12 mx-auto">
            {
              candidates.map(candidate => {
                return <div className="">
                  <img key={candidate.alt} src={candidate.image} className="border border-gray-600 flex justify-center opacity-75 items-center rounded" />
                </div>
              })
            }
        </div>
        <div className="w-1/4 mx-auto mt-6">
          <img src="/fprint.png" className="md:hidden"/>
        </div>
      </div>
    </div>
  )
}