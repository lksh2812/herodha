window.onload = () =>{
    console.log("current_holdings.js")
    let removeFromCartDom = document.querySelectorAll('.remove-from-cart');
    let bookmarkCodeDom = document.querySelectorAll('.bookmark-symbol');
    
    for(let i = 0 ; i < removeFromCartDom.length; i++){
        let bookmarkCode = bookmarkCodeDom[i].innerText;
        removeFromCartDom[i].addEventListener('click', removeFromCart(bookmarkCode))
    }
    setInterval(getAllCurrentPriceOnPage, 3000)
}

const getAllCurrentPriceOnPage = () =>{
    console.log("gettting Current price")
    let companySymbols = document.querySelectorAll('#company-code'),
        currentPrices = document.querySelectorAll('#current-price'),
        profit = document.querySelectorAll('#profit'),
        qty = document.querySelectorAll('#qty'),
        total = document.querySelectorAll('#total');
    for(let i = 0; i < companySymbols.length; i++){
        companySymbol = companySymbols[i].innerText;
        getCurrentPriceAndProfit(companySymbol,currentPrices[i],profit[i],qty[i],total[i])
    }
}

async function getCurrentPriceAndProfit (companyCode, currentPriceDom, profitDom, qtyDom, totalDom){
    let response = await fetch(`/get_current_price/${companyCode}`);
    let priceJson = await response.json();
    let price = await priceJson['stock_data']['lastPrice']
    // console.log(price['lastPrice'])
    currentPriceDom.innerText = price
    qty = Number(qtyDom.innerText)
    currentPrice = Number(currentPriceDom.innerText)
    sellingPrice = Number(totalDom.innerText)
    buyingPrice = qty * currentPrice
    profit = sellingPrice - buyingPrice
    let color = "#00BB6E";
    if(profit < 0){
        color = "#F34459";
    }
    profitDom.innerText = Math.round(profit * 100) / 100;
    profitDom.style.color = "white";
    profitDom.style.background = color;
}

const removeFromCart = (companyCode) =>{
    return ()=>{
        let host = window.location.host
        fetch(`http://${host}/remove_from_cart/`,{
            method : 'POST',
            body : JSON.stringify(companyCode)
        })
        .then(res=>res.status)
        .then(() =>{
            element = document.querySelector('.bookmark');
            element.parentNode.removeChild(element);
        })
        .catch(err => console.log("Abey err dekh " + err))
    }
}

