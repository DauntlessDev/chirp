import * as Auth from './authStyles'

export default function SignUpContainer() {
  return (
    <>
      <Auth.Container>
        <Auth.InnerContainer>
          <Auth.ElementsContainer>
            <Auth.HeaderText>Create your account</Auth.HeaderText>
            <Auth.InputField type="text" id="username" name="username" placeholder="Username" />
            <Auth.InputField type="password" id="password" name="passworrd" placeholder="Password" />
            <Auth.InputField type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" />
            <Auth.Button>Create</Auth.Button>
            <Auth.SmallText>Have an account already? <Auth.SmallColoredText>Sign In</Auth.SmallColoredText></Auth.SmallText>
          </Auth.ElementsContainer>
        </Auth.InnerContainer>
      </Auth.Container>
    </>
  )
}