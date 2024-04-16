
const Skeleton = () => (
  <div className="max-w-[60vw] mx-auto my-6 bg-white shadow-md rounded-md overflow-hidden animate-pulse">
    {/* Creator Info Skeleton */}
    <div className="flex items-center px-4 py-2 border-b border-gray-200">
      <div className="avatar mr-4">
        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
      </div>
      <div className="w-20 h-4 bg-gray-300"></div>
    </div>

    {/* Post Image Skeleton */}
    <div className="relative">
      <div className="w-full h-80 bg-gray-300"></div>
    </div>

    {/* Description Skeleton */}
    <div className="px-4 py-2">
      <div className="h-4 w-4/5 bg-gray-300 mb-2"></div>
      <div className="h-4 w-full bg-gray-300"></div>
    </div>

    {/* Action Buttons and Counts Skeleton */}
    <div className="flex justify-between px-4 py-2">
      <div className="flex items-center space-x-4">
        <div className="h-6 w-6 bg-gray-300"></div>
        <div className="h-6 w-6 bg-gray-300"></div>
      </div>
      <div className="h-6 w-6 bg-gray-300"></div>
    </div>
  </div>
);
export default Skeleton