import { ToastTypes, useToast } from "@lib";

const SuccessDemo = () => {
  const { addToast } = useToast();

  const handleClick = () => {
    addToast({
      title: "Success",
      type: ToastTypes.Success,
      description: "Added toast successfully.",
    });
  };

  return (
    <div className="demo-card">
      <h2>Success Toast</h2>
      <p>Use when an action completes as expected.</p>
      <button data-type="Success" onClick={handleClick}>
        Trigger Success
      </button>
    </div>
  );
};

export default SuccessDemo;
