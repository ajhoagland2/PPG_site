# Pen Pad Golf website

A dependency-free landing page and anonymous feedback survey designed for GitHub Pages. `index.html` is the landing page; `survey.html` contains the survey. The survey does not ask respondents for a name, email address, login, or account.

## Connect email delivery

GitHub Pages cannot email or store form responses on its own. This page is prepared for [Formspree](https://formspree.io/):

1. Create a Formspree account and a new form using the email address where you want feedback delivered.
2. Copy the form ID from the endpoint Formspree gives you.
3. In `survey.html`, replace `YOUR_FORM_ID` with that ID.
4. Submit one test response and confirm the form if Formspree asks you to verify it.

The endpoint is meant to be public; do not put secret keys or passwords in this repository.

## Customize

Edit the survey title, prompts, answer options, and `survey_version` directly in `survey.html`. The survey includes an overall 1–5 experience rating, three optional written playthrough questions, a replay question, and a 1–5 recommendation score. Keep written questions optional unless the answer is essential. Avoid asking for names, email addresses, employer names, exact locations, or other details that could identify someone.

## Publish with GitHub Pages

1. Create a GitHub repository and add these files at its top level.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. To publish this version, select the `V2` branch and the `/ (root)` folder, then save. GitHub Pages serves one branch at a time.
5. GitHub will show the public URL after deployment finishes.

## Privacy note

This is anonymous in the practical sense that the survey does not request identity and does not include analytics or tracking scripts. It cannot promise network-level anonymity: GitHub Pages and Formspree may process IP addresses and other routine request metadata for delivery, security, and abuse prevention. Review their current privacy terms before the trial and tell participants which services receive their data.
