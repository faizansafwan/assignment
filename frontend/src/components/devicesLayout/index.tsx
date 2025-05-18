import { BiFridge } from "react-icons/bi";
import { FaAirFreshener, FaCameraRetro, FaLightbulb } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import { MdRouter } from "react-icons/md";

export default function DevicesLayout() {

    // Device list with icon and name
    const devices = [
        {icon: <FaWarehouse size={24} />, name: "House Exterior"},
        {icon: <FaLightbulb size={24} />, name: "Lights"},
        {icon: <FaCameraRetro size={24} />, name: "Cams"},
        {icon: <MdRouter size={24} />, name: "Router"},
        {icon: <BiFridge size={24} />, name: "Home Appliances"},
        {icon: <FaAirFreshener size={24} />, name: "Air Conditioning"}
    ]

    return (
        <div className="py-3 md:px-5 px-3 bg-primary-200 rounded-sm">
            <div> 
                {/* Device header */}
                <div><h3 className="text-md sm:text-lg text-white px-2">Devices</h3></div>

                {/* mapping the device list */}
                {
                    devices.map((item, index) => (
                        <div key={index} className="flex flex-row gap-3 p-2 border border-secondary mx-2 my-3 rounded-md text-white 
                        cursor-pointer hover:bg-secondary hover:text-primary hover:shadow-lg transition ease-out duration-300">
                            <div>{item.icon}</div>
                            <div><p className="font-thin">{item.name}</p></div>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}