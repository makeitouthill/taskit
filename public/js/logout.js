const logoutButton = document.querySelector("#logout-button");

logoutButton.addEventListener("click", async function() {
    const response = await fetch('/logout', {
        method: 'GET',
    });
    
    if (response.ok) {
        localStorage.removeItem('user');
        document.location.replace('/login');
    } else {
        console.error("Failed to log out.");
    }
});