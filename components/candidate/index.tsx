import React from 'react'

export default function CandidatePage({ candidate }) {
  return(
    <div className="mt-12">
      <div className="w-8/12 mx-auto">
        <div className="text-center">
          <img className="h-28 border-8 border-black mx-auto" src={candidate.image} alt={candidate.name}/>
          <p className="text-white text-2xl">{candidate.name.toUpperCase()}</p>
          <p className="text-white mt-3">{candidate.inclination.toUpperCase()}</p>
          <p className="text-6xl mt-3 text-white">{candidate.voteCount}</p>
          <div className="md:mt-12 mt-6">
            <div className="mt-3">
              <p className="text-white">TOTAL ELECTORS</p>
              <progress value={candidate.totalElectors} max="100"></progress>
            </div>
            <div className="mt-3">
              <p className="text-white">TOTAL ELECTORS</p>
              <progress value={candidate.timeToEnd} max="100"></progress>
            </div>
          </div>
          <div className="md:mt-12">
            <div className="flex justify-center mt-12">
              <svg className="h-8 mr-4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" fill="#fff"
                viewBox="0 0 16 16" style={{ enableBackground: "new 0 0 16 16" } as React.CSSProperties } xmlSpace="preserve">
                <path d="M12,9H8H4c-2.209,0-4,1.791-4,4v3h16v-3C16,10.791,14.209,9,12,9z"/>
                <path d="M12,5V4c0-2.209-1.791-4-4-4S4,1.791,4,4v1c0,2.209,1.791,4,4,4S12,7.209,12,5z"/>
              </svg>
            <p className="text-white">BIOGRAPHY</p>
          </div>
            <div className="flex justify-center mt-8">
            <svg className="h-8 mr-4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 60 60" style={{enableBackground: "new 0 0 60 60"} as React.CSSProperties} xmlSpace="preserve">
            <polygon style={{fill:"#CC4B4C"} as React.CSSProperties} points="52,23.5 10,40 10,22 10,4 "/>
            <path style={{ fill: "#424A60"} as React.CSSProperties } d="M9,0C8.448,0,8,0.447,8,1v3v55c0,0.553,0.448,1,1,1s1-0.447,1-1V4V1C10,0.447,9.552,0,9,0z"/>
            <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
            <p className="text-white">RED FLAGS</p>
          </div>
          </div>
        </div>
      </div>
      </div>
    //   <div className="flex justify-center md:mt-8 text-white">
    //   <svg className="h-8 mt-7" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" fill="#fff"
    //         viewBox="0 0 32 32" style={{
    //           enableBackground: "new 0 0 32 32"
    //         } as React.CSSProperties} xmlSpace="preserve">
    //       <g>
    //         <path d="M27,10H6c-1.1,0-2-0.9-2-2s0.9-2,2-2h4c0.6,0,1-0.4,1-1s-0.4-1-1-1H6C3.8,4,2,5.8,2,8v16c0,2.2,1.8,4,4,4h21
    //           c1.7,0,3-1.3,3-3V13C30,11.3,28.7,10,27,10z M28,15.8v6.4c-0.3-0.1-0.6-0.2-1-0.2h-4c-1.7,0-3-1.3-3-3s1.3-3,3-3h4
    //           C27.4,16,27.7,15.9,28,15.8z"/>
    //         <path d="M7,7C6.4,7,6,7.4,6,8s0.4,1,1,1h4c0,0,0,0,0,0s0,0,0,0h15c0.3,0,0.6-0.2,0.8-0.4c0.2-0.3,0.2-0.6,0.1-0.9l-2-5
    //           c-0.2-0.5-0.8-0.8-1.3-0.6L10.8,7H7z"/>
    //         <path d="M25,18h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S25.6,18,25,18z"/>
    //       </g>
    //       </svg>
    //     <p className="text-6xl">{profile.balance} FAIR</p>
    //     <span className="flex flex-wrap content-end ml-3">LEFT</span>
    //   </div>
    //   <div>
    //     <div className="flex justify-center mt-12">
    //       <svg className="h-8 mr-4" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>Group People</title><path id="Group_People" data-name="Group People" d="M16.75,19H16v5.5a.5.5,0,0,1-.5.5h-6a.5.5,0,0,1-.5-.5V19H8.25A1.25,1.25,0,0,1,7,17.75v-3.5a4.25,4.25,0,0,1,3.23-4.11,3.5,3.5,0,1,1,4.55,0A4.25,4.25,0,0,1,18,14.25v3.5A1.25,1.25,0,0,1,16.75,19ZM6,17.75v-3.5A5.23,5.23,0,0,1,8.6,9.73a4.27,4.27,0,0,1-.41-3.45,4.39,4.39,0,0,0-.43-.14,3.5,3.5,0,1,0-4.55,0A4.25,4.25,0,0,0,0,10.25v3.5A1.25,1.25,0,0,0,1.24,15H2v5.5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V20A2.25,2.25,0,0,1,6,17.75ZM21.77,6.14a3.5,3.5,0,1,0-4.54,0,4.32,4.32,0,0,0-.42.14,4.27,4.27,0,0,1-.41,3.45A5.23,5.23,0,0,1,19,14.25v3.5A2.25,2.25,0,0,1,17,20v.51a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V15h.75A1.25,1.25,0,0,0,25,13.75v-3.5A4.25,4.25,0,0,0,21.77,6.14Z" fill="#fff"/></svg>
    //       <p className="text-white">MY CANDIDATES</p>
    //     </div>
        // <div className="flex justify-center mt-12">
        //   <svg className="h-8 mr-4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" fill="#fff"
        //     viewBox="0 0 16 16" style={{ enableBackground: "new 0 0 16 16" } as React.CSSProperties } xmlSpace="preserve">
        //     <path d="M12,9H8H4c-2.209,0-4,1.791-4,4v3h16v-3C16,10.791,14.209,9,12,9z"/>
        //     <path d="M12,5V4c0-2.209-1.791-4-4-4S4,1.791,4,4v1c0,2.209,1.791,4,4,4S12,7.209,12,5z"/>
        //   </svg>
        //   <p className="text-white">MY CANDIDATES</p>
        // </div>
    //   </div>
    // </div>
  )
}