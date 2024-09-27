

type CustomButtonData = {
  id: string;
  name: string;
  link: string;
}

export interface FlamelingToken {
    id: number;
    name: string;
    refLink: string;
    nftUrl: string;
    imageUrl: string;
    contract: string;
    pair: string;
    mc: number;
    ticker: string;
    scanLink: string;
    chartLink: string;
    lockLink: string;
    tgLink: string;
    xLink: string;
    holderPercentage: string;
    launch: string;
    customButtons?: CustomButtonData[];
}

export const flamelingTokens = new Map<string, FlamelingToken>([
    ["0x0", {
        id: 0,
        name: "FLAMELING 0x0",
        refLink: "/0x0",
        nftUrl: "https://opensea.io/assets/ethereum/0x49902747796c2abcc5ea640648551ddbc2c50ba2/0",
        imageUrl: "/flamelings/0x0.gif",
        contract: "0x54330fb563baf4ddede51d0b8af6a5c1edf0395d",
        pair: "0xab631ee05706e012daa9b5e382a6db526cccf297",
        mc: 0,
        ticker: "0X0",
        scanLink: "https://bscscan.com/token/0x54330fb563baf4ddede51d0b8af6a5c1edf0395d#code",
        chartLink: "https://www.dextools.io/app/en/bnb/pair-explorer/0xab631ee05706e012daa9b5e382a6db526cccf297",
        lockLink: "#",
        tgLink: "https://t.me/FLAMELING0X0",
        xLink: "https://twitter.com/0x0flameling",
        holderPercentage: "1",
        launch: "13 Feb '24"
    }],
    //     ["0x13", {
    //     id: 13,
    //     name: "FLAMELING 0x13",
    //     refLink: "/0x13",
    //     nftUrl: "https://opensea.io/assets/ethereum/0x49902747796c2abcc5ea640648551ddbc2c50ba2/13",
    //     imageUrl: "/flameling_moving.gif",
    //     contract: "0x96261e8Ed04FfDB190125FC48649eF106dD57886",
    //     pair: "0xd245f2b004fb095367376eba5cba4d7347a3cb74",
    //     mc: 0,
    //     ticker: "0x13",
    //     scanLink: "https://bscscan.com/address/0x96261e8Ed04FfDB190125FC48649eF106dD57886#code",
    //     chartLink: "https://www.dextools.io/app/en/bnb/pair-explorer/0xd245f2b004fb095367376eba5cba4d7347a3cb74",
    //     lockLink: "https://app.uncx.network/amm/pancake-v2/pair/0xd245f2b004fb095367376eba5cba4d7347a3cb74",
    //     tgLink: "https://t.me/FLAMELING0X0",
    //     xLink: "https://twitter.com/0x0flameling",
    //     holderPercentage: "1",
    //     launch: "13 Jan '24"
    // }],
    //     ["0x21", {
    //     id: 21,
    //     name: "FLAMELING 0x21",
    //     refLink: "/0x21",
    //     nftUrl: "https://opensea.io/assets/ethereum/0x49902747796c2abcc5ea640648551ddbc2c50ba2/21",
    //     imageUrl: "/flamelings/0x21.gif",
    //     contract: "0x3984e3807BC8ac705C9ED612Ad4BB7A7c4028f01",
    //     pair: "0x88386f86ee2a2248a7803029226818faf276e0bb",
    //     mc: 0,
    //     ticker: "0X21",
    //     scanLink: "https://bscscan.com/token/0x3984e3807BC8ac705C9ED612Ad4BB7A7c4028f01#code",
    //     chartLink: "https://www.dextools.io/app/en/bnb/pair-explorer/0x88386f86ee2a2248a7803029226818faf276e0bb",
    //     lockLink: "https://app.uncx.network/amm/pancake-v2/pair/0x88386f86ee2a2248a7803029226818faf276e0bb",
    //     tgLink: "https://t.me/FLAMELING0X21",
    //     xLink: "https://twitter.com/0X21Flameling",
    //     holderPercentage: "3",
    //     launch: "19 Jan '24"
    // }],
        ["0x52", {
        id: 52,
        name: "FLAMELING 0x52",
        refLink: "/0x52",
        nftUrl: "https://opensea.io/assets/ethereum/0x49902747796c2abcc5ea640648551ddbc2c50ba2/52",
        imageUrl: "/flamelings/0x52.gif",
        contract: "0x45e26b10ae6f95d9d5133720937693e17171f7f9",
        pair: "0x0f5a19112de8ccc4ed8e0e7e7bb26da3586bd6ff",
        mc: 0,
        ticker: "0X52",
        scanLink: "https://bscscan.com/token/0x45e26b10ae6f95d9d5133720937693e17171f7f9#code",
        chartLink: "https://www.dextools.io/app/en/bnb/pair-explorer/0x0f5a19112de8ccc4ed8e0e7e7bb26da3586bd6ff",
        lockLink: "https://app.uncx.network/amm/pancake-v2/pair/0x0f5a19112de8ccc4ed8e0e7e7bb26da3586bd6ff",
        tgLink: "https://t.me/FLAMELING0X52",
        xLink: "https://twitter.com/laylascreations",
        holderPercentage: "1",
        launch: "21 Mar '24"
    }],
        ["0x67", {
        id: 67,
        name: "FLAMELING 0x67",
        refLink: "/0x67",
        nftUrl: "https://opensea.io/assets/ethereum/0x49902747796c2abcc5ea640648551ddbc2c50ba2/67",
        imageUrl: "/flamelings/0x67.gif",
        contract: "0xc6c3a2e767f2f5deb6543bb085f0bf198d6d3d50",
        pair: "0x9fc222a4f0a55c161437c09edb9e406200ab3986",
        mc: 0,
        ticker: "0X67",
        scanLink: "https://bscscan.com/token/0xc6c3a2e767f2f5deb6543bb085f0bf198d6d3d50#code",
        chartLink: "https://www.dextools.io/app/en/bnb/pair-explorer/0x9fc222a4f0a55c161437c09edb9e406200ab3986",
        lockLink: "https://app.uncx.network/amm/pancake-v2/pair/0x9fc222a4f0a55c161437c09edb9e406200ab3986",
        tgLink: "https://t.me/OX67FLAMELING",
        xLink: "https://twitter.com/FlamelingOx67",
        holderPercentage: "1",
        launch: "05 Apr '24"
    }],
       
        ["0x177", {
        id: 177,
        name: "FLAMELING 0x177",
        refLink: "/0x177",
        nftUrl: "https://opensea.io/assets/ethereum/0x49902747796c2abcc5ea640648551ddbc2c50ba2/177",
        imageUrl: "/flamelings/0x177.gif",
        contract: "0xb0bcb4ede80978f12aa467f7344b9bdbcd2497f3",
        pair: "0x0804f5701f6b33e0d0d6acabbee2f129ff5b4d95",
        mc: 0,
        ticker: "0X177",
        scanLink: "https://bscscan.com/token/0xb0bcb4ede80978f12aa467f7344b9bdbcd2497f3#code",
        chartLink: "https://www.dextools.io/app/en/bnb/pair-explorer/0x0804f5701f6b33e0d0d6acabbee2f129ff5b4d95",
        lockLink: "https://app.uncx.network/amm/pancake-v2/pair/0x0804f5701f6b33e0d0d6acabbee2f129ff5b4d95",
        tgLink: "https://t.me/FLAMELING0X177",
        xLink: "https://twitter.com/flameling0x177",
        holderPercentage: "3",
        launch: "22 Feb '24",
            customButtons: [{
                id: "1",
                name: "Website",
                link: "https://seizethemomentum.com"
                }, {
                id: "2",
                name: "Store",
                link: "https://0X177.etsy.com"
                }]
    }]
])
