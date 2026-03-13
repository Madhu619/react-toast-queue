import { ToastTypes, useToast } from "@lib";

const InfoDemo = () => {
  const { addToast } = useToast();

  const handleClick = () => {
    addToast({
      title: "Info",
      type: ToastTypes.Info,
      description: "Here is a quick update for you.",
    });
  };

  return (
    <div className="demo-card">
      <h2>Info Toast</h2>
      <p>Use for lightweight notifications or updates.</p>
      <button data-type="Info" onClick={handleClick}>
        Trigger Info
      </button>
    </div>
  );
};

export default InfoDemo;
