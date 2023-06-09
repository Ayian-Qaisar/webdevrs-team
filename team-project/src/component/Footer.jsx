import React from 'react'
import '../Footer.css'
import Ban_card from './Ban_card'
import { Contfoot } from './Contfoot'

function Footer() {
  return (
    <>
          <div>
                 <div style={{width:"100%",minHeight:"100vh",paddingTop:"30px"}}>

                   {/* -ban-card */}
                     <Ban_card/>
                   {/* -ban-card */}

                   {/* -footer- */}
                     <Contfoot/>
                   {/* -footer- */}
                 </div>
          </div>
    </>
  )
}

export default Footer