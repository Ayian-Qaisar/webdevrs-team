import React from 'react'

const Header = () => {
  return (
    <div>
     <header>

 <div className='row'>
<div className='col-md-5'>
<div class="p-5 text-left">
<h1 class="mb-3 main-heading">The Ultimate</h1>
    {/* <h4 class=" main-heading">CREATIVE</h4> */}
    <div class="txt main-heading">CREATIVE</div>
    <a href="" class="typewrite" data-period="2000" data-type='[ "Hi, Im VipulM.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
    <span class="wrap"></span>
  </a>
    <h4 class="main-heading">Website Builder</h4>
    <p class="text-sm-start mt-5 mb-5">Trusted by beginners, marketers & professionals; Built with usability and performance in mind.</p>
    <button type="button" class="btn btn-dark btn btn-lg p-3">Start Building &nbsp; &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button>
<img src="https://avada.com/wp-content/uploads/2021/06/small-separator.png" class="img-fluid mt-5 mb-5" alt="..."/>
  </div>
</div>
<div className='col-md-7'>
<div class="p-5 text-center ">
<img src="https://avada.com/wp-content/uploads/2021/07/home-hero-20@2x.jpg" class="img-fluid" alt="..."/>

    
  </div>
</div>
 </div>
 



 
</header>
    </div>
  )
}

export default Header
