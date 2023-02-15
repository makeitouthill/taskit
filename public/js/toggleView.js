const toggleButton = document.querySelector("#toggle-button");

toggleButton.addEventListener("click", async function() {
  const user = JSON.parse(localStorage.getItem('user'));
  const currentView = getCurrentViewPreference(user.id);
  const updatedView = toggleViewPreference(currentView);

  const response = await fetch(`/users/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify({ viewPreference: updatedView }),
    headers: { "Content-Type": "application/json" }
  });

  if (response.ok) {
    console.log("View preference updated successfully.");
  } else {
    console.error("Failed to update view preference.");
  }
});

async function retrieveViewPreference(userId) {
  try {
    const user = await User.findOne({ where: { id: userId } });
    return user.view_preference;
  } catch (err) {
    console.error(err);
    return null;
  }
}

function toggleViewPreference(currentView) {
  if (currentView === "Client") {
    return "Provider";
  } else {
    return "Client";
  }
}