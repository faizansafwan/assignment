import { Switch } from "@headlessui/react";
import { useState } from "react"
import { FaChevronDown } from "react-icons/fa";


export default function GeneralCommands() {

    // State for switches
    const [thermostatEnabled, setThermostatEnabled] = useState(false);
    const [solarEnabled, setSolarEnabled] = useState(false);
    const [reserveEnabled, setReserveEnabled] = useState(false);

    // List of stays
    const stays = ["Kitchen", "Living Room", "Bedrooms", "Bath", "Garden"];
    const [openIndex, setOpenIndex] = useState(null); // tracks which dropdown is open

    // Function to toggle dropdown open/close
    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index); // toggle open/close
    };
    

    return(
        <div className="p-2 h-srceen bg-primary-300 text-white rounded-md lg:rounded-none">
            <div className="py-1 mx-4 border-b border-secondary-200">
                {/* Header Section */}
                <div className=" "><h3 className="border-b border-secondary-200 py-2">General Commands</h3></div>

                {/* Thermostat Section */}
                <div className="mt-4 mb-1"><h4 className="text-xs">THERMOSTAT</h4></div>

                <div className="flex flex-row gap-4 justify-between items-center">

                    {/* Temperature readings */}
                    <div className="text-sm px-6 py-2 border rounded-md">
                        <p>25<sup>°</sup>C</p>
                        <p>19<sup>°</sup>C</p>
                    </div>
                    <div className="p-2 flex flex-col gap-3">
                        <div>
                            <span className="px-2 border rounded-sm mx-4">+</span>
                            <span className="px-2 border rounded-sm">-</span>
                        </div>

                        {/* Toggle switch for automatic regulation */}
                        <div className="mx-4">
                            <Switch checked={thermostatEnabled} onChange={setThermostatEnabled} className={`${thermostatEnabled ? 'bg-secondary-100' : 'bg-gray-300'} 
                                    relative inline-flex h-5 w-10 items-center rounded-full transition-colors`} >

                                <span className={`${thermostatEnabled ? 'translate-x-6' : 'translate-x-1'} 
                                    inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
                                />
                            </Switch>

                            <span className=" ml-3 text-[8px]">Automatic Regulation</span>
                        </div>

                    </div>
                </div>
            </div>

            {/* Energy Section */}
            <div className="mx-4 my-4 text-xs pb-5 border-b border-secondary-200">
                <div className="flex flex-row justify-between">
                    <div><p>ENERGY</p></div>
                    <div><p className="text-secondary">CURRENT CONSUMPTION - 12.4 kWh</p></div>
                </div>

                {/* Solar Panels Switch */}
                <div className="flex flex-row justify-between mt-4">
                    <div><p>Solar Panels</p></div>

                    {/* toggle switch for solar enable and disable */}
                    <div>
                        <Switch checked={solarEnabled} onChange={setSolarEnabled} className={`${solarEnabled ? 'bg-secondary-100' : 'bg-gray-300'} 
                            relative inline-flex h-5 w-10 items-center rounded-full transition-colors`} >

                            <span className={`${solarEnabled ? 'translate-x-6' : 'translate-x-1'} 
                                inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
                            />
                        </Switch>
                    </div>
                </div>

                {/* Power Reserve Switch */}
                <div className="flex flex-row justify-between mt-2">
                    <div><p>Power Reserve</p></div>
                    <div>
                        <Switch checked={reserveEnabled} onChange={setReserveEnabled} className={`${reserveEnabled ? 'bg-secondary-100' : 'bg-gray-300'} 
                            relative inline-flex h-5 w-10 items-center rounded-full transition-colors`} >

                            <span className={`${reserveEnabled ? 'translate-x-6' : 'translate-x-1'} 
                                inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
                            />
                        </Switch>
                    </div>
                </div>

            </div>

            {/* Stays Section */}
            <div className="mx-4">
                <div className="mb-1"><h4 className="text-xs">STAYS</h4></div>

                
                {/* mapping the list of stays */}
                {
                    stays.map( (item, index) => { 
                        
                        const isLastIndex = index === stays.length - 1;
                        const isOpen = openIndex === index;

                        return(
                        <div key={index} className={`text-secondary-200 ${!isLastIndex ? 'border-b' : ''}`}>

                            {/* Stay name row with dropdown icon */}
                            <div className="flex flex-row justify-between text-xs py-3 cursor-pointer" 
                                onClick={() => toggleDropdown(index)}>

                                <div>{item}</div>
                                <div><FaChevronDown className={`text-xs transform transition-transform duration-200 
                                    ${isOpen ? 'rotate-180' : ''}`}/>
                                </div>

                            </div>

                            {/* Dropdown content */}
                            {isOpen && (
                                <div className="text-[10px] px-2 pb-2">
                                    <p>Dropdown content for {item}</p>
                                </div>
                            )}
                        </div>
                    )})
                }

            </div>
        </div>
    )
}