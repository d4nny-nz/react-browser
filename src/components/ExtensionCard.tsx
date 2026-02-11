import Toggle from "./Toggle";

export type TExtensionCardProp = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

const ExtensionCard = ({
  logo,
  name,
  description,
  isActive,
}: TExtensionCardProp) => {
  return (
    <section className=" bg-primary-800 border border-primary-600 rounded-2xl p-4">
      <div className="flex items-center gap-4">
        <img src={logo} alt="" className="w-10" />
        <div>
          <h3 className="  text-primary-100 font-bold">{name}</h3>
          <p className=" text-primary-300 text-xs">{description}</p>
        </div>
      </div>
      <div className=" mt-3 flex items-center justify-between">
        <button className=" border p-1 px-3 text-primary-300 text-xs border-primary-700 rounded-2xl hover:scale-90 hover:border-primary-300 hover:text-primary-200 transition duration-200 cursor-pointer ease-in-out">Remove</button>
        <div className=" scale-75">
          <Toggle isActive={isActive} onChange={(x) => console.log(x)} />
        </div>
      </div>
    </section>
  );
};

export default ExtensionCard;
