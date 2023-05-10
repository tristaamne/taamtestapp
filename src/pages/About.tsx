import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface AboutPageProps {}

const AboutPage: FunctionComponent<AboutPageProps> = () => {
    const [message, setMessage] = useState('');
    const { wat } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (wat) {
            setMessage(`the number is ${wat}`);
        } else {
            setMessage(`No number was provided :( )`);
        }
    }, []);
    return (
        <div className="">
            <p>This is an about page</p>
            <p>{message}</p>
            <button
                onClick={() => {
                    navigate('/about/39949');
                }}
            >
                Press me to cut'
            </button>
        </div>
    );
};

export default AboutPage;
