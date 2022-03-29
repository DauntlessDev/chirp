import FooterContainer from '../components/Footer/FooterContainer'
import HomeContainer from '../components/Home/HomeContainer'
import MainContainer from '../components/Main/MainContainer';
export default function Home() {
  const loggedIn = true;
  return (
    loggedIn ?
      <>
        <MainContainer />
      </> :
      <>
        <HomeContainer />
        <FooterContainer />
      </>
  )
}