import React from 'react'

function Navbar() {
    return (
        <>
               <header>

                             <a href="#" class="logo">LOGO</a>

                                  {/* <div id="menu-bar" class="fas fa-bars"></div> */}

                                  <nav class="navbar">
                                            <a href="#home">home</a>
                                            <a href="#vendor">vendor</a>
                                            <a href="#clients">clients</a>
                                            <a href="#team">team</a>
                                            <a href="#contact">contact</a>
                                            <a href="#blog">blog</a>
                                </nav>

            </header>
        </>
    )
}

export default Navbar
