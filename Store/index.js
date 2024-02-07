// const url = "https://understudystudent.github.io/vDay2/data/";

// function storeData(name, data){
//     localStorage.setItem(name, JSON.stringify(data));
// }

// fetch(url).then((response)=>{
//     console.log(response)
// })

let products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) :
localStorage.setItem('products', JSON.stringify
([{
    Class: [
        {
            "name": "Thimna",
            "surname": "Alam",
            "profile": "https://i.postimg.cc/Pq6Fc3BM/IMG-1409.jpg"
        },
        {
            "name": "Veronique",
            "surname": "Nappie",
            "profile": "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYRhrwtVJTXa6CLIs7ukjQhAGg5tF6tfUPuRQg9pbpUJh8DPD3cXflSxk_Yx3AwJJ-pYEAd8RQWnA4d-X2QoTslI49B_ow=w1920-h868"
        },
        {
            "name": "Tamlin",
            "surname": "Geyer",
            "profile": "https://i.postimg.cc/VkTyGFPK/20240110-121622.jpg"
        },
        {
            "name": "Sivuyisiwe",
            "surname": "Peter",
            "profile": "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYRRMrYjLNGHbACtzeidTaT3Vcjv4o9jx45JJU-72p3ERGZip8TBKI2X4Xol6GAbVM879gb3ij4M5mVSbvML-P0avM5Y6Q=w1920-h868"
        },
        {
            "name": "Aakeefah",
            "surname": "Jones",
            "profile": "https://i.postimg.cc/NjLqkzSy/20231101-195430.jpg"
        },
        {
            "name": "Pinda",
            "surname": "Fortuin",
            "profile": "https://i.postimg.cc/J46S0Q0R/res.jpg"
        },
        {
            "name": "Nathalie",
            "surname": "Willemse",
            "profile": "https://ibb.co/ggnL3cn"
        },
        {
            "name": "Aneeqa",
            "surname": "Louw",
            "profile": "https://ibb.co/jbJVWgh"
        },
        {
            "name": "Seth",
            "surname": "Tobias",
            "profile": "https://ibb.co/xD1DwHv"
        }
    ]
}
])

function showProducts() {
    productGrid.innerHTML = ""
    if (products) {
        // loop through the product in array

        products.forEach((product, index) => {
            // Add product HTML to the productGrid
            productGrid.innerHTML += `
            <div class="card my-3 mx-3">
            <img src="${product.img}" class="card-img-top text-center" style="height: 300px; object-fit: cover;"></img>
                <div class="card-body">
                    <h5 class="card-title text-center">${product.make}</h5>
                    <p class="card-text text-center">${product.name}</p>
                    <p class="card-text text-center">R${product.amount}.00</p>
                    <a href="#" class="btn btn-dark d-flex justify-content-center" addToCartBtn="${index}">Add to Cart</a>
                </div>
            </div>
            `;
        });