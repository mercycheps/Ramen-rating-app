document.addEventListener("DOMContentLoaded", main);
// array of ramen images,resturants,rating and comments
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 6, comment: "Delicious!" },
    { id: 2, name: "Nirvana Ramen", restaurant: "Menya", image: "images/nirvana.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "images/naruto.jpg", rating: 8, comment: "Average taste." },
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Ichiran", image: "images/gyukotsu.jpg", rating: 5, comment: "Spicy!" },
    { id: 5, name: "Kojiro Ramen", restaurant: "Menya", image: "images/kojiro.jpg", rating: 7, comment: "Yummy!" }
];
////function to display ramen resturants ,images,rating and comments
function showRamenMenu() {
    const menuContainer = document.getElementById("ramen-menu");
    menuContainer.innerHTML = "";

    ramens.forEach(ramen => {
        const ramenDiv = document.createElement("div");
        ramenDiv.innerHTML = `
            
            <img src="${ramen.image}" alt="${ramen.name} Ramen" style="width: 100px; height: 100px;">
            
            
        `;
        ramenDiv.style.float = "left";
        ramenDiv.style.textAlign = "center";
        

        menuContainer.appendChild(ramenDiv);
        menuContainer.style.textAlign = "center";
    });

}


function addSubmitListener() {
    document.getElementById("ramen-form").addEventListener("submit", function(event) {
        event.preventDefault();
// function to handle new ramen form submission
        const name = document.getElementById("name").value;
        const restaurant = document.getElementById("restaurant").value;
        const image = document.getElementById("image").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;
// creating new ramen div
        const newRamenDiv = document.createElement("div");
        newRamenDiv.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Restaurant:</strong> ${restaurant}</p>
            <img src="${image}" alt="${name} Ramen" width="200">
            <p><strong>Rating:</strong> ${rating}</p>
            <p><strong>Comment:</strong> ${comment}</p>
             <hr>
        `;
// appending new ramen div
        document.getElementById("ramen-menu").appendChild(newRamenDiv);

        event.target.reset();
    });
}
// the main function
function main() {
    showRamenMenu();   
    addSubmitListener();
}

main();

    



