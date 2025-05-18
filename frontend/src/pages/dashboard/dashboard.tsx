import DevicesLayout from "../../components/devicesLayout";
import ExteriorDevicesLayout from "../../components/exteriorDevicesLayout";
import Header from "../../components/heaader";
import LeftSideBar from "../../components/leftSideBar";
import GeneralCommands from "../../components/rightSideLayout";

export default function Dashboard() {

    return (
        <div className="flex flex-col min-h-screen bg-primary">

            {/* layout for the header */}
            <div><Header /></div>

            <div className="flex flex-1">

                {/* layout for Left side abr */}
                <div><LeftSideBar /></div>
                
                <div className="flex-1 flex lg:flex-row flex-col justify-between items-center lg:items-stretch">
                    <div className="mx-3 lg:mx-12 mt-7 flex flex-col ">
                        <div className="flex gap-4 items-center">
                            <div><h2 className="text-xl sm:text-3xl text-white">Domotic Assitant</h2></div>
                            <div> <button className="md:text-sm text-xs bg-secondary p-2 rounded-sm cursor-pointer hover:bg-secondary-100 transition ease-in duration-300">+ Add Device</button></div>
                        </div>

                        
                        <div className="flex md:flex-row flex-col gap-8 md:gap-10 lg:gap-16 mt-6">
                            {/* layout for list of devices */}
                            <div className="mb-2 bg-primary-200 rounded-sm"><DevicesLayout /></div>

                            {/* layout for list of home exterior devices  */}
                            <div className="pb-2"><ExteriorDevicesLayout /></div>
                        </div>
                    </div>

                    {/* content for right side corner */}
                    {/* Layout for general commands */}
                    <div className="mt-4 lg:mt-0"><GeneralCommands /></div>
                </div> 
                
            </div>
        </div>
    )
}