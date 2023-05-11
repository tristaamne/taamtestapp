import { FunctionComponent } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Tlogo from '../assets/logo/tlogo.webp';
import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const LeftSideBarMenu = [
    {
        label: 'Home',
        logoURL: <HomeRoundedIcon />,
        linkTo: '/'
    },

    {
        label: 'Test cases',
        logoURL: <BugReportRoundedIcon />,
        linkTo: '/testcases'
    },
    {
        label: 'My own app',
        logoURL: <AppRegistrationRoundedIcon />,
        linkTo: 'apps'
    }
];

interface LayOutProps {}

const LayOut: FunctionComponent<LayOutProps> = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen">
            <div className="p-4 w-fit flex flex-2 flex-col gap-[15px] bg-pureblack">
                <div className="flex items-center gap-[10px] w-fit">
                    <img src={Tlogo} alt="T" className="w-[41px] h-[40px] rounded-full" />
                    <p className="pointer-events-none text-primary font-semibold">TrisTaamneeee</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                    {LeftSideBarMenu.map((e: any, index: any) => {
                        return (
                            <div
                                key={index}
                                className="cursor-pointer flex gap-[16px] pr-[90px] pl-[16px] py-[8px] text-primary"
                                onClick={() => {
                                    navigate(e.linkTo);
                                }}
                            >
                                {e.logoURL}
                                {e.label}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="w-full flex-1 bg-mainbackground">
                <Outlet />
            </div>
        </div>
    );
};

export default LayOut;
