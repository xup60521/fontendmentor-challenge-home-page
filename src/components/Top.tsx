import DesktopSlide1 from "/images/desktop-image-hero-1.jpg";
import DesktopSlide2 from "/images/desktop-image-hero-2.jpg";
import DesktopSlide3 from "/images/desktop-image-hero-3.jpg";
import MoibleSlide1 from "/images/mobile-image-hero-1.jpg";
import MoibleSlide2 from "/images/mobile-image-hero-2.jpg";
import MoibleSlide3 from "/images/mobile-image-hero-3.jpg";

import LeftArrow from "/images/icon-angle-left.svg";
import RightArrow from "/images/icon-angle-right.svg";
import Logo from "/images/logo.svg";
import MenuIcon from "/images/icon-hamburger.svg";
import IconClose from "/images/icon-close.svg";
import { Fragment, useState } from "react";

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

type Page = {
    page: number;
    action: "" | "left" | "right";
};

type Menu = "" | "open" | "close";

export default function Top() {
    const [page, setPage] = useState<Page>({ page: 0, action: "" });
    const [openMenu, setOpenMenu] = useState<Menu>("");

    return (
        <>
            <nav className="absolute z-50 lg:flex hidden gap-8 lg:py-16 lg:px-16 items-center">
                <img src={Logo} alt="logo" className="h-fit mr-8" />
                <button className="text-white font-league text-lg font-medium group relative">
                    <span>home</span>
                    <span
                        className={`absolute -bottom-1 left-1/2 h-0.5 w-0 bg-white group-hover:w-1/2 group-hover:transition-all `}
                    ></span>
                    <span
                        className={`absolute -bottom-1 right-1/2 h-0.5 w-0 bg-white group-hover:w-1/2 group-hover:transition-all `}
                    ></span>
                </button>
                <button className="text-white font-league text-lg font-medium group relative">
                    <span>shop</span>
                    <span
                        className={`absolute -bottom-1 left-1/2 h-0.5 w-0 bg-white group-hover:w-1/2 group-hover:transition-all `}
                    ></span>
                    <span
                        className={`absolute -bottom-1 right-1/2 h-0.5 w-0 bg-white group-hover:w-1/2 group-hover:transition-all `}
                    ></span>
                </button>
                <button className="text-white font-league text-lg font-medium group relative">
                    <span>about</span>
                    <span
                        className={`absolute -bottom-1 left-1/2 h-0.5 w-0 bg-white group-hover:w-1/2 group-hover:transition-all `}
                    ></span>
                    <span
                        className={`absolute -bottom-1 right-1/2 h-0.5 w-0 bg-white group-hover:w-1/2 group-hover:transition-all `}
                    ></span>
                </button>
                <button className="text-white font-league text-lg font-medium group relative">
                    <span>contact</span>
                    <span
                        className={`absolute -bottom-1 left-1/2 h-0.5 w-0 bg-white group-hover:w-1/2 group-hover:transition-all `}
                    ></span>
                    <span
                        className={`absolute -bottom-1 right-1/2 h-0.5 w-0 bg-white group-hover:w-1/2 group-hover:transition-all `}
                    ></span>
                </button>
            </nav>
            <nav className="lg:hidden flex justify-center items-center absolute w-full top-0 left-0 py-12 z-50">
                <img src={Logo} alt="logo" className="h-fit mr-8" />
                <button
                    className="absolute left-8"
                    onMouseDown={() => setOpenMenu("open")}
                >
                    <span className="sr-only">menu</span>
                    <img src={MenuIcon} alt="menu icon" />
                </button>
            </nav>
            <MobileNavMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <div className="lg:h-full bg-black lg:w-7/12 w-full h-fit flex-shrink-0 relative hidden lg:block">
                <DisplayDesktopImage page={page} />
            </div>
            <div className="w-full bg-black h-[50vh] flex-shrink-0 relative block lg:hidden">
                <DisplayMobilepImage page={page} />
            </div>
            <div className="lg:h-full h-fit relative flex-shrink flex-grow">
                <div className="absolute lg:left-0 lg:bottom-0 left-[100%] bottom-[100%] lg:translate-y-0 -translate-x-[100%] lg:translate-x-0 flex z-40">
                    <button
                        onMouseDown={() =>
                            setPage((prev) => {
                                prev.page = page.page === 0 ? 2 : page.page - 1;
                                prev.action = "left";
                                return { ...prev };
                            })
                        }
                        className="aspect-square transition hover:bg-very_dark-gray hover:text-white font-league text-3xl lg:w-[4vw] w-16 bg-black text-very_dark-gray flex justify-center items-center"
                    >
                        <img
                            src={LeftArrow}
                            alt="left arrow"
                            className="size-4"
                        />
                        <span className="sr-only">prev image</span>
                    </button>
                    <button
                        onMouseDown={() =>
                            setPage((prev) => {
                                if (page.page === 2) {
                                    page.page = 0;
                                } else {
                                    page.page = page.page + 1;
                                }
                                // prev.page = page.page === 2 ? 0 : page.page + 1;
                                prev.action = "right";
                                return { ...prev };
                            })
                        }
                        className="aspect-square transition hover:bg-very_dark-gray hover:text-white font-league text-3xl lg:w-[4vw] w-16 bg-black text-very_dark-gray flex justify-center items-center"
                    >
                        <img
                            src={RightArrow}
                            alt="right arrow"
                            className="size-4"
                        />
                        <span className="sr-only">next image</span>
                    </button>
                </div>
                <DisplayTitleAndDescription page={page} />
            </div>
        </>
    );
}

