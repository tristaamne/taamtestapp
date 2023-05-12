import { FunctionComponent } from 'react';
import isUrl from 'is-url';

export interface CardProps {
    imgURL: string;
    label: string;
    description: string;
}

function isRelativePath(path: string) {
    return path.startsWith('/') || path.startsWith('./') || path.startsWith('../');
}

const Card: FunctionComponent<CardProps> = (props) => {
    return (
        <div className="flex items-center flex-col gap-[15px] bg-pureblack p-[16px] py-[30px] rounded-[6.38px] mx-[15px] hover:brightness-50 cursor-pointer">
            {(props.imgURL.trim() !== '' && isUrl(props.imgURL.trim())) || isRelativePath(props.imgURL.trim()) ? (
                <img src={props.imgURL.trim()} alt="Your URL is wrong! Please try again." className="rounded-[4.38px] w-[176px] h-[176px] object-fill text-primary" />
            ) : (
                <div className="w-[176px] h-[176px] flex justify-center items-center text-primary">
                    <div>This is not an URL!</div>
                </div>
            )}
            <div className="text-start w-full">
                <p className="mb-[5px] font-helveticaneue justify-between font-bold text-[15px] text-primary">{props.label}</p>
                <p className="max-w-[142px] text-secondary text-[14px] font-helveticaneue font-normal">{props.description}</p>
            </div>
        </div>
    );
};

export default Card;
