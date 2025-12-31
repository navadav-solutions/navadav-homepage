const MainTitle = () => {
  return (
    <h1 className="text-[32px] lg:text-[72px] font-[700] mb-10">
      <span className="text-gray-800 leading-[1.3]">
        Tecnología en evolución <br className="hidden lg:block" />
        para tu{" "}
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
          negocio
        </span>{" "}
      </span>
      <div className="inline-flex flex-col items-center justify-center">
        <p className="text-[18px] lg:text-[24px] font-[700] text-gray-500 w-[80%] m-[0px]">
          Diseñamos y mejoramos sistemas empresariales para aumentar
          productividad y sostener tu crecimiento.
        </p>
      </div>
    </h1>
  );
};

export default MainTitle;
