// Select all unit option radio buttons
const radioButtons = document.querySelectorAll('input[name="unit"]');

// Define pricing per option
const prices = {
  "1": "$10.00 USD",
  "2": "$18.00 USD",
  "3": "$24.00 USD"
};

// Loop through each radio button
radioButtons.forEach(radio => {
  radio.addEventListener('change', () => {
    // Hide all expandable content sections
    document.querySelectorAll('.expand-content').forEach(section => {
      section.style.display = 'none';
    });

    // Find parent box of the clicked radio
    const parentBox = radio.closest('.option-box');

    // Show expandable section if it exists inside this box
    const expandContent = parentBox.querySelector('.expand-content');
    if (expandContent) {
      expandContent.style.display = 'block';
    }

    // Update the total price
    const totalPriceEl = document.getElementById('total-price');
    if (totalPriceEl) {
      totalPriceEl.textContent = prices[radio.value] || "$0.00 USD";
    }
  });
});

