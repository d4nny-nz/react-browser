type TToggleProps = {
  isActive: boolean;
  onChange: (isActive: boolean) => void;
};

const Toggle = ({ isActive, onChange }: TToggleProps) => {
  return (
    <button
      onClick={() => onChange(!isActive)}
      className={`relative w-12 h-7 rounded-full transition-colors ${
        isActive ? "bg-secondary-500" : "bg-neutral-300"
      }`}
    >
      <div
        className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
          isActive ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
};

export default Toggle;
