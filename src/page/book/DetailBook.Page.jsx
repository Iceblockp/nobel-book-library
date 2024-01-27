import React from "react";
import { GetBookData } from "../../service/book.service";
import useFetch from "../../hook/useFetch";
import { useParams, useNavigate } from "react-router-dom";

const DetailBookPage = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const { data, error, loading } = useFetch(GetBookData, `book/${id}`);
  const handleBack = () => {
    nav(-1);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <div className=" pb-5 ">
              <button
                onClick={handleBack}
                className=" mb-10 bg-gradient-to-r from-sky-600 to-blue-600 animate-pulse shadow-blue-200 hover:shadow-[0px_0px_10px_0px] px-2 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white "
                >
                  <path
                    fillRule="evenodd"
                    d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className=" px-5 max-w-[400px] flex flex-col items-center justify-center mx-auto py-6 ">
                <h1 className=" text-2xl text-center font-bold ">
                  {data.book}
                </h1>
                <h2 className=" px-10 text-sm text-gray-500 text-right ">
                  Author: {data.author}
                </h2>
              </div>
              <div className=" grid grid-cols-2 h-full ">
                <div className=" pb-5 flex justify-center  ">
                  <img
                    className="  border-4 border-gray-600 "
                    src={data.image}
                    alt="something.jpg"
                  />
                </div>

                <div className=" py-4 flex flex-col h-full">
                  <div>
                    <p className=" px-10 ">{data.description}</p>
                  </div>
                  <hr className="mb-3" />

                  <div className=" w-full flex justify-end mb-5 mt-auto ">
                    <button className=" text-white bg-blue-600 px-4 py-2 rounded-lg">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
