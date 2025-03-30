import { useId } from "react";
//instead of each item individuall as object in argument can take single argument as obj  and access using all as obj.label , obj.amount , obj.onAmountchange..etc
function InputBox({
    label,//from or to
    amount,// amount and convertedAmount
    currencyOptions=[],
    onCurrencychange,//calls setFrom() and setTo() of useState.
    selectedCurrency, 
    amountdisable=false,// for modifying number type input which is not allowed in output side(converted amount)
    onAmountchange,//calls setAmount() of useState

}) {
    const amountinputID=useId();
   
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  htmlFor={amountinputID} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountinputID}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdisable}
                    value={amount}
                    onChange={(e)=>onAmountchange && onAmountchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}//this is for initial purpose to show usd and inr initially.
                    onChange={(e)=> onCurrencychange && onCurrencychange(e.target.value)}
                >
                    
                       {currencyOptions.map((currency)=>(
                         // remember the key in react when looping jsx for better perfomance
                         <option key={currency} value={currency} >
                         {currency}
                         </option>
                       )
                    )}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
