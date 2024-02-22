import React from 'react'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section className="flex flex-col justify-between items-center sm:flex-row gap-x-10 mt-20 sm:mt-32">
      {clients.map((client) => {
        return(
          <div key={client.id} className="p-8">
            <img src={client.logo} alt="client.id" className='max-h-[70px] h-[100%] object-contain' />
          </div>
        )
      })}
    </section>
  )
}

export default Clients