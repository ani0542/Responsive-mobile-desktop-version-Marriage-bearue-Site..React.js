import React from 'react'
import headerimg from "../assets/header-img.png"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
function Vendor() {
    return (
        <>
              <section class="vendor" id="vendor">

                    <div class="heading">
                        <h1>top wedding vendors</h1>
                        {/* <img src={headerimg} alt=""/> */}
                    </div>

                    <div class="box-container">

                                <div class="box">
                                    <img src={img1} alt=""/>
                                    <div class="info">
                                        <h3>dressing</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolores.</p>
                                        <a href="#" class="btn">learm more</a>
                                    </div>
                                </div>

                                <div class="box">
                                    <img src={img2} alt=""/>
                                    <div class="info">
                                        <h3>Florist</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolores.</p>
                                        <a href="#" class="btn">learm more</a>
                                    </div>
                                </div>

                                <div class="box">
                                    <img src={img3} alt=""/>
                                    <div class="info">
                                        <h3>wedding cake</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolores.</p>
                                        <a href="#" class="btn">learm more</a>
                                    </div>
                                </div>

                                <div class="box">
                                    <img src={img4} alt=""/>
                                    <div class="info">
                                        <h3>venu and hall</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolores.</p>
                                        <a href="#" class="btn">learm more</a>
                                    </div>
                                </div>

                                <div class="box">
                                    <img src={img5} alt=""/>
                                    <div class="info">
                                        <h3>music and party</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolores.</p>
                                        <a href="#" class="btn">learm more</a>
                                    </div>
                                </div>

                                <div class="box">
                                    <img src={img6} alt=""/>
                                    <div class="info">
                                        <h3>photographer</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolores.</p>
                                        <a href="#" class="btn">learm more</a>
                                    </div>
                                </div>

                        </div>

                </section>
        </>
    )
}

export default Vendor