function MobileNavMenu({
    openMenu,
    setOpenMenu,
}: {
    openMenu: Menu;
    setOpenMenu: React.Dispatch<React.SetStateAction<Menu>>;
}) {
    return (
        <Fragment>
            <div
                className={`absolute w-screen lg:hidden -top-[100vh] h-screen bg-black opacity-50  z-40 transition ${
                    openMenu === "open"
                        ? "h-screen translate-y-[100%]"
                        : `${openMenu === "close" ? "h-screen" : "h-0"}`
                }`}
            >
                
            </div>
            <div
                className={`lg:hidden absolute h-[7.5rem] bg-red-50 z-50 transition w-full left-0 -top-[10rem] flex px-8 justify-between ${
                    openMenu === "open"
                        ? "animate-open_menu"
                        : openMenu === "close" && "animate-close_menu "
                }`}
            >
                <button className="" onMouseDown={() => setOpenMenu("close")}>
                    <img src={IconClose} alt="close icon" />
                    <span className="sr-only">close menu</span>
                </button>
                <div className="h-full flex-grow flex items-center justify-end gap-6">
                    <button className="font-league group relative font-bold">
                        <span>home</span>
                        <span
                            className={`absolute -bottom-1 left-1/2 h-0.5 w-0 bg-black group-hover:w-1/2 group-hover:transition-all `}
                        ></span>
                        <span
                            className={`absolute -bottom-1 right-1/2 h-0.5 w-0 bg-black group-hover:w-1/2 group-hover:transition-all `}
                        ></span>
                    </button>
                    <button className="font-league group relative font-bold">
                        <span>shop</span>
                        <span
                            className={`absolute -bottom-1 left-1/2 h-0.5 w-0 bg-black group-hover:w-1/2 group-hover:transition-all `}
                        ></span>
                        <span
                            className={`absolute -bottom-1 right-1/2 h-0.5 w-0 bg-black group-hover:w-1/2 group-hover:transition-all `}
                        ></span>
                    </button>
                    <button className="font-league group relative font-bold">
                        <span>about</span>
                        <span
                            className={`absolute -bottom-1 left-1/2 h-0.5 w-0 bg-black group-hover:w-1/2 group-hover:transition-all `}
                        ></span>
                        <span
                            className={`absolute -bottom-1 right-1/2 h-0.5 w-0 bg-black group-hover:w-1/2 group-hover:transition-all `}
                        ></span>
                    </button>
                    <button className="font-league group relative font-bold">
                        <span>contact</span>
                        <span
                            className={`absolute -bottom-1 left-1/2 h-0.5 w-0 bg-black group-hover:w-1/2 group-hover:transition-all `}
                        ></span>
                        <span
                            className={`absolute -bottom-1 right-1/2 h-0.5 w-0 bg-black group-hover:w-1/2 group-hover:transition-all `}
                        ></span>
                    </button>
                </div>
            </div>
        </Fragment>
    );
}

