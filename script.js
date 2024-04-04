let myTableBody = document.querySelector("#table tbody");
let api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";



// if api not working
// let allElements = [
//     {
//           "id": "bitcoin",
//           "symbol": "btc",
//           "name": "Bitcoin",
//           "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
//           "current_price": 66348,
//           "market_cap": 1305525910580,
//           "market_cap_rank": 1,
//           "fully_diluted_valuation": 1393590476295,
//           "total_volume": 29804241411,
//           "high_24h": 66945,
//           "low_24h": 65135,
//           "price_change_24h": 236.21,
//           "price_change_percentage_24h": 0.35729,
//           "market_cap_change_24h": 8462618056,
//           "market_cap_change_percentage_24h": 0.65244,
//           "circulating_supply": 19672956,
//           "total_supply": 21000000,
//           "max_supply": 21000000,
//           "ath": 73738,
//           "ath_change_percentage": -10.01089,
//           "ath_date": "2024-03-14T07:10:36.635Z",
//           "atl": 67.81,
//           "atl_change_percentage": 97757.38353,
//           "atl_date": "2013-07-06T00:00:00.000Z",
//           "roi": null,
//           "last_updated": "2024-04-04T11:58:59.415Z"
//         },
//         {
//           "id": "ethereum",
//           "symbol": "eth",
//           "name": "Ethereum",
//           "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
//           "current_price": 3342.03,
//           "market_cap": 401659677947,
//           "market_cap_rank": 2,
//           "fully_diluted_valuation": 401659677947,
//           "total_volume": 13774565258,
//           "high_24h": 3365.2,
//           "low_24h": 3251.72,
//           "price_change_24h": 23.63,
//           "price_change_percentage_24h": 0.71202,
//           "market_cap_change_24h": 4171003603,
//           "market_cap_change_percentage_24h": 1.04934,
//           "circulating_supply": 120068372.18484,
//           "total_supply": 120068372.18484,
//           "max_supply": null,
//           "ath": 4878.26,
//           "ath_change_percentage": -31.40241,
//           "ath_date": "2021-11-10T14:24:19.604Z",
//           "atl": 0.432979,
//           "atl_change_percentage": 772771.24981,
//           "atl_date": "2015-10-20T00:00:00.000Z",
//           "roi": {
//             "times": 66.3572364310009,
//             "currency": "btc",
//             "percentage": 6635.72364310009
//           },
//           "last_updated": "2024-04-04T11:59:06.832Z"
//         },
//         {
//           "id": "tether",
//           "symbol": "usdt",
//           "name": "Tether",
//           "image": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
//           "current_price": 0.999997,
//           "market_cap": 106196025204,
//           "market_cap_rank": 3,
//           "fully_diluted_valuation": 106196025204,
//           "total_volume": 56803673049,
//           "high_24h": 1.003,
//           "low_24h": 0.99769,
//           "price_change_24h": -0.00104225087422993,
//           "price_change_percentage_24h": -0.10412,
//           "market_cap_change_24h": 761348895,
//           "market_cap_change_percentage_24h": 0.7221,
//           "circulating_supply": 106149786847.074,
//           "total_supply": 106149786847.074,
//           "max_supply": null,
//           "ath": 1.32,
//           "ath_change_percentage": -24.44728,
//           "ath_date": "2018-07-24T00:00:00.000Z",
//           "atl": 0.572521,
//           "atl_change_percentage": 74.60224,
//           "atl_date": "2015-03-02T00:00:00.000Z",
//           "roi": null,
//           "last_updated": "2024-04-04T11:56:20.583Z"
//         },
//         {
//           "id": "binancecoin",
//           "symbol": "bnb",
//           "name": "BNB",
//           "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
//           "current_price": 586.79,
//           "market_cap": 90248904788,
//           "market_cap_rank": 4,
//           "fully_diluted_valuation": 90248904788,
//           "total_volume": 1959153013,
//           "high_24h": 587.6,
//           "low_24h": 551.16,
//           "price_change_24h": 29.18,
//           "price_change_percentage_24h": 5.23272,
//           "market_cap_change_24h": 4691494382,
//           "market_cap_change_percentage_24h": 5.48345,
//           "circulating_supply": 153856150,
//           "total_supply": 153856150,
//           "max_supply": 200000000,
//           "ath": 686.31,
//           "ath_change_percentage": -14.4055,
//           "ath_date": "2021-05-10T07:24:17.097Z",
//           "atl": 0.0398177,
//           "atl_change_percentage": 1475225.62904,
//           "atl_date": "2017-10-19T00:00:00.000Z",
//           "roi": null,
//           "last_updated": "2024-04-04T11:59:26.616Z"
//         },
//         {
//           "id": "solana",
//           "symbol": "sol",
//           "name": "Solana",
//           "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
//           "current_price": 185.45,
//           "market_cap": 82714726755,
//           "market_cap_rank": 5,
//           "fully_diluted_valuation": 106588084869,
//           "total_volume": 3932167043,
//           "high_24h": 191.16,
//           "low_24h": 180.32,
//           "price_change_24h": -2.73878889310765,
//           "price_change_percentage_24h": -1.45535,
//           "market_cap_change_24h": -827833430.392227,
//           "market_cap_change_percentage_24h": -0.99091,
//           "circulating_supply": 444811820.383965,
//           "total_supply": 573194664.621989,
//           "max_supply": null,
//           "ath": 259.96,
//           "ath_change_percentage": -28.52905,
//           "ath_date": "2021-11-06T21:54:35.825Z",
//           "atl": 0.500801,
//           "atl_change_percentage": 36999.62221,
//           "atl_date": "2020-05-11T19:35:23.449Z",
//           "roi": null,
//           "last_updated": "2024-04-04T11:58:53.735Z"
//         },
//         {
//           "id": "usd-coin",
//           "symbol": "usdc",
//           "name": "USDC",
//           "image": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
//           "current_price": 0.999509,
//           "market_cap": 32895204454,
//           "market_cap_rank": 6,
//           "fully_diluted_valuation": 32931650783,
//           "total_volume": 10948232361,
//           "high_24h": 1.004,
//           "low_24h": 0.995656,
//           "price_change_24h": -0.000714510898624954,
//           "price_change_percentage_24h": -0.07144,
//           "market_cap_change_24h": 38470068,
//           "market_cap_change_percentage_24h": 0.11708,
//           "circulating_supply": 32866407461.6323,
//           "total_supply": 32902821885.2944,
//           "max_supply": null,
//           "ath": 1.17,
//           "ath_change_percentage": -14.66732,
//           "ath_date": "2019-05-08T00:40:28.300Z",
//           "atl": 0.877647,
//           "atl_change_percentage": 14.02102,
//           "atl_date": "2023-03-11T08:02:13.981Z",
//           "roi": null,
//           "last_updated": "2024-04-04T11:59:04.179Z"
//         },
//         {
//           "id": "staked-ether",
//           "symbol": "steth",
//           "name": "Lido Staked Ether",
//           "image": "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
//           "current_price": 3335.53,
//           "market_cap": 31912256582,
//           "market_cap_rank": 7,
//           "fully_diluted_valuation": 31912387517,
//           "total_volume": 80457509,
//           "high_24h": 3358.88,
//           "low_24h": 3248.32,
//           "price_change_24h": 21.5,
//           "price_change_percentage_24h": 0.64884,
//           "market_cap_change_24h": 253071750,
//           "market_cap_change_percentage_24h": 0.79936,
//           "circulating_supply": 9555804.13314219,
//           "total_supply": 9555843.34029768,
//           "max_supply": null,
//           "ath": 4829.57,
//           "ath_change_percentage": -30.87067,
//           "ath_date": "2021-11-10T14:40:47.256Z",
//           "atl": 482.9,
//           "atl_change_percentage": 591.3804,
//           "atl_date": "2020-12-22T04:08:21.854Z",
//           "roi": null,
//           "last_updated": "2024-04-04T11:59:04.552Z"
//         },
//         {
//           "id": "ripple",
//           "symbol": "xrp",
//           "name": "XRP",
//           "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
//           "current_price": 0.575567,
//           "market_cap": 31655624649,
//           "market_cap_rank": 8,
//           "fully_diluted_valuation": 57608956063,
//           "total_volume": 1508215888,
//           "high_24h": 0.586216,
//           "low_24h": 0.56334,
//           "price_change_24h": -0.00829740806675261,
//           "price_change_percentage_24h": -1.42112,
//           "market_cap_change_24h": -393866852.507557,
//           "market_cap_change_percentage_24h": -1.22893,
//           "circulating_supply": 54942400126,
//           "total_supply": 99987738355,
//           "max_supply": 100000000000,
//           "ath": 3.4,
//           "ath_change_percentage": -83.03642,
//           "ath_date": "2018-01-07T00:00:00.000Z",
//           "atl": 0.00268621,
//           "atl_change_percentage": 21361.44095,
//           "atl_date": "2014-05-22T00:00:00.000Z",
//           "roi": null,
//           "last_updated": "2024-04-04T11:59:26.998Z"
//         },
//         {
//           "id": "dogecoin",
//           "symbol": "doge",
//           "name": "Dogecoin",
//           "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
//           "current_price": 0.181814,
//           "market_cap": 26182269924,
//           "market_cap_rank": 9,
//           "fully_diluted_valuation": 26182810897,
//           "total_volume": 2570110240,
//           "high_24h": 0.184128,
//           "low_24h": 0.171171,
//           "price_change_24h": -0.00172267778272242,
//           "price_change_percentage_24h": -0.9386,
//           "market_cap_change_24h": -149758935.268951,
//           "market_cap_change_percentage_24h": -0.56873,
//           "circulating_supply": 143743636383.705,
//           "total_supply": 143746606383.705,
//           "max_supply": null,
//           "ath": 0.731578,
//           "ath_change_percentage": -75.13574,
//           "ath_date": "2021-05-08T05:08:23.458Z",
//           "atl": 0.0000869,
//           "atl_change_percentage": 209213.70742,
//           "atl_date": "2015-05-06T00:00:00.000Z",
//           "roi": null,
//           "last_updated": "2024-04-04T11:59:13.844Z"
//         },
//         {
//           "id": "cardano",
//           "symbol": "ada",
//           "name": "Cardano",
//           "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
//           "current_price": 0.581577,
//           "market_cap": 20541654360,
//           "market_cap_rank": 10,
//           "fully_diluted_valuation": 26205391037,
//           "total_volume": 455195582,
//           "high_24h": 0.588394,
//           "low_24h": 0.561905,
//           "price_change_24h": -0.00438559785458625,
//           "price_change_percentage_24h": -0.74844,
//           "market_cap_change_24h": -114289589.64745,
//           "market_cap_change_percentage_24h": -0.5533,
//           "circulating_supply": 35274209222.0096,
//           "total_supply": 45000000000,
//           "max_supply": 45000000000,
//           "ath": 3.09,
//           "ath_change_percentage": -81.13839,
//           "ath_date": "2021-09-02T06:00:10.474Z",
//           "atl": 0.01925275,
//           "atl_change_percentage": 2924.19812,
//           "atl_date": "2020-03-13T02:22:55.044Z",
//           "roi": null,
//           "last_updated": "2024-04-04T11:59:26.579Z"
//         }
// ];
// displayData(allElements);





