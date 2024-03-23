import CardSmall from "./CardSmall";

const HouseView = ({ dataHouseView }: any) => {
  return (
    <div>
      <h3 className="font-semibold text-2xl mb-6">Tampilan Rumah</h3>
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-0 ">
        {dataHouseView.map((item: any, index: number) => {
          return (
            <>
              <CardSmall items={item} key={index} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HouseView;
