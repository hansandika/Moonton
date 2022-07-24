import { Fragment } from "react";
import Sidebar from "@/Layouts/Authenticated/Sidebar";
import Topbar from "@/Layouts/Authenticated/Topbar";

export default function Authenticated({ children }) {
    return (
        <Fragment>
            <div clas="hidden mx-auto max-w-screen lg:block">
                {/* Start Sidebar */}
                <Sidebar />
                {/* End Sidebar */}

                {/* Start Content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* Start Top Bar */}
                        <Topbar />
                        {/* End Top Bar */}
                        <main>{children}</main>
                    </div>
                </div>
                {/* End Content */}
            </div>
            <div className="flex w-full h-screen px-4 mx-auto bg-black lg:hidden">
                <div className="my-auto text-2xl font-medium leading-snug text-center text-white">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </Fragment>
    );
}
