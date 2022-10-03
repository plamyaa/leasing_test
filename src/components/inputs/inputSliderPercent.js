import React, {useRef} from "react";
import { formatNumber } from "../utils";

const InputSliderPercent = ({ disabled, min, max, step, sign, value, setValue, secondValue }) => {
    const ref = useRef();
    const handleOnChange = (event) => {
        const newValue = event.target.value;
        if (newValue.length > 2)
            return;
        const spacedValue = newValue.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'); // only numbers
        setValue(spacedValue.replaceAll(" ", ""));
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (Number(value) < min)
            setValue(String(min));
        if (Number(value) > max)
            setValue(String(max));
    }

    return (
        <div
            className="input-slider"
            style={disabled
                ? { pointerEvents: "none", opacity: "0.5" }
                : {}
            }
        > 
            <form
                className="input-number"
                onSubmit={handleOnSubmit}
            >
                <div
                    className="input-number__result"
                    onClick={() => ref.current.focus()}
                >
                    {formatNumber(secondValue * value / 100)}
                    <span className="sign">{sign}</span>
                </div>
                <input
                    ref={ref}
                    className="input-number__percent"
                    type="text"
                    min={min}
                    max={max}
                    value={value}
                    onBlur={handleOnSubmit}
                    onChange={handleOnChange}
                />
                <span className="span-percent">%</span>
            </form>
            <div className="input-range">
                <input
                    className="input-range__slider"
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleOnChange}
                    disabled={disabled}
                    style={{
                        background: `linear-gradient(to right, #FF9514 0%, #FF9514 ${(value - min) / (max - min) * 100}%, #E1E1E1 ${(value - min) / (max - min) * 100}%, #E1E1E1 100%)`
                    }}
                />
            </div>

        </div>
    );
}

export default InputSliderPercent;