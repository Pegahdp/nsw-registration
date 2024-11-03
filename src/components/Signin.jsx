import { useForm } from "react-hook-form";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formDataErrors, isLoading },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      console.log(data);
      navigate("/homepage");

      reset();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-full flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 basis-1/3 mx-auto my-14"
      >
        <div>
          <input
            className="w-full rounded-full border border-gray-500 p-3"
            id="email"
            type="email"
            placeholder="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
        </div>

        <div>
          <input
            className="w-full rounded-full border border-gray-500 p-3"
            id="password"
            type="password"
            placeholder="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                message:
                  "Password must contain at least one uppercase letter, one number, and one symbol",
              },
            })}
          />

          {formDataErrors.password && <p>{formDataErrors.password.message}</p>}
        </div>

        <div className="flex">
          <button
            type="submit"
            className="mx-auto basis-1/2 bg-nswRed text-white px-4 py-2 rounded-md"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
