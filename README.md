# Rami Boumekhita — Automation Engineer Portfolio

A lightweight bilingual (English/French) static portfolio built for automation, controls, PLC/SCADA and commissioning roles.

## What is included

- Recruiter-focused hero section with professional photo
- Persistent email / WhatsApp / LinkedIn / GitHub contact shortcuts
- Open-to-opportunities, relocation, Permis B and negotiable availability indicators
- Harington Technologies + Mecalux dual branding for the current consultant role
- Complete industrial experience timeline with company logos
- Six selected engineering case studies with original technical visuals
- PLC / SCADA / MES / networking / data / robotics skills
- Education with university logos
- National Grandes Écoles ranking: 55 / 1,961
- TOEIC score report: 875 / 990
- Ten course certificates with certificate files and verification buttons where available
- Vision & Innovation Club extra-professional experience
- LinkedIn recommendations call-to-action
- Working contact form configured for `rami.boumekhita@gmail.com`
- Dark/light theme and bilingual switch
- Responsive desktop / tablet / mobile layout

## Quick editing

Most portfolio content is in `content.js`.

The main personal links are at the top:

```js
contact: {
  email: "rami.boumekhita@gmail.com",
  phoneDisplay: "+33 6 02 56 39 27",
  phoneRaw: "+33602563927",
  whatsappRaw: "33602563927",
  location: "Lyon, France",
  linkedin: "https://www.linkedin.com/in/rami-boumekhita",
  github: "https://github.com/Rami-R/Rami-R"
}
```

## Adding certificates later

Add the certificate image/PDF to `assets/certificates/`, then add another object to the `certifications` array in `content.js`.

The `verify` field is optional. Leave it empty for now and add a URL later:

```js
{
  title: "Course name",
  provider: "Provider",
  date: "01 Jan 2027",
  image: "assets/certificates/example-preview.jpg",
  file: "assets/certificates/example.pdf",
  verify: "",
  category: "Automation"
}
```

## Contact form

The form posts to FormSubmit and is already addressed to `rami.boumekhita@gmail.com`.

The first time somebody submits the form on a published site, FormSubmit may send a one-time activation email to that address. Confirm it once. After that, messages are delivered directly to the email address.

When the site is opened locally through `index.html`, JavaScript switches the form to a `mailto:` fallback for easy testing.

## Publishing

This project requires no build step and no npm packages. Publish the folder as-is on any static host such as Netlify, Vercel or GitHub Pages.

For GitHub Pages, put the files in a repository, enable **Settings → Pages**, and deploy from the main branch/root folder.

## Privacy

Industrial case studies intentionally generalize client-sensitive implementation details. Before adding future screenshots from TIA Portal, WCS/WMS, SCADA or customer sites, verify that they contain no confidential IP addresses, device names, source code, production data or client-only architecture.
