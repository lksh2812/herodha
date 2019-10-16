console.log("Hello");
window.onload = () =>{
    // let currentTime = Date(Date.now()),
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
}


// no needed will do it with other json file to import data

let nseData = [
    {
      "Date": "31-Oct-2018",
      "Open": 10209.55,
      "High": 10396,
      "Low": 10105.1,
      "Close": 10386.6,
      "Shares Traded": 386618948,
      "Turnover (Rs. Cr)": 21513.85
    },
    {
      "Date": "01-Nov-2018",
      "Open": 10441.7,
      "High": 10441.9,
      "Low": 10341.9,
      "Close": 10380.45,
      "Shares Traded": 359340403,
      "Turnover (Rs. Cr)": 18111.88
    },
    {
      "Date": "02-Nov-2018",
      "Open": 10462.3,
      "High": 10606.95,
      "Low": 10457.7,
      "Close": 10553,
      "Shares Traded": 434175607,
      "Turnover (Rs. Cr)": 21758.8
    },
    {
      "Date": "05-Nov-2018",
      "Open": 10558.75,
      "High": 10558.8,
      "Low": 10477,
      "Close": 10524,
      "Shares Traded": 311176379,
      "Turnover (Rs. Cr)": 14761.17
    },
    {
      "Date": "06-Nov-2018",
      "Open": 10552,
      "High": 10600.25,
      "Low": 10491.45,
      "Close": 10530,
      "Shares Traded": 309878810,
      "Turnover (Rs. Cr)": 14006.19
    },
    {
      "Date": "07-Nov-2018",
      "Open": 10614.45,
      "High": 10616.45,
      "Low": 10582.3,
      "Close": 10598.4,
      "Shares Traded": 32194181,
      "Turnover (Rs. Cr)": 1534.08
    },
    {
      "Date": "09-Nov-2018",
      "Open": 10614.7,
      "High": 10619.55,
      "Low": 10544.85,
      "Close": 10585.2,
      "Shares Traded": 305817331,
      "Turnover (Rs. Cr)": 15294.83
    },
    {
      "Date": "12-Nov-2018",
      "Open": 10607.8,
      "High": 10645.5,
      "Low": 10464.05,
      "Close": 10482.2,
      "Shares Traded": 267710127,
      "Turnover (Rs. Cr)": 13445.33
    },
    {
      "Date": "13-Nov-2018",
      "Open": 10451.9,
      "High": 10596.25,
      "Low": 10440.55,
      "Close": 10582.5,
      "Shares Traded": 262541595,
      "Turnover (Rs. Cr)": 13078.98
    },
    {
      "Date": "14-Nov-2018",
      "Open": 10634.9,
      "High": 10651.6,
      "Low": 10532.7,
      "Close": 10576.3,
      "Shares Traded": 396373781,
      "Turnover (Rs. Cr)": 19374.89
    },
    {
      "Date": "15-Nov-2018",
      "Open": 10580.6,
      "High": 10646.5,
      "Low": 10557.5,
      "Close": 10616.7,
      "Shares Traded": 306011926,
      "Turnover (Rs. Cr)": 14937.67
    },
    {
      "Date": "16-Nov-2018",
      "Open": 10644,
      "High": 10695.15,
      "Low": 10631.15,
      "Close": 10682.2,
      "Shares Traded": 353384918,
      "Turnover (Rs. Cr)": 16728.88
    },
    {
      "Date": "19-Nov-2018",
      "Open": 10731.25,
      "High": 10774.7,
      "Low": 10688.8,
      "Close": 10763.4,
      "Shares Traded": 280522364,
      "Turnover (Rs. Cr)": 13540.9
    },
    {
      "Date": "20-Nov-2018",
      "Open": 10740.1,
      "High": 10740.85,
      "Low": 10640.85,
      "Close": 10656.2,
      "Shares Traded": 304322623,
      "Turnover (Rs. Cr)": 13077.24
    },
    {
      "Date": "21-Nov-2018",
      "Open": 10670.95,
      "High": 10671.3,
      "Low": 10562.35,
      "Close": 10600.05,
      "Shares Traded": 310191008,
      "Turnover (Rs. Cr)": 15382.32
    },
    {
      "Date": "22-Nov-2018",
      "Open": 10612.65,
      "High": 10646.25,
      "Low": 10512,
      "Close": 10526.75,
      "Shares Traded": 246926671,
      "Turnover (Rs. Cr)": 12254.36
    },
    {
      "Date": "26-Nov-2018",
      "Open": 10568.3,
      "High": 10637.8,
      "Low": 10489.75,
      "Close": 10628.6,
      "Shares Traded": 332863041,
      "Turnover (Rs. Cr)": 15927.25
    },
    {
      "Date": "27-Nov-2018",
      "Open": 10621.45,
      "High": 10695.15,
      "Low": 10596.35,
      "Close": 10685.6,
      "Shares Traded": 382834178,
      "Turnover (Rs. Cr)": 17296.28
    },
    {
      "Date": "28-Nov-2018",
      "Open": 10708.75,
      "High": 10757.8,
      "Low": 10699.85,
      "Close": 10728.85,
      "Shares Traded": 437627174,
      "Turnover (Rs. Cr)": 17737.28
    },
    {
      "Date": "29-Nov-2018",
      "Open": 10808.7,
      "High": 10883.05,
      "Low": 10782.35,
      "Close": 10858.7,
      "Shares Traded": 712650890,
      "Turnover (Rs. Cr)": 26283.43
    },
    {
      "Date": "30-Nov-2018",
      "Open": 10892.1,
      "High": 10922.45,
      "Low": 10835.1,
      "Close": 10876.75,
      "Shares Traded": 467857329,
      "Turnover (Rs. Cr)": 19964.33
    },
    {
      "Date": "03-Dec-2018",
      "Open": 10930.7,
      "High": 10941.2,
      "Low": 10845.35,
      "Close": 10883.75,
      "Shares Traded": 422358631,
      "Turnover (Rs. Cr)": 18484.91
    },
    {
      "Date": "04-Dec-2018",
      "Open": 10877.1,
      "High": 10890.95,
      "Low": 10833.35,
      "Close": 10869.5,
      "Shares Traded": 332137359,
      "Turnover (Rs. Cr)": 15857.16
    },
    {
      "Date": "05-Dec-2018",
      "Open": 10820.45,
      "High": 10821.05,
      "Low": 10747.95,
      "Close": 10782.9,
      "Shares Traded": 322019985,
      "Turnover (Rs. Cr)": 15176.26
    },
    {
      "Date": "06-Dec-2018",
      "Open": 10718.15,
      "High": 10722.65,
      "Low": 10588.25,
      "Close": 10601.15,
      "Shares Traded": 328275196,
      "Turnover (Rs. Cr)": 16488.87
    },
    {
      "Date": "07-Dec-2018",
      "Open": 10644.8,
      "High": 10704.55,
      "Low": 10599.35,
      "Close": 10693.7,
      "Shares Traded": 335849636,
      "Turnover (Rs. Cr)": 18597.83
    },
    {
      "Date": "10-Dec-2018",
      "Open": 10508.7,
      "High": 10558.85,
      "Low": 10474.95,
      "Close": 10488.45,
      "Shares Traded": 393097292,
      "Turnover (Rs. Cr)": 16524.36
    },
    {
      "Date": "11-Dec-2018",
      "Open": 10350.05,
      "High": 10567.15,
      "Low": 10333.85,
      "Close": 10549.15,
      "Shares Traded": 438699334,
      "Turnover (Rs. Cr)": 20112.91
    },
    {
      "Date": "12-Dec-2018",
      "Open": 10591,
      "High": 10752.2,
      "Low": 10560.8,
      "Close": 10737.6,
      "Shares Traded": 371697496,
      "Turnover (Rs. Cr)": 17447.45
    },
    {
      "Date": "13-Dec-2018",
      "Open": 10810.75,
      "High": 10838.6,
      "Low": 10749.5,
      "Close": 10791.55,
      "Shares Traded": 387810061,
      "Turnover (Rs. Cr)": 17582.8
    },
    {
      "Date": "14-Dec-2018",
      "Open": 10784.5,
      "High": 10815.75,
      "Low": 10752.1,
      "Close": 10805.45,
      "Shares Traded": 350579275,
      "Turnover (Rs. Cr)": 14486.1
    },
    {
      "Date": "17-Dec-2018",
      "Open": 10853.2,
      "High": 10900.35,
      "Low": 10844.85,
      "Close": 10888.35,
      "Shares Traded": 306145514,
      "Turnover (Rs. Cr)": 12528.59
    },
    {
      "Date": "18-Dec-2018",
      "Open": 10850.9,
      "High": 10915.4,
      "Low": 10819.1,
      "Close": 10908.7,
      "Shares Traded": 294942271,
      "Turnover (Rs. Cr)": 13556.45
    },
    {
      "Date": "19-Dec-2018",
      "Open": 10930.55,
      "High": 10985.15,
      "Low": 10928,
      "Close": 10967.3,
      "Shares Traded": 321801803,
      "Turnover (Rs. Cr)": 17172.64
    },
    {
      "Date": "20-Dec-2018",
      "Open": 10885.2,
      "High": 10962.55,
      "Low": 10880.05,
      "Close": 10951.7,
      "Shares Traded": 328802751,
      "Turnover (Rs. Cr)": 14945.94
    },
    {
      "Date": "21-Dec-2018",
      "Open": 10944.25,
      "High": 10963.65,
      "Low": 10738.65,
      "Close": 10754,
      "Shares Traded": 389235107,
      "Turnover (Rs. Cr)": 18663.85
    },
    {
      "Date": "24-Dec-2018",
      "Open": 10780.9,
      "High": 10782.3,
      "Low": 10649.25,
      "Close": 10663.5,
      "Shares Traded": 230291344,
      "Turnover (Rs. Cr)": 10695.6
    },
    {
      "Date": "26-Dec-2018",
      "Open": 10635.45,
      "High": 10747.5,
      "Low": 10534.55,
      "Close": 10729.85,
      "Shares Traded": 271942701,
      "Turnover (Rs. Cr)": 12831.99
    },
    {
      "Date": "27-Dec-2018",
      "Open": 10817.9,
      "High": 10834.2,
      "Low": 10764.45,
      "Close": 10779.8,
      "Shares Traded": 470160392,
      "Turnover (Rs. Cr)": 19119.88
    },
    {
      "Date": "28-Dec-2018",
      "Open": 10820.95,
      "High": 10893.6,
      "Low": 10817.15,
      "Close": 10859.9,
      "Shares Traded": 253086507,
      "Turnover (Rs. Cr)": 12615.01
    },
    {
      "Date": "31-Dec-2018",
      "Open": 10913.2,
      "High": 10923.55,
      "Low": 10853.2,
      "Close": 10862.55,
      "Shares Traded": 186494657,
      "Turnover (Rs. Cr)": 10176.13
    },
    {
      "Date": "01-Jan-2019",
      "Open": 10881.7,
      "High": 10923.6,
      "Low": 10807.1,
      "Close": 10910.1,
      "Shares Traded": 159404542,
      "Turnover (Rs. Cr)": 8688.26
    },
    {
      "Date": "02-Jan-2019",
      "Open": 10868.85,
      "High": 10895.35,
      "Low": 10735.05,
      "Close": 10792.5,
      "Shares Traded": 309665939,
      "Turnover (Rs. Cr)": 15352.25
    },
    {
      "Date": "03-Jan-2019",
      "Open": 10796.8,
      "High": 10814.05,
      "Low": 10661.25,
      "Close": 10672.25,
      "Shares Traded": 286241745,
      "Turnover (Rs. Cr)": 15030.45
    },
    {
      "Date": "04-Jan-2019",
      "Open": 10699.7,
      "High": 10741.05,
      "Low": 10628.65,
      "Close": 10727.35,
      "Shares Traded": 296596655,
      "Turnover (Rs. Cr)": 14516.74
    },
    {
      "Date": "07-Jan-2019",
      "Open": 10804.85,
      "High": 10835.95,
      "Low": 10750.15,
      "Close": 10771.8,
      "Shares Traded": 269371080,
      "Turnover (Rs. Cr)": 12731.29
    },
    {
      "Date": "08-Jan-2019",
      "Open": 10786.25,
      "High": 10818.45,
      "Low": 10733.25,
      "Close": 10802.15,
      "Shares Traded": 277697672,
      "Turnover (Rs. Cr)": 13433.48
    },
    {
      "Date": "09-Jan-2019",
      "Open": 10862.4,
      "High": 10870.4,
      "Low": 10749.4,
      "Close": 10855.15,
      "Shares Traded": 333010535,
      "Turnover (Rs. Cr)": 16213.3
    },
    {
      "Date": "10-Jan-2019",
      "Open": 10859.35,
      "High": 10859.35,
      "Low": 10801.8,
      "Close": 10821.6,
      "Shares Traded": 254365477,
      "Turnover (Rs. Cr)": 12031.26
    },
    {
      "Date": "11-Jan-2019",
      "Open": 10834.75,
      "High": 10850.15,
      "Low": 10739.4,
      "Close": 10794.95,
      "Shares Traded": 260792200,
      "Turnover (Rs. Cr)": 13084.6
    },
    {
      "Date": "14-Jan-2019",
      "Open": 10807,
      "High": 10808,
      "Low": 10692.35,
      "Close": 10737.6,
      "Shares Traded": 298774178,
      "Turnover (Rs. Cr)": 12732.57
    },
    {
      "Date": "15-Jan-2019",
      "Open": 10777.55,
      "High": 10896.95,
      "Low": 10777.55,
      "Close": 10886.8,
      "Shares Traded": 310737078,
      "Turnover (Rs. Cr)": 14879.91
    },
    {
      "Date": "16-Jan-2019",
      "Open": 10899.65,
      "High": 10928.15,
      "Low": 10876.9,
      "Close": 10890.3,
      "Shares Traded": 276539042,
      "Turnover (Rs. Cr)": 13081.63
    },
    {
      "Date": "17-Jan-2019",
      "Open": 10920.85,
      "High": 10930.65,
      "Low": 10844.65,
      "Close": 10905.2,
      "Shares Traded": 271676319,
      "Turnover (Rs. Cr)": 13215.83
    },
    {
      "Date": "18-Jan-2019",
      "Open": 10914.85,
      "High": 10928.2,
      "Low": 10852.2,
      "Close": 10906.95,
      "Shares Traded": 323814108,
      "Turnover (Rs. Cr)": 16408.83
    },
    {
      "Date": "21-Jan-2019",
      "Open": 10919.35,
      "High": 10987.45,
      "Low": 10885.75,
      "Close": 10961.85,
      "Shares Traded": 288829125,
      "Turnover (Rs. Cr)": 17289.7
    },
    {
      "Date": "22-Jan-2019",
      "Open": 10949.8,
      "High": 10949.8,
      "Low": 10864.15,
      "Close": 10922.75,
      "Shares Traded": 300768112,
      "Turnover (Rs. Cr)": 17483.62
    },
    {
      "Date": "23-Jan-2019",
      "Open": 10931.05,
      "High": 10944.8,
      "Low": 10811.95,
      "Close": 10831.5,
      "Shares Traded": 298876314,
      "Turnover (Rs. Cr)": 14736.91
    },
    {
      "Date": "24-Jan-2019",
      "Open": 10844.05,
      "High": 10866.6,
      "Low": 10798.65,
      "Close": 10849.8,
      "Shares Traded": 361082096,
      "Turnover (Rs. Cr)": 15298.48
    },
    {
      "Date": "25-Jan-2019",
      "Open": 10859.75,
      "High": 10931.7,
      "Low": 10756.45,
      "Close": 10780.55,
      "Shares Traded": 463444758,
      "Turnover (Rs. Cr)": 20542.36
    },
    {
      "Date": "28-Jan-2019",
      "Open": 10792.45,
      "High": 10804.45,
      "Low": 10630.95,
      "Close": 10661.55,
      "Shares Traded": 419682627,
      "Turnover (Rs. Cr)": 21144.33
    },
    {
      "Date": "29-Jan-2019",
      "Open": 10653.7,
      "High": 10690.35,
      "Low": 10583.65,
      "Close": 10652.2,
      "Shares Traded": 356908994,
      "Turnover (Rs. Cr)": 18832.06
    },
    {
      "Date": "30-Jan-2019",
      "Open": 10702.25,
      "High": 10710.2,
      "Low": 10612.85,
      "Close": 10651.8,
      "Shares Traded": 410107910,
      "Turnover (Rs. Cr)": 21214.81
    },
    {
      "Date": "31-Jan-2019",
      "Open": 10690.55,
      "High": 10838.05,
      "Low": 10678.55,
      "Close": 10830.95,
      "Shares Traded": 604818027,
      "Turnover (Rs. Cr)": 27471.18
    },
    {
      "Date": "01-Feb-2019",
      "Open": 10851.35,
      "High": 10983.45,
      "Low": 10813.45,
      "Close": 10893.65,
      "Shares Traded": 482272661,
      "Turnover (Rs. Cr)": 23112.37
    },
    {
      "Date": "04-Feb-2019",
      "Open": 10876.75,
      "High": 10927.9,
      "Low": 10814.15,
      "Close": 10912.25,
      "Shares Traded": 318300039,
      "Turnover (Rs. Cr)": 15478.81
    },
    {
      "Date": "05-Feb-2019",
      "Open": 10908.65,
      "High": 10956.7,
      "Low": 10886.7,
      "Close": 10934.35,
      "Shares Traded": 268095127,
      "Turnover (Rs. Cr)": 13435.13
    },
    {
      "Date": "06-Feb-2019",
      "Open": 10965.1,
      "High": 11072.6,
      "Low": 10962.7,
      "Close": 11062.45,
      "Shares Traded": 298510497,
      "Turnover (Rs. Cr)": 15172.85
    },
    {
      "Date": "07-Feb-2019",
      "Open": 11070.45,
      "High": 11118.1,
      "Low": 11043.6,
      "Close": 11069.4,
      "Shares Traded": 263544426,
      "Turnover (Rs. Cr)": 13542.69
    },
    {
      "Date": "08-Feb-2019",
      "Open": 11023.5,
      "High": 11041.2,
      "Low": 10925.45,
      "Close": 10943.6,
      "Shares Traded": 352787419,
      "Turnover (Rs. Cr)": 15507.05
    },
    {
      "Date": "11-Feb-2019",
      "Open": 10930.9,
      "High": 10930.9,
      "Low": 10857.1,
      "Close": 10888.8,
      "Shares Traded": 285985383,
      "Turnover (Rs. Cr)": 13818.92
    },
    {
      "Date": "12-Feb-2019",
      "Open": 10879.7,
      "High": 10910.9,
      "Low": 10823.8,
      "Close": 10831.4,
      "Shares Traded": 292314643,
      "Turnover (Rs. Cr)": 14424.78
    },
    {
      "Date": "13-Feb-2019",
      "Open": 10870.55,
      "High": 10891.65,
      "Low": 10772.1,
      "Close": 10793.65,
      "Shares Traded": 321958549,
      "Turnover (Rs. Cr)": 15360.98
    },
    {
      "Date": "14-Feb-2019",
      "Open": 10786.1,
      "High": 10792.7,
      "Low": 10718.75,
      "Close": 10746.05,
      "Shares Traded": 627041405,
      "Turnover (Rs. Cr)": 20797.41
    },
    {
      "Date": "15-Feb-2019",
      "Open": 10780.25,
      "High": 10785.75,
      "Low": 10620.4,
      "Close": 10724.4,
      "Shares Traded": 521876968,
      "Turnover (Rs. Cr)": 20733.95
    },
    {
      "Date": "18-Feb-2019",
      "Open": 10738.65,
      "High": 10759.9,
      "Low": 10628.4,
      "Close": 10640.95,
      "Shares Traded": 345440240,
      "Turnover (Rs. Cr)": 14903.19
    },
    {
      "Date": "19-Feb-2019",
      "Open": 10636.7,
      "High": 10722.85,
      "Low": 10585.65,
      "Close": 10604.35,
      "Shares Traded": 291507060,
      "Turnover (Rs. Cr)": 13765.01
    },
    {
      "Date": "20-Feb-2019",
      "Open": 10655.45,
      "High": 10752.7,
      "Low": 10646.4,
      "Close": 10735.45,
      "Shares Traded": 289195306,
      "Turnover (Rs. Cr)": 13209.71
    },
    {
      "Date": "21-Feb-2019",
      "Open": 10744.1,
      "High": 10808.85,
      "Low": 10721.5,
      "Close": 10789.85,
      "Shares Traded": 279584955,
      "Turnover (Rs. Cr)": 14758.5
    },
    {
      "Date": "22-Feb-2019",
      "Open": 10782.7,
      "High": 10801.55,
      "Low": 10758.4,
      "Close": 10791.65,
      "Shares Traded": 396846597,
      "Turnover (Rs. Cr)": 24386.42
    },
    {
      "Date": "25-Feb-2019",
      "Open": 10813.25,
      "High": 10887.1,
      "Low": 10788.05,
      "Close": 10880.1,
      "Shares Traded": 385905142,
      "Turnover (Rs. Cr)": 16466.09
    },
    {
      "Date": "26-Feb-2019",
      "Open": 10775.3,
      "High": 10888.75,
      "Low": 10729.3,
      "Close": 10835.3,
      "Shares Traded": 414954476,
      "Turnover (Rs. Cr)": 19186.75
    },
    {
      "Date": "27-Feb-2019",
      "Open": 10881.2,
      "High": 10939.7,
      "Low": 10751.2,
      "Close": 10806.65,
      "Shares Traded": 381080073,
      "Turnover (Rs. Cr)": 18313.85
    },
    {
      "Date": "28-Feb-2019",
      "Open": 10865.7,
      "High": 10865.7,
      "Low": 10784.85,
      "Close": 10792.5,
      "Shares Traded": 644159018,
      "Turnover (Rs. Cr)": 27123.34
    },
    {
      "Date": "01-Mar-2019",
      "Open": 10842.65,
      "High": 10877.9,
      "Low": 10823.1,
      "Close": 10863.5,
      "Shares Traded": 308526309,
      "Turnover (Rs. Cr)": 15010.06
    },
    {
      "Date": "05-Mar-2019",
      "Open": 10864.85,
      "High": 10994.9,
      "Low": 10817,
      "Close": 10987.45,
      "Shares Traded": 373220239,
      "Turnover (Rs. Cr)": 17960.03
    },
    {
      "Date": "06-Mar-2019",
      "Open": 11024.85,
      "High": 11062.3,
      "Low": 10998.85,
      "Close": 11053,
      "Shares Traded": 372550850,
      "Turnover (Rs. Cr)": 17850.93
    },
    {
      "Date": "07-Mar-2019",
      "Open": 11077.95,
      "High": 11089.05,
      "Low": 11027.1,
      "Close": 11058.2,
      "Shares Traded": 321208766,
      "Turnover (Rs. Cr)": 15321.68
    },
    {
      "Date": "08-Mar-2019",
      "Open": 11038.85,
      "High": 11049,
      "Low": 11008.95,
      "Close": 11035.4,
      "Shares Traded": 326569833,
      "Turnover (Rs. Cr)": 14369.77
    },
    {
      "Date": "11-Mar-2019",
      "Open": 11068.75,
      "High": 11180.9,
      "Low": 11059.85,
      "Close": 11168.05,
      "Shares Traded": 352242287,
      "Turnover (Rs. Cr)": 17349.95
    },
    {
      "Date": "12-Mar-2019",
      "Open": 11231.35,
      "High": 11320.4,
      "Low": 11227,
      "Close": 11301.2,
      "Shares Traded": 391310519,
      "Turnover (Rs. Cr)": 20861.35
    },
    {
      "Date": "13-Mar-2019",
      "Open": 11326.2,
      "High": 11352.3,
      "Low": 11276.6,
      "Close": 11341.7,
      "Shares Traded": 382996187,
      "Turnover (Rs. Cr)": 20851.67
    },
    {
      "Date": "14-Mar-2019",
      "Open": 11382.5,
      "High": 11383.45,
      "Low": 11313.75,
      "Close": 11343.25,
      "Shares Traded": 294480678,
      "Turnover (Rs. Cr)": 15661.05
    },
    {
      "Date": "15-Mar-2019",
      "Open": 11376.85,
      "High": 11487,
      "Low": 11370.8,
      "Close": 11426.85,
      "Shares Traded": 463704896,
      "Turnover (Rs. Cr)": 25143.26
    },
    {
      "Date": "18-Mar-2019",
      "Open": 11473.85,
      "High": 11530.15,
      "Low": 11412.5,
      "Close": 11462.2,
      "Shares Traded": 320250041,
      "Turnover (Rs. Cr)": 16942.22
    },
    {
      "Date": "19-Mar-2019",
      "Open": 11500.3,
      "High": 11543.85,
      "Low": 11451.25,
      "Close": 11532.4,
      "Shares Traded": 326099667,
      "Turnover (Rs. Cr)": 16179.92
    },
    {
      "Date": "20-Mar-2019",
      "Open": 11553.35,
      "High": 11556.1,
      "Low": 11503.1,
      "Close": 11521.05,
      "Shares Traded": 366298049,
      "Turnover (Rs. Cr)": 18311.44
    },
    {
      "Date": "22-Mar-2019",
      "Open": 11549.2,
      "High": 11572.8,
      "Low": 11434.55,
      "Close": 11456.9,
      "Shares Traded": 386193935,
      "Turnover (Rs. Cr)": 19755.74
    },
    {
      "Date": "25-Mar-2019",
      "Open": 11395.65,
      "High": 11395.65,
      "Low": 11311.6,
      "Close": 11354.25,
      "Shares Traded": 294459196,
      "Turnover (Rs. Cr)": 14101.14
    },
    {
      "Date": "26-Mar-2019",
      "Open": 11375.2,
      "High": 11496.75,
      "Low": 11352.45,
      "Close": 11483.25,
      "Shares Traded": 282575496,
      "Turnover (Rs. Cr)": 14611.68
    },
    {
      "Date": "27-Mar-2019",
      "Open": 11531.45,
      "High": 11546.2,
      "Low": 11413,
      "Close": 11445.05,
      "Shares Traded": 350446089,
      "Turnover (Rs. Cr)": 18356.52
    },
    {
      "Date": "28-Mar-2019",
      "Open": 11463.65,
      "High": 11588.5,
      "Low": 11452.45,
      "Close": 11570,
      "Shares Traded": 527678809,
      "Turnover (Rs. Cr)": 25719.65
    },
    {
      "Date": "29-Mar-2019",
      "Open": 11625.45,
      "High": 11630.35,
      "Low": 11570.15,
      "Close": 11623.9,
      "Shares Traded": 416276981,
      "Turnover (Rs. Cr)": 20515.25
    },
    {
      "Date": "01-Apr-2019",
      "Open": 11665.2,
      "High": 11738.1,
      "Low": 11644.75,
      "Close": 11669.15,
      "Shares Traded": 379572660,
      "Turnover (Rs. Cr)": 18977.99
    },
    {
      "Date": "02-Apr-2019",
      "Open": 11711.55,
      "High": 11729.35,
      "Low": 11655.85,
      "Close": 11713.2,
      "Shares Traded": 386131413,
      "Turnover (Rs. Cr)": 18673.7
    },
    {
      "Date": "03-Apr-2019",
      "Open": 11735.3,
      "High": 11761,
      "Low": 11629.15,
      "Close": 11643.95,
      "Shares Traded": 365760070,
      "Turnover (Rs. Cr)": 19050.95
    },
    {
      "Date": "04-Apr-2019",
      "Open": 11660.2,
      "High": 11662.55,
      "Low": 11559.2,
      "Close": 11598,
      "Shares Traded": 349029830,
      "Turnover (Rs. Cr)": 19713.01
    },
    {
      "Date": "05-Apr-2019",
      "Open": 11638.4,
      "High": 11689.65,
      "Low": 11609.5,
      "Close": 11665.95,
      "Shares Traded": 266665797,
      "Turnover (Rs. Cr)": 15000.35
    },
    {
      "Date": "08-Apr-2019",
      "Open": 11704.35,
      "High": 11710.3,
      "Low": 11549.1,
      "Close": 11604.5,
      "Shares Traded": 260932608,
      "Turnover (Rs. Cr)": 14203.96
    },
    {
      "Date": "09-Apr-2019",
      "Open": 11612.05,
      "High": 11683.9,
      "Low": 11569.7,
      "Close": 11671.95,
      "Shares Traded": 300467538,
      "Turnover (Rs. Cr)": 15984.39
    },
    {
      "Date": "10-Apr-2019",
      "Open": 11646.85,
      "High": 11680.05,
      "Low": 11571.75,
      "Close": 11584.3,
      "Shares Traded": 359941110,
      "Turnover (Rs. Cr)": 22258.46
    },
    {
      "Date": "11-Apr-2019",
      "Open": 11592.55,
      "High": 11606.7,
      "Low": 11550.55,
      "Close": 11596.7,
      "Shares Traded": 279775726,
      "Turnover (Rs. Cr)": 14332.2
    },
    {
      "Date": "12-Apr-2019",
      "Open": 11612.85,
      "High": 11657.35,
      "Low": 11578.8,
      "Close": 11643.45,
      "Shares Traded": 246006184,
      "Turnover (Rs. Cr)": 13598.61
    },
    {
      "Date": "15-Apr-2019",
      "Open": 11667,
      "High": 11704.6,
      "Low": 11648.25,
      "Close": 11690.35,
      "Shares Traded": 289996075,
      "Turnover (Rs. Cr)": 15635.79
    },
    {
      "Date": "16-Apr-2019",
      "Open": 11736.2,
      "High": 11810.95,
      "Low": 11731.55,
      "Close": 11787.15,
      "Shares Traded": 354315040,
      "Turnover (Rs. Cr)": 17585.48
    },
    {
      "Date": "18-Apr-2019",
      "Open": 11856.15,
      "High": 11856.15,
      "Low": 11738.5,
      "Close": 11752.8,
      "Shares Traded": 339653709,
      "Turnover (Rs. Cr)": 18271.27
    },
    {
      "Date": "22-Apr-2019",
      "Open": 11727.05,
      "High": 11727.05,
      "Low": 11583.95,
      "Close": 11594.45,
      "Shares Traded": 260356055,
      "Turnover (Rs. Cr)": 13754.12
    },
    {
      "Date": "23-Apr-2019",
      "Open": 11612.95,
      "High": 11645.95,
      "Low": 11564.8,
      "Close": 11575.95,
      "Shares Traded": 272544486,
      "Turnover (Rs. Cr)": 14500.53
    },
    {
      "Date": "24-Apr-2019",
      "Open": 11601.5,
      "High": 11740.85,
      "Low": 11578.85,
      "Close": 11726.15,
      "Shares Traded": 335196513,
      "Turnover (Rs. Cr)": 17046.66
    },
    {
      "Date": "25-Apr-2019",
      "Open": 11735.7,
      "High": 11796.75,
      "Low": 11624.3,
      "Close": 11641.8,
      "Shares Traded": 604360395,
      "Turnover (Rs. Cr)": 28254.3
    },
    {
      "Date": "26-Apr-2019",
      "Open": 11683.75,
      "High": 11762.9,
      "Low": 11661.75,
      "Close": 11754.65,
      "Shares Traded": 333483764,
      "Turnover (Rs. Cr)": 18098.83
    },
    {
      "Date": "30-Apr-2019",
      "Open": 11748.75,
      "High": 11756.25,
      "Low": 11655.9,
      "Close": 11748.15,
      "Shares Traded": 532630874,
      "Turnover (Rs. Cr)": 23324.98
    },
    {
      "Date": "02-May-2019",
      "Open": 11725.55,
      "High": 11789.3,
      "Low": 11699.55,
      "Close": 11724.75,
      "Shares Traded": 380278045,
      "Turnover (Rs. Cr)": 17790.06
    },
    {
      "Date": "03-May-2019",
      "Open": 11722.6,
      "High": 11770.9,
      "Low": 11699.35,
      "Close": 11712.25,
      "Shares Traded": 305519934,
      "Turnover (Rs. Cr)": 15156.32
    },
    {
      "Date": "06-May-2019",
      "Open": 11605.8,
      "High": 11632.55,
      "Low": 11571.35,
      "Close": 11598.25,
      "Shares Traded": 299046480,
      "Turnover (Rs. Cr)": 14703.42
    },
    {
      "Date": "07-May-2019",
      "Open": 11651.5,
      "High": 11657.05,
      "Low": 11484.45,
      "Close": 11497.9,
      "Shares Traded": 337495624,
      "Turnover (Rs. Cr)": 16632.84
    },
    {
      "Date": "08-May-2019",
      "Open": 11478.7,
      "High": 11479.1,
      "Low": 11346.95,
      "Close": 11359.45,
      "Shares Traded": 372826025,
      "Turnover (Rs. Cr)": 17440.01
    },
    {
      "Date": "09-May-2019",
      "Open": 11322.4,
      "High": 11357.6,
      "Low": 11255.05,
      "Close": 11301.8,
      "Shares Traded": 373028059,
      "Turnover (Rs. Cr)": 17602.86
    },
    {
      "Date": "10-May-2019",
      "Open": 11314.15,
      "High": 11345.8,
      "Low": 11251.05,
      "Close": 11278.9,
      "Shares Traded": 387323416,
      "Turnover (Rs. Cr)": 18085.19
    },
    {
      "Date": "13-May-2019",
      "Open": 11258.7,
      "High": 11300.2,
      "Low": 11125.6,
      "Close": 11148.2,
      "Shares Traded": 357586433,
      "Turnover (Rs. Cr)": 16722.91
    },
    {
      "Date": "14-May-2019",
      "Open": 11151.65,
      "High": 11294.75,
      "Low": 11108.3,
      "Close": 11222.05,
      "Shares Traded": 398122725,
      "Turnover (Rs. Cr)": 19906.38
    },
    {
      "Date": "15-May-2019",
      "Open": 11271.7,
      "High": 11286.8,
      "Low": 11136.95,
      "Close": 11157,
      "Shares Traded": 414174258,
      "Turnover (Rs. Cr)": 17931.75
    },
    {
      "Date": "16-May-2019",
      "Open": 11180.35,
      "High": 11281.55,
      "Low": 11143.35,
      "Close": 11257.1,
      "Shares Traded": 350734572,
      "Turnover (Rs. Cr)": 15629.57
    },
    {
      "Date": "17-May-2019",
      "Open": 11261.9,
      "High": 11426.15,
      "Low": 11259.85,
      "Close": 11407.15,
      "Shares Traded": 412109200,
      "Turnover (Rs. Cr)": 20177.63
    },
    {
      "Date": "20-May-2019",
      "Open": 11651.9,
      "High": 11845.2,
      "Low": 11591.7,
      "Close": 11828.25,
      "Shares Traded": 452096261,
      "Turnover (Rs. Cr)": 25223.78
    },
    {
      "Date": "21-May-2019",
      "Open": 11863.65,
      "High": 11883.55,
      "Low": 11682.8,
      "Close": 11709.1,
      "Shares Traded": 381038129,
      "Turnover (Rs. Cr)": 20324.67
    },
    {
      "Date": "22-May-2019",
      "Open": 11727.95,
      "High": 11784.8,
      "Low": 11682.4,
      "Close": 11737.9,
      "Shares Traded": 355870667,
      "Turnover (Rs. Cr)": 19582.41
    },
    {
      "Date": "23-May-2019",
      "Open": 11901.3,
      "High": 12041.15,
      "Low": 11614.5,
      "Close": 11657.05,
      "Shares Traded": 569030654,
      "Turnover (Rs. Cr)": 31180.08
    },
    {
      "Date": "24-May-2019",
      "Open": 11748,
      "High": 11859,
      "Low": 11658.1,
      "Close": 11844.1,
      "Shares Traded": 374637415,
      "Turnover (Rs. Cr)": 20028.49
    },
    {
      "Date": "27-May-2019",
      "Open": 11855.5,
      "High": 11957.15,
      "Low": 11812.4,
      "Close": 11924.75,
      "Shares Traded": 348356214,
      "Turnover (Rs. Cr)": 17735.36
    },
    {
      "Date": "28-May-2019",
      "Open": 11958.35,
      "High": 11958.55,
      "Low": 11864.9,
      "Close": 11928.75,
      "Shares Traded": 598308334,
      "Turnover (Rs. Cr)": 28833.54
    },
    {
      "Date": "29-May-2019",
      "Open": 11905.8,
      "High": 11931.9,
      "Low": 11836.8,
      "Close": 11861.1,
      "Shares Traded": 318068673,
      "Turnover (Rs. Cr)": 15985.92
    },
    {
      "Date": "30-May-2019",
      "Open": 11865.3,
      "High": 11968.55,
      "Low": 11859.4,
      "Close": 11945.9,
      "Shares Traded": 421199867,
      "Turnover (Rs. Cr)": 20261.85
    },
    {
      "Date": "31-May-2019",
      "Open": 11999.8,
      "High": 12039.25,
      "Low": 11829.45,
      "Close": 11922.8,
      "Shares Traded": 438879129,
      "Turnover (Rs. Cr)": 22789
    },
    {
      "Date": "03-Jun-2019",
      "Open": 11953.75,
      "High": 12103.05,
      "Low": 11920.1,
      "Close": 12088.55,
      "Shares Traded": 315296955,
      "Turnover (Rs. Cr)": 17451.36
    },
    {
      "Date": "04-Jun-2019",
      "Open": 12052.65,
      "High": 12095.2,
      "Low": 12005.85,
      "Close": 12021.65,
      "Shares Traded": 289221904,
      "Turnover (Rs. Cr)": 15308.28
    },
    {
      "Date": "06-Jun-2019",
      "Open": 12039.8,
      "High": 12039.8,
      "Low": 11830.25,
      "Close": 11843.75,
      "Shares Traded": 415206942,
      "Turnover (Rs. Cr)": 21144.77
    },
    {
      "Date": "07-Jun-2019",
      "Open": 11865.2,
      "High": 11897.5,
      "Low": 11769.5,
      "Close": 11870.65,
      "Shares Traded": 302455910,
      "Turnover (Rs. Cr)": 14939.4
    },
    {
      "Date": "10-Jun-2019",
      "Open": 11934.9,
      "High": 11975.05,
      "Low": 11871.75,
      "Close": 11922.7,
      "Shares Traded": 303329445,
      "Turnover (Rs. Cr)": 13125.41
    },
    {
      "Date": "11-Jun-2019",
      "Open": 11959.85,
      "High": 12000.35,
      "Low": 11904.35,
      "Close": 11965.6,
      "Shares Traded": 332181958,
      "Turnover (Rs. Cr)": 15392.28
    },
    {
      "Date": "12-Jun-2019",
      "Open": 11962.45,
      "High": 11962.45,
      "Low": 11866.35,
      "Close": 11906.2,
      "Shares Traded": 283718253,
      "Turnover (Rs. Cr)": 14120.17
    },
    {
      "Date": "13-Jun-2019",
      "Open": 11873.9,
      "High": 11931.35,
      "Low": 11817.05,
      "Close": 11914.05,
      "Shares Traded": 447901993,
      "Turnover (Rs. Cr)": 18680.91
    },
    {
      "Date": "14-Jun-2019",
      "Open": 11910.1,
      "High": 11911.85,
      "Low": 11797.7,
      "Close": 11823.3,
      "Shares Traded": 390294634,
      "Turnover (Rs. Cr)": 16226.57
    },
    {
      "Date": "17-Jun-2019",
      "Open": 11844,
      "High": 11844.05,
      "Low": 11657.75,
      "Close": 11672.15,
      "Shares Traded": 295528399,
      "Turnover (Rs. Cr)": 13851.67
    },
    {
      "Date": "18-Jun-2019",
      "Open": 11677.05,
      "High": 11727.2,
      "Low": 11641.15,
      "Close": 11691.5,
      "Shares Traded": 365525622,
      "Turnover (Rs. Cr)": 16120.69
    },
    {
      "Date": "19-Jun-2019",
      "Open": 11744.45,
      "High": 11802.5,
      "Low": 11625.1,
      "Close": 11691.45,
      "Shares Traded": 446933027,
      "Turnover (Rs. Cr)": 18722.71
    },
    {
      "Date": "20-Jun-2019",
      "Open": 11653.65,
      "High": 11843.5,
      "Low": 11635.05,
      "Close": 11831.75,
      "Shares Traded": 442016954,
      "Turnover (Rs. Cr)": 18839.11
    },
    {
      "Date": "21-Jun-2019",
      "Open": 11827.6,
      "High": 11827.95,
      "Low": 11705.1,
      "Close": 11724.1,
      "Shares Traded": 468430388,
      "Turnover (Rs. Cr)": 23346.13
    },
    {
      "Date": "24-Jun-2019",
      "Open": 11725.8,
      "High": 11754,
      "Low": 11670.2,
      "Close": 11699.65,
      "Shares Traded": 277620788,
      "Turnover (Rs. Cr)": 12631.38
    },
    {
      "Date": "25-Jun-2019",
      "Open": 11681,
      "High": 11814.4,
      "Low": 11651,
      "Close": 11796.45,
      "Shares Traded": 300476353,
      "Turnover (Rs. Cr)": 13822.83
    },
    {
      "Date": "26-Jun-2019",
      "Open": 11768.15,
      "High": 11871.85,
      "Low": 11757.55,
      "Close": 11847.55,
      "Shares Traded": 327885018,
      "Turnover (Rs. Cr)": 14650.89
    },
    {
      "Date": "27-Jun-2019",
      "Open": 11860.85,
      "High": 11911.15,
      "Low": 11821.05,
      "Close": 11841.55,
      "Shares Traded": 480169350,
      "Turnover (Rs. Cr)": 23300.3
    },
    {
      "Date": "28-Jun-2019",
      "Open": 11861.15,
      "High": 11871.7,
      "Low": 11775.5,
      "Close": 11788.85,
      "Shares Traded": 303888701,
      "Turnover (Rs. Cr)": 15191.9
    },
    {
      "Date": "01-Jul-2019",
      "Open": 11839.9,
      "High": 11884.65,
      "Low": 11830.8,
      "Close": 11865.6,
      "Shares Traded": 278415889,
      "Turnover (Rs. Cr)": 12874.96
    },
    {
      "Date": "02-Jul-2019",
      "Open": 11890.3,
      "High": 11917.45,
      "Low": 11814.7,
      "Close": 11910.3,
      "Shares Traded": 363197036,
      "Turnover (Rs. Cr)": 13615.94
    },
    {
      "Date": "03-Jul-2019",
      "Open": 11932.15,
      "High": 11945.2,
      "Low": 11887.05,
      "Close": 11916.75,
      "Shares Traded": 340527508,
      "Turnover (Rs. Cr)": 14290.33
    },
    {
      "Date": "04-Jul-2019",
      "Open": 11928.8,
      "High": 11969.25,
      "Low": 11923.65,
      "Close": 11946.75,
      "Shares Traded": 333595172,
      "Turnover (Rs. Cr)": 14758.87
    },
    {
      "Date": "05-Jul-2019",
      "Open": 11964.75,
      "High": 11981.75,
      "Low": 11797.9,
      "Close": 11811.15,
      "Shares Traded": 530720039,
      "Turnover (Rs. Cr)": 18871.99
    },
    {
      "Date": "08-Jul-2019",
      "Open": 11770.4,
      "High": 11771.9,
      "Low": 11523.3,
      "Close": 11558.6,
      "Shares Traded": 464029444,
      "Turnover (Rs. Cr)": 19146.25
    },
    {
      "Date": "09-Jul-2019",
      "Open": 11531.6,
      "High": 11582.55,
      "Low": 11461,
      "Close": 11555.9,
      "Shares Traded": 442520253,
      "Turnover (Rs. Cr)": 21577.95
    },
    {
      "Date": "10-Jul-2019",
      "Open": 11536.15,
      "High": 11593.7,
      "Low": 11475.65,
      "Close": 11498.9,
      "Shares Traded": 337571014,
      "Turnover (Rs. Cr)": 16098.53
    },
    {
      "Date": "11-Jul-2019",
      "Open": 11561.45,
      "High": 11599,
      "Low": 11519.5,
      "Close": 11582.9,
      "Shares Traded": 317257578,
      "Turnover (Rs. Cr)": 14586.2
    },
    {
      "Date": "12-Jul-2019",
      "Open": 11601.15,
      "High": 11639.55,
      "Low": 11538.6,
      "Close": 11552.5,
      "Shares Traded": 359421182,
      "Turnover (Rs. Cr)": 16947.57
    },
    {
      "Date": "15-Jul-2019",
      "Open": 11614.75,
      "High": 11618.4,
      "Low": 11532.3,
      "Close": 11588.35,
      "Shares Traded": 368788782,
      "Turnover (Rs. Cr)": 15835.99
    },
    {
      "Date": "16-Jul-2019",
      "Open": 11596.65,
      "High": 11670.05,
      "Low": 11573.95,
      "Close": 11662.6,
      "Shares Traded": 480156167,
      "Turnover (Rs. Cr)": 15967.91
    },
    {
      "Date": "17-Jul-2019",
      "Open": 11670.75,
      "High": 11706.65,
      "Low": 11651.15,
      "Close": 11687.5,
      "Shares Traded": 464827734,
      "Turnover (Rs. Cr)": 15250.5
    },
    {
      "Date": "18-Jul-2019",
      "Open": 11675.6,
      "High": 11677.15,
      "Low": 11582.4,
      "Close": 11596.9,
      "Shares Traded": 498258158,
      "Turnover (Rs. Cr)": 16684.03
    },
    {
      "Date": "19-Jul-2019",
      "Open": 11627.95,
      "High": 11640.35,
      "Low": 11399.3,
      "Close": 11419.25,
      "Shares Traded": 446049198,
      "Turnover (Rs. Cr)": 17326.4
    },
    {
      "Date": "22-Jul-2019",
      "Open": 11392.85,
      "High": 11398.15,
      "Low": 11301.25,
      "Close": 11346.2,
      "Shares Traded": 516044335,
      "Turnover (Rs. Cr)": 19304.23
    },
    {
      "Date": "23-Jul-2019",
      "Open": 11372.25,
      "High": 11398.15,
      "Low": 11302.8,
      "Close": 11331.05,
      "Shares Traded": 458931191,
      "Turnover (Rs. Cr)": 19199.32
    },
    {
      "Date": "24-Jul-2019",
      "Open": 11322.45,
      "High": 11359.75,
      "Low": 11229.8,
      "Close": 11271.3,
      "Shares Traded": 413202832,
      "Turnover (Rs. Cr)": 18353.13
    },
    {
      "Date": "25-Jul-2019",
      "Open": 11290.4,
      "High": 11361.4,
      "Low": 11239.35,
      "Close": 11252.15,
      "Shares Traded": 553676897,
      "Turnover (Rs. Cr)": 24329.21
    },
    {
      "Date": "26-Jul-2019",
      "Open": 11247.45,
      "High": 11307.6,
      "Low": 11210.05,
      "Close": 11284.3,
      "Shares Traded": 522670420,
      "Turnover (Rs. Cr)": 20350.38
    },
    {
      "Date": "29-Jul-2019",
      "Open": 11307.5,
      "High": 11310.95,
      "Low": 11152.4,
      "Close": 11189.2,
      "Shares Traded": 482862376,
      "Turnover (Rs. Cr)": 18705.92
    },
    {
      "Date": "30-Jul-2019",
      "Open": 11213.7,
      "High": 11267.45,
      "Low": 11072.65,
      "Close": 11085.4,
      "Shares Traded": 479059399,
      "Turnover (Rs. Cr)": 20545.71
    },
    {
      "Date": "31-Jul-2019",
      "Open": 11034.05,
      "High": 11145.3,
      "Low": 10999.4,
      "Close": 11118,
      "Shares Traded": 536694278,
      "Turnover (Rs. Cr)": 23681.22
    },
    {
      "Date": "01-Aug-2019",
      "Open": 11060.2,
      "High": 11076.75,
      "Low": 10881,
      "Close": 10980,
      "Shares Traded": 499918953,
      "Turnover (Rs. Cr)": 21048.32
    },
    {
      "Date": "02-Aug-2019",
      "Open": 10930.3,
      "High": 11080.15,
      "Low": 10848.95,
      "Close": 10997.35,
      "Shares Traded": 547416246,
      "Turnover (Rs. Cr)": 23972.04
    },
    {
      "Date": "05-Aug-2019",
      "Open": 10895.8,
      "High": 10895.8,
      "Low": 10782.6,
      "Close": 10862.6,
      "Shares Traded": 506556609,
      "Turnover (Rs. Cr)": 20824.1
    },
    {
      "Date": "06-Aug-2019",
      "Open": 10815.4,
      "High": 11018.55,
      "Low": 10813.8,
      "Close": 10948.25,
      "Shares Traded": 517891491,
      "Turnover (Rs. Cr)": 21676.4
    },
    {
      "Date": "07-Aug-2019",
      "Open": 10958.1,
      "High": 10975.65,
      "Low": 10835.9,
      "Close": 10855.5,
      "Shares Traded": 548465787,
      "Turnover (Rs. Cr)": 21228.28
    },
    {
      "Date": "08-Aug-2019",
      "Open": 10899.2,
      "High": 11058.05,
      "Low": 10842.95,
      "Close": 11032.45,
      "Shares Traded": 482471622,
      "Turnover (Rs. Cr)": 20667.6
    },
    {
      "Date": "09-Aug-2019",
      "Open": 11087.9,
      "High": 11181.45,
      "Low": 11062.8,
      "Close": 11109.65,
      "Shares Traded": 538063563,
      "Turnover (Rs. Cr)": 21092.05
    },
    {
      "Date": "13-Aug-2019",
      "Open": 11139.4,
      "High": 11145.9,
      "Low": 10901.6,
      "Close": 10925.85,
      "Shares Traded": 624634647,
      "Turnover (Rs. Cr)": 24790.67
    },
    {
      "Date": "14-Aug-2019",
      "Open": 11003.25,
      "High": 11078.15,
      "Low": 10935.6,
      "Close": 11029.4,
      "Shares Traded": 511541716,
      "Turnover (Rs. Cr)": 19712.81
    },
    {
      "Date": "16-Aug-2019",
      "Open": 11043.65,
      "High": 11068.65,
      "Low": 10924.3,
      "Close": 11047.8,
      "Shares Traded": 470909918,
      "Turnover (Rs. Cr)": 19281.91
    },
    {
      "Date": "19-Aug-2019",
      "Open": 11094.8,
      "High": 11146.9,
      "Low": 11037.85,
      "Close": 11053.9,
      "Shares Traded": 369493161,
      "Turnover (Rs. Cr)": 14120.35
    },
    {
      "Date": "20-Aug-2019",
      "Open": 11063.9,
      "High": 11076.3,
      "Low": 10985.3,
      "Close": 11017,
      "Shares Traded": 444715679,
      "Turnover (Rs. Cr)": 16915.96
    },
    {
      "Date": "21-Aug-2019",
      "Open": 11018.15,
      "High": 11034.2,
      "Low": 10906.65,
      "Close": 10918.7,
      "Shares Traded": 557867906,
      "Turnover (Rs. Cr)": 16747.99
    },
    {
      "Date": "22-Aug-2019",
      "Open": 10905.3,
      "High": 10908.25,
      "Low": 10718.3,
      "Close": 10741.35,
      "Shares Traded": 668193449,
      "Turnover (Rs. Cr)": 18764.38
    },
    {
      "Date": "23-Aug-2019",
      "Open": 10699.6,
      "High": 10862.55,
      "Low": 10637.15,
      "Close": 10829.35,
      "Shares Traded": 667079625,
      "Turnover (Rs. Cr)": 20983.75
    },
    {
      "Date": "26-Aug-2019",
      "Open": 11000.3,
      "High": 11070.3,
      "Low": 10756.55,
      "Close": 11057.85,
      "Shares Traded": 684141923,
      "Turnover (Rs. Cr)": 22375.99
    },
    {
      "Date": "27-Aug-2019",
      "Open": 11106.55,
      "High": 11141.75,
      "Low": 11049.5,
      "Close": 11105.35,
      "Shares Traded": 685551267,
      "Turnover (Rs. Cr)": 27413.16
    },
    {
      "Date": "28-Aug-2019",
      "Open": 11101.3,
      "High": 11129.65,
      "Low": 10987.65,
      "Close": 11046.1,
      "Shares Traded": 549954696,
      "Turnover (Rs. Cr)": 16739.43
    },
    {
      "Date": "29-Aug-2019",
      "Open": 10996.05,
      "High": 11021.1,
      "Low": 10922.4,
      "Close": 10948.3,
      "Shares Traded": 649876160,
      "Turnover (Rs. Cr)": 20127.77
    },
    {
      "Date": "30-Aug-2019",
      "Open": 10987.8,
      "High": 11042.6,
      "Low": 10874.8,
      "Close": 11023.25,
      "Shares Traded": 628154431,
      "Turnover (Rs. Cr)": 21057.31
    },
    {
      "Date": "03-Sep-2019",
      "Open": 10960.95,
      "High": 10967.5,
      "Low": 10772.7,
      "Close": 10797.9,
      "Shares Traded": 483038985,
      "Turnover (Rs. Cr)": 16595.6
    },
    {
      "Date": "04-Sep-2019",
      "Open": 10790.4,
      "High": 10858.75,
      "Low": 10746.35,
      "Close": 10844.65,
      "Shares Traded": 508784352,
      "Turnover (Rs. Cr)": 19195.1
    },
    {
      "Date": "05-Sep-2019",
      "Open": 10860.95,
      "High": 10920.1,
      "Low": 10816,
      "Close": 10847.9,
      "Shares Traded": 595699267,
      "Turnover (Rs. Cr)": 18279.88
    },
    {
      "Date": "06-Sep-2019",
      "Open": 10883.8,
      "High": 10957.05,
      "Low": 10867.45,
      "Close": 10946.2,
      "Shares Traded": 497214445,
      "Turnover (Rs. Cr)": 18167.78
    },
    {
      "Date": "09-Sep-2019",
      "Open": 10936.7,
      "High": 11028.85,
      "Low": 10889.8,
      "Close": 11003.05,
      "Shares Traded": 412471067,
      "Turnover (Rs. Cr)": 14762.07
    },
    {
      "Date": "11-Sep-2019",
      "Open": 11028.5,
      "High": 11054.8,
      "Low": 11011.65,
      "Close": 11035.7,
      "Shares Traded": 687140326,
      "Turnover (Rs. Cr)": 19550.59
    },
    {
      "Date": "12-Sep-2019",
      "Open": 11058.3,
      "High": 11081.75,
      "Low": 10964.95,
      "Close": 10982.8,
      "Shares Traded": 551436050,
      "Turnover (Rs. Cr)": 17510.17
    },
    {
      "Date": "13-Sep-2019",
      "Open": 10986.8,
      "High": 11084.45,
      "Low": 10945.75,
      "Close": 11075.9,
      "Shares Traded": 624305151,
      "Turnover (Rs. Cr)": 18012.76
    },
    {
      "Date": "16-Sep-2019",
      "Open": 10994.85,
      "High": 11052.7,
      "Low": 10968.2,
      "Close": 11003.5,
      "Shares Traded": 434449776,
      "Turnover (Rs. Cr)": 15786.17
    },
    {
      "Date": "17-Sep-2019",
      "Open": 11000.1,
      "High": 11000.1,
      "Low": 10796.5,
      "Close": 10817.6,
      "Shares Traded": 482013044,
      "Turnover (Rs. Cr)": 17721.93
    },
    {
      "Date": "18-Sep-2019",
      "Open": 10872.8,
      "High": 10885.15,
      "Low": 10804.85,
      "Close": 10840.65,
      "Shares Traded": 519155072,
      "Turnover (Rs. Cr)": 16784.43
    },
    {
      "Date": "19-Sep-2019",
      "Open": 10845.2,
      "High": 10845.2,
      "Low": 10670.25,
      "Close": 10704.8,
      "Shares Traded": 642599183,
      "Turnover (Rs. Cr)": 16642.83
    },
    {
      "Date": "20-Sep-2019",
      "Open": 10746.8,
      "High": 11381.9,
      "Low": 10691,
      "Close": 11274.2,
      "Shares Traded": 1356767450,
      "Turnover (Rs. Cr)": 54081.53
    },
    {
      "Date": "23-Sep-2019",
      "Open": 11542.7,
      "High": 11694.85,
      "Low": 11471.35,
      "Close": 11600.2,
      "Shares Traded": 882826741,
      "Turnover (Rs. Cr)": 40005.01
    },
    {
      "Date": "24-Sep-2019",
      "Open": 11590.7,
      "High": 11655.05,
      "Low": 11539.2,
      "Close": 11588.2,
      "Shares Traded": 651722255,
      "Turnover (Rs. Cr)": 26930.07
    },
    {
      "Date": "25-Sep-2019",
      "Open": 11564.85,
      "High": 11564.95,
      "Low": 11416.1,
      "Close": 11440.2,
      "Shares Traded": 629054640,
      "Turnover (Rs. Cr)": 25266.24
    },
    {
      "Date": "26-Sep-2019",
      "Open": 11469.85,
      "High": 11610.85,
      "Low": 11466.35,
      "Close": 11571.2,
      "Shares Traded": 844465614,
      "Turnover (Rs. Cr)": 30707.84
    },
    {
      "Date": "27-Sep-2019",
      "Open": 11556.35,
      "High": 11593.6,
      "Low": 11499.75,
      "Close": 11512.4,
      "Shares Traded": 650017280,
      "Turnover (Rs. Cr)": 19036.94
    },
    {
      "Date": "30-Sep-2019",
      "Open": 11491.15,
      "High": 11508.25,
      "Low": 11390.8,
      "Close": 11474.45,
      "Shares Traded": 756848686,
      "Turnover (Rs. Cr)": 23748.07
    },
    {
      "Date": "01-Oct-2019",
      "Open": 11515.4,
      "High": 11554.2,
      "Low": 11247.9,
      "Close": 11359.9,
      "Shares Traded": 1305415159,
      "Turnover (Rs. Cr)": 28972.72
    },
    {
      "Date": "03-Oct-2019",
      "Open": 11322.25,
      "High": 11370.4,
      "Low": 11257.35,
      "Close": 11314,
      "Shares Traded": 1017479514,
      "Turnover (Rs. Cr)": 21658.38
    },
    {
      "Date": "04-Oct-2019",
      "Open": 11388.45,
      "High": 11400.3,
      "Low": 11158.35,
      "Close": 11174.75,
      "Shares Traded": 928524450,
      "Turnover (Rs. Cr)": 22470.76
    }
  ];

let xAxis = [],
    yAxis = [];
nseData.forEach(nse => {
    xAxis.push(nse['Date']) 
    yAxis.push(nse['High'])
});
console.log(xAxis, yAxis)

document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('stock-chart', {
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
});