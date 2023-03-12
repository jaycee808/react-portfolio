import React from "react";

function Home() {
    return (
        <div id="home">
                <div class="text-one">Hello,</div>
                {/* <div class="text-two">I'm Jamie Clark.</div>
                <div class="text-three">A <span class="color-hightlight">Frontend Developer</span> based in Manchester, UK.</div> */}
                {/* <div class="text-four">Manchester, UK</div> */}
                <h1 class="text-three">I'm Jamie Clark <br></br> a Frontend Developer.</h1>
                <div class="text-four">based in Manchester, UK</div>
                <div class="home-page-number">01</div>
                <button class="button"><a href="" target="_blank">Download CV</a></button>
        </div>
    );
}

export default Home;