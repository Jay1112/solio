import Instagram from "../../Icons/Instagram";
import clsx from "clsx";
import Location from "../../Icons/Location";

function StandardDesktop(){
    const list = [1,1,1,1,1,1,1,1,1,1];
    return (
        <div className="hidden md:flex w-screen h-screen  justify-center items-stretch flex-row overflow-scroll">
        <div className={clsx("flex-1 bg-[#0f0f0f] text-white p-4 flex items-center flex-col overflow-scroll", list.length > 5 ? 'justify-start lg:justify-center' : 'justify-center' )}>
          <div className="border-2 border-indigo-600 p-1 rounded-full">
            <div className="w-36 rounded-full">
              <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <h1 class="mt-4 tracking-wider font-semibold text-4xl leading-none md:text-3xl lg:text-4xl text-white">Jay Patel</h1>
          <h2 className="monster tracking-wide text-md flex items-center justify-center">
            <Location className="text-xl" /> Gujarat, India
          </h2>
          <p className="mt-4 w-4/5 text-justify font-sans text-gray-300">
            Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-5 mt-4 w-4/5 gap-2">
            {list.map((item) => {
              return (
                <div className="flex items-center justify-center py-2">
                  <div className="flex rounded-md cursor-pointer hover:text-slate-800 duration-500 hover:bg-white p-2 items-center justify-center flex-col">
                    <Instagram className="text-6xl text" />
                    <p className="text-sm">Instagram</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1 overflow-scroll">
          <h2 className="text-3xl sticky top-0 bg-white poppins p-2 py-4 font-semibold tracking-wider text-center common-box-shadow">
            My Links
          </h2>
          <div className="p-4 grid grid-cols-1 gap-4">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => {
              return (
                <div className="bg-white border duration-200 p-4 hover:bg-slate-800 cursor-pointer hover:text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="text-2xl my-2 font-bold tracking-tight hover:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal my-2">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div
                    href="#"
                    className="px-4 py-2 inline-flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
}

export default StandardDesktop;