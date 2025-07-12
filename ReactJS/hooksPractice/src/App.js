import {useState, useCallback, useEffect, useMemo} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const countTotal = (num) => {
    console.log('counting...');
    return num + 10;
}

const Slider = (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const getSomeImages = useCallback(() => {
        console.log('fetching');
        return [
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAK0AtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EADgQAAIBAwMCAwUHBAICAwAAAAECAwAEERIhMQVBE1FhIjJCcYEGFFKRobHwFSPB0eHxM0MHJJL/xAAZAQACAwEAAAAAAAAAAAAAAAABAwACBAX/xAAkEQACAgICAgICAwAAAAAAAAAAAQIRAxIhMQQTQVEFMiIjcf/aAAwDAQACEQMRAD8AxRsFHGakh6WpbJIo7HFGRkirUEKdlFaG0YUmRdOtoYRnWB86Ko8Hd0FNSwhdcMB9BSSdJhPYUvgetkMujbyfEn51TiaNH9l6tDo0Lfi/OiFv0CJh3zUugfyYPa7TTgMKG3F2Rwa0k32dQ8AiqT/ZvV2NWTRWSkBobhjyasRzk8miY+zunsaVeiyryf0o7IqoyKaENxmilhZeLj186j/prp2FGumIUxqGMVVyGRX2J/Sv5ioJOjntmtNFIvcVMPDPIFSwmJk6VMOGNQf0659a3jxxngLUf3eL0o2CjGr0yc/Eaf8A0uf8R/KtokUQ7CpPDhPYULDRiB0uf8RpD065HJNbkRw+S1XlSIdxUsFGLe1njGWqt4sgOK0/UEQrjNCIbYO2cUbA0DzcOvO1dV66sge1JR2BTMoSVXFTW0zrxULS5+GuXbioVCsd+V5AqVepZ5WhWPWnqcVWkW2YWS/Ao50+9jPJFZISgdqkivPD4oUWUjfrPE3cVxMPnWLTqzDzqT+st51A2jWu0Y71XaSId6zDdUlbgmoHvpvxVCWaaSePONqesqYzWWW4ctktVkXThOTQDsaVLgD4hXPehfirMfemHc1G9yx4aiS0aY9QA+Ok/qLfirLiVjyTUglbzNSiuxp0vifiqUXp/FWTNxIOGpVvX8zRoOyNHP1Bk+Oovv5b481nJXaXlzTEZk4ajRXc0rza+Wp0bqtZ4XMnnXC7m86lE2RoWcN3FdQGO5kHJrqFE2QG8I+VOWM+VaX+mL+Gnf0xB8NVsvoZYqw7GkLEdjWnewX8NVH6aMZ01LA4gDWfWk1NRhrFQcEU37ko7VLBowcik+dSgelERagcAVE1szNpAx8+1RypWRY3dFJSScDc+lWI4nPIqv1HqA6e6LBtEThnIG9TdKu5eot4za47ZiRFhcF8d6xS85J8I6EfxrrllhIfQ+tTeDIU9w/XarbFYxkDHz71Su5SsTEYI+EcVSXnv4ReP49P5ImhmBA8M5NQyP4bYdcH1qSCeYShQmcckHP1qdwZ1/vooI7Hf9aMfOb/AGRWf4+l/FlIT07xyO9U7qDwgJIWyjfCT7tMEdzJFlInb1A5rdHLGatHNnCcJU0XDLnvSh/WheqVSQwII5Bp6SOexploTuwsGpar25J5qbWO4NTYt2PUE8A1MkDn4TUtiVfkUaiQeQobDIwsDeAw7V1aAwL5A0tTYtqiGO5U84qX7wp8qAa2HBpwkbzNZvYavWG3ZT5VyhSuCKDmd/OlW6kFH2A9ZYuIgWyBUBipDcE80pn9KG5NBwjqC7j8OF2zu21Siam3DCaHQTuDkVXJK4NIZiilNNmeSwHULkpPkwoRnHxGjhjWBcIVQKNKqBsB6UltA1va7ganOfz/AOKhv43KLpI1Ej3jiuM76OxezI7q6Vyfa2U4oNd3zq/tHYLqx5VbkCxaYNZfxG1sAxz9T2HNUb60YjVF7crFWcdsZ4/KolyXTSRYtbs/+lwwjb2z9ef3/Kua6fTpjUtK5x7xwPr9PKglj94m6jdWcrBVaPKx4JJGrBPJG2/J70RxFYofGlMkjrvoXAX03I8xTddXQtvYfLI8lmoaYrlsEoMbjPmfSkg+0nhSJaumh1yAARgj8XHyqpcz67cAlgys2oacYA/zWU6tIxkhniGllbbenwx7LWzNklGDujfHqFrdlvFOGLBQyDIJ+dXf6XOOF2PFZfo9pNPa287xE4B0nVrIz6V6j0D/AOx0qKSUDUNS5wN8HH+K1eLkbuD+DH5njxVTS7M5F0uftUp6PdPyP1rV+Gi8VZSOPyrYYfWZqx6TKnJq+1vJCM5NaG1SL0pb+CJk4qEqkZZrx0ON66rMtmC+wrqGrCB8CuFRiQGl1VkNpJXYpuadmoQXArsCuBrqhBNAriAASc4FOpGXWpU8GhLp0GPasjup1jUNLgezgYPeqfjgRoWkKswGN89s7fSl6iNcQXAAAzVeNfEt7dsqzRkjj9vpXJbtnXjGkZfrN8UupVR3RNRGQcFhv38sk1VsOuTpcwQqXkj8UKNe532wOaL9Z6bb3BiZ8xMWVcj4Rjy771XtbO3tHV4EdyBtNKuf/wA/zvW2M8frpoySx5fZafBN1O4aG5aO0jkDhsBg5w2dsEcAHfjyqpa9RWdJZiuhAdgWIKkcDA/m1OubuELcv4KDQi5JI3yTjO2ewrL2F6IbickvolB4O4PY1IY9ohnlUZUaaZjLE8kjMqk4JO2cncY7fM1m+oGJvZAIwwG1E57wS2yRqmCWAUDB4PnjvS2PQ5uu31wtu8UKxEMxOSN+1NxKnyJzO1wWrLrSDpsNusOtjmNVyMk9u+cV6X0yT7nYw2wx/bQA6dhnvWZ6L9lLXp0sdxI5muEGxIGlT5gdq0Gjyp2NKDv7M+WTmq+gkl1nkmplu/WhBU9jSjV50/2CPWw5HfEcYqVuouy4IFAlLDvTvEfzo7oroGo5lY5rqCiWQcGuo7orqwQGIp4Y0hWm1ks2Eoc08P8AOq2tgcUnisKgC4GpwaqaSZ708SVCFwHNKD6VUWX1p4mPnRIR3qkvgDbNCnlNo5x7aHZh5nzo2reIuNv9UD6zFMUxFhzwPaGw9K5mbGoy4Opgm5R5A3Vrm3Z0lfxtY30/CPn+dVGuZZAJI5W0bjUcDHfjG22avrazR2jKzBBkDRyD2NRy29qsUv3tjpzkLGpHAxttV4SXRaabMxfzMzEA+Iz7MVG3PFVLe3YudaNsM8USiWASyASa1UNp0LvzySQf2ofPcSa29snO4OBxXQj1RzZqnbLFvdspD6ijjdTncH963f8A8eQMnSpp2H/llyh8wBQX7O/ZF7wx3XVH0wONQhGzOPU9hXoFvDFBDHFCgSNBgKOMeVT54KNtokAqQCkFOqAExS4FLXUQHBaXTSg0tSyUJprqdilo2ADnam6aco3waUjFKGjMAj1ppiz5U8bU7NGwUVjHppcHb1qcqGG1KyiBCTgtjI9KpLIorkvHG59Eax6SWlGABnHelM0QPsFccZqlNO0oVteWwM44znBFU2lU6Mf3GZhpA88Y5+R/SsM80pPg3wwRiuQwZmIJZc49MZqKRl39ngZphYwxBZCobTvio3bOPUANSG22PUUuincNGMaySQTgeWKpye2vsSMA2+2/Iq06xSLl22zqz67/AOqjiZG0FXAAGwx6YH71dWguqBd50yOSNTr0sqDQqKNsdtQ9DQBbJ7WSCaKZHuQxKxsuRt6flWydUZSOc+8PxY4HyNB7NY/67pdF0iIlBnkgj/FbMOVpGPPiTo23Trh57SJ7lPDmKDxE8j/qrobFBZpxG8RDgNnTsO9WLa8w6pPtqOM9s0zHnUjPlwOHQVVqUPUAbHJrtY9aeZy0Gp2qq4b1pwYedQhYBpaiDinahRJZMK6o1auqABi77cHzNcoJGTXFgzZ3+VISc7DaljB2PUVwA38h3rsLjOa5mEUbyOcKBk+lVlLUtGNj/ZQ+1s223z4ofcz6lwCdwAT2GabcXBIGDjYlm7nPGPzoHfdRWKzCsNJX4Q2M7bL+35Vik3kZugljJL69iiDIwcDJ1Fh75Hy7HzpeiSG7zdCMrbodCE8tvvt9MVlIje/aG+MMOQvxOB7KLncn/Vb1IYbKyS3gX2IwqqKtlgsca+WHFkeSXHQx3GjG+cYzUbPhWY8Bhj0yadLhRk1Uu30RSOdtI3HbO/8AmsqRqsiCaBp3057+e5P6k/WkRArlgPYTJb12AA/zVZpwsscOok4IP0/5p8kmiHCNkk+fbP8AyabqytkhcqSE306UCL5AnPyz/wBZoddKDK9wg0tGnsnHxd/n/PIVaeRvE2GkKCNuAfMeYAxueTVecxRo0oBC50Rqd9/539adjEZC904m7+7TAkRlte+/biil4AyugOjAAUjnntWX+y9yy3DWcr6UAaSLPftj6VopFkCs6+3KxxGf8+m9UyRcJ8Bg1khyFrC5M8DhwNabMB3qwD60Et4R0tEnl1O2MyZOw35/ejTKCAV4IyDW3FPZHOzQ1lRKNPnSqB51XLxqupnC/OoG6jbp/wC0H5U6rFXQQyQcGnBvWg83XoIx7O59RVM/aB291RR0ZVzRpwWrqy461Oc4I2rqOjBugzG6sRjO9PzjIJAP71AHPiABMIihuDuaemokqdO4zpBzgikjifWurjIxmq13KJIXVhlXBGr0P/VMdyxCrkBjuaAdf6k9h04qDrlHB/CO1ZJN5Jao2Y4rHHZjeudYNvMBGEU7k4Ocjt+tZjRP1vqS21prMZO7nfGeWPz5/wBVN0XpVz9oLpru7kMUAwoKj3vQenrXoHTbCz6bbBbZESMZLMedvM961QxrH/pmnmcyCzs7fpVklvAgVR7xPLnzPrVd7sM2643JqeS+s7hDKmGj1adX4sc017BJlL2kbOW90nisGZuUzoePUMdlZ7tQ241Dn+frQ26leSJShAC5bHkR/BVm+6ZeWyZ3mQAjKb4x50MaZZE0ZwJAdxvuaEYcjJSTRVsZFmvXkMg0YI3O5J24/SiTLF7SqdTgBjtvuNx+W31qnb2iW8+mNgsbLryVJPyx+X500Rxew905EbPhlIAdqe0pS4FRk1Hku2h1s2oJoxnUzbbbgD05OfPbFPm0S+02yAHGV4GQNWO3al+8BLpokijggi0qo37nI+nH7+VU7yXEknhliVUFWJIy2Mc4+v1+dBK2R8IG9QuYx1S2eLCrBKqsV8s7/v8ArXolnFqjDEAHcnyrzrqEEUNjJs2sZyTtqOeQPzr0fpTiawgk7SQq36f80c6uKaFYnUmiDqgNxbvFjJbY42zxvQiPr8kFutsEVyi6NWfLvRq/fEUunkrkHjyrD3jCO7lAyEzsfIGm+Jy2hHl/qpF2a/knYtrPqDUZlccVQJ4xn1qbOfiNdLVI5ttlhpS4ztTVOHyQQKjXncjFTrnyzjioQmhnVc5XPoK6tF0NEuINUsMQ8iV5paV7BnrHMwzq14A2dSdu3PluDxip3kQYwGBzlAMgMe/+qGo80UaQvpCkHwgiscZ5GT3GKS6uXjtnYO6CI4bQ2C24232G25+f5ooeW7mKUo6QTeA7AhQyahnHpishF9lbue/8fqtwssHvFkLEv6bjYUeu7jw5YzBIiqNe4ydWeMAY2zz6MeAanE7CEMyKilA7SKxYFsb/APQoRSjygyk5cE0T21lEuhI0t0GkFfhyM8ds71n+v9dS7s3s7aIgsRlicD1HrmidxaJdW8wnjOiVA+JPh899seeB/uqNv9mLCUu808yjUAQpC7DtnsaK17YJbPhBT7LdLH9Htnu1DcuFz2znfzopc9TtoC0bzRqAQMA4xVWKeKy6Ey2sZVrWLRoO5FYSZmkhLE5Oc5J5rJpvNm6MqgkbKbrCTx6baWNhnBbPFBb3p1vflnt7vw5U4BwVffPpWTLyW8jMrHUwwccGitjMrWqzK2ZBJ/cBHfz+VO9WvKFLNs9SM3zxa4boaXBIYA429D+VEeiWk/UL9GRmeO3P/kJOAOyjyPyoD1lRK2rUS2fePcVuPsZIZrLSIfDt4hhSvxH/ADRyUoWgYpOU6fwHLXpltbQgNGr4HJ5NJc2tvMmmSMhOcK2kZ+nzpL+8jtItbNkgZC1i+qdRuLqfxPFkA/CG2rJCDlyam0kGOt9Dsrq3VrdCjKT7rf8AdTfZGS4jga1upNfhACMH4V22rIN1Ke13jkbGc4J2NXui9ZjF3EZCVaYFCRtv2rQ8c9KM+8N7NbeyKdSh1OjAffjPI+eBz61ir+413bYKKoQDAOwq91LqDSNMCQHMmSCM7nbG/pQS+mMczIJi555O2av40GnZTyppxokD6s6GLDzFWo1bTnIA+eKHxoSpKglW7jvV6yt5LiZY4ULuxGw3wfpXRbSOauS54Or3tt8Ub6T0SSRhJdexEeB3NWekdEjgbxbrQ8uPdK5AOe36UcB0sVB0jHs6eMfz5UieX6Gwx/Z0UEUUYjiGPIL2rqcWBjVvh8xtXUmxtGahllt9I+6ROwG7EH2SeTjH8zUEFqPBVbu4MrTYeR0xhyDnz7frTkuWlaaOPMejUARvwf8AiiAJ8GOZMJ7bKdI3ON+aFlqKtrY27tGZGaZI0OkOcgjIywHOeN+dqkaAP/buiSiL4RaUHA325O/NSRsiwhip5K7NjvjjjvViRUZopCgJdSGz32Plz9aDsKoFX1z1OzuEQQGS3cKY3RPbUjc7H8/4ad065sRKQkctvI3tEtCQZcZPlnk8+lESx8T7urMFdc6s5IyCfl/PlTJ7YC6ggyNHhuCdIyQDjGfp+vyoNhSG6FurCaGP3pATq0kD9fWsbOpQFCMYOK2sV2yxsUVRoKjH4gfPFZzrtvFFfTqFyA5P5jNU6kPi7iZW79+u6dMIpXG5DqQFHnU15o1+4PzodET4ygbb81qSuJjctZ2W75/Ywfe4r037OWy2vRLRUO+gOxHcmvLL8/3NP616Z9np3b7P20h94Qj9qzeSv60afGd5GCut3fjzkcBD3oHcOsfeiUzZbUwByw2oN1LSOE/WpijXAzNOgXdSmRsLmnHJijUHBTt/mox7dzjgVwO2rvWxL4ObJu7J0knYjVuS3PcVctOm+PLm4voolffO5OPliltbYltRk307ezwP81IW0xmUjJVeMkd6KSXRRyvsL2nR+lQsiz3viMdjpQqvG3r+taK0m6ZEmhGhjK430MM+RyaysIj+7LNEhWR/e1nUPPYY2pkchaRVAABBTYY7ZztQlFl4ySN7b3PjpH4c0bMTjIIOfkRv2/Q1YUBXIdVCqMZyRgUG+ztpHFb+MCxd01t7Wx38v80aWP8AuCMEadBJyoJPb8qQ1yPXRIMKxURhz8RIrqdHIZpfBbAXQD7OxP1+ldUoB//Z"
        ]
    }, []);

    useEffect(()=>{
        console.log("effect");
        document.title = `Slide: ${slide}`;

    },[slide]);

    useEffect(()=>{
        console.log('autoplay toggled')
    },[autoplay]);


    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    function toggleAutoplay(){
        setAutoplay(!autoplay);
    }

    const total = useMemo(() => {
        return countTotal(slide);
    }, [slide]);

    const style = useMemo(()=>({
        color: slide > 4 ? 'red' : 'black'
    }), [slide]);

    useEffect(()=>{
        console.log(`color changed into ${style.color}!!!`)
    },[style]);

    return (
        <Container>
            <div className="slider w-50 m-auto">

                <Slide getSomeImages={getSomeImages}></Slide>
                <div className="text-center mt-5">
                    Active slide {slide} <br/>
                    {autoplay ? 'auto' : null}
                </div>
                <div className="text-center mt-5" style={style}>
                    Total slides {total} <br/>
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([]);

    useEffect(()=>{
        setImages(getSomeImages());
    }, [getSomeImages]);

    return (
        <>
            {images.map((url, i) =>  <img key ={i} className="d-block w-100" src={url} alt="slide" />)}
        </>
    )
}

function App() {
    return (
       <Slider/>
    );
}

export default App;
