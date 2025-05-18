import profile from "../../assets/profile.png"
import type { ReactElement } from 'react';

/**
 * Header component for the application layout.
 * 
 * Displays the logo, a search input field, and the user profile image.
 * Used at the top of the dashboard layout.
 *
 * @returns {JSX.Element} The header bar UI.
 */


export default function Header(): ReactElement {

    return(
        // Container: full-width header with border and padding
        <div  className="flex justify-between items-center border-b border-secondary-200 px-3 text-white">

            {/* Left side: Logo and Search Bar */}
            <div className="flex items-center gap-3">

                {/* Logo */}
                <div className="pr-3 border-r border-secondary-200 py-4 sm:py-3 text-xl sm:text-3xl">
                    <h1><b className="text-secondary">G</b>S</h1>
                </div>

                {/* Search bar */}
                <div className="px-2 py-2">
                    <input type="text" className="p-2 border border-secondary-200 rounded-md focus:outline-none 
                    focus:border-secondary-100 focus:ring-1 focus:ring-secondary-100 " placeholder="search..." />
                </div>
            </div>

            {/* Right side: Profile Image */}
            <div>
                <div className="px-2 py-2 cursor-pointer">
                    <img src={profile} width={40} height={40} alt="" />
                </div>
            </div> 

        </div>
    )
}