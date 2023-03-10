import React, {useState} from "react"; 

import { Modal, Button } from 'react-bootstrap'; 
  
function Login() { 
  const [show, setShow] = useState(false); 
  
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true); 

  
  return ( 
    <> 
        <div class="navbar-right">
            <a onClick={handleShow} id="cart"> Cart</a>
            <span class="dropdown top-box3 ml-2 header-btn cd-main-nav__list js-signin-modal-trigger desktop-btn">
                <span><a class="header-btn-light" onClick={handleShow} data-signin="login">Login</a></span>
            </span>
        </div>
  
      <Modal 
        show={show} 
        onHide={handleClose} 
        backdrop="static"
        keyboard={false} 
      > 
        <Modal.Header closeButton> 
          <Modal.Title>Modal title</Modal.Title> 
        </Modal.Header> 
        <Modal.Body> 
            <div class="row">
                    <div class="col-lg-5 desktop-login-head">
                        <div class="login-left-area">
                            {/* <h2>Login</h2>
                            <p>Login to manage your Wishlist, Orders, Bids, Trades, Listings, Schedules & more.</p> */}
                            <p class="text-center"><img src="images/login-comp.png" class="img-fluid" /></p>
                        </div>
                    </div>
                   
                </div>
        </Modal.Body> 
        <Modal.Footer> 
          <Button variant="primary" onClick={handleClose}> 
            Close 
          </Button> 
            
        </Modal.Footer> 
      </Modal> 
    </> 
  ); 
} 
  
export default Login;