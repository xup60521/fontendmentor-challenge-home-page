import { FaArrowRightLong } from "react-icons/fa6";
import DesktopSlide1 from "/images/desktop-image-hero-1.jpg";
import DesktopSlide2 from "/images/desktop-image-hero-2.jpg";
import DesktopSlide3 from "/images/desktop-image-hero-3.jpg";
import MoibleSlide1 from "/images/mobile-image-hero-1.jpg";
import MoibleSlide2 from "/images/mobile-image-hero-2.jpg";
import MoibleSlide3 from "/images/mobile-image-hero-3.jpg";

export default function Top() {
    return (
        <div className="w-full flex flex-col lg:flex-row relative h-2/3">
            <div className="lg:h-full lg:w-7/12 w-full h-fit flex-shrink-0 relative">
                <img
                    src={DesktopSlide1}
                    alt="desktop-image 1"
                    className="lg:h-full lg:w-full lg:block hidden object-cover"
                />
                <img
                    src={MoibleSlide1}
                    alt="mobile-image-1"
                    className="lg:hidden w-full h-fit"
                />
                <div className="absolute lg:right-0 lg:bottom-0 lg:translate-x-[100%]">
                    <button className="aspect-square transition hover:bg-dark_gray hover:text-white font-league text-3xl w-[4vw] bg-black text-very_dark-gray content-center text-center">{"<"}</button>
                    <button className="aspect-square transition hover:bg-dark_gray hover:text-white font-league text-3xl w-[4vw] bg-black text-very_dark-gray content-center text-center">{">"}</button>
                </div>
            </div>
            <div className="lg:h-full h-fit flex flex-col justify-center items-center flex-shrink px-24">
                <h1 className="text-[2.5rem] tracking-tight font-league font-bold leading-10">
                    Discover innovative ways to decorate
                </h1>
                <p className="text-xs leading-6 py-6">
                    We provide unmatched quality, comfort, and style for
                    property owners across the country. Our experts combine form
                    and function in bringing your vision to life. Create a room
                    in your own style with our collection and make your property
                    a reflection of you and what you love.
                </p>
                <button className="w-full text-left font-black text-xs tracking-[0.75rem]">
                    SHOP NOW{" "}
                    <span className="text-lg relative">
                        <span className="absolute translate-y-[1px]">—</span>
                        <span className="absolute translate-x-4 translate-y-[1px]">—</span>
                        <span className="absolute translate-x-8 translate-y-[1px]">→</span>
                    </span>
                </button>
            </div>
        </div>
    );
}
