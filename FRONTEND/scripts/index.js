document.getElementById("fetch-data").addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:3000/api/get");
        const data = await response.text();
        document.getElementById("response").textContent = data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
