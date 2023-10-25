import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const InputDatePicker = () => {
    return (
        <DatePicker
            defaultValue={dayjs("18/03/2023", "DD/MM/YY")}
            format={"DD/MM/YY"}
            className="bg-app-black-modal border-app-black shadow-none text-white InputDatePicker"
            popupClassName="InputDatePickerPopup"
            suffixIcon
            allowClear={false}
            style={{
                color: "white",
            }}
        />
    );
};

export default InputDatePicker;
