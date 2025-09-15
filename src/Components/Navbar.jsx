import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
   <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsMag</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="nav-link" aria-current="page" href="#" onClick={()=>setCategory("technology")}>Technologies</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" aria-current="page" href="#" onClick={()=>setCategory("business")}>Buisness</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" aria-current="page" href="#" onClick={()=>setCategory("health")}>Health</div>
        </li>
        
        <li className="nav-item">
          <div className="nav-link" aria-current="page" href="#" onClick={()=>setCategory("sports")}>sports</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar