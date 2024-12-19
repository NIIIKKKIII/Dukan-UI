export function OV() {
  return (
    <div className="h-16 ml-40 flex bg-BGG justify-between" style={{marginBottom:"10px"}}>
      <div className="mt-5 ml-6 font-medium">Overview</div>
      <div
        className="border-Thin border-solid border-red rounded px-3 py-1 flex items-center justify-center w-28 h-7"
        style={{ marginTop: "17px", marginRight: "15px" }}
      >
        <div className="text-xss font-normal flex text-nowrap">
          This Month{" "}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mt-1 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
