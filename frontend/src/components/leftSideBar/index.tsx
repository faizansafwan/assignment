import { MdApps, MdLock, MdSettings } from 'react-icons/md';
import type { ReactElement } from 'react';

/**
 * LeftSideBar component for navigation.
 * 
 * Displays a vertical list of navigation icons (Apps, Lock, Settings).
 * Typically used on the left side of the main dashboard layout.
 *
 * @returns {JSX.Element} The sidebar UI.
 */

export default function LeftSideBar(): ReactElement {

    return(
        // Sidebar container with padding, border, and background
        <div className="p-3 border-r border-secondary-200 text-secondary-100 h-full bg-primary">

            {/* Navigation Icons */}
            <div>
                {/* app icon Button */}
                <div className='px-[3.6px] sm:px-[5.3px] py-2 bg-secondary my-2 hover:bg-secondary hover:text-black 
                    rounded-sm transition ease-in duration-300'>
                    <MdApps className='text-xl sm:text-3xl cursor-pointer'  /> 
                </div>

                {/* Lock Icon Button */}
                <div className='px-[3.6px] sm:px-[5.3px] py-2 hover:bg-secondary my-2 hover:text-black rounded-sm transition 
                    ease-in duration-300'>
                    <MdLock className='text-xl sm:text-3xl cursor-pointer' />
                </div>
                
                {/* Settings Icon Button */}
                <div className='px-[3.6px] sm:px-[5.3px] py-2 hover:bg-secondary my-2 hover:text-black rounded-sm transition ease-in duration-300'>
                    <MdSettings className='text-xl sm:text-3xl cursor-pointer' />
                </div>
            </div>
            
        </div>
    )
}