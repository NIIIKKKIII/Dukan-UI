export function Thirdcard() {
    return (
      <div className="p-3 rounded shadow-md mr-5" style={{ backgroundColor: "white" }} >
        <div className="flex">
          <div className=" mt-1 ml-2 font-light"style={{ fontSize: "13px" }}>
            Amount Processed{" "}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
           className="size-3 mt-2 ml-2 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
  
        <div className="flex justify-between ">
          <div className="font-bold mb-2 mt-2 ml-2" style={{fontSize:"24px"}}>₹ 23,92,312.19</div>
          
        </div>
      </div>
    );
  }
  