// if api is working fine

// fetch by .then
let allElements = [];

document.addEventListener("DOMContentLoaded", function() {
    fetchingData(); 
});

// Define initial delay and increment for backoff mechanism
const initialDelay = 1000; // 1 second
const delayIncrement = 1000; // 1 second

// Variable to keep track of delay
let delay = initialDelay;

function fetchingData() {
    fetch(api, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
})
        .then((response) => response.json())
        .then((data) => {
            allElements = data;
            displayData(data); 
            delay = initialDelay; 
        })
        .catch((err) => {
            console.log("If api is not working fine, please visit my code and uncomment the array of objects provided, and the error is:",err);
            setTimeout(fetchingData, delay);
            delay += delayIncrement;
        });
}

// fetching data using async await
/*
async function fetchingData(){
    const res = await fetch(api);
    const data = await res.json();
    allElements = data;
    console.log(data);
    displayData(data);
};
*/


function displayData(data) {
    myTableBody.innerHTML = "";
    data.forEach((element) => {
        const image = document.createElement('img');
        image.src = element.image;
        const row = `
        <tr>
        <td><img src="${element.image}" alt="${element.name}" style= "margin-right: 0px !important"></td>
        <td>${element.name}</td>
        <td>${element.symbol.toUpperCase()}</td>
        <td>${element.total_volume}</td>
        <td>${element.current_price}</td>
        <td id=${element.symbol}>% ${-1 * element.price_change_percentage_24h}</td>
        <td>Mkt Cap: ${element.market_cap}</td>
        </tr>
        `;

        // let pg = document.getElementById(element.symbol);
        // if(element.price_change_percentage_24h > 0 || element.price_change_percentage_24h==0){
        //     pg.style.color = "green";
        // }else{
        //     pg.style.color = "red"
        // }
        myTableBody.innerHTML += row;
    });
}


