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

const categoryTypesRoutes = [
    {
        category: "mobile", values: [{
            id: crypto.randomUUID(),
            name: "Apple", slug: "apple", logo: "/icons/product/apple.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Samsung", slug: "samsung", logo: "/icons/product/samsung-96-color.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Huawei", slug: "huawei", logo: "/icons/product/huawei-64.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Xiaomi", slug: "xiaomi", logo: "/icons/product/xiaomi-100.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "ZTE", slug: "zte", logo: "/icons/product/zte.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Nubia", slug: "nubia", logo: "/icons/product/nubia.svg"
        },
        ]
    },
    {
        category: "laptops", values: [{
            id: crypto.randomUUID(),
            name: "Apple", slug: "apple", logo: "/icons/product/apple.svg"
        },
        ]
    },
    {
        category: "tablet", values: [{
            id: crypto.randomUUID(),
            name: "Apple", slug: "apple", logo: "/icons/product/apple.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Samsung", slug: "samsung", logo: "/icons/product/samsung-96-color.svg"
        },
        ]
    },
    {
        category: "headsets", values: [{
            id: crypto.randomUUID(),
            name: "Apple", slug: "apple", logo: "/icons/product/apple.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Samsung", slug: "samsung", logo: "/icons/product/samsung-96-color.svg"
        }]
    },
    {
        category: "watches", values: [{
            id: crypto.randomUUID(),
            name: "Apple", slug: "apple", logo: "/icons/product/apple.svg"
        }, {
            id: crypto.randomUUID(),
            name: "Samsung", slug: "samsung", logo: "/icons/product/samsung-96-color.svg"
        }]
    },
    {
        category: "vr", values: [{
            id: crypto.randomUUID(),
            name: "Apple", slug: "apple", logo: "/icons/product/apple.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Meta Quest 3", slug: "meta-quest-3", logo: "/icons/product/meta-quest-3.svg"
        }],
    }
];

const otherBrands = [
    { id: 1, name: 'Huawei', slug: 'huawei', icon: '/icons/product/huawei.svg' },
    { id: 2, name: 'Nokia', slug: 'nokia', icon: '/icons/product/nokia.svg' },
    { id: 3, name: 'Oppo', slug: 'oppo', icon: '/icons/product/oppo.svg' },
    { id: 4, name: 'Xiaomi', slug: 'xiaomi', icon: '/icons/product/xiaomi.svg' },
    { id: 5, name: 'TCL', slug: 'tcl', icon: '/icons/product/tcl.svg' },
    { id: 6, name: 'ZTE', slug: 'zte', icon: '/icons/product/zte.svg' },
]

export { productRoutes, categoryTypesRoutes, otherBrands }
export default publicRoutes