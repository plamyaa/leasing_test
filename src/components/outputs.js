import React from "react";
import { formatNumber } from "./utils"

const Outputs = ({ monthPay, totalPay }) => {
    return (
        <div className="output">
            <div className="output__element">
                <p className='default-text'>Сумма договора лизинга</p>
                <p className='sum-value'>{formatNumber(totalPay)}</p>
            </div>
            <div className="output__element">
                <p className='default-text'>Ежемесячный платеж от</p>
                <p className='sum-value'>{formatNumber(monthPay)}</p>
            </div>
        </div>
    );
}

export default Outputs;