function DisplayTitleAndDescription({ page }: { page: Page }) {
    const rightIndex = page.page === 2 ? 0 : page.page + 1;
    const leftIndex = page.page === 0 ? 2 : page.page - 1;
    if (page.action === "") {
        const { title, description } = data[0];
        return (
            <div className="absolute w-full h-full flex flex-col items-center justify-center lg:px-24 px-8">
                <h1 className="text-[2.5rem] tracking-tight font-league font-bold leading-10 relative">
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
        );
    }
    if (page.action === "right") {
        const { title: title1, description: description1 } = data[0];
        const { title: title2, description: description2 } = data[1];
        const { title: title3, description: description3 } = data[2];

        return (
            <Fragment>
                <div
                    className={`absolute w-full h-full flex flex-col items-center justify-center lg:px-24 px-8 ${
                        page.page === 0
                            ? "animate-fadein_left "
                            : `${
                                  leftIndex === 0
                                      ? "animate-fadeout_right "
                                      : "hidden "
                              }`
                    } `}
                >
                    <h1 className="text-[2.5rem] tracking-tight font-league font-bold leading-10 relative">
                        {title1}
                    </h1>
                    <p className="text-xs leading-6 py-6">{description1}</p>
                    <button className="w-full text-left font-black text-xs tracking-[0.75rem]">
                        SHOP NOW{" "}
                        <span className="text-lg relative">
                            <span className="absolute translate-y-[1px]">
                                —
                            </span>
                            <span className="absolute translate-x-4 translate-y-[1px]">
                                —
                            </span>
                            <span className="absolute translate-x-8 translate-y-[1px]">
                                →
                            </span>
                        </span>
                    </button>
                </div>
                <div
                    className={`absolute w-full h-full flex flex-col items-center justify-center lg:px-24 px-8 ${
                        page.page === 1
                            ? "animate-fadein_left "
                            : `${
                                  leftIndex === 1
                                      ? "animate-fadeout_right "
                                      : "hidden "
                              }`
                    } `}
                >
                    <h1 className="text-[2.5rem] tracking-tight font-league font-bold leading-10 relative">
                        {title2}
                    </h1>
                    <p className="text-xs leading-6 py-6">{description2}</p>
                    <button className="w-full text-left font-black text-xs tracking-[0.75rem]">
                        SHOP NOW{" "}
                        <span className="text-lg relative">
                            <span className="absolute translate-y-[1px]">
                                —
                            </span>
                            <span className="absolute translate-x-4 translate-y-[1px]">
                                —
                            </span>
                            <span className="absolute translate-x-8 translate-y-[1px]">
                                →
                            </span>
                        </span>
                    </button>
                </div>
                <div
                    className={`absolute w-full h-full flex flex-col items-center justify-center lg:px-24 px-8 ${
                        page.page === 2
                            ? "animate-fadein_left "
                            : `${
                                  leftIndex === 2
                                      ? "animate-fadeout_right "
                                      : "hidden "
                              }`
                    } `}
                >
                    <h1 className="text-[2.5rem] tracking-tight font-league font-bold leading-10 relative">
                        {title3}
                    </h1>
                    <p className="text-xs leading-6 py-6">{description3}</p>
                    <button className="w-full text-left font-black text-xs tracking-[0.75rem]">
                        SHOP NOW{" "}
                        <span className="text-lg relative">
                            <span className="absolute translate-y-[1px]">
                                —
                            </span>
                            <span className="absolute translate-x-4 translate-y-[1px]">
                                —
                            </span>
                            <span className="absolute translate-x-8 translate-y-[1px]">
                                →
                            </span>
                        </span>
                    </button>
                </div>
            </Fragment>
        );
    }
    if (page.action === "left") {
        const { title: title1, description: description1 } = data[0];
        const { title: title2, description: description2 } = data[1];
        const { title: title3, description: description3 } = data[2];

        return (
            <Fragment>
                <div
                    className={`absolute w-full h-full flex flex-col items-center justify-center lg:px-24 px-8 ${
                        page.page === 0
                            ? "animate-fadein_right"
                            : `${
                                  rightIndex === 0
                                      ? "animate-fadeout_left"
                                      : "hidden"
                              }`
                    } `}
                >
                    <h1 className="text-[2.5rem] tracking-tight font-league font-bold leading-10 relative">
                        {title1}
                    </h1>
                    <p className="text-xs leading-6 py-6">{description1}</p>
                    <button className="w-full text-left font-black text-xs tracking-[0.75rem]">
                        SHOP NOW{" "}
                        <span className="text-lg relative">
                            <span className="absolute translate-y-[1px]">
                                —
                            </span>
                            <span className="absolute translate-x-4 translate-y-[1px]">
                                —
                            </span>
                            <span className="absolute translate-x-8 translate-y-[1px]">
                                →
                            </span>
                        </span>
                    </button>
                </div>
                <div
                    className={`absolute w-full h-full flex flex-col items-center justify-center lg:px-24 px-8 ${
                        page.page === 1
                            ? "animate-fadein_right"
                            : `${
                                  rightIndex === 1
                                      ? "animate-fadeout_left"
                                      : "hidden"
                              }`
                    } `}
                >
                    <h1 className="text-[2.5rem] tracking-tight font-league font-bold leading-10 relative">
                        {title2}
                    </h1>
                    <p className="text-xs leading-6 py-6">{description2}</p>
                    <button className="w-full text-left font-black text-xs tracking-[0.75rem]">
                        SHOP NOW{" "}
                        <span className="text-lg relative">
                            <span className="absolute translate-y-[1px]">
                                —
                            </span>
                            <span className="absolute translate-x-4 translate-y-[1px]">
                                —
                            </span>
                            <span className="absolute translate-x-8 translate-y-[1px]">
                                →
                            </span>
                        </span>
                    </button>
                </div>
                <div
                    className={`absolute w-full h-full flex flex-col items-center justify-center lg:px-24 px-8 ${
                        page.page === 2
                            ? "animate-fadein_right"
                            : `${
                                  rightIndex === 2
                                      ? "animate-fadeout_left"
                                      : "hidden"
                              }`
                    } `}
                >
                    <h1 className="text-[2.5rem] tracking-tight font-league font-bold leading-10 relative">
                        {title3}
                    </h1>
                    <p className="text-xs leading-6 py-6">{description3}</p>
                    <button className="w-full text-left font-black text-xs tracking-[0.75rem]">
                        SHOP NOW{" "}
                        <span className="text-lg relative">
                            <span className="absolute translate-y-[1px]">
                                —
                            </span>
                            <span className="absolute translate-x-4 translate-y-[1px]">
                                —
                            </span>
                            <span className="absolute translate-x-8 translate-y-[1px]">
                                →
                            </span>
                        </span>
                    </button>
                </div>
            </Fragment>
        );
    }

    return null;
}

