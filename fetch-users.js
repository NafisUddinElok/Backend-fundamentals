async function fetchUsers() {
  try {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    console.log("Fetched Users:", users);
  }
    catch (error) {
    console.error("Error fetching users:", error);
  }
}
fetchUsers();

// post request ( sending data to server)
async function createUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify({
                    name: "Nafis from Vater hotel Sust",
                    username: "nafisvaterhotel",
                    email: "nafis@example.com"
                }),
            }
        );  
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const newUser = await response.json();
        console.log("Created User:", newUser);
    } catch (error) {
        console.error("Error creating user:", error);
    }
}
createUser();