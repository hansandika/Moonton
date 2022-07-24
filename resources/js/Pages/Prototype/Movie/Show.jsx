import ReactPlayer from "react-player";
import { Link } from "@inertiajs/inertia-react";

export default function Show() {
    return (
        <section
            className="relative w-screen h-screen mx-auto watching-page font-poppins bg-form-bg"
            id="stream"
        >
            <div className="pt-[100px]">
                <ReactPlayer
                    url="https://youtu.be/FIILsSmS_nA"
                    controls
                    width={"100%"}
                    height={"850px"}
                />
            </div>

            {/* <!-- Button back to dashboard --> */}
            <div className="absolute z-20 top-5 left-5">
                <Link href={route("prototype.dashboard")}>
                    <img
                        src="/icons/ic_arrow-left.svg"
                        className="transition-all btn-back w-[46px]"
                        alt="stream"
                    />
                </Link>
            </div>

            {/* <!-- Video Title --> */}
            <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                <span className="text-2xl font-medium text-white transition-all select-none drop-shadow-md">
                    Details Screen Part Final
                </span>
            </div>
        </section>
    );
}
