import React, { useState } from "react";
import InputField from "./InputField";
import { FaUserCircle } from "react-icons/fa";
import { PiUserSquareFill } from "react-icons/pi";
import { useSignupUserMutation } from "../../../services/api";
import { toast } from "react-toastify";
import { json } from "react-router-dom";

const Signup = () => {
  const [SignupUser, { isLoading, isError }] = useSignupUserMutation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: String,
    username: String,
    password: String,
    phone: Number,
    bio: String,
    coverimage: null,
    coverimagePreview: null,
    image: null,
    imagePreview: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "coverimage" || e.target.name === "image") {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        [e.target.name]: file,
        [`${e.target.name}Preview`]: URL.createObjectURL(file),
      });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const FormDataToSend = new FormData();
    FormDataToSend.append("username", formData.username);
    FormDataToSend.append("email", formData.email);
    FormDataToSend.append("password", formData.password);
    FormDataToSend.append("coverimage", formData.coverimage);
    FormDataToSend.append("image", formData.image);
    FormDataToSend.append("bio", formData.bio);
    FormDataToSend.append("phone", formData.phone);

    try {
      const response = await SignupUser(FormDataToSend).unwrap();
      toast.success(response.data.message);
    } catch (error) {
      const jsonError = JSON.stringify(error.data);
      const Errormessage = [
        "Cannot read properties of undefined",
        "User Already exists",
        
      ];
      if (jsonError.includes(Errormessage[0])) {
        toast.error(Errormessage[0]);
      }
      if (jsonError.includes(Errormessage[1])) {
        toast.error(Errormessage[1]);
      }

      console.log(error);
    }
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="relative mb-4">
              <label htmlFor="coverimage" className="cursor-pointer">
                {formData.coverimagePreview ? (
                  <div
                    className="w-96 h-48 bg-cover rounded-md"
                    style={{
                      backgroundImage: `url(${formData.coverimagePreview})`,
                    }}
                  />
                ) : (
                  <div className="w-96 h-48 bg-gray-300 rounded-md flex items-center justify-center">
                    <PiUserSquareFill className="w-24 h-24 text-gray-100" />
                  </div>
                )}
                <input
                  type="file"
                  id="coverimage"
                  name="coverimage"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="relative bottom-16 left-[152px] ">
              <label htmlFor="image" className="cursor-pointer">
                {formData.imagePreview ? (
                  <img
                    src={formData.imagePreview}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                    <FaUserCircle className="w-20 h-20 text-gray-100" />
                  </div>
                )}
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>
            </div>
            <InputField
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <InputField
              label="Username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <InputField
              label="Phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </>
        );
      case 3:
        return (
          <>
            <InputField
              label="Bio"
              type="text"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 justify-center items-center min-h-screen bg-gradient-to-r from-purple-300 to-purple-500"
    >
      <div className="w-full max-w-md px-8 py-12 bg-white rounded-lg shadow-xl">
        {renderFormStep()}
        <div className="flex justify-between">
          {step !== 1 && (
            <button
              type="button"
              className="btn-primary"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
          {step !== 3 ? (
            <button type="button" className="btn-primary" onClick={handleNext}>
              Next
            </button>
          ) : null}
          {step == 3 ? (
            <button type="submit" className="btn-primary">
              {isLoading ? "submiting..." : "submit"}
            </button>
          ) : null}
        </div>
      </div>
    </form>
  );
};

export default Signup;
