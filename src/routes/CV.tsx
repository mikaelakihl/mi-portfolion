import { Cloud } from "../components/Cloud";
import { MainCV } from "../components/MainCv";
import { SideBarCV } from "../components/SidebarCv";

export const CV = () => {
    return (
        <div className="flex md:flex-row flex-col">
            <SideBarCV />
            <div className="flex flex-col flex-1">
                <div className="flex-1 md:mt-20 mt-20">
                    <Cloud />
                </div>
                <div className="flex-1">
                    <MainCV />
                </div>
            </div>
        </div>
    );
};