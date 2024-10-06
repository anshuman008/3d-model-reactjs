import { useState, useRef, useEffect } from "react";
import "./App.css";
import LastPage from "./components/LastPage";
import Maincomp from "./components/Maincomp";
import PricePage from "./components/PricePage";
import Footer from "./components/Footer";

const progressList = [
  {
    name: "CUSTOMIZE",
    component: <Maincomp />,
  },
  {
    name: "CHOOSE MEMBERSHIP",
    component: <PricePage />,
  },
  {
    name: "CHECKOUT",
    component: <LastPage />,
  },
];

function App() {
  const [current, setCurrent] = useState(1);
  const [openMode, setOpenModel] = useState(false);
  const [currency, setCurrency] = useState("INR");
  const modalRef = useRef(null);

  const handleClick = () => {
    if (current < progressList.length) {
      setCurrent(current + 1);
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setOpenModel(false);
    }
  };

  
  useEffect(() => {
    if (openMode) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMode]);

  return (
    <div className="">
      {/* header */}
      <div className="flex relative justify-between items-center h-20 bg-[#ffffff] fixed top-0 w-full px-10">
        <span className="text-4xl">LOGO</span>

        <div className="flex gap-x-10">
          {progressList.map((ele, index) => (
            <div
              className="flex justify-center items-center gap-y-5"
              key={index}
            >
              <span
                className="h-8 w-8 rounded-full font-bold flex justify-center items-center"
                style={{
                  color:
                    current === index + 1 || current > index + 1
                      ? "red"
                      : "gray",
                  border:
                    current === index + 1 || current > index + 1
                      ? "2px solid red"
                      : "2px solid gray",
                }}
              >
                {index + 1}
              </span>

              <span
                className="pl-3"
                style={{
                  color:
                    current === index + 1 || current > index + 1
                      ? "red"
                      : "gray",
                }}
              >
                {ele.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col" ref={modalRef}>
          <div
            className="flex gap-y-2 cursor-pointer"
            onClick={() => setOpenModel(true)}
          >
            <span>{currency}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          {openMode && (
            <div className="flex flex-col gap-y-2 bg-gray-400 absolute px-2 py-2 rounded-md">
              <span
                onClick={() => {
                  setCurrency("USD");
                  setOpenModel(false);
                }}
                className="bg-green-400  px-3 rounded-lg cursor-pointer  flex justify-between items-center"
              >
                <span>USD</span>
                {currency === "USD" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
              <span
                onClick={() => {
                  setCurrency("INR");
                  setOpenModel(false);
                }}
                className="bg-green-400  px-3 rounded-lg cursor-pointer flex justify-between items-center "
              >
                <span>INR</span>
                {currency === "INR" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </div>
          )}
        </div>
      </div>

      {current === 1 ? (
        <Maincomp goNext={handleClick} />
      ) : current === 2 ? (
        <PricePage />
      ) : (
        <LastPage />
      )}

      <Footer currency={currency} />
    </div>
  );
}

export default App;
