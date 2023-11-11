import { useForm } from "react-hook-form";

// styling
const style = {
  formContainer: {
    display: "flex",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "500px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
  },
  errorMsg: {
    margin: "8px 0 0",
    alignSelf: "start",
    color: "#fc4c4c",
  },
};

const BasicUsage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    console.log(data);
  };

  const sgMobileRegex = /^[89]\d{7}$/;

  return (
    <div style={style.formContainer}>
      <form style={style.form} onSubmit={handleSubmit((data) => onSubmitForm(data))}>
        <div style={style.inputContainer}>
          <input
            {...register("firstName", {
              required: "First name is required",
              minLength: {
                value: 2,
                message: "Minimum length is 2",
              },
            })}
            placeholder="First Name"
          />
          {errors.firstName?.message && <p style={style.errorMsg}>{errors.firstName.message}</p>}
        </div>

        <div style={style.inputContainer}>
          <input
            {...register("lastName", {
              required: "Last name is required",
              minLength: {
                value: 2,
                message: "Minimum length is 2",
              },
            })}
            placeholder="Last Name"
          />
          {errors.lastName?.message && <p style={style.errorMsg}>{errors.lastName.message}</p>}
        </div>

        {/* for simplicity we check for SG numbers using regex */}
        <div style={style.inputContainer}>
          <input
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: sgMobileRegex,
                message: "Please enter a valid SG mobile number",
              },
            })}
            placeholder="Mobile No."
          />
          {errors.mobile?.message && <p style={style.errorMsg}>{errors.mobile.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BasicUsage;
