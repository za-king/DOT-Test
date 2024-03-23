import CardTestimoni from "./CardTestimoni";

const Testimoni = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Testimoni</h3>

      <div className="flex flex-col gap-4 ">
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
      </div>
    </div>
  );
};

export default Testimoni;
