const cars = [
    {
        id: 0,
        year: "2020",
        make: "Mercedes",
        image: "https://images.unsplash.com/photo-1546518071-fddcdda7580a?auto=format&fit=crop&q=80&w=1364&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isUsed: false
    },
    {
        id: 1,
        year: "2023",
        make:"Chevrolet",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isUsed: false
    },
    {
        id: 2,
        year: "2023",
        make:"Porsche",
        image: "https://images.unsplash.com/photo-1597858520171-563a8e8b9925?auto=format&fit=crop&q=80&w=1227&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isUsed: true
    },
]

const getAll = () => {
    return cars;
}

module.exports = {
    getAll,
}