const Loading = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500"></div>
      <span className="ml-2 text-gray-600">Image Loading...</span>
    </div>
  );
};

export default Loading;