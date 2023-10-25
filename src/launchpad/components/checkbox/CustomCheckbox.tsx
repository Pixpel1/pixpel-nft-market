import React from "react";
import { Checkbox } from "antd";

interface CustomCheckbox {
    classes: string;
    labelTitle: string;
    name: string;
}

const CustomCheckbox = (props: CustomCheckbox) => {
    return (
        <div className={props.classes}>
            <Checkbox className="text-white leading-normal" name={props.name}>
                {props.labelTitle}
            </Checkbox>
        </div>
    );
};

CustomCheckbox.defaultProps = {
    name: "",
    labelTitle: "Remember me",
    classes: "customCheckbox",
};

export default CustomCheckbox;
