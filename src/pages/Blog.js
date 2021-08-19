import React from 'react'
import headerimg from "../assets/header-img.png"

import blog1 from "../assets/blog-1.jpg"
import blog2 from "../assets/blog-2.jpg"
import blog3 from "../assets/blog-3.jpg"

function Blog() {
    return (
        <>
                <section class="blog" id="blog">

                        <div class="heading">
                            <h1>our latest blogs</h1>
                            {/* <img src={headerimg} alt=""/> */}
                        </div>

                        <div class="box-container">

                                <div class="box">
                                    <img src={blog1} alt=""/>
                                    <div class="info">
                                        <h3> <span>01. </span> blog title goes here </h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium odio a voluptate. Eaque vel ab dolorem, earum optio aliquam.</p>
                                        <a href="#" class="btn">learn more</a>
                                    </div>
                                </div>
                                <div class="box">
                                    <img src={blog2} alt=""/>
                                    <div class="info">
                                        <h3> <span>02. </span> blog title goes here </h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium odio a voluptate. Eaque vel ab dolorem, earum optio aliquam.</p>
                                        <a href="#" class="btn">learn more</a>
                                    </div>
                                </div>
                                <div class="box">
                                    <img src={blog3} alt=""/>
                                    <div class="info">
                                        <h3> <span>03. </span> blog title goes here </h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium odio a voluptate. Eaque vel ab dolorem, earum optio aliquam.</p>
                                        <a href="#" class="btn">learn more</a>
                                    </div>
                                </div>

                            </div>

                    </section>
        </>
    )
}

export default Blog
