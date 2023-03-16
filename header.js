const headerTemplate = document.createElement('template');



headerTemplate.innerHTML = `
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

<script src="https://kit.fontawesome.com/b7835433f2.js" crossorigin="anonymous"></script>
<script src="header.js"></script>
<script>
  function myFunction() {
     var element = document.body;
     element.classList.toggle("dark-mode");
    
  }
  </script>
</head>

<nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
<div class="container-fluid">
  <a class="navbar-brand h1 dispaly-1  nav-link" href="file:///C:/project3/WynkMusic.html"><img src="images/Wynk.png" alt="logo" width="50" height="50">Wynk Music</a>
  <form class="d-flex justify between">
      <button class="btn text-white h1" w="30" type="button"><i class="fa fa-search"></i>Search</button>
    </form>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="mynavbar">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link active" href="file:///C:/project3/home.html">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown">Podcasts</a>
        <ul class="dropdown-menu" >
          <li><a href="" class="dropdown-item"> Comdey</a></li>
          <li><a href="" class="dropdown-item"> TV and flim</a></li>
          <li><a href="" class="dropdown-item"> Health & Fitness</a></li>
          <li><a href="" class="dropdown-item"> News & Politics</a></li>
          </ul>
        
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="file:///C:/project3/Download App.html">DownloadApp</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="file:///C:/project3/SIGNIn.html">SIGN IN</a>
      </li>
      <button onclick="myFunction()">
        <i class="fa fa-sun-o"></i></button>

      
    </ul>

    
  </div>
</div>
</nav>
      `;``
      class Header extends HTMLElement {
        constructor() {
          super();
        }
      
        connectedCallback() {
          const shadowRoot = this.attachShadow({ mode: 'closed' });
      
          shadowRoot.appendChild(headerTemplate.content);
        }
      }
      
      customElements.define('header-component', Header);
