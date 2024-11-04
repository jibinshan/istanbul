import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Hero = ({ }) => {
    return (
        <section id="hero" className="flex w-full items-center justify-center">
            <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-black">
                <div className="absolute left-0 top-0 h-full w-full bg-black/50 z-10"></div>
                <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
                    <video
                        className="min-h-full min-w-full scale-x-[-1] object-cover"
                        style={{ objectPosition: "center" }}
                        src="/video/home/hero.mp4"
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>
                <div className="z-50 flex h-full w-full max-w-[1300px] items-center justify-center">
                    <div className="flex w-fit flex-col items-center justify-center gap-7">
                        <h1 className="font-oswald text-[#fff4e3] text-5xl font-semibold lg:leading-[110px] sm:text-5xl md:text-8xl text-center">
                            Experience the<br /> Authentic Flavors<br />
                            of Turkey
                        </h1>
                        <Link href='/menu'>
                            <Button className="flex items-center justify-center gap-3 px-6 py-7 rounded-full">Order Now <MoveRight /></Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
