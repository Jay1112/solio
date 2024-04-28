import Instagram from "../../Icons/Instagram";
import Location from "../../Icons/Location";

function StandardMobile(){
    return (
        <div className="flex md:hidden w-screen h-screen items-center justify-center flex-col bg-gradient-to-tr from-slate-900 to-slate-700">
            <div className="w-full text-white flex-1 flex items-center justify-start flex-col">
                <div className="debug flex-1 w-full rounded-br-full rounded-bl-full bg-rose-600 relative">
                    <div className="w-1/2 mx-auto rounded-full p-1 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4">
                        <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="p-4 flex items-center justify-end my-10 flex-col">
                    <h1 class="tracking-wider font-semibold mt-2 text-center text-4xl leading-none md:text-3xl lg:text-4xl text-white">Jay Patel</h1>
                    <h2 className="monster tracking-wide text-md mt-2 flex items-center justify-center">
                        <Location className="text-xl" /> Gujarat, India
                    </h2>
                    <p className="mt-4 w-full text-justify font-sans text-gray-300 text-lg">
                        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StandardMobile;