import React, { useState, useContext,useEffect } from 'react'
import Spinner from "rct-tpt-spnr";
import Register from '../Register/Register'
import ForgetPassword from '../ForgotPassword/ForgotPassword'
import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import _ from 'lodash';
import { Form, InputGroup } from 'react-bootstrap';
import ApiService from "../../services/api.service";
import { SubmitField } from "../Shared/InputType";
import GLogin from "../Shared/SocialLogin/GLogin";
import FLogin from "../Shared/SocialLogin/FLogin";
import { useAuthDispatch, useAuthState } from '../../contexts/AuthContext/index';
import { DEFAULT_LATLNG, MAP_API_KEY } from '../../commons/utils';
import { AppContext } from '../../contexts/AppContext';
import { services } from '@tomtom-international/web-sdk-services';
import useToast from '../../commons/ToastHook';
import { useHistory } from 'react-router-dom';
import RequestVerificationLink from '../RequestVerificationLink/RequestVerificationLink';
import Cookies from 'universal-cookie';
import axios from 'axios'

const Login = ({ setLoginModel }) => {
	const [modalTab, setModalTab] = useState("login");
    const [mailVerifyStatus, setMailVerifyStatus] = useState();
   


   

    const verificationStatus = (data) => {
        setMailVerifyStatus(data);
    }
	return (<>
		<div className="cd-signin-modal js-signin-modal">
			<div className="cd-signin-modal__container">
				<div className="row">
					<div className="col-lg-5 desktop-login-head">
						<div className="login-left-area">
                        {modalTab === "login" && <>
                            {/* <h2>Login</h2>
							<p>Login to manage your Wishlist, Orders, Bids, Trades, Listings, Schedules & more.</p> */}
							<p className="text-center"><img src="https://img.freepik.com/free-vector/creative-coming-soon-teaser-background_23-2148894969.jpg?w=900&t=st=1678429033~exp=1678429633~hmac=8cb1aae4d138e7b536c75964784ac91609fa98d7ff45a65c3d079e2b172e587c" className="img-fluid" /></p>
                        </>}
                        {modalTab === "signUp" && <>
                            <h2>Create Account</h2>
							<p>Please register to create an account with us! By creating an account you will be able to get exclusive access to our services.</p>
							<p className="text-center"><img src="images/login-comp.png" className="img-fluid" /></p>
                        </>}
                        {modalTab === "reset" && <>
                            <h2>Forget Password</h2>
							<p></p>
							<p className="text-center"><img src="images/login-comp.png" className="img-fluid" /></p>
                        </>}
                        {modalTab === "request-link" && <>
                            <h2>Request Link</h2>
							<p></p>
							<p className="text-center"><img src="images/login-comp.png" className="img-fluid" /></p>
                        </>}
							
						</div>
					</div>
					<div className="col-lg-7 login-right-area">
						{modalTab === "login" && <LoginPage {...{ setModalTab, setLoginModel, mailVerifyStatus }} />}
						{modalTab === "signUp" && <Register {...{ setModalTab, setLoginModel, verificationStatus }} />}
						{modalTab === "reset" && <ForgetPassword {...{ setModalTab }} />}
                        {modalTab === "request-link" && <RequestVerificationLink {...{ setModalTab }} />}
					</div>
				</div>
				<a onClick={() => setLoginModel(false)} className="cd-signin-modal__close js-close">Close</a>
			</div>
		</div>
	</>)

}
export default Login

