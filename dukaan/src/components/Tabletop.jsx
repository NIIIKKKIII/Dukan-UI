export function Tabletop() {
  return (
    <div className="flex justify-between p-2 mt-5">
      <div className="flex h-8 border border-gray rounded-sm w-[300px] items-center">
        <div className="px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-slate-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div>
          <input
            type="text"
            placeholder="Order ID or Transaction ID"
            className=" outline-none text-xss mb-1"
          />
        </div>
      </div>

      <div className="flex gap-x-5">
        <div className="w-[70px] h-7 border-gray border flex rounded-sm justify-center items-center">
          <div className="text-sm">Sort</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={.8}
              stroke="currentColor"
              className="size-3.5 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
          </div>
        </div>
        <div className="border border-gray content-center justify-self-center w-[40px] h-7 rounded-sm">
          <div className="px-2" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
