import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import usePersonalInfo from "../hooks/usePersonalInfo";

function DashboardForm() {
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const app = useSelector((state) => state.app);

  const { loading, updatePersonalInfo } = usePersonalInfo();

  function handleFormSubmit(e) {
    e.preventDefault();
    updatePersonalInfo(fullName,location,description);
  }

  useEffect(() => {
    setFullName(app?.userdata?.fullname);
    setLocation(app?.userdata?.location);
    setDescription(app?.userdata?.description);
  }, []);

  return (
    <form onSubmit={handleFormSubmit} className="w-full poppins">
      <div className="flex items-center justify-center flex-col md:flex-row">
        <div className="flex items-start justify-center flex-col w-full my-2">
          <p className="flex items-center justify-center">
            <i className="pi pi-briefcase"></i>
            <span className="p-1 mx-1">Full Name</span>
          </p>
          <input
            name="fullname"
            placeholder="Ex. John Doe"
            type="text"
            className="text-md form-input w-full rounded-sm"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex items-start justify-center flex-col w-full my-2 pl-0 md:pl-4">
          <p className="flex items-center justify-center">
            <i className="pi pi-map-marker"></i>
            <span className="p-1 mx-1">Location</span>
          </p>
          <input
            name="fullname"
            placeholder="Ex. Ahmedabad, India"
            className="form-input text-md w-full rounded-sm"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
      <div className="my-2 md:my-0">
        <p className="flex items-center justify-start w-full md:w-1/2">
          <i className="pi pi-align-left"></i>
          <span className="p-1 mx-1">Description</span>
        </p>
        <textarea
          placeholder="describe yourself here..."
          className="form-input rounded-sm w-full h-[100px]"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="t-dark w-full md:w-auto px-4 py-2 my-2 tracking-wider font-semibold rounded-sm active:bg-slate-800 active:text-white"
      >
        { loading ? 'Loading...' : 'Save' }
      </button>
    </form>
  );
}

export default DashboardForm;
