
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import reactsvg from "../../../assets/react.svg";
const PostOne = ({
  title,
  description,
  creatorimg,
  postimg,
  creatorname,
  likeCount,
  commentCount,
}) => {
  return (
    <>
  <div className="max-w-[60vw] mx-auto my-6 bg-purple-100 shadow-md rounded-md overflow-hidden">
      {/* Creator Info */}
      <div className="flex items-center px-4 py-2 border-b border-gray-200">
        <div className="avatar mr-4">
          <img className="h-10 w-10 rounded-full object-cover" src={creatorimg} alt={creatorname} loading="lazy" />
        </div>
        <p className="text-base font-semibold">{creatorname}</p>
      </div>

      {/* Post Image */}
      <div className="relative">
        <img className="w-full" src={postimg} alt="" loading="lazy" />
        {/* Overlay for video or carousel icon if needed */}
      </div>

      {/* Description */}
      <div className="px-4 py-2">
        <p className="text-sm">{description}</p>
      </div>

      {/* Action Buttons and Counts */}
      <div className="flex justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <FaHeart className="h-6 w-6" />
            <span className="text-sm font-semibold">{likeCount}</span>
          </button>
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <FaComment className="h-6 w-6" />
            <span className="text-sm font-semibold">{commentCount}</span>
          </button>
        </div>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <FaShare className="h-6 w-6" />
        </button>
      </div>
    </div>
    </>
  );
};

export default PostOne;
