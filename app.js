document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#search");

    button.addEventListener("click", () => {
        fetch("superheroes.php")
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error(error);
            });
    });
});