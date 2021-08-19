import React from 'react'
import headerimg from "../assets/header-img.png"
function Contact() {
    return (
        <>
                     
                     <section class="contact" id="contact">

                                <div class="heading">
                                    <h1>contact us</h1>
                                    {/* <img src={headerimg} alt=""/> */}
                                </div>

                                <form action="">
                                    <div class="inputBox">
                                        <input type="text" placeholder="your name"/>
                                        <input type="email" placeholder="your email"/>
                                    </div>
                                    <div class="inputBox">
                                        <input type="number" placeholder="your number"/>
                                        <input type="text" placeholder="your address"/>
                                    </div>
                                    <textarea placeholder="say something" name="" id="" cols="30" rows="10"></textarea>
                                    <input type="submit" value="send message" class="btn"/>
                                </form>

                    </section>      
        </>
    )
}

export default Contact
