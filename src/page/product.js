import React from 'react'

export default function Home() {
    return (
        
        <div>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
 
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./imges/14.jpg" class="d-block w-100" alt="..." height="500" />
      <div class="carousel-caption d-none d-md-block">
        <h5>- PAPLOY BAKERY -</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="./imges/11.jpg" class="d-block w-100" alt="..." height="250" />   
       <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="./imges/13.jpg" class="d-block w-100" alt="..." height="250" />    
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

            <div className="container mt-5">
                <center>
            <h3 >PRODUCTS</h3>
            <hr></hr>
            </center>
                <div className="row">
                    <div className="col-sm-4">
                        <img src='./imges/3.jpg' width="250" />
                        <h3>Strawberry Mascarpone Tartlet</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4">
                    <h3><img src='./imges/2.jpg' width="250" /></h3>
                    <h3>Chocolate eclair</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4">
                    <h3><img src='./imges/14.jpg' width="250" /></h3>
                    <h3>Vanilla custard tart</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4">
                    <h3><img src='./imges/15.jpg' width="250" /></h3>
                    <h3>Pistachio macaron</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                </div>
            </div>
           
        </div>
    )
}