import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// function valuetext(value: string) {
//     return `${value} days`;
// }

interface DateSlider {
    initialValue: number;
}

const DateSlider = ({ initialValue }: DateSlider) => {
    return (
        <Box>
            <Slider
                aria-label="Staking Days"
                defaultValue={initialValue || 30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={120}
            />
        </Box>
    );
};

export default DateSlider;
