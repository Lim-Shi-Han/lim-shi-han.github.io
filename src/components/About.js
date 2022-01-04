import React from 'react';
import Avatar from '@mui/material/Avatar';
import mypic from "../images/mypic.jpg";

const About = () => {
    return (
        <div>
            <div id = "about" class="about">
                <h3>About Me</h3>
                <div class="about__container">  
                    <div class="mypic__container">
                        <Avatar id="mypic" alt="Error" src={mypic} sx={{ width: 140, height: 140}}/>
                    </div>
                    <div class="about__words">
                        <h4>I am a Year 2 Computer Science student at NTU.</h4>
                        <h4>I am still exploring my interests within Computer Science.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
