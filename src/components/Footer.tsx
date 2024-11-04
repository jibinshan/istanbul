import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "./ui/input";

const Footer = ({ }) => {
    return (
        <footer className="z-50 flex h-full w-full items-center justify-center bg-[#131313] px-2 py-[8.75rem]">
            <div className="flex h-full w-full max-w-[1300px] flex-col gap-10">
                <div className="flex flex-col lg:flex-row gap-4 w-full px-4">
                    <div className="w-full lg:w-1/2">
                        <h1 className="max-w-[300px] lg:max-w-[500px] font-oswald font-bold text-5xl lg:text-7xl text-[#bc995d]">
                            Subscribe to our newsletter
                        </h1>
                    </div>
                    <div className="w-full lg:w-1/2 flex h-full flex-col gap-10">
                        <p className="max-w-[380px] text-[#959595]">
                            By subscribing to the newsletter, you will always be up to date.
                            Find out about new products, events, and specials.
                        </p>
                        <div className="flex flex-col gap-2 lg:flex-row">
                            <Input
                                placeholder="Email Address"
                                className="min-w-[250px] h-14 rounded-full border-none bg-[#222222] text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0 pl-8"
                            />
                            <Button
                                className="group items-center h-14 px-6 gap-[1.19rem] border border-primary bg-transparent rounded-full font-semibold uppercase text-accent hover:border-primary hover:bg-primary hover:text-[#282828]"
                                variant="secondary"
                            >
                                Subscribe
                                <Icons.rightArrow className="transition-transform duration-300 text-primary ease-in-out group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="h-full w-full px-4">
                    <div className="flex w-full flex-col lg:flex-row justify-between gap-10 lg:h-[500px]">
                        <div className="flex w-full lg:w-1/2 flex-col gap-7 lg:gap-0 lg:flex-row justify-between lg:pt-[7.81rem]">
                            <div className="flex flex-col">
                                <Button
                                    variant="link"
                                    className="w-fit items-center justify-start px-0 py-0 text-start text-accent text-[#959595]"
                                >
                                    Menu
                                </Button>
                                <Button
                                    variant="link"
                                    className="w-fit items-center justify-start px-0 py-0 text-start text-accent text-[#959595]"
                                >
                                    About
                                </Button>
                                <Button
                                    variant="link"
                                    className="w-fit items-center justify-start px-0 py-0 text-start text-accent text-[#959595]"
                                >
                                    Contact
                                </Button>
                                <Button
                                    variant="link"
                                    className="w-fit items-center justify-start px-0 py-0 text-start text-accent text-[#959595]"
                                >
                                    Booking
                                </Button>
                                <Button
                                    variant="link"
                                    className="w-fit items-center justify-start px-0 py-0 text-start text-accent text-[#959595]"
                                >
                                    Gift Voucher
                                </Button>
                            </div>
                            <div className="flex flex-col gap-[1.38rem]">
                                <h3 className="font-bold uppercase text-[#959595]">Contact</h3>
                                <p className="text-[#959595]">0151 245 1500</p>
                                <p className="text-[#959595]">Info@bavetteliverpool.co.uk</p>
                                <p className="text-[#959595]">$9 Allerton Rd, Liverpool L25 7RE</p>
                                <div className="flex w-full justify-start pt-[1.22rem]">
                                    <Button variant="ghost" className="px-1 py-1 hover:bg-transparent">
                                        <span className="sr-only">Instagram</span>
                                        <Icons.instagram className="text-[#959595]" />
                                    </Button>
                                    <Button variant="ghost" className="px-1 py-1 hover:bg-transparent">
                                        <span className="sr-only">UNknown</span>
                                        <Icons.unknown className="text-[#959595]" />
                                    </Button>
                                    <Button variant="ghost" className="px-1 py-1 hover:bg-transparent">
                                        <span className="sr-only">Google</span>
                                        <Icons.google className="text-[#959595]" />
                                    </Button>
                                    <Button variant="ghost" className="px-1 py-1 hover:bg-transparent">
                                        <span className="sr-only">Facebook</span>
                                        <Icons.facebook className="text-[#959595]" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center lg:justify-end lg:items-end">
                            <div className="flex w-full flex-col gap-4 items-center lg:items-end">
                                <Image
                                    src="/images/footer-logo.png"
                                    width={188}
                                    height={57}
                                    alt="logo"
                                />
                                <p className="text-[#64615C]">© 2024 bavetteliverpool</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
