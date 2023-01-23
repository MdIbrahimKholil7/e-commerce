import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { ProductContext } from "../utils/ContextProvider";

const Product = () => {
  const num = [1, 2, 3, 4, 5, 6, 6, 78, 8, 9, 9, 9, 9, 9];
 
  const router = useRouter();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {num.map((d, i) => (
              <div key={i} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                    // width={400}
                    // height={400}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">$16.00</p>
                    <button
                      onClick={() => router.push("/3")}
                      className="btn btn-primary"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
