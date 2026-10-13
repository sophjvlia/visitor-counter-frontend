const API_URL = "https://l3qs6i8ob2.execute-api.ap-southeast-1.amazonaws.com/Prod/count?page=home";

window.addEventListener("DOMContentLoaded", () => {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            document.getElementById("visitor-count").textContent = data.body.count;
        })
        .catch(error => {
            console.error("Error fetching visitor count:", error);
            document.getElementById("visitor-count").textContent = "0";
        });
});