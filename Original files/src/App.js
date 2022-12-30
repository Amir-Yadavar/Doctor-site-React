import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header/Header'
import BoxMedia from './Box-media/BoxMedia';
import Contentfirst from './Main/Content-1/Content-1';
import Contentsecond from './Main/Content-2/Content-2';
import Slider from './Main/Content-3/Slider';
import Contentfour from './Main/content-4/Content-4';
import Contentfive from './Main/Content-5/Content-5';
import Contentsix from './Main/Content-6/Content-6';
import Footer from './Footer/Footer';

function App() {
  return (

    <div className='container-app'>
      <Header></Header>
      <BoxMedia></BoxMedia>
      <Contentfirst></Contentfirst>
      <Contentsecond></Contentsecond>
      <Slider></Slider>
      <Contentfour></Contentfour>
      <Contentfive></Contentfive>
      <Contentsix></Contentsix>
      <Footer></Footer>
    </div>

  );

}

export default App;
