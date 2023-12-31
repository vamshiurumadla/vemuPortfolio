import React from 'react';
import backgroundImg from '../portfolioImages/contactBg2.jpg';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div id='contact'>
      <div className='contact-bg'>
        <img src={backgroundImg} alt="loading" />
        <div className='container'>
          <div className='row contact-body'>
            <div className='col-lg-6'>
              <div className='contact-details'>
                <h2>Contact us</h2>
                <div>
                  <ul className='full-details'>
                    <li className='details'>
                      <div className='detail'>
                        <div>
                        <span>
                          <FontAwesomeIcon icon={faPhone} />
                          </span>
                          <span>call</span>
                        </div>
                        <div>
                        <span>9177916892</span>
                        </div>
                      </div>
                    </li>
                    <li className='details'>
                      <div className='detail'>
                        <div>
                        <span><FontAwesomeIcon icon={faEnvelope} /></span>
                          <span>email</span>
                        </div>
                        <div>
                        <span>vemu305@gmail.com</span>
                        </div>
                      </div>
                    </li>
                    <li className='details'>
                      <div className='detail'>
                        <div>
                        <span><FontAwesomeIcon icon={faLinkedin} /></span>
                          <span>linked</span>
                        </div>
                        <div>
                        <a href='https://www.linkedin.com/in/venkatesh-mudhangula-67761120b/'>Venkatesh Muddangula</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='card contact-form'>
                <div className='card-body'>
                  <form className='form' action="">
                  <div>
                      <label For="email">Email</label>
                      <input id="email" type="text" />
                    </div>
                    <div>
                      <label For="name">Name</label>
                      <input id="name" type="text" />
                    </div>
                    <div>
                      <label For="contactno">contact</label>
                      <input id="contactno" type="text" />
                    </div>
                    <div>
                      <label For="context">context</label>
                      <input id="context" type="text" />
                    </div>
                    <button>submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact