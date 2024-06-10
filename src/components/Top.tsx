import { Link, Route, Routes, useLocation } from "react-router-dom";
import DesktopSlide1 from "/images/desktop-image-hero-1.jpg";
import DesktopSlide2 from "/images/desktop-image-hero-2.jpg";
import DesktopSlide3 from "/images/desktop-image-hero-3.jpg";
import MoibleSlide1 from "/images/mobile-image-hero-1.jpg";
import MoibleSlide2 from "/images/mobile-image-hero-2.jpg";
import MoibleSlide3 from "/images/mobile-image-hero-3.jpg";
import { useRef } from "react";

const data = [
    {
        path: "/",
        desktopImage: DesktopSlide1,
        mobileImage: MoibleSlide1,
        title: "Discover innovative ways to decorate",
        description: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
    },
    {
        path: "/we-are-available-all-across-the-globe",
        desktopImage: DesktopSlide2,
        mobileImage: MoibleSlide2,
        title: "We are available all across the globe",
        description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
    },
    {
        path: "/manufactured-with-the-best-materials",
        desktopImage: DesktopSlide3,
        mobileImage: MoibleSlide3,
        title: "Manufactured with the best materials",
        description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
    },
] satisfies Content[];

export default function Top() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            {data.map((item) => {
                return (
                    <Route
                        path={item.path}
                        key={item.path}
                        element={<TopContent {...item} />}
                    />
                );
            })}
        </Routes>
    );
}

function TopContent(props: Content) {
    const { desktopImage, mobileImage, title, description, path } = props;
    const forwardRef = useRef<HTMLAnchorElement>(null);
    const backwardRef = useRef<HTMLAnchorElement>(null);
    function forward() {
        const thisPathIndex = data.findIndex((d) => d.path === path);
        const { length } = data;
        if (thisPathIndex === length - 1) {
            return data[0].path;
        }
        return data[thisPathIndex + 1].path;
    }
    function backward() {
        const thisPathIndex = data.findIndex((d) => d.path === path);
        const { length } = data;
        if (thisPathIndex === 0) {
            return data[length - 1].path;
        }
        return data[thisPathIndex - 1].path;
    }
    return (
        <div className="w-full flex flex-col lg:flex-row relative h-2/3">
            <div className="lg:h-full lg:w-7/12 w-full h-fit flex-shrink-0 relative">
                <img
                    src={desktopImage}
                    alt="desktop-image 1"
                    className="lg:h-full lg:w-full lg:block hidden object-cover"
                />
                <img
                    src={mobileImage}
                    alt="mobile-image-1"
                    className="lg:hidden w-full h-fit"
                />
                <div className="absolute lg:right-0 lg:bottom-0 lg:translate-x-[100%]">
                    <button
                        onMouseDown={() => backwardRef.current?.click()}
                        className="aspect-square transition hover:bg-dark_gray hover:text-white font-league text-3xl w-[4vw] bg-black text-very_dark-gray content-center text-center"
                    >
                        <Link
                            ref={backwardRef}
                            to={backward()}
                            className="sr-only"
                        >
                            {"<"}
                        </Link>
                        {"<"}
                    </button>
                    <button
                        onMouseDown={() => forwardRef.current?.click()}
                        className="aspect-square transition hover:bg-dark_gray hover:text-white font-league text-3xl w-[4vw] bg-black text-very_dark-gray content-center text-center"
                    >
                        <Link
                            ref={forwardRef}
                            to={forward()}
                            className="sr-only"
                        >
                            {">"}
                        </Link>
                        {">"}
                    </button>
                </div>
            </div>
            <div className="lg:h-full h-fit flex flex-col justify-center items-center flex-shrink px-24">
                <h1 className="text-[2.5rem] tracking-tight font-league font-bold leading-10">
                    {title}
                </h1>
                <p className="text-xs leading-6 py-6">{description}</p>
                <button className="w-full text-left font-black text-xs tracking-[0.75rem]">
                    SHOP NOW{" "}
                    <span className="text-lg relative">
                        <span className="absolute translate-y-[1px]">—</span>
                        <span className="absolute translate-x-4 translate-y-[1px]">
                            —
                        </span>
                        <span className="absolute translate-x-8 translate-y-[1px]">
                            →
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
}
