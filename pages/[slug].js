import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router);
  return (
    <div className="max-h-[100vh] flex justify-center items-center">
      <div className="max-w-7xl flex justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 mt-6 h-[90vh]">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div x-data="{ image: 1 }" x-cloak>
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <div
                  x-show="image === 1"
                  className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                >
                  <span className="text-5xl">1</span>
                </div>
              </div>

              <div className="flex -mx-2 mb-4"></div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
            </h2>

            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="text-indigo-400 mr-1 mt-1">$</span>
                  <span className="font-bold text-indigo-600 text-3xl">25</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
              </div>
            </div>

            <p className="text-gray-500">
              Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
              exercitationem porro saepe ea harum corrupti vero id laudantium
              enim, libero blanditiis expedita cupiditate a est.
            </p>

            <div className="flex py-4 space-x-4">
              <button
                type="button"
                className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