const LoginPage = ({ setModalTab, setLoginModel, mailVerifyStatus }) => {
    const Toast = useToast();
    const history = useHistory()
    const {setWishList,setMyListings,setValueBy} = useContext(AppContext)
    const userDetails = useAuthState();
    const [isLogeIn,setIsLogin] = useState(false)
    const [hasInvalidCredential, setHasInvalidCredential] = useState(false)
    const [errorMessage,setErrorMessage] = useState('');
    const [isNotVerifiedEmail, setIsNotVerifiedEmail] = useState(false);
    const [username, setusername] = useState();
    const [id, setid] = useState();
    const [token, settoken] = useState();
    const cookies = new Cookies();
    /**
    * show the password as text when clicking eye icon 
    * @param {String} id - input field id
    */
    const PasswordEye =({ id }) => {
        const [eyeIcon, setEyeIcon] = useState('fa fa-eye-slash')
        const [mouseLeave, setMouseLeave] = useState(false)

        const showPassword = () => {
            const password = document.getElementById(id);
            if (password.type === 'password') {
                password.type = 'text'
                setEyeIcon('fa fa-eye')
                setMouseLeave(true)
            } else {
                setMouseLeave(false)
                password.type = 'password'
                setEyeIcon('fa fa-eye-slash')
            }
        }
        return <span onClick={() => showPassword()} className="text-muted show-password"><i onMouseLeave={() => mouseLeave && showPassword()} className={eyeIcon}></i></span>
    }

    const dispatch = useAuthDispatch();
    const spinner = useContext(Spinner);
	const schema = Yup.object().shape({
        email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
        password: Yup.string()
        .required('Please Enter your password')
      });

     
    const onLoginSubmitted = (values) => {
        try {
            if (!_.isEmpty(values)) {
                dispatch({ type: 'REQUEST_LOGIN' });
                spinner.show("Please wait...");
                

                ApiService.login(values).then(
                    response => {
                        setid(response.data.sid)
                        setusername(response.data.firstName)
                        dispatch({ type: 'LOGIN_SUCCESS', payload: {...response.data, "defaultPlatformVariables": response.data?.defaultPlatformVariables ? JSON.parse(response.data.defaultPlatformVariables) : null} });
                        setLoginModel(false);
                        if(response?.data?.appUserType === "SUPERADMIN") history.replace("/platform-dashboard/request");
                        getWidhList(response.data.sid)
                        getMyListing(response.data.sid)
                        getUserProfileDetails(response.data.sid)
                        setErrorMessage('')


                        const payload = {
                            "username": response.data.firstName,
                            "email":response.data.email,
                            "id": response.data.sid};
                        axios.post('https://trainsoft.co.in/tokengen', payload).then(response => {
                            let tokengun= response.data.tokengun
                            cookies.set('token', tokengun, {domain:'.toolgrazp.net'});
                        });
                        
                    },
                    err => {
                        dispatch({ type: 'LOGIN_ERROR', error: err.response?.data?.message });
                        if(err.response.status === 403 && err.response?.data?.message) {
                            setIsNotVerifiedEmail(true);
                            setErrorMessage("Your email id is not verified! Please verify your email first through the link sent to your registered email id. If in case verification email is expired or deleted, you can request for another verification link.")
                        }
                        if((err.response.status === 401 || err.response.status === 404 ) && err.response?.data?.message) setErrorMessage(err.response?.data?.message)
                        setHasInvalidCredential(true);
                    }
                ).finally(() => {
                    spinner.hide();
                });                
            }
        } catch (err) {
            console.error("Exception occurred in onSubmitted --- " + err);
        }
    }

    const getWidhList = async (sid) => {
        spinner.show("Please wait...");
        ApiService.getWishList(sid).then(
            response => {
                setWishList(response.data);
            },
            err => {
                // Toast.error({ message: err.response.data ? err.response.data.error: 'Data loading error', time: 2000});
            }
        ).finally(() => {
            spinner.hide();
        });
    };

    const getMyListing = async (sid)=>{
        try{
        ApiService.getMyLists(sid).then(
            response => {
                setMyListings(response.data);
            },
            err => {
                // Toast.error({ message: err.response?.data ? (err.response?.data.error || err.response?.data.status) : 'API Failed', time: 2000});
            }
        ).finally(() => {
            spinner.hide();
        }); 
     } catch(err){
        console.error("Error occur on getMyListing()",err)
     }
    }

    const getUserProfileDetails = (sid) =>{
        ApiService.getMyProfile(sid).then(
            response => {
                response.data.appUserHasAddressTO &&  updateGeoLocationByZipcode(response.data.appUserHasAddressTO.zipcode)
            },
            err => {
                console.err("")
                // Toast.error({ message: err.response?.data ? (err.response?.data.error || err.response?.data.status) : 'API Failed', time: 2000});
            }
        ).finally(() => {
            // setIsDataLoaded(true);
        });
    }

    const updateGeoLocationByZipcode = (zipCode) => {

        if(zipCode){
        ApiService.getLocationByPin({
            key: MAP_API_KEY,
            zipCode:zipCode
          }).then(res=>{
            //  handleResults(res.data)
            res.data.results.length> 0 ? setValueBy('SET_LOCATION',res.data.results[0]): getMyLocation(DEFAULT_LATLNG)
              
          });
        }else{
            getLocation()
        }
    }
  
    useEffect(() => {
   
        if(isLogeIn){
            getWidhList(userDetails.user.sid)
            getMyListing(userDetails.user.sid)
            getUserProfileDetails(userDetails.user.sid)
        }
    }, [isLogeIn])

    const getMyLocation = (latlng) => {
        function callbackFn(resp) {
            setValueBy('SET_LOCATION',resp.addresses[0]);
        }
        services.reverseGeocode({
            key: MAP_API_KEY,
            position: latlng
        }).then(callbackFn);
    }

    const getLocation =()=> {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            console.log("Geolocation is not supported by this browser.")
        }
      }
      
      const showPosition =(position) =>{
        getMyLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        })
      }

    useEffect(() => {
          getLocation()
    }, [])

	return (<div className=" js-signin-modal-block" >
		<h2 className='text-center'>Coming soon</h2>
		<p className="log-cap text-center pt-2" style={{color:"#487916"}}>Check back on 3rd April</p>
		{/* <ul className="loginSocial">
			<li>
                <GLogin {...{ setLoginModel,setIsLogin }} />
            </li>
			<li className="loginF">
                <FLogin {...{ setLoginModel,setIsLogin }} />
            </li>
            <p>Or login with email</p>
		</ul>

		<p className="cd-signin-modal__bottom-message js-signin-modal-trigger">Don’t have an account? <a onClick={() => setModalTab("signUp")}>Sign Up</a></p> */}
	</div>)
    
}