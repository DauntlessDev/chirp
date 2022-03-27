import * as Auth from './authStyles'

export default function SignInContainer() {
  return (
    <>
      <Auth.Container>
        <Auth.InnerContainer>
          <Auth.ElementsContainer>
            <Auth.HeaderText>Sign in to Chirp</Auth.HeaderText>
            <Auth.InputField type="text" id="username" name="username" placeholder="Username" />
            <Auth.InputField type="password" id="password" name="password" placeholder="Password" />
            <Auth.Button>Login</Auth.Button>
            <Auth.SmallText>Don't have an account? <Auth.SmallColoredText>Create One</Auth.SmallColoredText></Auth.SmallText>
          </Auth.ElementsContainer>
        </Auth.InnerContainer>
      </Auth.Container>
    </>
  )
}