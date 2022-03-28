import { useNavigate } from 'react-router-dom'
import * as Home from './homeStyles'

function HomeContainer() {
  const navigate = useNavigate();

  const goSignIn = () => {
    navigate('/login')
  }

  const goSignUp = () => {
    navigate('/register')
  }

  return (
    <Home.Container>
      <Home.LeftContainer>
        <Home.Feature src='assets/chirp-feature.png' />
      </Home.LeftContainer>
      <Home.RightContainer>
        <Home.InnerContainer>
          {/* <Home.LargestText>Happening Now</Home.LargestText>
        <Home.LargeText>Join Chirp Today</Home.LargeText> */}
          <Home.SignUpButton onClick={goSignUp}>Sign up with Email</Home.SignUpButton>
          <Home.Break />
          <Home.TextContainer>
            <Home.SmallText>By signing up, you agree to the <Home.Colored>Terms of Service</Home.Colored> and <Home.Colored>Privacy of Policy</Home.Colored>, including Cookie Use. </Home.SmallText>
          </Home.TextContainer>
          <Home.Break />
          <Home.TextContainer>
            <Home.MediumText>Already have an account?</Home.MediumText>
            <Home.SignInButton onClick={goSignIn}>Sign In</Home.SignInButton>
          </Home.TextContainer>
        </Home.InnerContainer>
      </Home.RightContainer>
    </Home.Container>
  )
}

export default HomeContainer