const form = document.getElementById('fruit-form');
const input = form['fruit-input'];

const API_URL = "http://localhost:3000/api";

async function fetchPoem(fruit) {
    console.log(fruit);

    try {
        const response = await fetch(
            API_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fruit)
            }
        );

        const message = await response.json();
        console.log(message);

    } catch (error) {
        console.error("Failed to fetch poem:", error);
    }
}

form.addEventListener(
    'submit',
    (event) => {
        event.preventDefault();

        console.log('input.value:', input.value);
        fetchPoem(input.value);

    }
);