function sortByMarketCap(data) {
    data.sort((a, b) => {
        const marketCapA = parseFloat(a.market_cap);
        const marketCapB = parseFloat(b.market_cap);

        if (marketCapA < marketCapB) {
            return -1;
        }
        if (marketCapA > marketCapB) {
            return 1;
        }
        return 0;
    });
    displayData(data);
}




function sortByPercentageChange(data) {
    data.sort((a, b) => {
        const percentageChangeA = parseFloat(a.price_change_percentage_24h);
        const percentageChangeB = parseFloat(b.price_change_percentage_24h);

        if (percentageChangeA < percentageChangeB) {
            return -1;
        }
        if (percentageChangeA > percentageChangeB) {
            return 1;
        }
        return 0;
    });
    displayData(data);
}


function searchByNameSymbol() {
    let searchInput = document.getElementById("search-input");
    let searchText = searchInput.value.trim().toLowerCase(); 
    let filteredData = allElements.filter(element => {
        return element.name.toLowerCase().includes(searchText) || element.symbol.toLowerCase().includes(searchText);
    });
    displayData(filteredData);
}


let searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", searchByNameSymbol);

let mktBtn = document.getElementById("sort-mkt");
mktBtn.addEventListener("click", (event) => {
    event.preventDefault();
    sortByMarketCap(allElements);
});

let pgBtn = document.getElementById("sort-pg");
pgBtn.addEventListener("click", (event) => {
    event.preventDefault();
    sortByPercentageChange(allElements);
});
