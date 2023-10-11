import React from 'react'
import { Popover, PopoverHandler, PopoverContent } from '@material-tailwind/react'

const Popovers = ({ description }) => {
    return (
        <Popover>
            <PopoverHandler>
                <svg className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <g clipPath="url(#clip0_221_106)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.46997 14.5C11.336 14.5 14.47 11.366 14.47 7.5C14.47 3.63401 11.336 0.5 7.46997 0.5C3.60398 0.5 0.469971 3.63401 0.469971 7.5C0.469971 11.366 3.60398 14.5 7.46997 14.5ZM8.47 4C8.47 4.55229 8.02228 5 7.47 5C6.91771 5 6.47 4.55229 6.47 4C6.47 3.44772 6.91771 3 7.47 3C8.02228 3 8.47 3.44772 8.47 4ZM6.57009 6.29844C6.23872 6.29844 5.97009 6.56707 5.97009 6.89844C5.97009 7.22981 6.23872 7.49844 6.57009 7.49844H6.87005V10.3024H6.07156C5.74019 10.3024 5.47156 10.571 5.47156 10.9023C5.47156 11.2337 5.74019 11.5023 6.07156 11.5023H8.87152C9.20289 11.5023 9.47152 11.2337 9.47152 10.9023C9.47152 10.571 9.20289 10.3024 8.87152 10.3024H8.07005V6.89844C8.07005 6.56707 7.80143 6.29844 7.47005 6.29844H6.57009Z" fill="#CACBCE" />
                    </g>
                    <defs>
                        <clipPath id="clip0_221_106">
                            <rect width="14" height="14" fill="white" transform="translate(0.469971 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            </PopoverHandler>
            <PopoverContent className="max-w-[250px] bg-[#424242] text-white text-xs">
               {description}
            </PopoverContent>
        </Popover>
    )
}

export default Popovers