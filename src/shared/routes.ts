const publicRoutes = ["/sign-in", "/sign-up", "/"];

const productRoutes = [
    {
        key: "apple", values: [{
            key: "iphone",
            value: "iPhone",
        }, {
            key: "ipad",
            value: "iPad",
        }, {
            key: "macbook",
            value: "Macbook",
        }, {
            key: "watch",
            value: "iWatch",
        }, {
            key: "earbuds",
            value: "Earbuds",
        }]
    },
    {
        key: "samsung",
        values: [
            { key: "galaxy", value: "Galaxy" },
            { key: "galaxy-tab", value: "Galaxy Tab" },
            { key: "galaxy-watch", value: "Galaxy Watch" },
            { key: "galaxy-buds", value: "Galaxy Buds" }
        ]
    },
]
export { productRoutes }
export default publicRoutes