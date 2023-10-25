import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
    if (!value) {
        return "Staking Days";
    } else {
        return `${value} days`;
    }
}
interface DateSlider {
    initialValue: number;
}
const DateSlider = ({ initialValue }: DateSlider) => {
    return (
        <Box>
            <Slider
                defaultValue={30}
                aria-label={valuetext(initialValue)}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={120}
            />
        </Box>
    );
};
DateSlider.defaultProps = {
    initialValue: 0,
};
export default DateSlider;
