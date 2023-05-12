import { FunctionComponent } from 'react';
import Slider from '../components/Slider';

interface MyHomePageProps {}

const MyHomePage: FunctionComponent<MyHomePageProps> = () => {
    return (
        <div className="">
            <div className="ml-[265px] p-[32px] flex flex-col gap-[40px]">
                <Slider label={'OK'} data={[]} />
            </div>
            <div></div>
        </div>
    );
};

export default MyHomePage;
