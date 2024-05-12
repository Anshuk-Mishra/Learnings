import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                const info = await response.json();
                setData(info[currency]);
            } catch (error) {
                console.error('Error fetching currency info:', error);
            }
        };

        fetchData();
    },[currency]);

    if(Object.keys(data).length !== 0)
        return data;
    
    return { USD: 80, EUR: 100, GBP: 110 };
}

export default useCurrencyInfo;