function DisplayDesktopImage({ page }: { page: Page }) {
    const rightIndex = page.page === 2 ? 0 : page.page + 1;
    const leftIndex = page.page === 0 ? 2 : page.page - 1;

    if (page.action === "") {
        return (
            <img
                src={DesktopSlide1}
                key={"unique"}
                alt="desktop-image 1"
                className="absolute top-0 left-0 h-full w-full object-cover hidden lg:block"
            />
        );
    }
    if (page.action === "right") {
        return (
            <Fragment>
                <img
                    src={DesktopSlide1}
                    alt="desktop-image 1"
                    className={`absolute top-0 left-0 h-full w-full object-cover ${
                        page.page === 0
                            ? "animate-fadein_left "
                            : `${
                                  leftIndex === 0
                                      ? "animate-fadeout_right "
                                      : "hidden "
                              }`
                    } `}
                />
                <img
                    src={DesktopSlide2}
                    alt="desktop-image 2"
                    className={`absolute top-0 left-0 h-full w-full object-cover ${
                        page.page === 1
                            ? "animate-fadein_left "
                            : `${
                                  leftIndex === 1
                                      ? "animate-fadeout_right "
                                      : "hidden "
                              }`
                    } `}
                />
                <img
                    src={DesktopSlide3}
                    alt="desktop-image 3"
                    className={`absolute  top-0 left-0 h-full w-full object-cover ${
                        page.page === 2
                            ? "animate-fadein_left "
                            : `${
                                  leftIndex === 2
                                      ? "animate-fadeout_right "
                                      : "hidden "
                              }`
                    } `}
                />
            </Fragment>
        );
    }
    if (page.action === "left") {
        return (
            <Fragment>
                <img
                    src={DesktopSlide1}
                    alt="desktop-image 1"
                    className={`absolute top-0 left-0 h-full w-full object-cover ${
                        page.page === 0
                            ? "animate-fadein_right"
                            : `${
                                  rightIndex === 0
                                      ? "animate-fadeout_left"
                                      : "hidden"
                              }`
                    } `}
                />
                <img
                    src={DesktopSlide2}
                    alt="desktop-image 2"
                    className={`absolute top-0 left-0 h-full w-full object-cover ${
                        page.page === 1
                            ? "animate-fadein_right"
                            : `${
                                  rightIndex === 1
                                      ? "animate-fadeout_left"
                                      : "hidden"
                              }`
                    } `}
                />
                <img
                    src={DesktopSlide3}
                    alt="desktop-image 3"
                    className={`absolute  top-0 left-0 h-full w-full object-cover ${
                        page.page === 2
                            ? "animate-fadein_right"
                            : `${
                                  rightIndex === 2
                                      ? "animate-fadeout_left"
                                      : "hidden"
                              }`
                    } `}
                />
            </Fragment>
        );
    }
    return null;
}

