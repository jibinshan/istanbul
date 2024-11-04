import { Icons } from "@/components/Icon"
import { Button } from "@/components/ui/button"
import Link from "next/link"


const Menu = ({ }) => {
    return (
        <section className="relative flex h-full w-full items-center justify-center py-12 lg:pr-8 pl-0 overflow-hidden">
            <div className="absolute left-0 h-full w-full z-10"
                style={{
                    background: "linear-gradient(to bottom, black, rgba(0, 0, 0, 0.5), black)"
                }}
            ></div>
            <div className="absolute left-5 lg:left-44 h-full w-full z-50 flex flex-col items-start lg:pr-16 gap-5 justify-center">
                <h3 className="font-oswald uppercase">Explore menu</h3>
                <h1 className="max-w-[500px] font-oswald font-bold text-6xl sm:text-7xl md:text-start">
                    Istanbul<br />
                    <span className="text-primary">Menu</span>
                </h1>
                <p className="max-w-[300px] lg:max-w-[500px] font-light leading-[160%] text-white md:text-start">
                    Our Istanbul menu is crafted from a deep passion for Turkish flavors, with a focus on authenticity and quality. Every dish celebrates the rich culinary heritage of Turkey, prepared by skilled chefs who carefully select fresh, local ingredients. We invite you to experience the vibrant tastes of Istanbul, where each meal is a true labor of love.
                </p>
                <Link href="/menu">
                    <Button className="flex items-center font-oswald font-bold justify-center gap-3 px-6 py-7 rounded-full bg-primary text-[#282828]">
                        View Menu{" "}
                        <Icons.rightArrow className="text-[#282828] duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
                    </Button>
                </Link>
            </div>
            <div className="w-full flex gap-2 lg:gap-4">
                <div className="w-1/3 h-[598px] rounded-3xl"
                    style={{
                        backgroundImage: "url(/images/home/image.png)",
                        backgroundPosition: "center",
                        backgroundSize: "cover", // Ensures the image covers the container while maintaining aspect ratio
                        backgroundRepeat: "no-repeat",
                    }}
                >
                </div>
                <div className="w-1/3 h-[598px] rounded-3xl"
                    style={{
                        backgroundImage: "url(/images/home/image1.png)",
                        backgroundPosition: "center",
                        backgroundSize: "cover", // Ensures the image covers the container while maintaining aspect ratio
                        backgroundRepeat: "no-repeat",
                    }}
                >
                </div>
                <div className="w-1/3 h-[598px] rounded-3xl"
                    style={{
                        backgroundImage: "url(/images/home/image3.png)",
                        backgroundPosition: "center",
                        backgroundSize: "cover", // Ensures the image covers the container while maintaining aspect ratio
                        backgroundRepeat: "no-repeat",
                    }}
                >
                </div>
            </div>
        </section >
    )
}

export default Menu