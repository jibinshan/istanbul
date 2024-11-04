import { Icons } from "@/components/Icon"
import Image from "next/image"

const Glimpse = ({ }) => {
    return (
        <section className="relative flex flex-col lg:flex-row h-full items-start justify-center pl-5 lg:pl-48 py-10 lg:py-20 bg-[#000000] gap-7">
            <div className="w-full lg:w-1/2">
                <div className="h-full w-full z-10 flex flex-col gap-5">
                    <h3 className="font-oswald uppercase text-[#fff4e3]">Gallery</h3>
                    <h1 className="font-oswald text-[#fff4e3] font-bold text-5xl sm:text-7xl md:text-start lg:leading-[80px]">
                        A Glimpse<br />
                        of Istanbul
                    </h1>
                    <p className="max-w-full mr-5 lg:mr-0 lg:max-w-[300px] font-bold font-oswald leading-[160%] text-white md:text-start flex items-center gap-2 bg-[#0a0a0a] justify-center py-5 rounded-full">
                        <Icons.instagram className="text-primary" />
                        Check out our instagram
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <Image
                    src="/images/home/glimpse.jpeg"
                    width={1360}
                    height={564}
                    alt="side-close-up"
                    className="h-auto w-full rounded-xl"
                />
            </div>
        </section>
    )
}

export default Glimpse