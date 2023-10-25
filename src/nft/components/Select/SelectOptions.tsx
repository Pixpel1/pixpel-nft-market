import React from "react";
import { Select } from "antd";

interface SelectionOptions {
    defaultSelectedValue: string;
    handleChange: (value: string) => void;
    removeIconCheck?: boolean;
    classNames?: string;
    popupClassNames?: string;
    optionsData: OptionsData[];
}

interface OptionsData {
    value: string;
    label: string;
}

const SelectOptions = ({
    defaultSelectedValue,
    handleChange,
    removeIconCheck,
    classNames,
    popupClassNames,
    optionsData,
}: SelectionOptions) => {
    return (
        <Select
            defaultValue={defaultSelectedValue}
            onChange={handleChange}
            removeIcon={removeIconCheck ? removeIconCheck : ""}
            className={classNames ? classNames : "global_select inline_orderdate custom_dropdown_class"}
            popupClassName={popupClassNames ? popupClassNames : "global_select_popup custom_dropdown_popup"}
            options={optionsData.map((optionsValue: OptionsData) => optionsValue)}
        />
    );
};

export default SelectOptions;
