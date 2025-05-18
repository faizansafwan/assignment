import type { ReactElement } from "react"
import { FaUmbrella, FaVideo, FaWarehouse } from "react-icons/fa"
import { GiDeskLamp } from "react-icons/gi"
import { HiHomeModern } from "react-icons/hi2"

/**
 * ExteriorDevicesLayout Component
 *
 * Displays a grid of smart exterior home devices, each showing its icon, name, and status.
 * Some key devices (like cameras and garage door) are visually highlighted for emphasis.
 *
 * @returns {JSX.Element} A grid of exterior device cards
 */

export default function ExteriorDevicesLayout(): ReactElement {

    // List of exterior devices with icon, name, and current status
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

                {/* Section Header */}
                <div><h3 className="text-md sm:text-lg text-white mb-2">Home Exterior Devices</h3></div>

                {/* Grid layout for displaying devices */}
                <div className="grid grid-cols-2 gap-6">
                    {
                        devices.map( (item, index) => { 

                            // Highlight specific devices with a bolder border and different text color
                            const isSpecial = [0, 3, 5].includes(index);

                            return(
                            <div key={index} className={`flex flex-col items-center justify-center p-5 border border-secondary cursor-pointer
                                rounded-lg ${isSpecial ? 'border border-2 border-secondary text-secondary-100' : 'border border-secondary'}
                                hover:text-secondary-200 transition ease-out duration-300`}>

                                {/* Device Icon */}
                                <div><p className="">{item.icon}</p></div>

                                {/* Device Name */}
                                <div><p className="text-sm">{item.name}</p></div> 

                                {/* Device Status */}
                                <div><p className="text-[10px]">{item.status}</p></div>
                            </div>
                            
                            ) 
                        })
                    
                    }
                </div>
                
            </div>
        </div>
    )
}