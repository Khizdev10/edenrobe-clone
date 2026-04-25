import { SlLocationPin } from "react-icons/sl";
import { BsBox2, BsChatDots } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";

export default function Services() {
    return (
        <section className="bg-white border-t border-gray-200">
            <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-0">

                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 border-r-0 md:border-r border-gray-200 last:border-r-0">
                        <BsChatDots className="text-[35px] md:text-[45px] text-black" />
                        <div className="text-center md:text-left">
                            <h4 className="text-[14px] md:text-[16px] font-bold uppercase">Customer Support</h4>
                            <p className="  text-[13px] text-gray-700 font-medium">Mon - Sat, 9am - 6pm</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 border-r-0 md:border-r border-gray-200 last:border-r-0">
                        <BsBox2 className="text-[35px] md:text-[45px] text-black" />
                        <div className="text-center md:text-left">
                            <h4 className="text-[14px] md:text-[16px] font-bold uppercase">Easy Exchange</h4>
                            <p className="  text-[13px] text-gray-700 font-medium">14 Days Easy Exchange</p>
                            <a href="#" className="  text-[12px] text-blue-800 underline">Exchange Form</a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 border-r-0 md:border-r border-gray-200 last:border-r-0">
                        <SlLocationPin className="text-[35px] md:text-[45px] text-black" />
                        <div className="text-center md:text-left">
                            <h4 className="text-[14px] md:text-[16px] font-bold uppercase">Store Locator</h4>
                            <a href="#" className=" text-[12px] text-blue-800 underline">See all our outlets</a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                        <CiDeliveryTruck className="text-[40px] md:text-[55px] text-black" />
                        <div className="text-center md:text-left">
                            <h4 className="text-[14px] md:text-[16px] font-bold uppercase">Worldwide Delivery</h4>
                            <p className=" text-[13px] text-gray-700 font-medium">T&C Applied</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}