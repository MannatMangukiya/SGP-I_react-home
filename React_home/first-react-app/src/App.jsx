import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    
          <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="style.css" />
            {/*font*/} 
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&family=Nunito&family=Roboto:ital@1&display=swap" rel="stylesheet" />
            {/*icons*/}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <title>Resposive Job Portal Website</title>
            {/*Navbar*/} 
            <div className="nav">
              <div className="navbar-left">
                <div id="logo">
                  <img src="images/logo.png" alt="logo" height="50px" width="80px" />
                </div>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="companies.html">companies</a></li>
                  <li><a href="Service.html">Jobs</a></li>
                  <li><a href="contact us.html">Contact us</a></li>
                </ul>
              </div>
              <div className="navbar-right">
                <button><a href="login.html">Login / Sign Up</a></button>
              </div>
            </div>
            {/*header*/}
            <section id="home">
              <h1 className="header-title">
                FIND YOUR  <span>DREAM JOB</span> NOW
              </h1>
            </section>
            {/* search*/}
            <div className="search-wrapper">
              <div className="search-box">
                <div className="search-card">
                  <input className="search-input" type="text" placeholder="job title or keywords" />
                  <a href="service.html"><button className="search-button" onclick="searchJobs()">Search</button></a>
                </div>
              </div>
            </div>
            {/* filter-box*/}
            <div className="filter-box">
              <div className="filter-dropdown">
                <select className="filter-select" id="job-level" name="job-level">
                  <option>Job Level</option>
                  <option>Entry</option>
                  <option>Mid-Senior</option>
                  <option>Director</option>
                </select>
                <select className="filter-select1" id="job-function" name="job-function">
                  <option>Job Function</option>
                  <option>IT</option>
                  <option>Management</option>
                  <option>Education</option>
                </select>
                <select className="filter-select2" id="employment" name="employment">
                  <option>Employment Type</option>
                  <option>Internship</option>
                  <option>Part Time</option>
                  <option>Full Time</option>
                </select>
                <select className="filter-select3" id="location" name="location"> 
                  <option>Locations</option>
                  <option>Remote</option>
                  <option>US</option>
                  <option>UK</option>
                </select>
                <select className="filter-select4" id="education" name="education"> 
                  <option>Education</option>
                  <option>High School</option>
                  <option>Bachelor's degree</option>
                  <option>Master's degree</option>
                </select>
              </div>
            </div>
            {/* job listing */}
            <section className="job-list" id="jobs">
              <div className="job-card">
                <div className="job-name">
                  <img className="job-profile" src="images/tesla.jpg" />
                  <div className="job-detail">
                    <h4>Tesla</h4>
                    <h3>Mechanical Engineer </h3>
                    <p>Guiding with reason, leading with logic, a Logical Director charts the course to success.</p>
                  </div>
                </div>
                <div className="job-posted">
                  posted 2 mins ago 
                </div>
              </div>
              <div className="job-card">
                <div className="job-name">
                  <img className="job-profile" src="images/tiktok-logo.jpg" />
                  <div className="job-detail">
                    <h4>Tiktok</h4>
                    <h3>Digital marketing</h3>
                    <p>Digital marketers: where creativity meets strategy in the online world.</p>
                  </div>
                </div>
                <div className="job-posted">
                  posted 10 mins ago 
                </div>
              </div>
              <div className="job-card">
                <div className="job-name">
                  <img className="job-profile" src="images/youtube.jpg" />
                  <div className="job-detail">
                    <h4>YouTube</h4>
                    <h3>UI UX Designer </h3>
                    <p>UI/UX designers: Crafting digital experiences, one pixel at a time.</p>
                  </div>
                </div>
                <div className="job-posted">
                  posted 1 hour ago 
                </div>
              </div>
              <div className="job-card">
                <div className="job-name">
                  <img className="job-profile" src="images/Amazon-Logo.jpg" />
                  <div className="job-detail">
                    <h4>Amazon</h4>
                    <h3>Softwear Engineer</h3>
                    <p>Turning lines of code into innovative solutions.</p>
                  </div>
                </div>
                <div className="job-posted">
                  posted 2 hour ago 
                </div>
              </div>
            </section> 
            {/* join */}
            <section className="join">
              <div className="join-detail">
                <h1 className="section-title"> LETS START YOUR OWN JOB WITH US</h1>
                <h3>
                  "Your job is not just a source of income; it's an opportunity to make a difference, learn, and grow. Embrace each day with enthusiasm, and you'll find success and fulfillment in every task."            
                </h3>
              </div>
              <button className="join-button"><a href="Register.html">join Now </a></button>
            </section>
            {/* testimono */}
            <selection className="testimoni" id="testimoni">
              <h1 className="section-title">Testimoial</h1>
              <p> Lets see what our clients say about us </p>
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <i className="fas fa-quote-left" />
                    <h3>Unlocking opportunities, forging connections, and driving growth - that's the essence of a Business Developer's journey.</h3>
                    <div className="testimoni-pic">
                      <img src="images/john-smith.jpeg" />
                      <p>John Smith</p>
                      <span>Business Development</span>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <i className="fas fa-quote-left" />
                    <h3>Data analysts turn raw information into meaningful insights, helping businesses make informed decisions and navigate the complexities of the data-driven world.</h3>
                    <div className="testimoni-pic">   
                      <img src="images/tailer-tama.jpg" />
                      <p>Taylor Tama</p>
                      <span>Data Analyst</span>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <i className="fas fa-quote-left" />
                    <h3>In the realm of decision-making, a Logical Director wields the power of reason, guiding teams and organizations with clarity and precision, turning challenges into opportunities and chaos into order.</h3>
                    <div className="testimoni-pic">
                      <img src="images/albert-john.jpeg" />
                      <p>Albert john</p>
                      <span>Logistic Director</span>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <i className="fas fa-quote-left" />
                    <h3>Shaping perceptions, driving connections, and building brand stories in a world of endless possibilities.</h3>
                    <div className="testimoni-pic">
                      <img src="images/p-3.jpg" />
                      <p>Jolia Robert</p>
                      <span>Marketing officer </span>
                    </div>
                  </div>
                </div>
              </div>
            </selection>
            {/* blog */}
            <selection className="blog" id="blog">
              <h1 className="section-title1">Career Advices</h1>
              <p>Your dream job is just one application away. Keep searching, keep applying, and you'll find the perfect opportunity.</p>
              <div className="blog-wrapper">
                <div className="blog-card">
                  <img className="blog-images" src="images/blog-1.jpg" height="130px" width="130px" />
                  <div className="blog-detail">
                    <span>11 Apr 2022</span>
                    <h4>How to enjoy your work</h4>
                    <p>Happiness at work begins with a positive mindset. Embrace challenges as opportunities to learn and grow."</p>
                    <hr className="divider" />
                    <a href="readmore-1.html" className="blog-more">Read more</a>
                  </div>
                </div>
                <div className="blog-card">
                  <img className="blog-images" src="images/blog-2.jpg" height="130px" width="200px" />
                  <div className="blog-detail">
                    <span>24 Apr 2022</span>
                    <h4>10 tips for technical interview</h4>
                    <p>Master the art of problem-solving. Technical skills help you identify issues, but creativity and critical thinking solve them.</p>
                    <hr className="divider" />
                    <a href="readmore-2.html" className="blog-more">Read more</a>
                  </div>
                </div>
                <div className="blog-card">
                  <img className="blog-images" src="images/blog-3.jpg" height="130px" width="200px" />
                  <div className="blog-detail">
                    <span>11 may 2022</span>
                    <h4>managing time effectively</h4>
                    <p>Efficiency is about doing more with less. Streamline your work processes, and you'll achieve more in less time.</p>
                    <hr className="divider" />
                    <a href="readmore-3.html" className="blog-more">Read more</a>
                  </div>
                </div>       
              </div>
            </selection>
            {/*footer*/}
            <footer>
              <div className="footer-content">
                <div className="footer-logo">
                <img src="images/logo.png" alt="logo" height="50px" width="80px" />
                </div>
                <div className="footer-links">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="companies.html">companies</a></li>
                    <li><a href="Service.html">Jobs</a></li>
                    <li><a href="contact us.html">Contact us</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-info">
                <p>© 2023 Job Portal. All rights reserved.</p>
                <p>123 Street Name, City, Country</p>
              </div>
            </footer>
          </div>
        );
      }
    
  


export default App
