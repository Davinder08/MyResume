import {
  HiDeviceMobile,
  HiLocationMarker,
  HiOutlineAtSymbol,
  HiBookOpen,
  HiOutlineGlobeAlt,
} from "react-icons/hi";

import type { DetailsInterface } from "../data/resume";

type InfoType = { type: string; text: string };

const InfoCard = (item: InfoType, index: number, arr: InfoType[]) => {
  return (
    <div key={index} className="info-card">
      <div className=" mx-1">{getIconByType(item.type)}</div>
      <div
        className={`info-text ${index < arr.length - 1 && "info-text-border"}`}
      >
        <span className="text-s max-sm:text-xs">{item.text}</span>
      </div>
    </div>
  );
};

const getIconByType = (type: string) => {
  switch (type) {
    case "phone":
      return <HiDeviceMobile size={25} />;
    case "email":
      return <HiOutlineAtSymbol size={25} />;
    case "address":
      return <HiLocationMarker size={25} />;
    case "website":
      return <HiBookOpen size={25} />;
    default:
      return <HiOutlineGlobeAlt size={25} />;
  }
};

const PersonalDetails = ({ details }: { details: DetailsInterface }) => {
  return (
    <div className="flex w-full mt-10 items-center flex-row max-lg:flex-col">
      <div className="flex flex-row">
        <div className="h-45 w-6 -ml-15 bg-black max-lg:-ml-10" />
        <div className="ml-15 flex-5 flex flex-col justify-center items-start">
          <h1 className="text-6xl font-bold mb-2 tracking-widest">
            {details.fName} {details.lName}
          </h1>
          <p className="text-lg text-gray-700 font-oswald font-medium tracking-widest">
            {details.title} <br />
            <span className="font-black tracking-widest">
              ({details.specialization})
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center ml-10 max-lg:mt-4 max-lg:ml-0">
        {details.data.map(InfoCard)}
      </div>
    </div>
  );
};

export default PersonalDetails;
