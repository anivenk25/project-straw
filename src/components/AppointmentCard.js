import { useMemo } from "react";

const AppointmentCard = ({
  ellipse306,
  rachelGreene,
  videoConsultancy,
  propBackgroundColor,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="rounded-xl bg-gray-600 w-[418px] overflow-hidden flex flex-col items-center justify-center text-left text-base text-white font-manrope">
      <div className="rounded w-[418px] flex flex-row py-3 pr-3 pl-5 box-border items-center justify-between relative">
        <div className="flex flex-row items-center justify-start gap-[12px] z-[0]">
          <img
            className="relative rounded-[50%] w-[52px] h-[52px] object-cover"
            alt=""
            src={ellipse306}
          />
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <b className="relative leading-[140%]">{rachelGreene}</b>
            <div className="relative text-xs leading-[140%] text-gray-100">
              {videoConsultancy}
            </div>
          </div>
        </div>
        <div className="relative rounded-[50%] bg-dimgray w-6 h-6 z-[1]" />
        <div
          className="absolute my-0 mx-[!important] top-[0px] left-[0px] rounded-tl-81xl rounded-tr-none rounded-br-none rounded-bl-xl bg-navajowhite w-2 h-[76px] z-[2]"
          style={rectangleDivStyle}
        />
      </div>
    </div>
  );
};

export default AppointmentCard;
