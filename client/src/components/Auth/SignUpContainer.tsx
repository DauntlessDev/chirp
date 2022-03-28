import { useNavigate } from 'react-router-dom';
import * as Auth from './authStyles'

export default function SignUpContainer() {
  
  const navigate = useNavigate();

  const goSignIn = () => {
    navigate('/login')
  }

  const createAccount = () => {

  }
  return (
    <>
      <Auth.Container>
        <Auth.InnerContainer>
          <Auth.ElementsContainer>
            <Auth.HeaderText>Create your account</Auth.HeaderText>
            <Auth.InputField type="text" id="username" name="username" placeholder="Username" />
            <Auth.InputField type="password" id="password" name="passworrd" placeholder="Password" />
            <Auth.InputField type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" />
            <Auth.Button onClick={createAccount}>Create</Auth.Button>
            <Auth.SmallText>Have an account already? <Auth.SmallColoredText onClick={goSignIn}>Sign In</Auth.SmallColoredText></Auth.SmallText>
          </Auth.ElementsContainer>
        </Auth.InnerContainer>
      </Auth.Container>
    </>
  )
}