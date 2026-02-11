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
      <div>
        <img src={logo} alt="" />
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <button>Remove</button>
        <Toggle isActive={isActive} onChange={(x) => console.log(x)} />
      </div>
    </section>
  );
};

export default ExtensionCard;
