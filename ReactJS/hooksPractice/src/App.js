import {useCallback,useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const Slider = (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const getSomeImages = useCallback(
        () =>{
        console.log('!!!fetching!!!');
        return [
            "https://img.freepik.com/free-photo/magical-shot-dolomite-mountains-fanes-sennes-prags-national-park-italy-summer_181624-43445.jpg?semt=ais_hybrid&w=740",
            "https://media.istockphoto.com/id/1481183606/photo/random-nature.jpg?s=612x612&w=0&k=20&c=vYdRu5U0e5EFxSHy3UNTFKAGjGC7nYq7i_zumNMWhFM="
        ]
    }, []);


    useEffect(()=>{
        document.title = `Slide : ${slide}`;
    }, [slide]);

    function changeSlide(i){
        setSlide(slide => slide + i);
    }

    function toggleAutoplay(){
        setAutoplay(autoplay => !autoplay);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <Slide getSomeImages={getSomeImages}/>

                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => {changeSlide(-1)}}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => {changeSlide(1)}}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => {toggleAutoplay()}}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([]);

    useEffect(()=>{
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {
                images.map((url, i) => {
                    return (
                        <img key={i} className="d-block w-100 h-200" src={url} alt="slide" />

                    )
                })
            }
        </>
    )
}

function App() {
    const [slider, setSlider] = useState(true);
    return (
        <>
            <button onClick={()=>setSlider(slider=>!slider)}>Click</button>
            {slider ? <Slider/> : null}
        </>
    );
}

export default App;
