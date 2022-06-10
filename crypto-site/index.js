let oldArray = [
    {name:"Aave" , img:"images2/aave-logo.png"},
    {name:"Algorand" , img:"images2/algorand-logo.png"},
    {name:"Avalanche" , img:"images2/avalanche-logo.png"},
    {name:"Axie Infinity" , img:"images2/axie-infinity-logo.png"},
    {name:"Binance" , img:"images2/binance-logo.png"},
    {name:"Bitcoin Cash" , img:"images2/bitcoin-cash-logo.png"},
    {name:"Bitcoin" , img:"images2/bitcoin-logo.png"},
    {name:"Bnb" , img:"images2/bnb-logo.png"},
    {name:"Cardano" , img:"images2/cardano-logo.png"},
    {name:"Chainlink" , img:"images2/chainlink-logo.png"},
    {name:"Cosmos" , img:"images2/cosmos-logo.png"},
    {name:"Crypto.com Coin" , img:"images2/crypto-com-coin-logo.png"},
    {name:"Dai" , img:"images2/dai-logo.png"} ,
    {name:"Decentraland" , img:"images2/decentraland-logo.png"},
    {name:"DistrictOx" , img:"images2/districtOx-logo.png"},
    {name:"Dogecoin" , img:"images2/dogecoin-logo.png"},
    {name:"Elrond" , img:"images2/elrond-logo.png"},
    {name:"Eos" , img:"images2/eos-logo.png"},
    {name:"Ethereum Classic" , img:"images2/ethereum-classic-logo.png"},
    {name:"Filecoin" , img:"images2/filecoin-logo.png"},
    {name:"Flow" , img:"images2/flow-logo.png"},
    {name:"Ftx" , img:"images2/ftx-logo.png"},
    {name:"Hedera" , img:"images2/hedera-logo.png"},
    {name:"Helium" , img:"images2/helium-logo.png"},
    {name:"Huobi" , img:"images2/huobi-logo.png"},
    {name:"Internet Computer" , img:"images2/internet-computer-logo.png"},
    {name:"Klaytn" , img:"images2/klaytn-logo.png"},
    {name:"Kucoin Token" , img:"images2/kucoin-logo.png"},
    {name:"Litecoin" , img:"images2/litecoin-logo.png"},
    {name:"Maker" , img:"images2/maker-logo.png"},
    {name:"Monero" , img:"images2/monero-logo.png"},
    {name:"Near" , img:"images2/near-logo.png"},
    {name:"Polkadot" , img:"images2/polkadot-logo.png"},
    {name:"Polygon" , img:"images2/polygon-logo.png"},
    {name:"Shiba inu" , img:"images2/shiba-inu-logo.png"},
    {name:"Solana" , img:"images2/solana-logo.png"},
    {name:"Stellar" , img:"images2/stellar-logo.png"},
    {name:"Tether" , img:"images2/tether-logo.png"},
    {name:"Tezos" , img:"images2/tezos-logo.png"},
    {name:"The Sandbox" , img:"images2/the-sandbox-logo.png"},
    {name:"Theta Network" , img:"images2/theta-network-logo.png"},
    {name:"Tron" , img:"images2/tron-logo.png"},
    {name:"TrueUSD" , img:"images2/trueusd-logo.png"},
    {name:"Uniswap" , img:"images2/uniswap-logo.png"},
    {name:"Unus Sed Leo" , img:"images2/unus-sed-leo-logo.png"},
    {name:"USD Coin" , img:"images2/usd-coin-logo.png"},
    {name:"Vechain" , img:"images2/vechain-logo.png"},
    {name:"Wrapped Bitcoin" , img:"images2/wrapped-bitcoin-logo.png"},
    {name:"XRP" , img:"images2/xrp-logo.png"},
    {name:"Zcash" , img:"images2/zcash-logo.png"}
]



function hello(){
        let displayArray= []
        const newArray = oldArray.map((x) => {
            return (
                displayArray.push(`<div class="col-4 col-sm-3 col-lg-2 mt-2">
                <img class="crypto-img"  src=${x.img} />
                <h2 class="text-light text-center" >${x.name}</h2>
            </div>`)
            )
        })
        console.log(newArray)
       document.getElementById("newOnes").innerHTML = displayArray.join("")
        
}