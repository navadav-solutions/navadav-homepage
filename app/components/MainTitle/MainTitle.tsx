const MainTitle = () => {
  return (
    <h1 className="text-3xl lg:text-[72px] font-[700] mb-10">
      <span className="text-gray-800 leading-[1.3]">
        {/* Mobile: cada línea en bloque */}
        <span className="block lg:hidden">
          Your Custom Digital
        </span>
        <span className="block lg:hidden">
          Product,{" "}
          <span
            className="inline-block"
            style={{
              background:
                "linear-gradient(270deg, #FAC354 -5.84%, #EF2A2A 4.3%, #340551 14.64%, #2C0296 26.14%, #3155E0 40.04%, #32C3EA 56.2%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            On Subscription
          </span>
        </span>
        <p className="block lg:hidden text-[16px] font-[400] text-gray-600 lg:w-[90%] w-[100%] m-[0px]">
          We craft tailored online solutions that grow with you—no long-term commitments required.
        </p>
        {/* Desktop: todo en línea */}
        <span className="hidden lg:inline">
          Your Custom Digital <br /> Product,{" "}
          <span
            className="inline-block"
            style={{
              background:
                "linear-gradient(270deg, #FAC354 -5.84%, #EF2A2A 4.3%, #340551 14.64%, #2C0296 26.14%, #3155E0 40.04%, #32C3EA 56.2%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            On Subscription
          </span>{" "}
        </span>
      </span>
      <div className="hidden lg:inline-flex flex-col items-center justify-center">
        <p className="text-[24px] font-[700] text-gray-500 lg:w-[80%] w-[100%] m-[0px]">
          We craft tailored online solutions that grow with you—no long-term commitments required.
        </p>
      </div>
    </h1>
  );
};

export default MainTitle;

