import { FunctionComponent, useEffect, useState } from 'react';
import Card, { CardProps } from './common/card';
import demoImg from '../assets/logo/tlogo.webp';

interface SliderProps {
    label: string;
    data: CardProps[];
}

const Slider: FunctionComponent<SliderProps> = (props: SliderProps) => {
    const [dataTooLong, setDataLength] = useState(false);
    const [show, setShow] = useState(false);
    const data = props.data;
    const shortData = props.data.slice(0, 3);

    useEffect(() => {
        data.length > 4 ? setDataLength(true) : setDataLength(false);
    }, []);

    console.log(props.data.length);

    return (
        <div className="flex flex-col gap-[32px]">
            <div className="mx-[15px] flex font-helveticaneue  text-secondary justify-between font-bold">
                <div className="">{props.label}</div>
                <div
                    className="cursor-pointer"
                    onClick={() => {
                        dataTooLong ? setShow(!show) : alert('Data not long enough!');
                    }}
                >
                    {show ? 'Show less' : 'Show all'}
                </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-[24px]">
                {props.data.length == 0 ? (
                    <div className="flex justify-center items-center">
                        <div className="text-primary text-[20px]">Empty folder...</div>
                    </div>
                ) : !dataTooLong || show ? (
                    props.data.map((e, index) => {
                        return (
                            <div key={index}>
                                <Card imgURL={e.imgURL} label={e.label} description={e.description} />
                            </div>
                        );
                    })
                ) : (
                    shortData.map((e, index) => {
                        return (
                            <div key={index}>
                                <Card imgURL={e.imgURL} label={e.label} description={e.description} />
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Slider;
