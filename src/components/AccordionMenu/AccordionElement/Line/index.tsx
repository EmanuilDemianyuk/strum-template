import { Description } from "src/types";

const Line = ( { name, unit, price,  comments }: Description ) => {

  return (
    <div className="grid grid-rows-1 grid-cols-3 border-collapse">
        <p className="text-base border p-2">{name}</p>
        <div className="text-center font-bold border p-2 flex justify-center items-center">
            <p>{unit}</p>
        </div>
        <div className="text-center font-bold border p-2 flex justify-center items-center">
            <p>{comments} {price}</p>
        </div>
    </div>
  )
}

export default Line;