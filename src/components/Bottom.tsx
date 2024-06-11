
export default function Bottom() {
    return (
        <div className="w-full flex flex-col lg:flex-row h-1/3">
            <img src="/images/image-about-dark.jpg" alt="about image dark" className="bg-cover object-cover lg:w-[29vw] flex-shrink-0" />
            <div className="flex-grow flex flex-col justify-center lg:px-12 px-8 lg:py-0 py-12">
                <h3 className="text-left text-sm tracking-[0.15rem] font-league font-bold py-2">ABOUT OUR FURNITURE</h3>
                <p className="text-xs leading-6 font-league">
                    Our multifunctional collection blends design and function to
                    suit your individual taste. Make each room unique, or pick a
                    cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from
                    traditional to contemporary st\yles or anything in between.
                    Product specialists are available to help you create your
                    dream space.
                </p>
            </div>
            <img src="/images/image-about-light.jpg" className="lg:w-[calc(100vw*101/300)] bg-cover object-cover flex-shrink-0" alt="about image light" />
        </div>
    );
}
