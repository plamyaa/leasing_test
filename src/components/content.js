import React, { useState } from "react";
import { formatNumber } from "./utils.js";
import Inputs from "./inputs/inputs.js"
import Outputs from "./outputs.js"

const Content = () => {
    const [price, setPrice] = useState("3300000");
    const [initial, setInitial] = useState("10");
    const [months, setMonths] = useState("60");
    const [loading, setLoading] = useState(false);
    const monthPay = (Number(price) - Number(initial)) * ((0.035 * Math.pow((1 + 0.035), Number(months))) / (Math.pow((1 + 0.035), Number(months)) - 1));
    const totalPay = Number(initial) + Number(months) * monthPay;

    const handleOnClick = async () => {
        try {
            setLoading(true);
            let response = await fetch("https://eoj3r7f3r4ef6v4.m.pipedream.net", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'price': price,
                    'initial': initial,
                    'months': months,
                    'monthPay': formatNumber(monthPay),
                    'totalPay': formatNumber(totalPay)
                })
            })
            await response.json();
            setLoading(false);
        }
        catch (e) {
            console.log(e);
            setLoading(false);
        }
    }
    return (
        <>
            <Inputs
                price={price}
                setPrice={setPrice}
                initial={initial}
                setInitial={setInitial}
                months={months}
                setMonths={setMonths}
                loading={loading}
            />
            <Outputs monthPay={monthPay} totalPay={totalPay} />
            <button className="btn" onClick={handleOnClick} >
                {(loading ? <img src="Ellipse.svg" className="rotate" alt=""/> : "Отправить заявку")}
            </button>
        </>
    );
}

export default Content;