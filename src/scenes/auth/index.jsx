import { useContext } from 'react';
import { loginContext } from '../../App';


const Login = () => {

    const handleESignet = () => {
        const clientId = 'dghlMHnj837HsU-c-Q2aqrl52fEnGP4uJiZ0K7fLtoc';
        const redirectUri = 'https://ecard-backend.onrender.com/api/oauth2/esignet/callback';


        window.location.href = `https://esignet.collab.mosip.net/authorize?scope=openid profile&response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=ecard_request&mbaduko=mbadukostatehere`;
      };
    return (
        <>
            <div class="loginHorder">
        <div class="loginDiv">
            <div className="logoDiv">
            <div class="logo-div"><img src="assets/University of Rwanda - LOGO LANDSCAPE _RV Official.png"  width="105px" height="45px" alt=""/></div>
            </div>
            <div className="form">
                <input type="text" placeholder='Reg number ...'/>
                <input type="password" placeholder='password' />
                <input type="submit" style={{fontWeight:'bold'}} value="LOGIN" />
            <span className='loginSpan'>Forgate password ? <a href='#'>Click here</a></span>
                {/* <input type='hidden' id='eSignet'  value="Signin with eSignet" /> */}
                 <div onClick={()=>{handleESignet()}} for ='eSignet'  className='eSignetButton' style={{backgroundColor:'#F9F9F9', fontWeight:'normal'}} >
                 <img src="assets/icons/eSignetIcon.png"  height="30" width="30"  alt=""/> Sign in with eSignet - Academic
                 </div>
                <br />
            <span className='loginSpan' style={{marginLeft:0}}><a href='#'>Create new account</a></span>
            </div>
        </div>
    </div>  
        </>

    );
}

export default Login;