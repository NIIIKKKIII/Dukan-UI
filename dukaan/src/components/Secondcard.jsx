export function Secondcard() {
  return (
    <div className="p-3 rounded shadow-md" style={{ backgroundColor: "white" }}>
      <div className="flex">
        <div className=" mt-1 ml-2 font-light"style={{ fontSize: "13px" }}>
          Amount Pending
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
        <div className="font-bold mb-2 mt-2 ml-2" style={{ fontSize: "24px"}}>₹ 92,312.20</div>
        <div className="flex">
          <div className=" mb-2 mt-5 ml-6 text-BC" style={{ fontSize: "14px"}}>13 orders</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 mt-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
