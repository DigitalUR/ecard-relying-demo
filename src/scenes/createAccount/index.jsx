import { useState } from "react";

const SignUp = () => {

    const handleESignet = () => {
        const clientId = 'dghlMHnj837HsU-c-Q2aqrl52fEnGP4uJiZ0K7fLtoc';
        const redirectUri = 'https://ecard-backend.onrender.com/api/oauth2/esignet/callback';

        // alert("hello world");
        window.location.href = `https://esignet.collab.mosip.net/authorize?scope=openid profile&response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=ecard_request&mbaduko=mbadukostatehere`;

      };


  const [signupMethod, setSignupMethod] = useState(null);
  const boboxvalue = 'bobox';

  if (!signupMethod) {
    return (
      <>
        <ChooseMethod boboxvalue={boboxvalue} setSignupMethod={setSignupMethod} />
      </>
    );
  } else if (signupMethod === 'SIGNUP_MANUELY') {
    return (
      <>
        <SignUpManuely />
      </>
    );
  } else if (signupMethod === 'SIGNUP_GOOGLE') {
    return (
      <>
        <SignUpGoogle />
      </>
    );
  } else if (signupMethod === 'SIGNUP_ESIGNET') {
    return (
      <>
        <SignUpEsignet />
      </>
    );
  }
};



const ChooseMethod = ({ setSignupMethod, boboxvalue }) => {
    const handleESignet1 = () => {
        const clientId = 'dghlMHnj837HsU-c-Q2aqrl52fEnGP4uJiZ0K7fLtoc';
        const redirectUri = 'https://ecard-backend.onrender.com/api/oauth2/esignet/callback';
    
        // alert("hello world");
        window.location.href = `https://esignet.collab.mosip.net/authorize?scope=openid profile&response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=https://ecard-relying-demo.vercel.app/info`;
    
      };
      
  const handleClick = (method) => {
    setSignupMethod(method);
  };

  return (
    <>
      Choose signup method {boboxvalue}
      <input
        type="button"
        value="Sign Up Manually"
        onClick={() => handleClick('SIGNUP_MANUELY')}
      />
      <input
        type="button"
        value="Sign Up with Google"
        onClick={() => handleClick('SIGNUP_GOOGLE')}
      />
      <input
        type="button"
        value="Sign Up with Esignet"
        onClick={() => handleESignet1()}
        // onClick={() => handleClick('SIGNUP_ESIGNET')}
      />
    </>
  );
};

const SignUpManuely = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState(false);
  const [submit, setSubmit] = useState(false);

//   form data

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [gender, setGender] = useState('');

  const handleClick = async () => {
    if(otp){
        // alert("submission")
        console.log(firstName,lastName,gender,phone,email)
       
            window.location.href = `/info?type=typical_user&firstName=${firstName}&lastName=${lastName}&gender=${gender}&phone=${phone}&email=${email}`;

    }else{
        setIsLoading(true);
    try {
      const result = await fakeApiCall();
      console.log(result); // Handle the result of the API call
      setOtp(true);
      if (otp) setSubmit(true);
    } catch (error) {
      console.error('Error:', error); // Handle any errors
    } finally {
      setIsLoading(false);
    }
    }
    
  };

  return (
    <div className="loginHorder">
      <div className="loginDiv">
        <div className="logoDiv">
          <div className="logo-div" style={{fontSize:'x-large', fontWeight:'bolder',color:'white',padding:'6px'}}>
            Demo App
          </div>
        </div>
        <div className="form">
          <input type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
          <input type="text" placeholder="Gender" onChange={(e) => setGender(e.target.value)}/>
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password retype" />
          {otp && <input type="text" placeholder="OTP" style={{ fontSize: 'large', fontWeight: 'bolder', fontStyle: 'oblique' }} />}
          
          {isLoading ? (
            otp ? (
              <input type="submit" style={{ fontWeight: 'bold' }} value="Signing up..." disabled />
            ) : (
              <input type="submit" style={{ fontWeight: 'bold' }} value="Requesting..." disabled />
            )
          ) : (
            <input
              type="submit"
              onClick={handleClick}
              style={{ fontWeight: 'bold' }}
              value={otp ? "Sign up" : "Request OTP"}
            />
          )}

          <br />
        </div>
      </div>
    </div>
  );
};

const SignUpGoogle = () => {
  return <>Signup with Google</>;
};

const SignUpEsignet = () => {
  return <>Signup with Esignet</>;
};

const handleESignet = () => {
  const clientId = 'dghlMHnj837HsU-c-Q2aqrl52fEnGP4uJiZ0K7fLtoc';
  const redirectUri = 'https://ecard-backend.onrender.com/api/oauth2/esignet/callback';
  window.location.href = `https://esignet.collab.mosip.net/authorize?scope=openid profile&response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=ecard_request&mbaduko=mbadukostatehere`;
};

const fakeApiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Success'), 2000);
  });
};

export default SignUp;
