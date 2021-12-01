class MyComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header class="header">
      
          <a href="#" class="logo"> <i class="fas fa-heartbeat"></i> SWUST medcare. </a>
      
          <nav class="navbar">
              <a href="index.html">home</a>
              <a href="service.html">services</a>
              <a href="about.html">about</a>
              <a href="doctor.html">doctors</a>
              <a href="book.html">book</a>
              <a href="review.html">review</a>
              <a href="blog.html">blogs</a>
          </nav>
      
          <div id="menu-btn" class="fas fa-bars"></div>
      
      </header>
      `;
    }
  }
  
customElements.define('my-component', MyComponent);


class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<h1>
      <section class="footer">
      
          <div class="box-container">
      
              <div class="box">
                  <h3>quick links</h3>
                  <a href="#"> <i class="fas fa-chevron-right"></i> home </a>
                  <a href="#"> <i class="fas fa-chevron-right"></i> services </a>
                  <a href="#"> <i class="fas fa-chevron-right"></i> about </a>
                  <a href="#"> <i class="fas fa-chevron-right"></i> doctors </a>
                  <a href="#"> <i class="fas fa-chevron-right"></i> book </a>
                  <a href="#"> <i class="fas fa-chevron-right"></i> review </a>
                  <a href="#"> <i class="fas fa-chevron-right"></i> blogs </a>
              </div>
      
              <div class="box">
                  <h3>our services</h3>
                  <a href="#"> <i class="fas fa-chevron-right"></i> dental care </a>
                  <a href="#"> <i class="fas fa-chevron-right"></i> message therapy </a>
                  <a href="#"> <i class="fas fa-chevron-right"></i> cardioloty </a>
                  <a href="#"> <i class="fas fa-chevron-right"></i> diagnosis </a>
                  <a href="#"> <i class="fas fa-chevron-right"></i> ambulance service </a>
              </div>
      
              <div class="box">
                  <h3>contact info</h3>
                  <a href="#"> <i class="fas fa-phone"></i> +86-122-1445-2536 </a>
                  <a href="#"> <i class="fas fa-phone"></i> +86-152-3333-4568 </a>
                  <a href="#"> <i class="fas fa-envelope"></i> pingann@163.com </a>
                  <a href="#"> <i class="fas fa-envelope"></i> yezi@126.com </a>
                  <a href="#"> <i class="fas fa-map-marker-alt"></i> SWUST, Mianyang, Sichuan, China</a>
              </div>
      
              <div class="box">
                  <h3>follow us</h3>
                  <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
                  <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
                  <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
                  <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
                  <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
                  <a href="#"> <i class="fab fa-pinterest"></i> pinterest </a>
              </div>
      
          </div>
      
          <div class="credit"> created by <span>平安 and 叶子</span> | &copy;all Copy rights reserved 2021</div>
      
      </section>
      </h1>`;
    }
  }
      
  customElements.define('my-footer', MyFooter);
     

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