function DisplayMobilepImage({ page }: { page: Page }) {
    const rightIndex = page.page === 2 ? 0 : page.page + 1;
    const leftIndex = page.page === 0 ? 2 : page.page - 1;

    if (page.action === "") {
        return (
            <img
                src={MoibleSlide1}
                key={"unique"}
                alt="desktop-image 1"
                className="h-full w-full object-cover lg:hidden block"
            />
        );
    }
    if (page.action === "right") {
        return (
            <Fragment>
                <img
                    src={MoibleSlide1}
                    alt="desktop-image 1"
                    className={`absolute h-full w-full object-cover ${
                        page.page === 0
                            ? "animate-fadein_left "
                            : `${
                                  leftIndex === 0
                                      ? "animate-fadeout_right "
                                      : "hidden "
                              }`
                    } `}
                />
                <img
                    src={MoibleSlide2}
                    alt="desktop-image 2"
                    className={`absolute h-full w-full object-cover ${
                        page.page === 1
                            ? "animate-fadein_left "
                            : `${
                                  leftIndex === 1
                                      ? "animate-fadeout_right "
                                      : "hidden "
                              }`
                    } `}
                />
                <img
                    src={MoibleSlide3}
                    alt="desktop-image 3"
                    className={`absolute h-full w-full object-cover ${
                        page.page === 2
                            ? "animate-fadein_left "
                            : `${
                                  leftIndex === 2
                                      ? "animate-fadeout_right "
                                      : "hidden "
                              }`
                    } `}
                />
            </Fragment>
        );
    }
    if (page.action === "left") {
        return (
            <Fragment>
                <img
                    src={MoibleSlide1}
                    alt="desktop-image 1"
                    className={`absolute h-full w-full object-cover ${
                        page.page === 0
                            ? "animate-fadein_right"
                            : `${
                                  rightIndex === 0
                                      ? "animate-fadeout_left"
                                      : "hidden"
                              }`
                    } `}
                />
                <img
                    src={MoibleSlide2}
                    alt="desktop-image 2"
                    className={`absolute h-full w-full object-cover ${
                        page.page === 1
                            ? "animate-fadein_right"
                            : `${
                                  rightIndex === 1
                                      ? "animate-fadeout_left"
                                      : "hidden"
                              }`
                    } `}
                />
                <img
                    src={MoibleSlide3}
                    alt="desktop-image 3"
                    className={`absolute h-full w-full object-cover ${
                        page.page === 2
                            ? "animate-fadein_right"
                            : `${
                                  rightIndex === 2
                                      ? "animate-fadeout_left"
                                      : "hidden"
                              }`
                    } `}
                />
            </Fragment>
        );
    }
    return null;
}
