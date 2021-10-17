const products = [
    {
        name: "覆盆塔",
        id:1001,
        category: "訂製蛋糕",
        img: require("@/assets/images/cake1001.jpg"),
        price:600,
        inventory: 0,
        description: "傳說孕育無數生命的太平洋，在月光下的照耀下，灌溉以徐徐的海風，將花開成神秘的海水藍...，復刻神秘傳說。",
    },
    {
        name: "提拉米蘇",
        id: 1002,
        category: "訂製蛋糕",
        img: require("@/assets/images/cake1002.jpg"),
        price: 48,
        inventory: 24,
        description: "頂層滿滿的莓果，沒在手軟的通通攏齁落拉，果酸與巧克力，意料之外的合適呢！",
    },
    {
        name: "酒漬櫻桃",
        id: 1003,
        category: "訂製蛋糕",
        img: require("@/assets/images/cake1003.jpg"),
        price: 70,
        inventory: 16,
        description: "頂層滿滿的莓果，沒在手軟的通通攏齁落拉，果酸與巧克力，意料之外的合適呢！",
    },
    {
        name: "重乳酪",
        id: 1004,
        category: "訂製蛋糕",
        img: require("@/assets/images/cake1004.jpg"),
        price: 600,
        inventory: 10,
        description: "頂層滿滿的莓果，沒在手軟的通通攏齁落拉，果酸與巧克力，意料之外的合適呢！",
    },
    {
        name: "oreo杯子",
        id: 2001,
        category: "杯子蛋糕",
        img: require ("@/assets/images/cupcake2001.jpg"),
        price: 90,
        inventory: 20,
        description: "結合經典的oreo，搭配濃郁的100%法芙娜巧克力"
    },
    // {
    //     name: "榛果焦糖杯子",
    //     id: 2002,
    //     category: "杯子蛋糕",
    //     img: require("@/assets/images/cupcake2002.jpg"),
    //     price: 110,
    //     inventory: "30",
    //     description: "最簡單的甜點，卻滿載童年天馬行空的想像，吃一口吧！坐上時光機，來場放鬆的白日夢之旅～"
    // },
    {
        name: "春天杯子",
        id: 2003,
        category: "杯子蛋糕",
        img: require("@/assets/images/cupcake2003.jpg"),
        price: 180,
        inventory: 0,
        description: "最簡單的甜點，卻滿載童年天馬行空的想像，吃一口吧！坐上時光機，來場放鬆的白日夢之旅～"
    },
    {
        name: "綜合杯子",
        id: 2004,
        category: "杯子蛋糕",
        img: require("@/assets/images/cupcake2004.jpg"),
        price: 100,
        inventory: 20,
        description: "結合經典的oreo，搭配濃郁的100%法芙娜巧克力"
    },
    {
        name: "繽紛杯子",
        id: 2005,
        category: "杯子蛋糕",
        img: require("@/assets/images/cupcake2005.jpg"),
        price: 90,
        inventory: 20,
        description: "結合經典的oreo，搭配濃郁的100%法芙娜巧克力"
    },
    {
        name: "造型餅乾",
        id: 3001,
        category: "精緻小點",
        img: require("@/assets/images/tiny3001.jpg"),
        price: 120,
        inventory: 0,
        description: "最簡單的甜點，卻滿載童年天馬行空的想像，吃一口吧！坐上時光機，來場放鬆的白日夢之旅～"
    },
    {
        name: "手工餅乾",
        id: 3002,
        category: "精緻小點",
        img: require("@/assets/images/tiny3002.jpg"),
        price: 50,
        inventory: 20,
        description: "最簡單的甜點，卻滿載童年天馬行空的想像，吃一口吧！坐上時光機，來場放鬆的白日夢之旅～"
    },
    {
        name: "馬卡伯爵",
        id: 4001,
        category: "馬卡龍",
        img: require("@/assets/images/macaron4001.jpg"),
        price: 90,
        inventory: 100,
        description: "最簡單的甜點，卻滿載童年天馬行空的想像，吃一口吧！坐上時光機，來場放鬆的白日夢之旅～"
    },
    {
        name: "馬卡綜合",
        id: 4002,
        category: "馬卡龍",
        img: require("@/assets/images/macaron4002.jpg"),
        price: 80,
        inventory: 40,
        description: "最簡單的甜點，卻滿載童年天馬行空的想像，吃一口吧！坐上時光機，來場放鬆的白日夢之旅～"
    },
    {
        name: "蘋果派",
        id: 5001,
        category: "經典下午茶",
        img: require("@/assets/images/tea5001.jpg"),
        price: 40,
        inventory: 20,
        description: "最簡單的甜點，卻滿載童年天馬行空的想像，吃一口吧！坐上時光機，來場放鬆的白日夢之旅～"
    },
    {
        name: "檸檬塔",
        id: 5002,
        category: "經典下午茶",
        img: require("@/assets/images/tea5002.jpg"),
        price: 180,
        inventory: 100,
        description: "最簡單的甜點，卻滿載童年天馬行空的想像，吃一口吧！坐上時光機，來場放鬆的白日夢之旅～"
    },
];

export default products;