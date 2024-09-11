// scripts.js
const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
});
const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submission started"); // Log form submission

    try {
        // Gather form data
        const formData = new FormData(form);
        console.log("Form data:", Object.fromEntries(formData)); // Log form data for debugging

        // Add loading state to the button
        const submitButton = document.querySelector(".cta-button");
        submitButton.classList.add("loading");
        submitButton.disabled = true; // Disable button during submission

        // Send form data using Fetch
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            console.log("Form successfully sent!"); // Log success
            alert("Thank you! Your message has been sent.");
            form.reset(); // Reset form inputs after submission
        } else {
            console.error("Form submission error:", response.statusText); // Log error response
            alert(
                "Oops! There was a problem sending your message. Please try again."
            );
        }
    } catch (error) {
        console.error("Submission failed:", error); // Catch network or other errors
        alert(
            "There was an error submitting the form. Please try again later."
        );
    } finally {
        // Remove loading state and enable button again
        const submitButton = document.querySelector(".cta-button");
        submitButton.classList.remove("loading");
        submitButton.disabled = false;
    }
});
