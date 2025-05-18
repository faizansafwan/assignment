import DevicesLayout from "../../components/devicesLayout";
import ExteriorDevicesLayout from "../../components/exteriorDevicesLayout";
import Header from "../../components/heaader";
import LeftSideBar from "../../components/leftSideBar";
import GeneralCommands from "../../components/rightSideLayout";

/**
 * Dashboard Component
 *
 * Main layout for the smart home dashboard. It displays:
 * - A header at the top
 * - A left sidebar with navigation icons
 * - The main content area with device layouts (interior & exterior)
 * - A right sidebar for general commands
 *
 * @returns {JSX.Element} The dashboard UI layout
 */

export default function Dashboard() {

    return (
        <div className="flex flex-col min-h-screen bg-primary">

            {/* Top header */}
            <div><Header /></div>

            {/* Main layout row */}
            <div className="flex flex-1">

                {/* Left navigation sidebar */}
                <div><LeftSideBar /></div>
                
                {/* Central content + right sidebar */}
                <div className="flex-1 flex lg:flex-row flex-col justify-between items-center lg:items-stretch">

                    {/* Central content */}
                    <div className="mx-3 lg:mx-12 mt-7 flex flex-col ">

                        {/* Page heading and "Add Device" button */}
                        <div className="flex gap-4 items-center">
                            <div><h2 className="text-xl sm:text-3xl text-white">Domotic Assitant</h2></div>
                            <div> <button className="md:text-sm text-xs bg-secondary p-2 rounded-sm cursor-pointer hover:bg-secondary-100 transition ease-in duration-300">+ Add Device</button></div>
                        </div>

                        {/* Device sections */}
                        <div className="flex md:flex-row flex-col gap-8 md:gap-10 lg:gap-16 mt-6">
                            
                            {/* layout for list of devices */}
                            <div className="mb-2 bg-primary-200 rounded-sm"><DevicesLayout /></div>

                            {/* List of exterior devices */}
                            <div className="pb-2"><ExteriorDevicesLayout /></div>
                        </div>
                    </div>

                    {/* Right sidebar: General commands */}
                    <div className="mt-4 lg:mt-0"><GeneralCommands /></div>
                </div> 
                
            </div>
        </div>
    )
}