import {useState}  from "react"//import method using{} and component using normally like of InputBox.
import InputBox from './components/INPUTBOX.jsx'//here/INPUTBOx.jsx not required as itis send in index.js and all index.js is loaded directly
import currencyInfo from './hooks/currencyInfo'



function App() {
const [amount,setAmount] =useState();
const [convertedAmount,setConvertedAmount] =useState();
const [from,setFrom] =useState("usd");
const [to,setto] =useState("inr");


let currencyinfo=currencyInfo(from);       //debug here by removing currency form dependency array in javascript.useEffect hook is executed without dependency array on refreshing page
const options=Object.keys(currencyinfo)
const swap=()=>{
  let temp=from;
  setFrom(to);
  setto(temp);
  temp=convertedAmount
  setConvertedAmount(amount);
  setAmount(temp);
}
const convert=()=>{
  setConvertedAmount(amount*currencyinfo[to])
}
         
  return (
    <>
    
     <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/global-virtual-currency-sign-techno-concept-background-design_1017-52482.jpg?w=1060&t=st=1716202160~exp=1716202760~hmac=8f5b3cf55458f823678183193cec8ae29676668bf78555c77a70abc1159b6129')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                            onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox       
                            label="from"                            //passing props in functional component.
                            amount={amount}
                            currencyOptions={options}  
                            onCurrencychange={(currency)=>{
                                setFrom(currency)
                                currencyinfo=currencyInfo(from);
                            }}  
                            selectedCurrency={from} 
                            amountdisable={false}
                            onAmountchange={(amount)=>{setAmount(amount)}}          
                            />
                        </div>

                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={ swap }
                            >
                                swap
                            </button>
                        </div>

                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}  
                                onCurrencychange={(currency)=>setto(currency)}  
                                selectedCurrency={to}    
                                amountdisable={true}  
                                //setConvertedAmount() is called when Convert button is clicked.
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
