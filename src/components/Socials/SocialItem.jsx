function SocialItem({
    data
}){ 
    return (
        <div className="flex items-center justify-start p-2 mb-4 border-2 bg-gray-100 rounded-sm ">
            <p className="flex items-center justify-center px-2"><i className="pi pi-list"></i></p>
            <div className="pl-4 flex-1">
                <div className=" flex items-center justify-start">
                    <p className="text-xl flex items-center justify-center"><i className={`pi pi-${data.iconImage}`}></i></p>
                    <p className="flex-1 px-2">{data.platform}</p>
                    <button className="border-2 border-transparent bg-indigo-500 text-white rounded-sm p-2 flex items-center justify-center hover:border-indigo-500 hover:bg-white hover:text-indigo-500">
                        <i className="pi pi-pencil text-xs"></i>
                    </button>
                    <button className="ml-2 border-2 border-transparent bg-red-500 text-white rounded-sm p-2 flex items-center justify-center hover:border-red-500 hover:bg-white hover:text-red-500">
                        <i className="pi pi-times text-xs"></i>
                    </button>
                </div>
                <div className="mt-2">
                    <p>
                        <span className="bg-gray-600 text-white inline-flex items-center justify-center p-1.5 rounded-sm"><i className="pi pi-clone text-xs"></i></span>
                        <a href={data.link} className="text-blue-600 pl-2" target="_blank">{data.link} </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SocialItem;