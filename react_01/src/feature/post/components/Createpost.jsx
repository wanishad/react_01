import {  useState } from "react";
import {FaPodcast} from "react-icons/fa"
import { useCreatePostMutation } from "../../../services/api";
const CreatePost = () => {
 const [CreatePost, {isLoading, isError}] = useCreatePostMutation()
  const [formData, setFormData] = useState({
    title: String,
    description: String,
    image: null,
    imagePreview: null
  });
  const handleChange = (e) => {
    if (e.target.name === "image") {
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
const handleSubmit = (e) => { 
 e.preventDefault()
 const FormDataToSend = new FormData();
 FormDataToSend.append("title", formData.title);
 FormDataToSend.append("description", formData.description);
 FormDataToSend.append("image", formData.image);
 try{
  const response = CreatePost(FormDataToSend).unwrap()
  console.log(response)
 }catch(err){
    console.log(err)
 }
 }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col space-y-4 justify-center items-center min-h-screen bg-gradient-to-r from-purple-300 to-purple-500"
      >
        
        <div className="w-full max-w-md px-8 py-12 bg-white rounded-lg shadow-xl">
        <div>
            <p className="text-purple-700 text-center text-2xl">create post</p>
          </div>
          <div className="relative bottom-16  ">
              <label htmlFor="image" className="cursor-pointer">
                {formData.imagePreview ? (
                  <img
                    src={formData.imagePreview}
                    alt="Profile"
                    className="w-80 h-80 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-80 h-80 bg-gray-300 flex items-center justify-center">
                    <FaPodcast className="w-60 h-60 text-gray-100" />
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
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              value={formData.title}
              onChange={handleChange}
              name="title"
              id="floating_title"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              required
            />
            
            <label
              htmlFor="floating_title"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              title address
            </label>
          </div>
                    <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              value={formData.description}
              onChange={handleChange}
              name="description"
              id="floating_description"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              />
            <label
              htmlFor="floating_description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-700 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              description
            </label>
            
          </div>
          <button
            type="submit"
            className="btn-primary"
          >
            Create post
          </button>
        </div>
      </form>
    </>
  );
};

export default CreatePost;
