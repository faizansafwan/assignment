import { MdApps, MdLock, MdSettings } from 'react-icons/md';

export default function LeftSideBar() {

    return(
        // left side bar layout
        <div className="p-3 border-r border-secondary-200 text-secondary-100 h-full bg-primary">

            
            <div>
                {/* app icon */}
                <div className='px-[3.6px] sm:px-[5.3px] py-2 hover:bg-secondary hover:text-black rounded-sm transition ease-in duration-300'>
                    <MdApps className='text-xl sm:text-3xl cursor-pointer'  /> 
                </div>

                {/* lock icon */}
                <div className='px-[3.6px] sm:px-[5.3px] py-2 hover:bg-secondary hover:text-black rounded-sm transition ease-in duration-300'>
                    <MdLock className='text-xl sm:text-3xl cursor-pointer' />
                </div>
                
                {/* settings icon */}
                <div className='px-[3.6px] sm:px-[5.3px] py-2 hover:bg-secondary hover:text-black rounded-sm transition ease-in duration-300'>
                    <MdSettings className='text-xl sm:text-3xl cursor-pointer' />
                </div>
            </div>
            
        </div>
    )
}