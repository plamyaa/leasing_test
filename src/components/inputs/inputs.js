import React from "react";
import InputSlider from "./inputSlider";
import InputSliderPercent from "./inputSliderPercent";


const Inputs = ({ price, setPrice, initial, setInitial, months, setMonths, loading }) => {
    return (
        <div className="inputs">
            <div>
                <p className='default-text'>Стоимость автомобиля</p>
                <InputSlider
                    disabled={loading}
                    min={1000000}
                    max={6000000}
                    step={10000}
                    sign={"₽"}
                    value={price}
                    setValue={setPrice}
                />
            </div>
            <div>
                <p className='default-text'>Первоначальный взнос</p>
                <InputSliderPercent
                    disabled={loading}
                    min={10}
                    max={60}
                    step={1}
                    sign={"₽"}
                    value={initial}
                    setValue={setInitial}
                    secondValue={price}
                />
            </div>
            <div>
                <p className='default-text'>Срок лизинга</p>
                <InputSlider
                    disabled={loading}
                    min={1}
                    max={60}
                    step={1}
                    sign={"мес."}
                    value={months}
                    setValue={setMonths}
                />
            </div>
        </div>
    );
}

export default Inputs;