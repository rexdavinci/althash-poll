export default function Navbar({ isFor } : { isFor: string }) {
  return(
    <nav className="flex flex-col md:flex-row md:justify-between md:mx-3.5">
      {
        isFor === 'admin' ? (
          <>
            <p className=" ml-4 md:my-0 my-3 text-2xl text-white">FAIRENOUGH<span className="text-gray-400"> ADMIN</span></p>
          </>
        ) : isFor === 'home' ? (
          <>
            <img className="md:hidden md:mx-0 mx-auto h-8" src="https://htmlcoin.com/wp-content/themes/htmlcoin/img/logo-althash.png" />
            <p className="text-center md:my-0 my-3 text-2xl text-white">FAIRENOUGH</p>
            <img className="md:mx-0 mx-auto md:h-8 h-6" src="https://htmlcoin.com/wp-content/themes/htmlcoin/img/htmlcoin.png" />       
          </>
        ) : (
          <div className="flex justify-between mx-3.5 flex-1">
            <p className="my-3 text-2xl text-white">FAIRENOUGH</p>
            <img className="md:h-8 h-6 md:mt-3 mt-4" src="https://htmlcoin.com/wp-content/themes/htmlcoin/img/htmlcoin.png" />       
          </div>
        )
      }
    </nav>
  )
}