import aerobics from '../assets/aerobics_fyrgsc.jpg'
import gym from '../assets/gym_cr8zaa.jpg'
import nutritionist from '../assets/nutritionist_syqoye.jpg'

const Service = () => {

    return(

        <>
            <div className="service1">
                <h3>
                    SERVICE
                </h3>
            </div>

            <div className="ourBest">
                <div className="container1">
                    <h3>Our Best Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis, voluptas ea, incidunt inventore id voluptatum animi reprehenderit eum adipisci nostrum in fugiat. Voluptates, itaque mollitia. Sit dolorem sunt corrupti?</p>
                    <p>Quis inventore cum rem commodi corrupti eveniet possimus porro quaerat. Eaque nihil provident ratione fugiat veritatis iusto, non, et, fuga autem esse odio? Est harum ut laborum quas nostrum? A optio quod, laborum dolore cum quo!</p>
                </div>

                <div className="container1">
                    <div className="row">
                        <div className="col-12 col-md-4 awesome">
                        <h5>Awesome Design</h5>
                        <div className='icons'>
                            <i class="bi bi-bell icon"></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, esse doloremque! Ipsum sequi, saepe vero possimus nobis sit ex deleniti.</p>
                        </div>
                        </div>

                        <div className="col-12 col-md-4 awesome">
                        <h5>FontAwesome</h5>
                        <div className='icons'>
                            <i class="bi bi-hdd icon"></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, esse doloremque! Ipsum sequi, saepe vero possimus nobis sit ex deleniti.</p>
                        </div>
                        </div>

                        <div className="col-12 col-md-4 awesome">
                        <h5>Bootstrap</h5>
                        <div className='icons'>
                            <i class="bi bi-lightbulb icon"></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, esse doloremque! Ipsum sequi, saepe vero possimus nobis sit ex deleniti.</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="container1">
                    <div className="row">
                        <div className="col-12 col-md-4 awesome">
                            <h5>SEO Ready</h5>
                            <div className='icons'>
                                <i class="bi bi-code-slash icon"></i>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, esse doloremque! Ipsum sequi, saepe vero possimus nobis sit ex deleniti.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 awesome">
                            <h5>Fully Responsive</h5>
                            <div className='icons'>
                                <i class="bi bi-arrows-angle-contract icon"></i>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, esse doloremque! Ipsum sequi, saepe vero possimus nobis sit ex deleniti.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 awesome">
                            <h5>CSS3 + HTML5</h5>
                            <div className='icons'>
                                <i class="bi bi-5-square icon"></i>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, esse doloremque! Ipsum sequi, saepe vero possimus nobis sit ex deleniti.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="materialDesign">
                <div className="container1">
                    <div className="row">
                    <div className='col-12 col-md-4'>
                        <img src={aerobics} alt="Material Design" style={{width:'100%'}}/>
                        <div className="card">
                            <div className="card-header">
                                <b>Material Design</b>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates fuga culpa repellat tempore? 
                            Molestias quibusdam, eligendi, minima sapiente recusandae id, modi velit deserunt cum tenetur adipisci aliquid quae voluptatum.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4'>
                        <img src={gym} alt="Bootstrap" style={{width:'100%'}}/>
                        <div className="card">
                            <div className="card-header">
                                <b>Bootstrap</b>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates fuga culpa repellat tempore? 
                            Molestias quibusdam, eligendi, minima sapiente recusandae id, modi velit deserunt cum tenetur adipisci aliquid quae voluptatum.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4'>
                        <img src={nutritionist} alt="HTML5/CSS3" style={{width:'100%'}}/>
                        <div className="card">
                            <div className="card-header">
                                <b>HTML5/CSS3</b>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates fuga culpa repellat tempore? 
                            Molestias quibusdam, eligendi, minima sapiente recusandae id, modi velit deserunt cum tenetur adipisci aliquid quae voluptatum.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Service