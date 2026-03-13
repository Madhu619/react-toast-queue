import { ToastTypes, useToast } from "@lib";

const FailureDemo = () => {
  const { addToast } = useToast();

  const handleClick = () => {
    addToast({
      title: "Failure",
      type: ToastTypes.Failure,
      description: "Something went wrong. Please try again.",
    });
  };

  return (
    <div className="demo-card">
      <h2>Failure Toast</h2>
      <p>Use when an operation fails or is blocked.</p>
      <button data-type="Failure" onClick={handleClick}>
        Trigger Failure
      </button>
    </div>
  );
};

export default FailureDemo;
