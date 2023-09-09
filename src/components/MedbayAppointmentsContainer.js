import { useMemo } from "react";

const MedbayAppointmentsContainer = ({
  calendarWithChecklistDate,
  appointments,
  prop,
  arrowUp,
  prop1,
  propBackgroundColor,
  propHeight,
  propWidth,
  propWidth1,
  propColor,
}) => {
  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const calendarWithChecklistDateSIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const divStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="rounded-3xl bg-whitesmoke-100 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] w-[278px] flex flex-col py-3 px-4 box-border items-start justify-start gap-[12px] text-left text-lg text-gray-300 font-manrope">
      <div className="flex flex-row items-center justify-start gap-[12px]">
        <div className="w-16 h-16 flex flex-col items-center justify-end">
          <div
            className="relative rounded-[50%] bg-lavender w-16 h-16"
            style={ellipseDivStyle}
          />
          <img
            className="relative w-[37.78px] h-10 object-cover mt-[-52px]"
            alt=""
            src={calendarWithChecklistDate}
            style={calendarWithChecklistDateSIconStyle}
          />
        </div>
        <div className="relative leading-[140%] font-medium">
          {appointments}
        </div>
      </div>
      <div
        className="w-[227.93px] h-[45px] flex flex-row items-start justify-start gap-[12px] text-13xl"
        style={frameDivStyle}
      >
        <div className="relative leading-[140%] font-medium">{prop}</div>
        <div className="flex flex-row items-center justify-start gap-[6px] w-10 mt-5 text-sm text-mediumseagreen">
          <div className="flex flex-row items-center justify-start">
            <img
              className="relative w-[17.93px] h-[17.93px]"
              alt=""
              src={arrowUp}
            />
            <div
              className="relative leading-[140%] font-medium"
              style={divStyle}
            >
              {prop1}
            </div>
          </div>
          <div className="relative text-xs leading-[140%] text-gray-100">
            from last week
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedbayAppointmentsContainer;
