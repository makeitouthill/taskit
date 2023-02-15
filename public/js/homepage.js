// Get the create job modal and its components
const createJobModal = document.getElementById("createJobModal");
const jobDescription = document.getElementById("job-description");
const serviceSelect = document.getElementById("serviceSelect");
const serviceProviderSelect = document.getElementById("serviceProviderSelect");
const jobOfferInput = document.getElementById("jobOfferInput");
const createJobForm = document.getElementById("createJobForm");

// Get the create job button and close button
const createJobButtons = document.querySelectorAll(".create-job-btn");
const closeButtons = document.querySelectorAll(".close-modal");

// Open the create job modal when the create job button is clicked
createJobButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const jobOfferId = button.dataset.jobOfferId;
    const jobOfferEl = document.querySelector(`[data-job-offer-id="${jobOfferId}"]`);
    jobDescription.value = jobOfferEl.previousElementSibling; //.querySelector('.job-description').textContent;
    const serviceId = jobOfferEl.dataset.serviceId;
    serviceSelect.value = serviceId;
    const serviceProviderId = jobOfferEl.dataset.userId;
    serviceProviderSelect.value = serviceProviderId;
    jobOfferInput.value = jobOfferId;
    createJobModal.style.display = 'block';
  });
});

// Close the create job modal when the close button is clicked
closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    createJobModal.style.display = 'none';
  });
});

// Submit the create job form using fetch when the form is submitted
createJobForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(createJobForm);
  const response = await fetch("/api/jobs", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    createJobModal.style.display = 'none';
    alert("Job created successfully");
  } else {
    const error = await response.json();
    alert(error.message);
  }
});

// Load the services and service providers when the page loads
window.addEventListener("load", async (event) => {
  // Load the services
  const serviceSelectOptions = document.querySelectorAll('#serviceSelect option');
  const services = Array.from(serviceSelectOptions).map(option => ({id: option.value, service_name: option.textContent}));

  // Load the service providers
  const serviceProviderSelectOptions = document.querySelectorAll('#serviceProviderSelect option');
  const serviceProviders = Array.from(serviceProviderSelectOptions).map(option => {
    const [firstName, lastName] = option.textContent.split(' ');
    return {id: option.value, first_name: firstName, last_name: lastName};
  });
});
