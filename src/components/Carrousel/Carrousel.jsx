import Carousel from 'react-bootstrap/Carousel'
import carrouselImg1 from './imagenesCarrousel/carrousel1.jpg'
import carrouselImg2 from './imagenesCarrousel/carrousel2.jpg'
import carrouselImg3 from './imagenesCarrousel/carrousel3.jpg'
import './Carrousel.css'

function Carrousel() {
  return (
    <Carousel className='mt-4'>
      <Carousel.Item interval={5000} className='carouselItem'>
        <img
          src={carrouselImg1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000} className='carouselItem'>
        <img
          src={carrouselImg2}
          alt="Second slide"
        />
      </Carousel.Item >
      <Carousel.Item interval={5000} className='carouselItem'>
        <img
          src={carrouselImg3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;