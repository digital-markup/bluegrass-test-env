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
    {
        key: "accessories", values: [
            { key: "speakers", value: "Speakers" },
            { key: "headphones", value: "Headphones" },
            { key: "earbuds", value: "Earbuds" },
            { key: "mouse-n-keyboard", value: "Mouse & Keyboard" },
            { key: "megsafe", value: "Megsafe" },
            { key: "homepods", value: "HomePods" },
        ]
    }
]
export { productRoutes }
export default publicRoutes