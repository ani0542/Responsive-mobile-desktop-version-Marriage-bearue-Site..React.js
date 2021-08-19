import React from 'react'
import headerimg from "../assets/header-img.png"
import client1 from "../assets/client-1.jpg"
import client2 from "../assets/client-2.jpg"
import client3 from "../assets/client-3.jpg"
import client4 from "../assets/client-4.jpg"
import divider from "../assets/divider.png"

function Client() {
    return (
        <>
             <section class="clients" id="clients">

                                <div class="heading">
                                    <h1>our previous clients</h1>
                                    {/* <img src={headerimg} alt=""/> */}
                                </div>

                                   <div class="row">

                                                    <div class="box-container">
                                                        <div class="box">
                                                            <img src={client1} alt=""/>
                                                            <div class="info">
                                                                <h3>01. mark & alice</h3>
                                                                <p> <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo aut repudiandae nihil quidem perspiciatis natus placeat, inventore, vitae, quia totam ad dolores velit. Cumque, alias ullam. Nihil, aperiam hic! <i class="fas fa-quote-right"></i> </p>
                                                            </div>
                                                        </div>
                                                        <div class="box">
                                                            <img src={client2} alt=""/>
                                                            <div class="info">
                                                                <h3>01. mark & alice</h3>
                                                                <p> <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo aut repudiandae nihil quidem perspiciatis natus placeat, inventore, vitae, quia totam ad dolores velit. Cumque, alias ullam. Nihil, aperiam hic! <i class="fas fa-quote-right"></i> </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <img src={divider} class="divider" alt=""/>

                                                    <div class="box-container">
                                                        <div class="box">
                                                            <div class="info">
                                                                <h3>01. mark & alice</h3>
                                                                <p> <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo aut repudiandae nihil quidem perspiciatis natus placeat, inventore, vitae, quia totam ad dolores velit. Cumque, alias ullam. Nihil, aperiam hic! <i class="fas fa-quote-right"></i> </p>
                                                            </div>
                                                            <img src={client3} alt=""/>
                                                        </div>
                                                        <div class="box">
                                                            <div class="info">
                                                                <h3>01. mark & alice</h3>
                                                                <p> <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo aut repudiandae nihil quidem perspiciatis natus placeat, inventore, vitae, quia totam ad dolores velit. Cumque, alias ullam. Nihil, aperiam hic! <i class="fas fa-quote-right"></i> </p>
                                                            </div>
                                                            <img src={client4} alt=""/>
                                                        </div>
                                                    </div>


                                </div>

                    </section>


        </>
    )
}

export default Client
