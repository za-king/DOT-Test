import CardLarge from "./CardLarge";

const OtherDesign = () => {
  return (
    <div className="min-h-screen">
      <h4 className=" text-2xl font-semibold mb-6">
        Desain Lainnya oleh Studio SAe
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4 ">
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <CardLarge />
      </div>
    </div>
  );
};

export default OtherDesign;
