
import { Link , useLocation} from 'react-router-dom'

import React, { useEffect } from 'react'

const Navbar = () => {
  let locatior = useLocation(); 
  useEffect(()=> {
    console.log(locatior.pathname);
  }, [locatior])
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Daily News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            NewsType
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className={`dropdown-item ${locatior.pathname==="/sports"?"active":""}`} to ="/sports">Sports</Link></li>
            <li><Link className={`dropdown-item ${locatior.pathname==="/science"?"active":""}`} to ="/science">Science</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className= {`dropdown-item ${locatior.pathname==="/business"?"active":""}`} to="/business">Business</Link></li>
            <li><Link className={`dropdown-item ${locatior.pathname==="/entertainment"?"active":""}`} to="/entertainment">Entertainment</Link></li>
            <li><Link className={`dropdown-item ${locatior.pathname==="/technology"?"active":""}`} to="/technology ">technology</Link></li>
            <li><Link className={`dropdown-item ${locatior.pathname==="/health"?"active":""}`} to="/health">Health</Link></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar



    
 
   
   
 

  

  
    
  



