const url = "../data/lodging.json";
const cards = document.querySelector("#cards");

async function getLodgings() {
    await fetch(url)
        .then(response => response.json())
        .then((data) => {
            displayLodgings(data.lodgings);
        })
        .catch((error) => console.error("Error loading JSON file", error));
}

// returns promise
async function fetchLodgings() {
    return await new Promise((resolve, reject) => {
        resolve(
            fetch(url)
                .then(response => response.json())
                .catch((error) => console.error("Error loading JSON file", error))
        );
    },
        (reject) => { }
    );
}



const displayLodgings = (lodgings) => {
    lodgings.forEach((lodging) => {
        let card = document.createElement("section");
        let name = document.createElement("h6");
        let address = document.createElement("h6");
        let city = document.createElement("h6");
        let state = document.createElement("h6");
        let zip = document.createElement("h6");
        let rating = document.createElement("h6");

        name.innerHTML = lodging.name;
        address.innerHTML = lodging.address;
        city.innerHTML = lodging.city;
        state.innerHTML = lodging.state;
        zip.innerHTML = lodging.zip;
        rating.innerHTML = lodging.rating;

        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(city);
        card.appendChild(state);
        card.appendChild(zip);
        card.appendChild(rating);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
};


cards.addEventListener("mouseover", () => {
    // using the 'then' assures that the resolved promise is being used
    fetchLodgings().then(result => {
        displayLodgings(result.lodgings);
    }).catch(error => {
        console.error("Error fetching data:", error);
    });
});


cards.addEventListener("mouseout", () => {
    cards.innerHTML = "Lodging";
});