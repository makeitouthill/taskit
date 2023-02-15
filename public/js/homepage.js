// Add event listener to each job offer button
const jobOfferButtons = document.querySelectorAll('.job-offer-button');
jobOfferButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const jobOfferId = event.target.getAttribute('data-job-offer-id');

    // Populate form data
    const serviceId = document.querySelector('#service-id');
    const serviceProviderId = document.querySelector('#service-provider-id');
    const customerId = document.querySelector('#customer-id');

    const jobOffer = jobOffers.find((offer) => offer.id === parseInt(jobOfferId));
    jobTitle.value = jobOffer.description;
    serviceId.value = jobOffer.service_id;
    serviceProviderId.value = jobOffer.user_id;

    // Show modal
    const modal = document.querySelector('.modal');
    modal.classList.add('is-active');
  });
});

// Add event listener to close modal button
const closeModalButton = document.querySelector('.close-modal');
closeModalButton.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.classList.remove('is-active');
});

// Add event listener to create job form
const createJobForm = document.querySelector('#create-job-form');
createJobForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const jobTitle = document.querySelector('#job-title').value;
  const serviceId = document.querySelector('#service-id').value;
  const serviceProviderId = document.querySelector('#service-provider-id').value;
  const customerId = document.querySelector('#customer-id').value;
  const jobStatusNameId = 1; // Default to "Open" status

  const response = await fetch('/api/jobs', {
    method: 'POST',
    body: JSON.stringify({
      job_title: jobTitle,
      job_description: jobTitle,
      job_status_name_id: jobStatusNameId,
      service_id: serviceId,
      service_provider_id: serviceProviderId,
      customer_id: customerId
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    alert('Job created successfully!');
    const modal = document.querySelector('.modal');
    modal.classList.remove('is-active');
  } else {
    alert('Failed to create job');
  }
});