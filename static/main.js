window.onload = () =>{
    // let currentTime = Date(Date.now()),
    let companyCode = document.querySelector('#company-code').innerText
    let currentTime = new Date(),
        currentTimeDom = document.querySelector("#current-time");
        if(currentTimeDom){
            let month = new Array();
                month[0] = "Jan";
                month[1] = "Feb";
                month[2] = "Mar";
                month[3] = "Apr";
                month[4] = "May"
                month[5] = "Jun";
                month[6] = "Jul";
                month[7] = "Aug";
                month[8] = "Sep";
                month[9] = "Oct";
                month[10] = "Nov";
                month[11] = "Dec";
            currentTimeDom.innerText = `${month[currentTime.getMonth()]} ${currentTime.getDate()} ${currentTime.getHours()}:${currentTime.getMinutes()}`
        }else{
            console.log("Cannot find it")
        }
    getChart(companyCode);
    setInterval(get_current_price(companyCode), 3000);
}

const getChart = (companyCode) =>{
  fetch(`https://www.quandl.com/api/v3/datasets/NSE/${companyCode}?start_date=2018-01-04&end_date=2019-01-04&column_index=2&api_key=mCrUZxchD8W8KhzDRuAo`).then(res=>res.json()).then(result=>drawChart(chartData = result['dataset']['data'], companyCode=companyCode))
  .then(()=>{
      //to delete date's in x axis
      let xChartLabel = document.querySelector('.highcharts-xaxis-labels');
        // console.log(xChartLabel)
        xChartLabel.style.display = "none"
  })
}

const drawChart = (chartData, companyCode) =>{
  let xAxis = [],
      yAxis = [];
  chartData.forEach(chartDataRow=>{
    xAxis.unshift(chartDataRow[0]) 
    yAxis.unshift(chartDataRow[1])
  })

    Highcharts.chart('stock-chart', {
        chart: {
            type: 'line'
        },
        title: {
            text: companyCode
        },
        xAxis: {
            categories: xAxis
        },

        series: [{
            name : companyCode,
            data: yAxis
        }]
    });
}

const get_current_price = (companyCode) =>{
    return () =>{
        let host = window.location.host;
        fetch(`http://${host}/get_current_price/${companyCode}`)
        .then(res=>res.json())
        .then(result=>result['stock_data'])
        .then(stockData=>{
            let currentPrice = document.querySelector("#current-price");
            let stockDataChange = document.querySelector("#stock-data-change");
            let stockDataPchange = document.querySelector("#stock-data-p-change");
            let volume = document.querySelector("#volume");
            let bidPrice = document.querySelector("#bid-price");
            let offerPrice = document.querySelector("#offer-price");
            currentPrice.innerText = stockData['lastPrice']
            stockDataChange.innerText = stockData['change']
            stockDataPchange.innerText = `( ${stockData['pChange']} % )`
            volume.innerText = stockData['totalTradedVolume']
            bidPrice.innerText = stockData['buyPrice1']
            offerPrice.innerText = stockData['sellPrice1']
            console.log("api aa raha hai")
        })

    }
}
