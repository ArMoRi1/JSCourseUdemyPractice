import {useState, memo, useCallback} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

function propsCompare(prevProps, nextProps){
    return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text
}

const Form = memo((props) => {
        console.log('render');
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                        <input
                            value={props.mail.name}
                            onChange={(e) => props.onMailChange(e.target.value)}
                            type="email"
                            className='form-control'
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea
                            value={props.text}
                            onChange={(e) => props.onTextChange(e.target.value)}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                        />
                    </div>
                </form>
            </Container>
        )
    }
    , propsCompare);

function App() {
    const [data, setData] = useState({
        mail: {
            name: 'name@example.com',
        },
        text: 'some text'
    });

    const handleMailChange = useCallback((newMail) => {
        setData(prevData => ({
            ...prevData,
            mail: {
                name: newMail
            }
        }));
    }, []);

    const handleTextChange = useCallback((newText) => {
        setData(prevData => ({
            ...prevData,
            text: newText
        }));
    }, []);

    return (
        <>
            <Form
                mail={data.mail}
                text={data.text}
                onMailChange={handleMailChange}
                onTextChange={handleTextChange}
            />
            <button
                onClick={() => setData({
                    mail: {
                        name: 'second@example.com',
                    },
                    text: 'another text'
                })}>
                Click me
            </button>
        </>
    );
}

export default App;
