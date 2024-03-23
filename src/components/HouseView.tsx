import CardSmall from "./CardSmall";
const HouseView = () => {
  return (
    <div>
      <h3 className="font-semibold text-2xl mb-6">Tampilan Rumah</h3>
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-0 justify-items-center">
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
      </div>
    </div>
  );
};

export default HouseView;
