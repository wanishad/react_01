
const Loading = () => {
  return (
    <div className="flex w-screen h-screen slow  bg-gray-200 justify-center text-5xl font-mono items-center ">
      <span className="text-red-700 animate-bounce">L</span>
      <span className="text-blue-500 animate-bounce">o</span>
      <span className="text-green-500 animate-bounce">a</span>
      <span className="text-yellow-500 animate-bounce">d</span>
      <span className="text-purple-500 animate-bounce">i</span>
      <span className="text-red-600 animate-bounce">n</span>
      <span className="text-orange-500 animate-bounce">g</span>
      <span className="text-red-700 dot1 text-8xl">.</span>
      <span className="text-slate-800 dot2 text-8xl ">.</span>
      <span className="text-red-500 text-8xl dot3 ">.</span>
    </div>
  )
}

export default Loading