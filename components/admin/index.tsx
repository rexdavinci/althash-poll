const panelItems = [
  {
    name: 'MANAGE ELECTION',
    detail: 'ACTIVE CAMPAIGNS',
    value: 243
  },
  {
    name: 'MANAGE ELECTORS',
    detail: 'ELECTOR NUMBER',
    value: 4143123
  },
  {
    name: 'RECHARGE GAS',
    detail: 'LEFT',
    value: 456841521
  },
  {
    name: 'SEND VOTE RIGHTS',
    detail: 'LEFT',
    value: 456841521
  },
  {
    name: 'AUDIT',
    detail: '',
    value: ''
  },
  {
    name: 'BLOCK EXPLORER',
    detail: '',
    value: ''
  }
]

export default function AdminPanel() {
  return(
    <div className="ml-16 md:w-1/5 md:mx-auto mt-32">
      {
        panelItems.map((item, index) => {
          return (
            <div key={item.name} className={`${index < 5 ? 'my-6' : ''}`}>
              <p className="text-2xl text-white">{item.name} </p>
              <span className="text-white">{item.detail} {item.value}</span>
            </div>
          )
        })
      }
      <a href="http://explorer.htmlcoin.com/" target="_blank">
        <img className="h-5" src="https://htmlcoin.com/wp-content/themes/htmlcoin/img/htmlcoin.png" />
      </a>
    </div>
  )
}