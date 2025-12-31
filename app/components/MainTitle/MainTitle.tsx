const MainTitle = () => {
  return (
    <section className="text-center lg:text-left">
      <h1
        className="font-bold text-gray-800 leading-tight
                     text-3xl sm:text-4xl lg:text-[72px]"
      >
        Tecnología en evolución <br className="hidden lg:block" />
        para tu{" "}
        <span
          className="inline-block bg-gradient-to-r
                     from-[#FAC354] via-[#EF2A2A] to-[#32C3EA]
                     bg-clip-text text-transparent"
        >
          negocio
        </span>
      </h1>

      <p
        className="mt-6 text-gray-600
                    text-base sm:text-lg lg:text-2xl
                    max-w-xl lg:max-w-3xl mx-auto lg:mx-0"
      >
        Diseñamos y mejoramos sistemas empresariales para aumentar productividad
        y sostener tu crecimiento.
      </p>
    </section>
  );
};

export default MainTitle;
