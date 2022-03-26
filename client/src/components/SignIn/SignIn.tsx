import * as SignIn from './signInStyles'

export default function SignInContainer() {
  return (
    <>
      <SignIn.Container>
        <SignIn.InnerContainer>
          <SignIn.ElementsContainer>
            <SignIn.HeaderText>Sign in to Chirp</SignIn.HeaderText>
            <SignIn.InputField type="text" id="username" name="username" placeholder="Username" />
            <SignIn.InputField type="text" id="password" name="password" placeholder="Password" />
            <SignIn.Button>Login</SignIn.Button>
            <SignIn.SmallText>Don't have an account? <SignIn.SmallColoredText>Create One</SignIn.SmallColoredText></SignIn.SmallText>
          </SignIn.ElementsContainer>
        </SignIn.InnerContainer>
      </SignIn.Container>
    </>
  )
}