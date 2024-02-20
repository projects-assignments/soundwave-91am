import {Link} from 'react-router-dom'
export const Footer = () => {
    return (
        <div className="fixed  bottom-0 w-full h-[70px] bg-[#211F27]">
            <ul className="flex  text-xl justify-around py-6">
                <div className="flex space-x-8">
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact
                    </li>
                </div>
                <div className="flex space-x-8">
                    <li className="flex space-x-2">
                        <img src="src\assets\twitter.svg" alt="" />
                        <span>Twitter</span>
                    </li>

                    <li className="flex space-x-2">
                        <img src="src\assets\facebook.svg" alt="" />
                        <span className="icon-[bxl--facebook-square]">Facebook</span>

                    </li>
                </div>
            </ul>
        </div>
    )
}