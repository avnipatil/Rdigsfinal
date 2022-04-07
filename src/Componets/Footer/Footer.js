import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Corporatedesk from './Corporatedesk/Corporatedesk';
import ind from '../../img/india.jpg';
import us from '../../img/US.jpg';
import footenvolep from '../../img/mailicon.jpg';
import './Footer.css';
import Swal from "sweetalert2"; 
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Footer = () => {

// variable for copy-right to get system date function
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };

// footer scrollup icon show state & going to click scroll top
const [showScrollup, setShowScroll] = useState(false)

const checkingScrollTop = () => {
  if (!showScrollup && window.pageYOffset > 400) {
    setShowScroll(true)
  } else if (showScrollup && window.pageYOffset <= 400) {
    setShowScroll(false)
  }
};
const scrollgoTop = () => {
  window.scrollTo({ top:0, behavior: 'smooth' });
};
window.addEventListener('scroll', checkingScrollTop)

//any where in the page scroll on top Navigation click open on top
const scrollgoToplink = () => {
    window.scrollTo({ top:0});
  };

//Post API Logic for sending newslatter mail id
const { register, handleSubmit ,reset} = useForm(); 
const onSubmit = (data)=> {
    console.log(data)
    axios.post(`https://rdigs-api.herokuapp.com/newsletter`, data )
      .then(res => {
        console.log(res);
        console.log(res.data);
        Swal.fire({
            position: 'centerd',
            icon: 'success',
            title: 'To Get News succesfully',
            showConfirmButton: false,
            timer: 2000
        })
        reset();  
      })
  }
    return (
        <>
        {/* scrollgoTop button codding */}
        <div>
            <button  className="back-to-top "  onClick={scrollgoTop}
            style={{visibility: showScrollup ? 'visible' : 'hidden' }} >
           <i class="fa fa-angle-double-up"></i></button>
        </div>
        
        {/* Footer section start */}
        <Corporatedesk/>
        <section className="footer-cont">
            <div className="container">
                <div className="row footer-row" >
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 footrescol">
                        <div className="footersec-RDInfo">
                            <h5 className="footer-tit text-light">RD INFO GLOBAL SOLUTIONS</h5>
                            <p><Link to="#" className="underline"></Link></p>
                            <div className="sep"></div>
                            <h6 className="text-footer-info text-light">RDIGS was founded in 2013 formerly known as RD info Solutions.
                                Bootstrapped serving clients for B2C Lead Generation campaigns.It was not too late when we identified the need of lead generation activities for B2B Marketers.
                            </h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6  col-sm-6 col-xs-6 footrescol" style={{textAlign:'justify'}}>
                        <h5 className="text-light contactus-footer">CONTACT US</h5>
                        <i className="fa fa-map-marker footaddmapicon"> </i> 
                        <span className="footaddvascon">
                         402, Vascon Garnets Bay,Besides Hotel Four Points By Sheraton, Viman Nagar, Pune-411014.
                        </span>
                        <div className="footresdiv" style={{marginTop:'5px'}}> 
                            <img className="footemailimg" src={footenvolep} alt="No"/>
                            <span className="Email-info"><a href="mailto:sales@rdigs.com" target="_blank">sales@rdigs.com</a></span>
                        </div>
                        <div className="footresdivhr" style={{marginTop:'5px'}}> 
                        <img className="footemailimg" src={footenvolep} alt="No" />  
                        <span className="Email-info"><a href="mailto:hr@rdigs.com" target="_blank">hr@rdigs.com</a></span>
                        </div>
                        <div className="footresdiv" style={{marginTop:'5px'}}> 
                        <span className="ind">
                            <img className="text-light img-us" src={ind} alt="No" />
                            <span className="Email-info"><a href="tel:+848-404-0734">+91 848-404-0734</a></span>
                        </span>
                        </div>
                        <div className="footresdiv" style={{marginTop:'5px'}}> 
                        <span className="us">
                            <img className="text-light img-ind" src={us} alt="No" />
                            <span className="Email-info"><a  href="tel:+1 3022615312">+1 302-261-5312</a></span>
                        </span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6  col-sm-6 col-xs-6 footer-links footrescol">
                        <h5 className="ourservices text-light">OUR SERVICES</h5>
                        <ul className="text-light services">
                            <li> <Link className="services-webdevlopment" to="/demandgeneration" onClick={scrollgoToplink}>Demand Generation</Link></li>
                            <li><Link className="services-webdevlopment" to="/salesDevelopment" onClick={scrollgoToplink}>Sales Development</Link></li>
                            <li><Link className="services-webdevlopment" to="/databaseservice" onClick={scrollgoToplink}>Database Service</Link></li>
                            <li><Link className="services-webdevlopment" to="/privacypolicy" onClick={scrollgoToplink}>Privacy Policy</Link></li>   
                            <li> <Link className="services-webdevlopment" to="/termscondition" onClick={scrollgoToplink}>Terms And Conditions</Link></li>   
                            <li><Link className="services-webdevlopment" to="/unsubscribe" onClick={scrollgoToplink}>Unsubscribe</Link></li>                             
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6  col-sm-6 col-xs-6 text-light footer-newsletter footrescol">
                        <h5 style={{fontSize:'17px',fontFamily:'Orbitron'}}>JOIN OUR NEWSLATTER</h5>
                        <p>Subscribe to our newsletter to get latest updates.</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="inputs">
                                <input type="email" id="email" {...register("email")} maxlength="60" className="webform__form-control" name="email" size="20" placeholder="Enter Your Email" autocomplete="off"  style={{borderRadius:'0px'}} required/>
                                <input type="submit" name="submit" id="eesubmit" className="EWF__subscribe" value="SUBSCRIBE" style={{borderRadius:'0px'}}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <section className="copyright-section">
            <div className="container">
                <div className="row d-flex justify-space-between">
                    <div className="col-lg-6 col-md-6 col-sm-6 me-md-auto text-center text-md-start footrescol">
                        <div id="copyright" className="clr copyright-center" role="contentinfo">
                            Copyright © <span>{getCurrentYear()}</span> <a href="https://rdigs.com/" target="_blank" className="footerlinkhover" style={{fontWeight:'bolder'}}>RD Info Global Solutions</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div  className="copydesign" >
                           Designed by <a href="http://lead-tronics.com/" target="_blank" className="footerlinkhover" style={{fontWeight:'bolder'}}>LeadTronics</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </section>
    </>
    )
}
export default Footer;
