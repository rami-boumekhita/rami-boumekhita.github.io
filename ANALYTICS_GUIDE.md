# Portfolio Analytics Guide

Measurement ID: `G-E8QPH40DXV`
Portfolio: `https://rami-boumekhita.github.io/`

## What is tracked

- `cv_download` — Download CV button
- `linkedin_click` — LinkedIn links
- `github_click` — GitHub links
- `whatsapp_click` — WhatsApp links
- `email_click` — Email links
- `phone_click` — Phone links
- `contact_submit` — Contact form submitted
- `contact_success` — Visitor returns to the portfolio after FormSubmit
- `project_view` — A project card is substantially visible
- `section_view` — A major portfolio section is viewed
- `certificate_view` / `certificate_verify` — Certificate interactions
- `company_click` — Company website links
- `education_click` — University/school links
- `organization_click` — Extra-professional organization links
- `language_change` / `theme_change` — UI preferences

## Where to see the numbers in Google Analytics

- **Reports → Realtime**: live visitors and recent events
- **Reports → Acquisition → Traffic acquisition**: LinkedIn, Google, direct traffic, UTM sources
- **Reports → Engagement → Events**: CV downloads, contact attempts and other tracked actions
- **Reports → Engagement → Pages and screens**: page activity
- **Reports → User attributes / Demographics**: approximate geography when available
- **Reports → Tech**: mobile/desktop, browser and operating system

## Recommended tracked links (UTM)

Use a different URL depending on where you place the portfolio link. Google Analytics will then show the source clearly.

### LinkedIn profile / Featured
`https://rami-boumekhita.github.io/?utm_source=linkedin&utm_medium=profile&utm_campaign=job_search`

### CV
`https://rami-boumekhita.github.io/?utm_source=cv&utm_medium=document&utm_campaign=job_search`

### Email signature
`https://rami-boumekhita.github.io/?utm_source=email&utm_medium=signature&utm_campaign=job_search`

### Direct recruiter outreach
`https://rami-boumekhita.github.io/?utm_source=outreach&utm_medium=message&utm_campaign=job_search`

### LinkedIn banner QR (if you regenerate the QR later)
`https://rami-boumekhita.github.io/?utm_source=linkedin&utm_medium=banner_qr&utm_campaign=job_search`

## Useful funnel for your job search

Track: **Visitors → CV downloads → contact actions → interviews**.

Google Analytics does not normally reveal the exact identity of an individual visitor. It reports traffic and behavior data, not a list of recruiter names.
