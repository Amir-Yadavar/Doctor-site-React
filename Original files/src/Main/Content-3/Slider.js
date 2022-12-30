import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function Slider() {
    return (
        <Carousel className='mb-3'>
            <Carousel.Item interval={1500}>
                <Image
                    className="d-block w-100"
                    src="img-proje/slider/1.webp"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Asana Korim</h3>
                    <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <Image
                    className="d-block w-100"
                    src="img-proje/slider/2.webp"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Asana Korim</h3>
                    <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="img-proje/slider/3.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Asana Korim</h3>
                    <p>
                        Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;