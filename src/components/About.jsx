import React from 'react';
import profilePic from '../portfolioImages/profile-pic.jpg'
import "../styles/about.css"

function About() {
  return (
    <div id='about'>
        <div className='container'>
            <div className='row about-section'>
                <div className='col-lg-4 profile'>
                    <img className='w-100' src={profilePic} width={"100px"} alt="" />
                </div>
                <div className='col-lg-8 about'>
                    <div className='row about-description'>
                        <h2>About</h2>
                        <p> I am Venkatesh Muddangula, 3 years of  total working experience and 1.5 Years in front-end UI/web development, strong technical skills in website development including web-based applications.
                        Hands- on experience in developing web applications.
                        Experience in implementing with client-side technologies React JS, Redux, JavaScript, Bootstrap, HTML5, CSS3.
                        Experience in React JS and worked with React-redux.
                        Experience in using React JS components, Forms, Events, Router, Redux.
                        Experience in working on Integrated Development Environment like Visual Studio Code and StackBlitz
                        Experience in using version control systems like Git Repository.
                        Passionate to learn and adapt quickly to the emerging new technologies.
</p>
                    </div>
                    <div className='row about-description'>
                        <h2>contact</h2>
                        <ul>
                            <li>Venkatesh Muddangula</li>
                            <li>india</li>
                            <li>vemu305@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About