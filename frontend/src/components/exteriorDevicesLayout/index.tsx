import { FaCameraRetro, FaHome, FaRegLightbulb, FaUmbrella, FaVideo, FaWarehouse } from "react-icons/fa"
import { FaCameraRotate } from "react-icons/fa6"
import { GiDeskLamp, GiHomeGarage } from "react-icons/gi"
import { HiHome } from "react-icons/hi"
import { HiHomeModern } from "react-icons/hi2"
import { MdHome } from "react-icons/md"
import { PiCameraDuotone } from "react-icons/pi"


export default function ExteriorDevicesLayout() {

    // Device list
    const devices = [
        {icon: <FaVideo size={24} />, name: "Entrance Camera", status: "Active"},
        {icon: <FaVideo size={24} />, name: "Stairs Camera", status: "Deactivated at 22:47"},
        {icon: <HiHomeModern size={24} />, name: "Canopies", status: "Deactivated at 21:00"},
        {icon: <FaWarehouse size={24} />, name: "Garage Door", status: "Deactivated at 23:51"},
        {icon: <FaUmbrella size={24} />, name: "Parasols", status: "Deactivated at 21:00"},
        {icon: <GiDeskLamp size={24} />, name: "Garden Light", status: "Active"}
    ]

    return(
        <div className="py-3 md:px-5 px-3 border border-secondary rounded-md text-white">
            <div>
                <div><h3 className="text-md sm:text-lg text-white mb-2">Home Exterior Devices</h3></div>

                <div className="grid grid-cols-2 gap-6">
                    {
                        devices.map( (item, index) => { 
                            const isSpecial = [0, 3, 5].includes(index);

                            return(
                            <div key={index} className={`flex flex-col items-center justify-center p-5 border border-secondary cursor-pointer
                                rounded-lg ${isSpecial ? 'border border-2 border-secondary text-secondary-100' : 'border border-secondary'}
                                hover:text-secondary-200 transition ease-out duration-300`}>
                                <div><p className="">{item.icon}</p></div>
                                <div><p className="text-sm">{item.name}</p></div> 
                                <div><p className="text-[10px]">{item.status}</p></div>
                            </div>
                            
                            ) 
                        })
                    
                    }
                </div>
                
                <div></div>
            </div>
        </div>
    )
}