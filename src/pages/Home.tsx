import { FunctionComponent } from 'react';
import Slider from '../components/Slider';

interface MyHomePageProps {}

const MyHomePage: FunctionComponent<MyHomePageProps> = () => {
    return (
        <div className="">
            <div>
                <Slider />
            </div>
            <div></div>
        </div>
    );
};

export default MyHomePage;
