import Facebook from "../assets/social/facebook-white.svg";
import Instagram from "../assets/social/instagram-white.svg";
import Twitter from "../assets/social/twitter-white.svg";
const Footer = () => {
    return (
        <footer className="w-full h-60 md:h-48 bg-zinc-800">
            <div className="ml-5">
                <div className="grid grid-cols-4 content-center place-items-start md:flex text-xs text-gray-300 pt-5 gap-5">
                    <div className="flex justify-around md:justify-normal w-full md:w-auto col-span-1 md:gap-5"><a href="#">Home</a>|</div>
                    <div className="flex justify-around md:justify-normal w-full md:w-auto col-span-2 md:gap-5"><a href="#">Terms and Conditions</a>|</div>
                    <div className="flex justify-around md:justify-normal w-full md:w-auto col-span-1 md:gap-5"><a href="#">Privacy Policy</a>|</div>
                    <div className="flex justify-around md:justify-normal w-full md:w-auto col-span-1 md:gap-5"><a href="#">Collection Statement</a>|</div>
                    <div className="flex justify-around md:justify-normal w-full md:w-auto col-span-1 md:gap-5"><a href="#">Help</a>|</div>
                    <div className="flex w-full col-span-2 md:w-auto"><a href="#">Manage Account</a></div >
                </div>
                <div className="mt-5 mb-10">
                    <p className="text-xs text-gray-300">Copyright © 2016 DEMO Streaming All Rights Reserved.</p>
                </div>
                <div className="flex gap-10">
                    <div>
                        <img src={Facebook} alt="Facebook" width={30} height={30} />
                    </div>
                    <div>
                        <img src={Twitter} alt="Twitter" width={55} height={55} />
                    </div>
                    <div>
                        <img src={Instagram} alt="Instagram" width={50} height={50} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer