export const routes = [
    { path: '/products', label: 'All', active: true },
    { path: '/products?mobile=true&brand=apple', label: 'Apple', },
    { path: '/products?mobile=true&brand=samsung', label: 'Samsung' },
    { path: '/products?mobile=true&brand=google', label: 'Google' },
    { path: '/products?mobile=true&brand=tcl', label: 'TCL' },
    { path: '/products?mobile=true&brand=nokia', label: 'Nokia' },
];

const mobileRoutes = [
    { path: 'apple', label: 'Apple', },
    { path: 'samsung', label: 'Samsung', },
    { path: 'google', label: 'Google', },
    { path: 'tcl', label: 'TCL', },
    { path: 'nokia', label: 'Nokia', },
];

const tabletRoutes = [
    { path: 'apple', label: 'Apple', },
    { path: 'samsung', label: 'Samsung', },
];

const headsets = [
    { path: 'apple', label: 'Apple', },
    { path: 'samsung', label: 'Samsung', },
];

const laptops = [
    { path: 'apple', label: 'Apple' },

];

const questVR = [
    { path: 'apple', label: 'Apple Vision Pro' },
    { path: 'meta', label: 'Meta Quest' },
]


export { mobileRoutes, questVR, laptops, headsets, tabletRoutes }