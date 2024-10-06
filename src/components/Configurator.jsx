import { useState } from "react";
import { useCustomization } from "../context/Customization";
{
  /* <div className="configurator_section_values">
                <div className={`item ${material === "orange" ? "item--active" : ""}`} onClick={() => setMaterial('orange')}> 
                    <div className="item_label">
                        Orange
                    </div>
                </div>
                <div className={`item ${material === "white" ? "item--active" : ""}`} onClick={() => setMaterial('white')}> 
                    <div className="item_label">
                        White
                    </div>
                </div>
                <div className={`item ${material === "whiteblack" ? "item--active" : ""}`} onClick={() => setMaterial('whiteblack')}> 
                    <div className="item_label">
                        White and Black
                    </div>
                </div>
                <div className={`item ${material === "grey" ? "item--active" : ""}`} onClick={() => setMaterial('grey')}> 
                    <div className="item_label">
                        Grey
                    </div>
                </div>
                <div className={`item ${material === "red" ? "item--active" : ""}`} onClick={() => setMaterial('red')}> 
                    <div className="item_label">
                        Red
                    </div>
                </div>

            </div> */
}
const Configurator = ({goNext}) => {
  const { material, setMaterial } = useCustomization();
  console.log("material", material);

  return (
    <div className="flex justify-center items-center flex-col w-full h-full gap-y-20">

      <div className="flex flex-col gap-y-3 w-[50%]">
        <div className="text-black text-6xl font-bold">JOIN WHOOP</div>
        <div className="text-2xl">
          Join WHOOP and get the WHOOP 4.0 free with your membership.
        </div>
      </div>

      <div >
        <span className="text-3xl font-bold">CHOOSE A WHOOP 4.0 BAND</span>

        <div className=" w-[100%] flex gap-2 flex-wrap mt-6">
          <div
            className="h-11 text-center w-11 rounded-full bg-orange-500 cursor-pointer flex justify-center items-center"
            onClick={() => setMaterial("orange")}
          >
            {"orange" === material && (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </span>
            )}
          </div>
          <div
            className="h-11 w-11 rounded-full bg-white cursor-pointer flex justify-center items-center"
            onClick={() => setMaterial("white")}
          >
            {"white" === material && (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </span>
            )}
          </div>
          <div
            className="h-11 w-11 rounded-full bg-black cursor-pointer flex justify-center items-center"
            onClick={() => setMaterial("whiteblack")}
          >
            {"whiteblack" === material && (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </span>
            )}
          </div>
          <div
            className="h-11 w-11 rounded-full bg-gray-500 cursor-pointer flex justify-center items-center"
            onClick={() => setMaterial("grey")}
          >
            {"grey" === material && (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </span>
            )}
          </div>
          <div
            className="h-11 w-11 rounded-full bg-red-500 cursor-pointer flex justify-center items-center"
            onClick={() => setMaterial("red")}
          >
            {"red" === material && (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>


      {/* buttons  */}
      <div className="flex gap-x-8">
        <span className="py-2 px-16 bg-[#ff0026] text-xl text-white cursor-pointer" onClick={goNext}>CONTINUE</span>
        <span className="py-2 px-16  border-2 border-black font-bold cursor-pointer text-xl">BUY AS GIFT</span>
      </div>
    </div>
  );
};

export default Configurator;
