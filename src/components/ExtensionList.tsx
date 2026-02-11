/**
 *
 * Extensions List Components for all extensions
 */

import { useEffect, useState } from "react";
import type { TExtensionCardProp } from "./ExtensionCard";
import ExtensionCard from "./ExtensionCard";

type TIsActive = "all" | "active" | "inactive";

const JSON_URL = "/data.json";

const ExtensionList = () => {
  const [isActive, setIsActive] = useState<TIsActive>("all");
  const [extensionData, setExtensionData] = useState<
    TExtensionCardProp[] | null
  >(null);

  // Fetch data from json file on component mount

  useEffect(() => {
    fetchFromJSONFile();
  }, []);

  const fetchFromJSONFile = async () => {
    try {
      const res = await fetch(JSON_URL);
      if (!res.ok) {
        throw new Error("Unable to read file");
      }
      const data = await res.json();
      console.log(data);
      setExtensionData(data);
    } catch (error) {
      alert("Unable to load Extension data");
    }
  };

  return (
    <div className="w-full max-w-250 mx-auto mt-6  ">
      <section className="flex items-center justify-between w-full text-white">
        <h1 className=" text-2xl font-bold">Extensions List</h1>
        <div className="flex gap-6">
          <button
            className={`p-2 ${isActive === "all" ? "bg-secondary-400 text-primary-900" : "bg-primary-700 text-amber-50"} border-0 rounded-2xl px-5 text-sm hover:opacity-70 transition duration-500 ease-in-out`}
            onClick={() => setIsActive("all")}
          >
            All
          </button>
          <button
            className={`p-2 ${isActive === "active" ? "bg-secondary-400 text-primary-900" : "bg-primary-700 text-amber-50"} border-0 rounded-2xl px-5 text-sm hover:opacity-70 transition duration-500 ease-in-out`}
            onClick={() => setIsActive("active")}
          >
            Active
          </button>
          <button
            className={`p-2 ${isActive === "inactive" ? "bg-secondary-400 text-primary-900" : "bg-primary-700 text-amber-50"} border-0 rounded-2xl px-5 text-sm hover:opacity-70 transition duration-500 ease-in-out`}
            onClick={() => setIsActive("inactive")}
          >
            Inactive
          </button>
        </div>
      </section>
      {/* Render List in a grid Container */}
      <section className=" pt-6 grid grid-cols-3 gap-3 ">
        {extensionData?.map((data, idx) => (
          <ExtensionCard
            key={idx}
            logo={data.logo}
            name={data.name}
            description={data.description}
            isActive={data.isActive}
          />
        ))}
      </section>
    </div>
  );
};

export default ExtensionList;
