import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";
import GoogleLogo from "../img/google-logo.png";
import NSWBg from "../img/NSW-Government-bg.svg";
import Spinner from "../components/Spinner";
import { useAuth } from "../AuthContext";

export default function Signin() {
  const { isLoading, signIn, signInWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,

    formState: { errors: formDataErrors },
  } = useForm();
  const onSubmit = async (formData) => {
    signIn(formData);
  };

  return (
    <div className="w-full h-screen md:bg-[#FBE9E9] md:flex md:items-center md:justify-center ">
      <div className="w-full md:w-[50%] lg:w-[60%] lg:flex md:rounded-xl bg-white justify-center px-6 md:px-10 py-8">
        <div className="lg:basis-1/2">
          <div className="w-2/3 mx-auto">
            <img src={logo} alt="" className="mb-8" />
          </div>
          <p className="text-lg text-[#6d6d6d] mt-20 md:mt-16 mb-4">
            Log in to your account
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 basis-1/3 mx-auto"
          >
            <div>
              <input
                className={`w-full rounded-md outline-0 border border-[#CCCCCC] p-2.5 placeholder:text-sm ${
                  formDataErrors.email && "border-nswRed"
                }`}
                id="email"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {formDataErrors.email && (
                <p className="text-[11px] text-nswRed">
                  {formDataErrors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                className={`w-full rounded-md outline-0 border border-[#CCCCCC] p-2.5 placeholder:text-sm ${
                  formDataErrors.password && "border-nswRed"
                }`}
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
                      "Password must contain one uppercase letter, one number, and one symbol",
                  },
                })}
              />

              {formDataErrors.password && (
                <p className="text-[11px] text-nswRed">
                  {formDataErrors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center mx-auto mt-1  bg-nswRed text-white px-4 py-2 rounded-md transition-all hover:bg-[#bd2b35]"
            >
              {!isLoading ? "Log in" : <Spinner />}
            </button>
          </form>
          <p className="text-[11px] text-[#3c3d3d] mt-2">
            By registering, you agree to our 
            <span className="underline">Terms of Use</span> & 
            <span className="underline">Privacy Policy</span>
          </p>
          <div className="w-full flex items-center gap-5 justify-between my-8 px-16">
            <div className="border flex-1"></div>
            <p className="text-[11px] text-[#6d6d6d]">Or</p>
            <div className="border flex-1"></div>
          </div>
          <button
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-1 rounded-md border text-[#6d6d6d] cursor-pointer p-2.5  transition-all hover:bg-[#bd2b35] hover:text-white"
          >
            <img src={GoogleLogo} className="w-6" />
            <p className="text-sm"> Sign in with Google</p>
          </button>

          <p className="text-[15px] mt-20 md:mt-10 text-[#6d6d6d] text-center">
            No account?{" "}
            <span className="text-nswRed">
              <Link to="/">Create one!</Link>
            </span>
          </p>
        </div>
        <div className="hidden lg:block basis-1/2 relative">
          <img src={NSWBg} className="w-80 absolute -bottom-5 -right-10" />
        </div>
      </div>
    </div>
  );
}
