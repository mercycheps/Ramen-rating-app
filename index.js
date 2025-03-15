const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Nirvana Ramen", restaurant: "Menya", image: "images/nirvana.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "images/naruto.jpg", rating: 3, comment: "Average taste." },
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Ichiran", image: "images/gyukotsu.jpg", rating: 2, comment: "Spicy!" },
    { id: 5, name: "Kojiro Ramen", restaurant: "Menya", image: "images/kojiro.jpg", rating: 3, comment: "Yummy!" }
 ];
 //function to display ramen resturants ,images,rating and comments
 const ramenList = document.getElementById("ramen-img");
 ramens.forEach(ramen => {
    const ramenDiv = document.createElement("div");
    ramenDiv.innerHTML = `
        <h2>${ramen.name}</h2>
        <p>Restaurant: ${ramen.restaurant}</p>
        <img src="${ramen.image}" alt="${ramen.name} Ramen" width="200">
        <p>Rating: ${ramen.rating}</p>
        <p>Comment: ${ramen.comment}</p>
    `;
    ramenList.appendChild(ramenDiv);
 })

//function to handle new ramen form submission
function addSubmitListener() {
    document.getElementById("ramen-form").addEventListener("submit", function(event) {
        event.preventDefault();
    

    const name = document.getElementById("name").value;
    const restaurant = document.getElementById("restaurant").value;
    const image = document.getElementById("image").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    const ramenImage = document.createElement("img");
    ramenImage.src = image;
    ramenImage.alt = name;
    ramenImage.width = 200;

    document.getElementById("ramen-menu").appendChild(ramenImage);
    event.target.reset();
 });
}
function main() {
    displayRamen();
    addSubmitListener();
}






 


 
 
 
