/*
const form = document.getElementById('contact-form');
const result = document.getElementById('contact-result');

form.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

  
    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
    
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
};
*/
// Combined contact-form script (works with files and JSON-capable endpoints)
// Make sure your form has name attributes on inputs and either id="contact-form" or id="form"
(() => {
  // --- CONFIG ---
  const ACCESS_KEY = "503a0f5e-15ad-419b-a536-96c12fbe8296"; // replace with your key if needed
  const FORM_IDS = ["contact-form", "form"]; // try these ids (first one found will be used)
  const RESULT_IDS = ["contact-result", "contact-result-message"]; // optional result element ids

  // --- ELEMENTS ---
  const form = FORM_IDS.map(id => document.getElementById(id)).find(el => el !== null);
  if (!form) {
    console.error("Contact form not found. Add a form with id='contact-form' or id='form'.");
    return;
  }

  // Find or create a result element (where we display success/error text)
  let result = RESULT_IDS.map(id => document.getElementById(id)).find(el => el !== null);
  if (!result) {
    result = document.createElement("div");
    result.id = "contact-result";
    // insert result right after the form
    form.parentNode.insertBefore(result, form.nextSibling);
  }

  // Find submit button (first button[type=submit] or input[type=submit])
  const submitBtn = form.querySelector("button[type='submit'], input[type='submit']");

  // Helper to show result
  function showResult(message, isError = false) {
    result.style.display = "block";
    result.textContent = message;
    result.setAttribute("role", "status");
    result.style.color = isError ? "crimson" : "green";
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // disable submit and show sending state
    const originalText = submitBtn ? (submitBtn.tagName.toLowerCase() === "button" ? submitBtn.textContent : submitBtn.value) : null;
    if (submitBtn) {
      if (submitBtn.tagName.toLowerCase() === "button") submitBtn.textContent = "Sending...";
      else submitBtn.value = "Sending...";
      submitBtn.disabled = true;
    }
    showResult("Please wait...");

    try {
      // Build FormData (keeps file inputs working)
      const formData = new FormData(form);
      formData.append("access_key", ACCESS_KEY);

      // POST FormData directly (browser sets multipart/form-data automatically)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      // parse JSON response
      const data = await response.json().catch(() => null);

      if (response.ok) {
        // success
        const message = (data && data.message) ? data.message : "Success! Your message has been sent.";
        showResult(message, false);
        form.reset();
      } else {
        // server responded with non-2xx
        const errMsg = (data && data.message) ? data.message : `Error: ${response.status} ${response.statusText}`;
        console.error("Form submit error:", data || response);
        showResult(errMsg, true);
      }
    } catch (error) {
      console.error("Network or unexpected error:", error);
      showResult("Something went wrong. Please try again.", true);
    } finally {
      // restore button state and hide result after a short delay
      if (submitBtn) {
        if (submitBtn.tagName.toLowerCase() === "button") submitBtn.textContent = originalText;
        else submitBtn.value = originalText;
        submitBtn.disabled = false;
      }
      // hide result after 3 seconds (user can still read it in console)
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    }
  }

  // Attach listener
  form.addEventListener("submit", handleSubmit);
})();