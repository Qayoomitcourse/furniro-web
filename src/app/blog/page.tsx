import Blogs from "@/components/blogs";
import Features from "@/components/Features";
import Tophead from "@/components/Tophead";


export default function BlogPage() {
  return (
    <>
      {/* top head */}
      <Tophead pageName="Blog" />

      {/* Blog */}

      <Blogs />
      {/* Pagination Section */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 my-8 px-4">
        <button className="px-4 py-2 text-center bg-[#B88E2F] text-white font-semibold rounded-md hover:bg-[#9a7825] hover:shadow-lg transition-all duration-300">
          1
        </button>
        <button className="px-4 py-2 text-center bg-[#F9F1E7] text-gray-700 font-semibold rounded-md hover:bg-[#e0d4be] hover:text-gray-900 transition-all duration-300">
          2
        </button>
        <button className="px-4 py-2 text-center bg-[#F9F1E7] text-gray-700 font-semibold rounded-md hover:bg-[#e0d4be] hover:text-gray-900 transition-all duration-300">
          3
        </button>
        <button className="px-4 py-2 bg-[#F9F1E7] text-gray-700 rounded-md font-semibold hover:bg-[#e0d4be] hover:text-gray-900 transition-all duration-300">
          Next
        </button>
      </div>
      <Features/>
    </>
  );
}
