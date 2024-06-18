function DashboardForm(){

    function handleFormSubmit(e){
        e.preventDefault();
    }

    return (
        <form onSubmit={handleFormSubmit} className="w-full poppins">
            <div className="flex items-center justify-center flex-col md:flex-row">
                <div className="flex items-start justify-center flex-col w-full my-2">
                    <p className="flex items-center justify-center">
                        <i className="pi pi-briefcase"></i>
                        <span className="p-1 mx-1">Full Name</span>
                    </p>
                    <input name="fullname" placeholder="Ex. John Doe" className="text-md form-input w-full rounded-sm" />
                </div>
                <div className="flex items-start justify-center flex-col w-full my-2 pl-0 md:pl-4">
                    <p className="flex items-center justify-center">
                        <i className="pi pi-map-marker"></i>
                        <span className="p-1 mx-1">Location</span>
                    </p>
                    <input name="fullname" placeholder="Ex. Ahmedabad, India" className="form-input text-md w-full rounded-sm" />
                </div>
            </div>
            <div className="my-2 md:my-0">
                <p className="flex items-center justify-start w-full md:w-1/2">
                    <i className="pi pi-align-left"></i>
                    <span className="p-1 mx-1">Description</span>
                </p>
                <textarea placeholder="describe yourself here..." className="form-input rounded-sm w-full h-[100px]" />
            </div>
            <button type="submit" className="t-dark w-full md:w-auto px-4 py-2 my-2 tracking-wider font-semibold rounded-sm active:bg-slate-800 active:text-white">
                Save
            </button>
        </form>
    )
}

export default DashboardForm;