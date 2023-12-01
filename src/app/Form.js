"use client"
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
        reset();
        window.location.reload();
        console.log('Email sent successfully');
        
      } else {
        
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-[#fff] text-base flex">
        <div>
          <input
            {...register("name", { required: "This field is required" })}
            type="text"
            placeholder="Name"
            className="bg-current"
            style={{
              width: "90%",
              paddingBottom: "50px",
              borderBottom: "solid 2px",
              marginRight: "20px",
              backgroundColor: "rgba(255,255,255,0)",
            }}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <input
            {...register("email", { required: "This field is required" })}
            type="email"
            placeholder="E-mail"
            style={{
              width: "90%",
              paddingBottom: "50px",
              borderBottom: "solid 2px",
              backgroundColor: "rgba(255,255,255,0)",
            }}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
      </div>
      <div className="mt-10">
        <div>
          <textarea
            {...register("message", { required: "This field is required" })}
            placeholder="Tell us about the project"
            className="text-[#fff] w-full h-1/2"
            style={{
              width: "90%",
              paddingBottom: "50px",
              borderBottom: "solid 2px",
              backgroundColor: "rgba(255,255,255,0)",
            }}
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>
      </div>
      <button
        type="submit"
        className="text-[#fff] bg-[#000]"
        style={{ padding: "10px 25px", marginTop: "20px", color: "#fff" }}
      >
        Submit
      </button>
    </form>
  );
};

Form.displayName = "Form";

export default Form;



