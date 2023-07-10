import { FunctionComponent } from "react";
import giftSrc from "/src/assets/gift.svg";

interface CircleMaskIconProps {}

const CircleMaskIcon: FunctionComponent<CircleMaskIconProps> = () => {
  return (
    <div className=" rounded-full w-[7.375rem] h-[7.375rem] bottom-40 bg-white absolute  flex items-center justify-center   ">
      <div className="w-[6.375rem] h-[6.375rem] bg-[#C09D9C] rounded-full shadow-xl flex items-center justify-center second ">
        <img
          src={giftSrc}
          width="60%"
          className="third"
        />
      </div>
    </div>
  );
};

export default CircleMaskIcon;
