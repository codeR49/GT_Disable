import React, { useContext, useEffect, useState } from 'react';
import ApiService from '../../services/api.service';
import { Link, useHistory } from 'react-router-dom';
import Spinner from "rct-tpt-spnr";
import $ from 'jquery';
import { AppContext } from '../../contexts/AppContext';

import useToast from '../../commons/ToastHook';

const Footer = () => {
    const [categories, setCategories] = useState([]);
    const { setValueBy } = useContext(AppContext);

    const mobileSidebarNavClose = () => {
        $(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");
    }
    const Toast = useToast();
    const spinner = useContext(Spinner);

    const initCategoriesHeader = () => {
        spinner.show("Please wait...");
        ApiService.getCategories().then(
            response => {
                setCategories(response.data.splice(0, 7));
            },
            err => {
                Toast.error({ message: err.response && err.response.data ? (err.response.data.error || err.response.data.status) : 'Please try after sometime.', time: 2000});
            }
        ).finally(() => {
            spinner.hide();
        });
    }

    useEffect(() => { initCategoriesHeader() }, [])

    return (
        
      <>
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
 
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title fw600" id="exampleModalLabel">TERMS AND CONDITIONS – USER AGREEMENT</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
   <div class="modal-body" style={{height:"480px", overflowY:"scroll"}}>
   <p>PLEASE READ THIS TERMS AND CONDITIONS AGREEMENT CAREFULLY BEFORE USING THE GUNTRADERZ.COM WEBSITE (Site, Platform, We, Us, Our).  <span className="fw-bold">THIS IS A LEGALLY BINDING AGREEMENT.</span> </p>
    <p>By using the Site, You (as an User of the Site as a Seller or Buyer) agree to the terms and conditions in this agreement.  If you do not agree to any of the terms and conditions in this agreement, please do not use this site.  </p>
    <p> BY PURCHASING FROM THE SITE, YOU GUARANTEE AND UNDERTAKE THAT YOU WILL CHECK ALL APPLICABLE LOCAL, STATE, FEDERAL LAWS AND STAY COMPLIANT WITH ALL SUCH LAWS THAT ARE APPLICABLE TO YOU.

    </p>
    <p>DO NOT CHECK ‘AGREE’ UNLESS YOU AGREE TO ALL OF THE TERMS AND CONDITIONS IN THIS AGREEMENT.</p>

   

    <h6 className='fw600'>1.	INTRODUCTION</h6>
    <p>
    1.1.	Guntraderz.com (Site, Platform, We used interchangeably) is a web platform which brings buyers and sellers together. Site is not a party to any of the transactions on Platform.  Site is an advertising medium and nothing more.  While Site makes reasonable efforts to do basic checking of users on the Platform,  <span className="fw-bold">it is your sole responsibility </span>to ensure the legality of all the items you sell / buy through the platform and to who you sell it to or buy from.
    </p>
    <p>
    1.2.	By continuing to use the Site, you agree to all the terms and conditions in this agreement along with the Privacy policy and any other rules / policies published from time to time on the Site. Do not use this Site if you do not agree with any of the rules and conditions for use of this Site.
    </p>
<h6 className='fw600'>2.	ACKNOWLEDGEMENT</h6>



    <p>2.1.	By using the Site user acknowledges that guntraderz.com is the platform operated by Guntraderz LLC a Delaware LLC.</p>
    <p>
    2.2.	Guntraderz.com and Guntraderz LLC are used interchangeably and part of same entity.
    </p>
    <p>
    2.3.	User acknowledges that there could be other associated platforms operated by Guntraderz LLC and usage of other associated platforms is also governed by this terms and conditions.
    </p>
    <p>
    2.4.	User further acknowledges that any fees or other charges associated with the purchase of products will show on their credit card or other forms of payment, receiving (if selling) modes will show the name ‘Guntraderz LLC’.
    </p>

<h6 className='fw600'>3.	REPRESENTATION By registering and using the Platform you agree and represent that:</h6>


    <p>3.1.	You are 21 years or older and legally able to sell or purchase firearms or other products listed on the Platform.
    </p>
    <p>3.2.	You will not let others use your Userid and Password or share your account details with others.  If you suspect or become aware your Userid or being used in an unauthorized manner, you will contact us immediately.
    </p>
    <p>3.3.	You will not use guntraderz.com for any illegal activity</p>
    <p>3.4.	You are responsible to comply with all applicable Federal, State, Local, Tribal, Presidential executive orders and all applicable licensing regulations.</p>
    <p>3.5.	You will help in keeping the site safe and open by providing peer reviews.</p>
    <p>3.6.	You take full responsibility for all the actions you take and any subsequent consequences related to your use of guntraderz.com. </p>
   <p>3.7.	You will contact Bureau of Alcohol, Tobacco, Firearms, and Explosive (ATF) and / or visit the ATF website at <a target="_blank" href="http://www.atf.gov"> http://www.atf.gov</a> if unsure about any rules or regulations related to firearms or other products regulated by ATF. </p>
   <p>3.8.	You understand that all information that you upload to the Platform, including but not limited to Photos, Text, Graphics and all other information is your sole responsibility.  Guntraderz.com does not control the information posted to the Site and is not responsible for any information posted on the Platform.  You also understand that you may be exposed to content that could be offensive, indecent or objectionable.</p>
   <p>3.9.	Guntraderz.com does not guarantee the accuracy, legality, quality of any information posted to the Platform. </p>
   <p>3.10.	Under no circumstances Guntraderz.com or Guntraderz LLC are liable for any errors or omissions in content, any loss or damage of any kind as a result of usage of content on the Site  whether posted, emailed or transmitted otherwise. </p>
   <p>3.11.	Guntraderz LLC can change these terms at any time without notification. You are solely responsible for reading the most current version of the terms and conditions as applicable at the time of any and all activity conducted by You on the Site.</p>
   <p>3.12.	You will not list or trade in any prohibited items including any animals. </p>
   <p>3.13.	You will not create more than one account, list any item only once and at the location of your legal residence.</p>
   <p>3.14.	You will abide by all the terms and conditions and any other policies as published on the Site.</p>
   <p>3.15.	Guntraderz.com can remove or edit any information including your listings on the Site without notification.</p>

<h6 className='fw600'>4.PROHIBITED CONTENT POSTING GUIDELINES</h6>
<p>These are general Prohibited Content guidelines for listings or any user forums posts.  These are not all inclusive.  Posting any kind of objectionable (decided at the sole discretion of Platform) material by any means on the Platform is strictly prohibited. </p>
<p>We reserve the right to remove or edit any listing or post without any notice for any reason. Other actions include but not limited to permanent removal of the offending userid(s) at the sole discretion of Platform.</p>
<p>You agree to not use the Platform to make available by any means, all types of content mentioned below (not all inclusive) or of content similar in nature.</p>
<p>4.1.	PORNOGRAPHIC CONTENT Uploading, posting, emailing, transmitting or otherwise making any kind of Pornographic material available on the Platform by any means. </p>
<p>4.2.	HARMFUL CONTENT Uploading, posting, emailing, transmitting or otherwise making any content available on the Platform, that is harmful, abusive, harassing, obscene, vulgar, invasive of another’s privacy, hateful, racially, ethnically or otherwise objectionable content directed against another individual or groups of individuals.</p>
<p>4.3.	HARMING MINORS Making available on the platform any form of material that harms minors in any way is strictly prohibited.  Such accounts will be permanently removed and information made available to appropriate law enforcement agencies.</p>


<h6 className='fw600'>5.USER TERMINATION</h6>
<p>5.1.	The Site can either suspend or remove any users from its Platform at its sole discretion.</p>

<h6 className='fw600'>6.SHIPPING AND RETURNS</h6>
<p>6.1.	Shipping and Returns are governed by our Shipping and Returns policy found here and incorporated herein by reference.</p>
<p>6.2.	You attest that you have read the Shipping and Returns policy and agree to abide by the terms in the Shipping and Returns policy.</p>

<h6 className='fw600'>7.FEES</h6>
<p>7.1.	All fees related to use of the Platform are detailed in our Fee Schedule and is incorporated herein by reference.</p>
<p>7.2.	All fees are subject to change without any notice and is at the sole discretion of Us.</p>

<h6 className='fw600'>8.INTELLECTUAL PROPERTY</h6>
<p>8.1.	Use of Your Content: For all materials that you upload or otherwise make available on the Site, You grant Us a worldwide irrevocable, royalty free, perpetual license to use, modify, make available on the Site and other affiliates, create derivatives, sell otherwise use or distribute.  This license, however, shall not apply to Us sharing with non-affiliated third parties, for which a separate agreement will be needed.</p>
<p>8.1.1.	Any feedback, comments, posts in user forums, suggestions, ideas posted, offered to us otherwise shall be and remain Our property. By Providing such content to Us You give us all worldwide rights, interest and title, all copyrights and other Intellectual property rights in perpetuity.</p>
<p>8.2.	Use of Platform: Your use of the Platform does not grant you any ownership, rights, title or any other interest. The Platform is solely for your personal use.  You agree to not misuse the Platform and not download, distribute, reverse engineer, create derivative works, exploit in any way in whole or part.  The Software used in creating the site is the exclusive property of Guntraderz LLC and is protected by United States and International laws.  Other than using the functionality of the Site for personal use, Users are strictly prohibited from using the Platform for any and all other purposes which are not related to using the functionality of the Platform.</p>
<p>8.3.	Copyrights and Trademarks: Any third party trademarks that appear on the Platform whether uploaded by Us or by Users of the Platform are owned by the respective owners, and may or may not be affiliated with Us.  Display of Guntraderz.com logo or other identifying materials on other non-affiliated platform / medium of any nature is prohibited, without prior permission from Guntraderz LLC.</p>

<h6 className='fw600'>9.INDEMNIFICATION</h6>
<p>9.1.	You agree to indemnify, defend and hold Guntraderz LLC and all of its affiliates harmless from any claim, liability, loss, cost or expense (including reasonable attorneys’ fees) of any nature whatsoever arising out of or in connection with the use of your Userid on Our Platform and / or affiliates. </p>

<h6 className='fw600'>10.	GOVERNING LAW AND DISPUTES</h6>
<p>10.1.Guntraderz LLC is a Delaware incorporated LLC.</p>
<p>10.2.You agree that all matters related to your use of Our Platform, any disputes, claims arising out of such use shall be governed by, construed and enforced in accordance with the laws of State of Delaware.</p>
<h6 className='fw600'>11.ARBITRATION</h6>
<p>11.1.	To the fullest extent permitted by law, You hereby agree that any disputes or all matters arising out of your use of the Site shall be settled through Mandatory Arbitration in the Chancery of Delaware per laws of Delaware.  You expressly waive any objection now or in the future to the laying of the Venue.</p>

<h6 className='fw600'>12.	OTHER PROVISIONS</h6>
<p>12.1.	Complying with Law: You understand that while we fully support the Second Amendment to the Constitution of USA, we will comply with Federal, State, Local, Tribal law enforcement entities for all lawful requests pursuant to the Constitution of the United States and Due Process of Law.</p>
<p>12.2.	Independent Contractors: You agree that Your usage of the functionality of Our Platform does not create an agency, franchise – franchisee, employer – employee, joint venture, partnership or any such relationship.  You and Guntraderz LLC are independent contractors.</p>
   </div>
    </div>
  </div>
</div>

{/* shiping */}
<div class="modal fade bd-example-modal-lg1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel1" aria-hidden="true">
  <div class="modal-dialog modal-lg">
 
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title fw600" id="exampleModalLabel">SHIPPING POLICY</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
   <div class="modal-body">
  

   
{/* 
    <h6 className='fw600'>1.	SHIPPING</h6> */}
    <p>
    1.1.	Guntraderz.com (We, Platform, Site) is an advertising platform and is not a party to any transactions on our Platform.
    </p>
    <p>1.2.	We do not stock, ship or handle any items sold on our Platform.  Items are shipped by sellers directly.
    </p>
    <p>1.3.	Once an order has been placed using any of the modes of purchase, it cannot be cancelled unless agreed to explicitly by Seller.  In such cases, a Platform Fee as per the Platform Fee Schedule in effect at the time will still be charged. There are no exceptions and the Fee will not be waived.</p>
    <p>1.4.	Buyers should give their Platform generated One Time Password (OTP) only upon receiving the product. Once an OTP is provided funds will be transferred to the Seller and no refunds will be given by the Platform. The only exception to this is if Seller allows returns.</p>




    
   </div>
    </div>
  </div>
</div>
{/*  */}

{/* returns*/}
<div class="modal fade bd-example-modal-lg2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel1" aria-hidden="true">
  <div class="modal-dialog modal-lg">
 
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title fw600" id="exampleModalLabel">RETURN POLICY</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
   <div class="modal-body">
  

{/*    

    <h6 className='fw600'>RETURNS</h6> */}
    <p>
    1.1 Guntraderz.com is an advertising platform and is not a party to any transactions on our Platform.
    </p>
    <p>1.2	Each individual seller sets the terms for the items listed by them including for Returns
    </p>
    <p>1.3 Some of the common (but not all inclusive) terms are given below. These are provided for general guidance.  The terms set by each individual Seller for each item (which could be different) will apply for that item</p>
    <p>1.3.1 No returns.  All sales final.</p>
    <p>1.3.2 Returns within a limited amount of time with or without re-stocking fee.</p>
<p>1.4	Each Buyer is responsible to read the terms set by Sellers of the item they purchase.  By clicking Buy, Trade or other modes of purchase provided by the Platform, Buyer agrees to the terms set by the individual Seller on the Platform.</p>



    
   </div>
    </div>
  </div>
</div>
{/*  */}


{/* Coming Soon */}

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content" >
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"  style={{fontSize: "20px",
    color: "red",
    fontWeight: "900"}}>Coming Soon</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <img className='img-fluid' src='https://img.freepik.com/free-vector/coming-soon-construction-hanging-text-background_1017-37034.jpg?w=740&t=st=1680591978~exp=1680592578~hmac=73f08d6d3312af3b6584b2b20def6c3e555c87a8c53c2723a237a9ee5c30f2b6'/>
   
      <div class="modal-footer">
</div>
    </div>
  </div>
</div>





        <footer id="main_footer">
            <div id="footer-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 top-footer">
                            <img src="images/footer-logo.png" class="img-fluid" />
                        </div>
                    </div>
                    <div class="row mobile-off">
                        {/* <div class="col-lg-2 col-sm-12 fst-footer">
                            <h4>CATEGORY</h4>
                            <ul class="footer-menu">
                                {
                                    categories.map((category, i) => {
                                        return <li class="nav-item" key={i}>
                                            <Link 
                                            class="nav-link" 
                                            to={{
                                                pathname: "/search",
                                                state: {
                                                    breadcrumb: [{
                                                        name: "Home",
                                                        path: "/"
                                                    },
                                                    {
                                                        name: category.name,
                                                        path: "/search",
                                                        data: category
                                                    }]
                                                }
                                            }}
                                            onClick={() => { 
                                                setValueBy('SET_KEYWOARD', ''); 
                                                setValueBy('SET_CATEGORY', category); 
                                                mobileSidebarNavClose() 
                                            }}>{category.name}</Link>
                                        </li>
                                    })
                                }
                            </ul>
                        </div> */}
                        <div class="col-lg-4 col-sm-12 snd-footer">
                            <h4>COMPANY</h4>
                            <ul class="footer-menu">
                                <li><a  data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>About us</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>Contact us</a></li>
                               
                            </ul>
                        </div>
                        <div class="col-lg-4 col-sm-12 trd-footer">
                            <h4>HELP & SUPPORT</h4>
                            <ul class="footer-menu">
                                <li><a data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>Customer Care</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>FAQ’s</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>Resources</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>Privacy policy</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-lg" style={{cursor:"pointer"}}>Terms & conditions</a></li>

                                <li><a data-toggle="modal" data-target=".bd-example-modal-lg2" style={{cursor:"pointer"}} >Return policy</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-lg1" style={{cursor:"pointer"}} >Shipping policy</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>Security Policy</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-sm-12  fou-footer">
                            <h4>CONTACT US</h4>
                            <p>support@guntraderz.com</p>
                            {/* <p>+1 1234567890</p> */}
                        </div>
                    </div>

                    <div class="row flex-wrap-footer desktop-off">
                        {/* <div class="col-sm-6 fst-footer footer-fst">
                            <h4>CATEGORY</h4>
                            <ul class="footer-menu">
                                {
                                    categories.map((category, i) => {
                                        return <li class="nav-item" key={i}>
                                            <Link 
                                            class="nav-link" 
                                            to={{
                                                pathname: "/search",
                                                state: {
                                                    breadcrumb: [{
                                                        name: "Home",
                                                        path: "/"
                                                    },
                                                    {
                                                        name: category.name,
                                                        path: "/search",
                                                        data: category
                                                    }]
                                                }
                                            }}
                                            onClick={() => { 
                                                setValueBy('SET_KEYWOARD', ''); 
                                                setValueBy('SET_CATEGORY', category); 
                                                mobileSidebarNavClose() 
                                            }}>{category.name}</Link>
                                        </li>
                                    })
                                }
                            </ul>
                        </div> */}
                        <div class="col-sm-6 snd-footer footer-snd">
                            <h4>COMPANY</h4>
                            <ul class="footer-menu">
                                <li><a data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>About us</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>Contact us</a></li>
                                
                            </ul>
                        </div>

                   
                        <div class="col-sm-6 trd-footer footer-trd">
                            <h4>HELP & SUPPORT</h4>
                            <ul class="footer-menu">
                                <li><a data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>Customer Care</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>FAQ’s</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>Resources</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>Privacy policy</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-lg" style={{cursor:"pointer"}}>Terms & conditions</a></li>

                                <li><a data-toggle="modal" data-target=".bd-example-modal-lg2" style={{cursor:"pointer"}} >Return policy</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-lg1" style={{cursor:"pointer"}} >Shipping policy</a></li>
                                <li><a data-toggle="modal" data-target=".bd-example-modal-sm"style={{cursor:"pointer"}}>Security Policy</a></li>
                            </ul>
                        </div>
                       
                    </div>
 <div class="col-sm-4 fou-footer footer-fou desktop-off">
                            <h4>CONTACT US</h4>
                            <p>support@guntraderz.com</p>
                            {/* <p>+1 1234567890</p> */}
                        </div>
                    

                </div>
                <div id="footer-copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="social-footer">
                                    <ul>
                                        <li class="social-g"><a></a></li>
                                        <li class="social-t"><a></a></li>
                                        <li class="social-f"><a></a></li>
                                        <li class="social-i"><a></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 copyright-area">
                                <p>&copy; 2021 Guntraderz. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </>
    );
}

export default Footer;