const Charts = () => {
  return (
    <div className="w-full">
      <div className="w-10/12 m-auto mt-16 p-4" id="charts">
        <h1 className="tracking-widest text-6xl text-primary font-semibold mb-4 inline-block">
          CHARTS
        </h1>
        <div className="flex bg-primary px-16 py-4 text-white font-medium justify-around">
          <div>
            <h2 className="text-3xl tracking-widest">THIS WEEK</h2>
          </div>
          <div>
            <h2 className="text-3xl tracking-widest">NEW ARTISTS</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
