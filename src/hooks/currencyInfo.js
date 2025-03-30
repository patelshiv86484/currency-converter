import {useEffect, useState}  from "react";
//this is custom hook made by us.
function currencyInfo(currency){
    const [data,setdata] = useState({});
      useEffect(
    ()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).
        then((res)=>res.json()).
        then((res)=>{setdata(res[currency])})
        },[currency])  //without currency in dependency array this inside fetch is called only one while page loads another time it will not be executed without currecy try it if want.
        //means these is done as sideeffects it means whenever function call is  done this is done parallely and we want whenever function call we want new api of currency so this is achievedonly on putting currency in dependency array.
 return data;
}
export default currencyInfo;