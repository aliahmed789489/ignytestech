import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Email sent successfully');
      } else {
        // Handle failure (e.g., show an error message)
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ... your form inputs and buttons ... */}
    </form>
  );
};

Form.displayName = "Form";

export default Form;
