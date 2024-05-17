import arm from "../assets/arm_pqqbcb.png"
import team1 from "../assets/team1_olpuac.jpg"
import team2 from "../assets/team2_k3fcnu.jpg"
import team3 from "../assets/team3_wpmdmf.jpg"
import team4 from "../assets/team4_fthnka.jpg"

const Aboutus = () => {
    
    return(

        <>
            <div className="about">
                <h3>ABOUT US</h3>
            </div>

            <div className="ourCompany">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 ">
                            <img src={arm} alt="ARM" style={{width:'100%'}}/>
                        </div>
                        <div className="col-12 col-md-6 company">
                            <h3>Our Company</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad, eveniet nam inventore corporis laudantium harum. Nihil iure, magnam dolorem similique perferendis delectus voluptates perspiciatis facere minima, corporis et labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illum sit qui quod itaque doloribus maxime et tempora non ipsam!</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus repellat aliquid maiores ea, quod porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ea?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ourSolution">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 solution">
                            <h3>Why Choose Us</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, ad? Veritatis deleniti perferendis alias quae vitae, tenetur libero. Sapiente deleniti nihil, quos ex eaque eos error iusto quas enim nesciunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nulla quaerat voluptates vel fugit voluptatum quis quod ab cum corporis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odit vel, qui iusto ea officiis!</p>
                        </div>
                        <div className="col-12 col-md-4 solution">
                        <h3>Our Solution</h3>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item1">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <b>Accordion Heading Text Item #1</b>
                            </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div className="accordion-item1">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <b>Accordion Heading Text Item #2</b>
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body.</div>
                            </div>
                        </div>
                        <div className="accordion-item1">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <b>Accordion Heading Text Item #3</b>
                            </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body.</div>
                            </div>
                        </div>
                        <div className="accordion-item1">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                <b>Accordion Heading Text Item #4</b>
                            </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body.</div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-4 solution">
                        <h3>Our Experties</h3>
                            <div className="experties">
                            Web Development
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: '10px'}}>
                            <div className="progress-bar bg-danger" style={{width: '40%'}}></div>
                            </div>
                            </div>
                            <div className="experties">
                            Designing
                            <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{height: '10px'}}>
                            <div className="progress-bar bg-success" style={{width: '60%'}}></div>
                            </div>
                            </div>
                            <div className="experties">
                            User Experience
                            <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '10px'}}>
                            <div className="progress-bar bg-info" style={{width: '80%'}}></div>
                            </div>
                            </div>
                            <div className="experties">
                            Development 
                            <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{height: '10px'}}>
                            <div className="progress-bar bg-primary" style={{width: '30%'}}></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                        <h3 className="latest">
                            Features
                            </h3>
                        <div class="card text-center">
                        <div class="card-header">
                            <ul class="nav nav-tabs card-header-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="true" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="true" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        </div>

                        <div className="col-12 col-md-4">
                        <h3 className="latest">
                            Latest News
                        </h3>
                        <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <i class="bi bi-cloud"></i>
                                First
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Eaque perspiciatis enim maxime, possimus quas delectus facere molestias iste soluta nobis minima ipsa sit ducimus.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <i class="bi bi-geo-alt-fill"></i>
                                Second
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Eaque perspiciatis enim maxime, possimus quas delectus facere molestias iste soluta nobis minima ipsa sit ducimus.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <i class="bi bi-fire"></i>
                                Third
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Eaque perspiciatis enim maxime, possimus quas delectus facere molestias iste soluta nobis minima ipsa sit ducimus.
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <h3 className="latest">
                               Testimonials
                            </h3>
                            <div className="testimonial">
                                <p>Quasi dolor tempore nihil sapiente similique iste voluptas ullam, magni, 
                                neque voluptatem qui aliquid veniam, aliquam modi fugit! Non porro quasi tempora!</p>
                            </div>
                            <div className="testimonial1">
                                <img src={team4} alt="Marc Cooper" style={{width:'25%'}} />
                            <div className="marc">
                                <h5>Marc Cooper</h5>
                                <p> Thecnical Director </p> 
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ourTeam">
                <div className="container">
                    <h5 className="our">Our Team</h5>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3 team">
                        <img src={team1} alt="Johne Doe" />
                        <h5>Johne Doe</h5>
                        <p>Master</p>
                        </div>

                        <div className="col-12 col-md-3 team">
                        <img src={team2} alt="Jennifer" />
                        <h5>Jennifer</h5>
                        <p>Master</p>
                        </div>

                        <div className="col-12 col-md-3 team">
                        <img src={team3} alt="Chirstean" />
                        <h5>Chirstean</h5>
                        <p>Master</p>
                        </div>

                        <div className="col-12 col-md-3 team">
                        <img src={team4} alt="Kerinele rase" />
                        <h5>Kerinele rase</h5>
                        <p>Master</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus