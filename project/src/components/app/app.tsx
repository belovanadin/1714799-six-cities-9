import Main from '../main/main';

 type AppProps = {
   countOffer: number;
 }

function App({countOffer}: AppProps): JSX.Element {
  return <Main countOffer={countOffer} />;
}

export default App;
