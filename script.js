const form = document.querySelector("#feedback-form");
const successState = document.querySelector("#success-state");
const submitButton = form.querySelector("button[type='submit']");
const errorBox = document.querySelector("#form-error");
const submitAnotherButton = document.querySelector("#submit-another");
const privacyButton = document.querySelector("#privacy-details");
const privacyCopy = document.querySelector("#privacy-copy");

const showError = (message) => {
  errorBox.textContent = message;
  errorBox.hidden = false;
  errorBox.focus?.();
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorBox.hidden = true;

  if (!form.reportValidity()) return;

  if (form.action.includes("YOUR_FORM_ID")) {
    showError("This survey is in preview mode. Add your Formspree form ID in index.html before publishing.");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Sending…";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error("Submission failed");

    form.hidden = true;
    successState.hidden = false;
    successState.focus();
    window.scrollTo({ top: successState.offsetTop - 40, behavior: "smooth" });
  } catch {
    showError("We couldn’t send your feedback. Please check your connection and try again.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send anonymous feedback";
  }
});

submitAnotherButton.addEventListener("click", () => {
  form.reset();
  successState.hidden = true;
  form.hidden = false;
  form.scrollIntoView({ behavior: "smooth", block: "start" });
});

privacyButton.addEventListener("click", () => {
  const expanded = privacyButton.getAttribute("aria-expanded") === "true";
  privacyButton.setAttribute("aria-expanded", String(!expanded));
  privacyCopy.hidden = expanded;
});
