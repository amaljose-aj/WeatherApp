import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>

     
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="javascript:void(0)">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link" to="/first">Artist</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/language">Language</Link>
        </li> */}
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search for any Song"/>
        <button class="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
<Router>

</Router>
    </div>
  )
}

export default Navbar