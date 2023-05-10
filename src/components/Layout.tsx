import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

interface LayOutProps {}

const LayOut: FunctionComponent<LayOutProps> = () => {
    return (
        <div className="border-2 border-solid border-yellow-200 p-[2px] m-5 w-[500px] h-[500px]">
            <Outlet />
        </div>
    );
};

export default LayOut;
