document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#search");
    const input = document.querySelector("#search-input");
    const resultDiv = document.querySelector("#result")

    button.addEventListener("click", () => {
        const query = input.value.trim();

        let url = "superheroes.php";
        if (query !== "") {
            url += "?query=" + encodeURIComponent(query);
        }
        fetch(url)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
                resultDiv.innerHTML = "<p>Oooops! Something went wrong.</p>";
            });
    });
});