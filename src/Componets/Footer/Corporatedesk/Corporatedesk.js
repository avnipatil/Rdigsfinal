import React, { useState } from 'react';
import Button from '../../ButtonGroup/Button/Button';
import './Corporatedesk.css';
import Swal from "sweetalert2"; 
import {Modal, ModalBody} from 'reactstrap';
import corporatedeskimg from '../../../img/corpomodalimg.png'
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Corporatedesk = () => {

// functionality for corporate disk model
    const toggle = () => setModal(!modal);
    const [modal, setModal] = useState(false);

//POST API calling for media kit
  const { register, handleSubmit ,reset } = useForm();
  const onSubmit = (data) =>{
      axios.post('https://rdigs-api.herokuapp.com/mediakit',data)
      .then(res=>{
          console.log(res.data);          
            Swal.fire({
                position: 'centerd',
                icon: 'success',
                title: 'Your Data has been saved',
                showConfirmButton: false,
                timer: 2000
            })
          reset();
      })
  }

//validation
  const[email,setEmail]=useState('');
  function handleEmail(event){
    setEmail(event.target.value)
}
    return (
        <>
        <section className="media-kit">
            <div className="container mediakit-cont">
            <div className="row">
                    <div className="col-sm-12 col-lg-8 col-md-8 text-light">
                        <div className="mediakitdiv">
                        <h1 className="mediakithead data-shadow='dang!'">CORPORATE DECK 2021</h1>
                        </div>
                        <div className="mediakit-para slide-right">
                           <p className="mediakit-para" data-aos="flip-left">By focusing on top of the funnel,we arm your sales and marketing team with larger audience of potential leads to keep you ahead in the game.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 col-md-4 cop-btn">
                        <div className="downbtncop">
                    <Button text="DOWNLOAD NOW" fun={()=>setModal(true)} classNames="allbtn-primary glow-on-hover text-light downloadnow-btn"/>
                    </div>
                    </div>
                    <div className="Modal-animation">
                         <Modal centered isOpen={modal} toggle={toggle} className="model-corporatedeck-style">
                                <ModalBody>
                                  <span className="homemodalclosebtn" onClick={() => setModal(false)} ><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                                            <div className="container"> 
                                                <div className="row">
                                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                        <img src={corporatedeskimg} alt="corporate-dec-img" className="corporate-img img-fluid" alt=""></img>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                        <h2 className="text-center model-head-cop">Corporate Deck 2021</h2>
                                                            <form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
                                                                <div className="corporate-form-in1">
                                                                <i className="fa fa-user"></i>
                                                                <input type="text" {...register("name",{ required: "Please enter your name." })} className="form-corporateDeck-fname" id="Fname" placeholder="Enter Your Name" autocomplete="off"/>
                                                                </div>
                                                                <div className="corporate-form-in3">
                                                                <i className="fa fa-phone"></i>
                                                                <input type="number" {...register("contact",{ required: "Please enter your phone number." })} className="form-corporateDeck-number" id="Pnumber" placeholder="Phone Number" maxLength="10" required/>
                                                                </div>
                                                                <div className="corporate-form-in4">
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                                <input type="email" {...register("email",{ required: "Please enter your email." })} className="form-corporateDeck-email" id="Email" placeholder="Your Email" autocomplete="off" required/>
                                                                </div>
                                                                <div className="corporate-form-in5">
                                                                <i className="fa fa-address-book" aria-hidden="true"></i>
                                                                <input type="text" {...register("company_name",{ required: "Please enter your company name." })} className="form-corporateDeck-company" id="Company" placeholder="Company Name" autocomplete="off" required/>
                                                                </div>
                                                                <div className="d-flex justify-content-center" style={{marginTop:'10px'}}>
                                                                     <Button text="Submit" type="submit" classNames="allbtn-primary glow-on-hover text-light"></Button>
                                                                </div>
                                                            </form>
                                                    </div>
                                                </div> 
                                            </div>
                                </ModalBody>
                        </Modal>
                    </div>               
                </div>
            </div>
        </section>      
    </>
    )
}
export default Corporatedesk;
