import { backUrl } from "../../config/config";

const StoreCompo = ({ menu }) => {
  const imgurl = backUrl + menu.image;

  return (
    <div class="flex flex-col place-items-center  max-w-[260px] h-[400px] rounded-[80px] shadow bg-[#CEC0AC] ">
      <img class="object-scale-down " src={imgurl}></img>
      <div class="text-[#FEF5E9] text-[25px] mb-[10px]">{menu.name}</div>
      <div>{menu.description}</div>
    </div>
  );
};

export default StoreCompo;
