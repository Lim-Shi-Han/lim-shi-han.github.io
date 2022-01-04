import React from 'react'


const Skills = () => {
    return (
        <div>
            <div id="skills" class="skills">
                <div class="skills__title">
                    <h1>SKILLS</h1>
                </div>
                <div class="skillbar__container">
                    <div class="skillbar clearfix html" data-percent="100%">
                    <h4 class="skillbar-title"><span>HTML</span></h4>
                    <div class="skillbar-bar"></div>
                    <div class="skill-bar-percent">70%</div>
                    </div>

                    <div class="skillbar clearfix css" data-percent="100%">
                    <h4 class="skillbar-title"><span>CSS</span></h4>
                    <div class="skillbar-bar"></div>
                    <div class="skill-bar-percent">70%</div>
                    </div>

                    <div class="skillbar clearfix python" data-percent="100%">
                    <h4 class="skillbar-title"><span>Python</span></h4>
                    <div class="skillbar-bar"></div>
                    <div class="skill-bar-percent">60%</div>
                    </div>

                    <div class="skillbar clearfix java" data-percent="100%">
                    <h4 class="skillbar-title"><span>Java</span></h4>
                    <div class="skillbar-bar"></div>
                    <div class="skill-bar-percent">60%</div>
                    </div>

                    <div class="skillbar clearfix javascript" data-percent="100%">
                    <h4 class="skillbar-title"><span>JavaScript</span></h4>
                    <div class="skillbar-bar"></div>
                    <div class="skill-bar-percent">40%</div>
                    </div>

                    <div class="skillbar clearfix reactjs" data-percent="100%">
                    <h4 class="skillbar-title"><span>ReactJS</span></h4>
                    <div class="skillbar-bar"></div>
                    <div class="skill-bar-percent">30%</div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Skills