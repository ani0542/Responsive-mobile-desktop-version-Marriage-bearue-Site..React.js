import React from 'react'
import headerimg from "../assets/header-img.png"
import team1 from "../assets/team-1.png"
import team2 from "../assets/team-2.png"
import team3 from "../assets/team-3.png"


function Team() {
    return (
        <>
                   
            <section class="team" id="team">

                        <div class="heading">
                            <h1>our creative team</h1>
                            {/* <img src={headerimg} alt=""/> */}
                        </div>

                    <div class="box-container">

                <div class="box">
                    <img src={team1} alt=""/>
                    <h3>john deo</h3>
                    <span>wedding planner</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nisi ea quisquam ipsa molestias itaque, quod quis id doloremque similique!</p>
                    <div class="share">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                    </div>
                </div>
                <div class="box">
                    <img src={team2} alt=""/>
                    <h3>john deo</h3>
                    <span>wedding planner</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nisi ea quisquam ipsa molestias itaque, quod quis id doloremque similique!</p>
                    <div class="share">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                    </div>
                </div>
                <div class="box">
                    <img src={team3} alt=""/>
                    <h3>john deo</h3>
                    <span>wedding planner</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nisi ea quisquam ipsa molestias itaque, quod quis id doloremque similique!</p>
                    <div class="share">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                    </div>
                </div>

            </div>

        </section>
        </>
    )
}

export default Team
