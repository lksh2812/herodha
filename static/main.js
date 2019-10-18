console.log("Hello");
window.onload = () =>{
    // let currentTime = Date(Date.now()),
    let companyCode = document.querySelector('#companyCode').innerText
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
        getChart(companyCode)
}

const getChart = (companyCode) =>{
  fetch(`https://www.quandl.com/api/v3/datasets/NSE/${companyCode}?start_date=2018-01-04&end_date=2019-01-04&column_index=2&api_key=mCrUZxchD8W8KhzDRuAo`).then(res=>res.json()).then(result=>drawChart(result['dataset']['data']))
}

const drawChart = (chartData) =>{
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
            text: 'Infosys '
        },
        xAxis: {
            categories: xAxis
        },
        series: [{
            name : "Infosys",
            data: yAxis
        }]
    });
}



