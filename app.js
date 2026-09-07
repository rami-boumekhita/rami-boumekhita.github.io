(() => {
  const state = {
    lang: localStorage.getItem('portfolioLang') || 'en',
    theme: localStorage.getItem('portfolioTheme') || 'dark'
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const t = (key) => PORTFOLIO.i18n[state.lang][key] ?? key;
  const txt = (obj) => obj?.[state.lang] ?? obj?.en ?? '';

  const ANALYTICS_CONSENT_KEY = 'portfolioAnalyticsConsent';

  function trackEvent(name, params = {}) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, {
      ...params,
      language: state.lang,
      page_path: window.location.pathname,
      transport_type: 'beacon'
    });
  }

  function setupAnalyticsConsent() {
    const banner = $('#analyticsConsent');
    if (!banner) return;

    const saved = localStorage.getItem(ANALYTICS_CONSENT_KEY);
    banner.hidden = Boolean(saved);

    const applyConsent = (value) => {
      localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          analytics_storage: value === 'granted' ? 'granted' : 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
      }
      banner.hidden = true;
      if (value === 'granted') trackEvent('analytics_consent', { consent: 'granted' });
    };

    $('#analyticsAccept')?.addEventListener('click', () => applyConsent('granted'));
    $('#analyticsDecline')?.addEventListener('click', () => applyConsent('denied'));
  }

  function setupAnalyticsEvents() {
    document.addEventListener('click', (event) => {
      const target = event.target.closest('[data-analytics-event]');
      if (!target) return;
      trackEvent(target.dataset.analyticsEvent, {
        location: target.dataset.analyticsLocation || '',
        label: target.dataset.analyticsLabel || target.textContent.trim().slice(0, 120),
        destination: target.href || ''
      });
    });

    const seenSections = new Set();
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.45) return;
        const id = entry.target.id || entry.target.className || 'section';
        if (seenSections.has(id)) return;
        seenSections.add(id);
        trackEvent('section_view', { section: id });
      });
    }, { threshold: [0.45] });

    $$('main section[id]').forEach(section => sectionObserver.observe(section));

    const seenProjects = new Set();
    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.6) return;
        const name = entry.target.dataset.projectName;
        if (!name || seenProjects.has(name)) return;
        seenProjects.add(name);
        trackEvent('project_view', { project: name });
      });
    }, { threshold: [0.6] });

    $$('.project-card[data-project-name]').forEach(card => projectObserver.observe(card));
  }


  function setupTheme() {
    document.body.classList.toggle('light', state.theme === 'light');
    $('#themeToggle').setAttribute('aria-label', state.theme === 'light' ? 'Use dark theme' : 'Use light theme');
  }

  function wireContactLinks() {
    const c = PORTFOLIO.contact;
    const email = `mailto:${c.email}`;
    const phone = `tel:${c.phoneRaw}`;
    const wa = `https://wa.me/${c.whatsappRaw}`;

    ['heroEmail', 'contactEmail', 'floatEmail'].forEach(id => { const el = document.getElementById(id); if (el) el.href = email; });
    ['heroPhone', 'contactPhone'].forEach(id => { const el = document.getElementById(id); if (el) el.href = phone; });
    ['heroWhatsapp', 'contactWhatsapp', 'floatWhatsapp'].forEach(id => { const el = document.getElementById(id); if (el) el.href = wa; });
    ['contactLinkedin', 'floatLinkedin', 'recommendationsLink'].forEach(id => { const el = document.getElementById(id); if (el) el.href = c.linkedin; });
    ['contactGithub', 'floatGithub'].forEach(id => { const el = document.getElementById(id); if (el) el.href = c.github; });
    const cv = $('#cvButton'); if (cv) cv.href = c.cv;
  }

  function renderProof() {
    $('#proofStrip').innerHTML = PORTFOLIO.proof.map(item => `
      <div class="proof-item">
        <div class="proof-value">${item.value}<span>${item.suffix}</span></div>
        <div class="proof-label">${state.lang === 'fr' ? item.fr : item.en}</div>
      </div>
    `).join('');
  }

  function renderExpertise() {
    $('#expertiseGrid').innerHTML = PORTFOLIO.expertise.map((item, i) => `
      <article class="expertise-card reveal" style="--delay:${i * 60}ms">
        <div class="expertise-icon">${item.icon}</div>
        <h3>${state.lang === 'fr' ? item.fr : item.en}</h3>
        <p>${state.lang === 'fr' ? item.frText : item.enText}</p>
      </article>
    `).join('');
  }

  function renderExperiences() {
    $('#experienceTimeline').innerHTML = PORTFOLIO.experiences.map((exp, i) => {
      const companies = exp.companies?.length
        ? exp.companies
        : [{ name: exp.company, url: '' }];

      const companyNames = companies.map(company =>
        company.url
          ? `<a class="company-link" data-analytics-event="company_click" data-analytics-location="experience" data-analytics-label="${company.name}" href="${company.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${company.name} official website">${company.name}<span class="external-mark" aria-hidden="true">↗</span></a>`
          : `<span>${company.name}</span>`
      ).join('<span class="company-separator"> / </span>');

      const logos = exp.logos.map(logo => {
        const tile = `<div class="logo-tile"><img src="${logo.src}" alt="${logo.alt}" loading="lazy"></div>`;
        return logo.url
          ? `<a class="logo-tile-link" data-analytics-event="company_click" data-analytics-location="experience_logo" data-analytics-label="${logo.alt}" href="${logo.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${logo.alt} official website">${tile}</a>`
          : tile;
      }).join('');

      return `
        <article class="experience-card reveal" style="--delay:${Math.min(i * 45, 180)}ms">
          <div class="timeline-rail"><span class="timeline-dot"></span></div>
          <div class="experience-main">
            <div class="experience-top">
              <div class="company-logo-stack">${logos}</div>
              <div>
                <div class="experience-meta">${txt(exp.period)}</div>
                <h3>${txt(exp.role)}</h3>
                <div class="company-name">${companyNames}</div>
              </div>
              <div class="experience-place">${exp.place}</div>
            </div>
            <ul>${exp.bullets[state.lang].map(b => `<li>${b}</li>`).join('')}</ul>
            <div class="tag-row">${exp.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
          </div>
        </article>
      `;
    }).join('');
  }

  function projectVisual(kind) {
    const common = `viewBox="0 0 640 260" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice"`;
    const glow = `<defs><linearGradient id="g-${kind}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#55e6c1"/><stop offset="1" stop-color="#5aa9ff"/></linearGradient><filter id="blur-${kind}"><feGaussianBlur stdDeviation="18"/></filter></defs>`;
    const grid = `<g opacity=".13" stroke="#98b6cc" stroke-width="1">${Array.from({length: 10}, (_,i)=>`<path d="M0 ${20+i*28}H640"/>`).join('')}${Array.from({length: 13}, (_,i)=>`<path d="M${i*52} 0V260"/>`).join('')}</g>`;

    if (kind === 'intralogistics') return `<svg ${common}>${glow}${grid}
      <circle cx="500" cy="50" r="115" fill="#5aa9ff" opacity=".10" filter="url(#blur-${kind})"/>
      <path d="M70 170H570" stroke="#7292aa" stroke-width="8" stroke-linecap="round"/>
      <g fill="#0e2435" stroke="#55e6c1" stroke-width="2">${[100,180,260,340,420,500].map(x=>`<circle cx="${x}" cy="170" r="15"/><circle cx="${x}" cy="170" r="4" fill="#55e6c1"/>`).join('')}</g>
      <rect x="240" y="102" width="90" height="52" rx="8" fill="#17344a" stroke="#5aa9ff" stroke-width="2"/><path d="M252 119h66M252 136h46" stroke="#91b7cf" stroke-width="3" stroke-linecap="round"/>
      <rect x="420" y="111" width="83" height="44" rx="7" fill="#17344a" stroke="#55e6c1" stroke-width="2"/><path d="M433 133h56" stroke="#55e6c1" stroke-width="4"/>
      <path d="M75 88h105" stroke="url(#g-${kind})" stroke-width="4" stroke-linecap="round"/><circle cx="186" cy="88" r="5" fill="#55e6c1"/>
      <text x="74" y="69" fill="#bcd2df" font-size="16" font-family="Arial" font-weight="700">WCS / WMS</text><text x="241" y="94" fill="#8fa8ba" font-size="12" font-family="Arial">S7-1500</text><text x="420" y="101" fill="#8fa8ba" font-size="12" font-family="Arial">VFD / SAFETY</text>
    </svg>`;

    if (kind === 'architecture') return `<svg ${common}>${glow}${grid}
      <circle cx="530" cy="70" r="120" fill="#55e6c1" opacity=".09" filter="url(#blur-${kind})"/>
      ${[['MES',95],['SCADA',260],['PLC',425],['FIELD',555]].map(([label,x],i)=>`<rect x="${x-53}" y="94" width="106" height="70" rx="14" fill="#102a3d" stroke="${i%2 ? '#5aa9ff':'#55e6c1'}" stroke-width="2"/><text x="${x}" y="136" fill="#d8e8f2" text-anchor="middle" font-size="18" font-weight="700" font-family="Arial">${label}</text>`).join('')}
      <path d="M148 129h59M313 129h59M478 129h24" stroke="#93aec0" stroke-width="3" stroke-dasharray="7 6"/><path d="M190 119l17 10-17 10M355 119l17 10-17 10M485 119l17 10-17 10" fill="none" stroke="#55e6c1" stroke-width="3"/>
      <text x="320" y="202" fill="#8fa8ba" text-anchor="middle" font-size="13" font-family="Arial">OPC UA • MQTT • REST • SQL</text>
    </svg>`;

    if (kind === 'agv') return `<svg ${common}>${glow}${grid}
      <rect x="55" y="36" width="530" height="184" rx="18" fill="#0c2031" stroke="#2b536e" stroke-width="2"/>
      <rect x="76" y="60" width="220" height="96" rx="11" fill="#102a3d" stroke="#355a73"/><path d="M92 133c28-54 56-20 88-52s56 26 99-8" fill="none" stroke="url(#g-${kind})" stroke-width="4" stroke-linecap="round"/>
      <g transform="translate(334 69)"><rect width="206" height="76" rx="10" fill="#102a3d" stroke="#355a73"/><rect x="18" y="48" width="26" height="12" rx="3" fill="#55e6c1"/><rect x="52" y="36" width="26" height="24" rx="3" fill="#5aa9ff"/><rect x="86" y="28" width="26" height="32" rx="3" fill="#55e6c1"/><rect x="120" y="18" width="26" height="42" rx="3" fill="#5aa9ff"/><rect x="154" y="9" width="26" height="51" rx="3" fill="#55e6c1"/></g>
      <g transform="translate(101 174)"><rect width="74" height="25" rx="7" fill="#17384b" stroke="#55e6c1"/><circle cx="18" cy="25" r="5" fill="#90abc0"/><circle cx="56" cy="25" r="5" fill="#90abc0"/><path d="M14 10h46" stroke="#55e6c1" stroke-width="3"/></g>
      <text x="77" y="51" fill="#91aabd" font-size="12" font-family="Arial">REAL-TIME AGV MONITORING</text><text x="335" y="58" fill="#91aabd" font-size="12" font-family="Arial">KPI / LOOKER</text>
    </svg>`;

    if (kind === 'scada') return `<svg ${common}>${glow}${grid}
      <rect x="80" y="43" width="480" height="171" rx="16" fill="#0b2233" stroke="#31556e" stroke-width="2"/>
      <rect x="101" y="65" width="142" height="127" rx="10" fill="#122c40"/><rect x="263" y="65" width="276" height="61" rx="10" fill="#122c40"/><rect x="263" y="139" width="276" height="53" rx="10" fill="#122c40"/>
      <g fill="#55e6c1">${[0,1,2].map(i=>`<circle cx="126" cy="${91+i*34}" r="7"/>`).join('')}</g><g stroke="#8ba8ba" stroke-width="4" stroke-linecap="round">${[0,1,2].map(i=>`<path d="M143 ${91+i*34}h72"/>`).join('')}</g>
      <path d="M285 102h48l18-23 34 35 29-20 42 13 40-28 41 22" fill="none" stroke="#5aa9ff" stroke-width="4"/>
      <g fill="#55e6c1">${[294,333,372,411,450,489].map((x,i)=>`<rect x="${x}" y="${169-(i%3)*8}" width="22" height="${18+(i%3)*8}" rx="3"/>`).join('')}</g>
      <text x="104" y="57" fill="#92aabb" font-size="12" font-family="Arial">WINCC HMI / SCADA</text>
    </svg>`;

    if (kind === 'robot') return `<svg ${common}>${glow}${grid}
      <circle cx="465" cy="91" r="118" fill="#5aa9ff" opacity=".09" filter="url(#blur-${kind})"/>
      <path d="M171 194h265" stroke="#46667c" stroke-width="8" stroke-linecap="round"/>
      <g fill="none" stroke="url(#g-${kind})" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M258 188l28-58 48-23 29-50"/><path d="M334 107l56 34 56-9"/></g>
      <g fill="#102a3d" stroke="#a1bac9" stroke-width="2"><circle cx="258" cy="188" r="17"/><circle cx="286" cy="130" r="16"/><circle cx="334" cy="107" r="16"/><circle cx="363" cy="57" r="14"/><circle cx="390" cy="141" r="14"/></g>
      <path d="M444 122v20M455 126v12" stroke="#55e6c1" stroke-width="4" stroke-linecap="round"/>
      <text x="84" y="72" fill="#d7e7f0" font-size="22" font-weight="700" font-family="Arial">FANUC</text><text x="84" y="97" fill="#8fa8ba" font-size="13" font-family="Arial">RoboGuide • Karel • Simulation</text>
    </svg>`;

    return `<svg ${common}>${glow}${grid}
      <circle cx="500" cy="70" r="120" fill="#55e6c1" opacity=".08" filter="url(#blur-${kind})"/>
      <rect x="220" y="75" width="200" height="110" rx="18" fill="#102a3d" stroke="#55e6c1" stroke-width="2"/>
      <g fill="#5aa9ff">${[[245,99],[280,99],[315,99],[350,99],[385,99]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="6"/>`).join('')}</g>
      <path d="M248 140h144M267 157h105" stroke="#8ba8ba" stroke-width="5" stroke-linecap="round"/>
      <path d="M220 103h-54l-26-34M420 108h63l26-31M220 160h-72l-19 24M420 157h70l25 30" stroke="#5aa9ff" stroke-width="3" stroke-linecap="round"/>
      <circle cx="140" cy="69" r="13" fill="#102a3d" stroke="#55e6c1" stroke-width="3"/><circle cx="509" cy="77" r="13" fill="#102a3d" stroke="#55e6c1" stroke-width="3"/><circle cx="129" cy="184" r="13" fill="#102a3d" stroke="#55e6c1" stroke-width="3"/><circle cx="515" cy="187" r="13" fill="#102a3d" stroke="#55e6c1" stroke-width="3"/>
      <text x="320" y="213" fill="#91aabd" text-anchor="middle" font-size="13" font-family="Arial">SENSORS • ACTUATORS • C / C++</text>
    </svg>`;
  }

  function renderProjects() {
    $('#projectGrid').innerHTML = PORTFOLIO.projects.map((p, i) => `
      <article class="project-card reveal" data-project-name="${txt(p.title)}" style="--delay:${(i % 2) * 70}ms">
        <div class="project-visual">${projectVisual(p.visual)}</div>
        <div class="project-body">
          <div class="project-topline"><span class="project-num">${p.n}</span><span>${txt(p.type)}</span></div>
          <h3>${txt(p.title)}</h3>
          <p>${txt(p.description)}</p>
          <div class="project-details">
            <strong>${t('projects.work')}</strong>
            <ul>${p.work[state.lang].map(item => `<li>${item}</li>`).join('')}</ul>
          </div>
          <div class="tag-row">${p.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        </div>
      </article>
    `).join('');
  }

  function renderTools() {
    const chips = PORTFOLIO.brandTools.map(name => `<span class="tool-chip">${name}</span>`).join('');
    $('#toolTrack').innerHTML = chips + chips;
    $('#skillGroups').innerHTML = PORTFOLIO.skillGroups.map((group, i) => `
      <article class="skill-card reveal" style="--delay:${(i % 2) * 60}ms">
        <h3>${txt(group.title)}</h3>
        <div class="skill-list">${group.items.map(item => `<span>${item}</span>`).join('')}</div>
      </article>
    `).join('');
  }

  function renderEducation() {
    $('#educationList').innerHTML = PORTFOLIO.education.map((ed, i) => {
      const logo = `<div class="school-logo"><img src="${ed.logo}" alt="${ed.school}" loading="lazy"></div>`;
      const logoMarkup = ed.url
        ? `<a class="school-logo-link" data-analytics-event="education_click" data-analytics-location="education_logo" data-analytics-label="${ed.school}" href="${ed.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${ed.school} official website">${logo}</a>`
        : logo;
      const schoolMarkup = ed.url
        ? `<a class="school-link" data-analytics-event="education_click" data-analytics-location="education" data-analytics-label="${ed.school}" href="${ed.url}" target="_blank" rel="noopener noreferrer">${ed.school}<span class="external-mark" aria-hidden="true">↗</span></a>`
        : `<strong>${ed.school}</strong>`;

      return `
        <article class="education-item reveal" style="--delay:${i * 55}ms">
          ${logoMarkup}
          <div>
            <div class="education-years">${ed.years}</div>
            <h3>${txt(ed.degree)}</h3>
            <p>${schoolMarkup} <span aria-hidden="true">•</span> ${ed.place}</p>
          </div>
        </article>
      `;
    }).join('');

    $('#languageGrid').innerHTML = PORTFOLIO.languages.map(lang => `
      <div class="language-item">
        <strong>${txt(lang.name)}</strong>
        <span>${txt(lang.level)}</span>
      </div>
    `).join('');
  }

  function renderCertificates() {
    $('#certificateGrid').innerHTML = PORTFOLIO.certifications.map((c, i) => `
      <article class="certificate-card reveal" style="--delay:${(i % 3) * 45}ms">
        <a class="certificate-image" data-analytics-event="certificate_view" data-analytics-label="${c.title}" href="${c.file}" target="_blank" rel="noopener" aria-label="${t('certificates.view')}: ${c.title}">
          <img src="${c.image}" alt="Certificate: ${c.title}" loading="lazy">
          <span class="certificate-category">${c.category}</span>
        </a>
        <div class="certificate-body">
          <div class="certificate-provider">${c.provider}</div>
          <h3>${c.title}</h3>
          <div class="certificate-date">${c.date}</div>
          <div class="certificate-actions">
            <a class="mini-btn primary" data-analytics-event="certificate_view" data-analytics-label="${c.title}" href="${c.file}" target="_blank" rel="noopener">${t('certificates.view')} ↗</a>
            ${c.verify ? `<a class="mini-btn" data-analytics-event="certificate_verify" data-analytics-label="${c.title}" href="${c.verify}" target="_blank" rel="noopener">${t('certificates.verify')} ↗</a>` : ''}
          </div>
        </div>
      </article>
    `).join('');
  }

  function renderCommunity() {
    $('#communityGrid').innerHTML = PORTFOLIO.community.map((item, i) => {
      const logo = `<div class="community-logo"><img src="${item.logo}" alt="${item.organization}" loading="lazy"></div>`;
      const logoMarkup = item.url
        ? `<a class="community-logo-link" data-analytics-event="organization_click" data-analytics-location="community_logo" data-analytics-label="${item.organization}" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${item.organization} official website">${logo}</a>`
        : logo;
      const orgMarkup = item.url
        ? `<a class="community-org community-org-link" data-analytics-event="organization_click" data-analytics-location="community" data-analytics-label="${item.organization}" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.organization}<span class="external-mark" aria-hidden="true">↗</span></a>`
        : `<div class="community-org">${item.organization}</div>`;

      return `
        <article class="community-card reveal" style="--delay:${i * 70}ms">
          ${logoMarkup}
          <div>
            <div class="community-period">${txt(item.period)}</div>
            <h3>${txt(item.role)}</h3>
            ${orgMarkup}
            <p>${txt(item.text)}</p>
          </div>
        </article>
      `;
    }).join('');
  }

  function applyI18n() {
    document.documentElement.lang = state.lang;
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = t(key);
    });
    $('#langToggle').textContent = state.lang === 'en' ? 'FR' : 'EN';
    renderProof();
    renderExpertise();
    renderExperiences();
    renderProjects();
    renderTools();
    renderEducation();
    renderCertificates();
    renderCommunity();
    observeReveals();
  }

  let observer;
  function observeReveals() {
    if (observer) observer.disconnect();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      $$('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    $$('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }

  function setupNavigation() {
    const menu = $('#menuToggle');
    const mobile = $('#mobileNav');
    menu.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.textContent = open ? '×' : '☰';
    });
    $$('#mobileNav a').forEach(a => a.addEventListener('click', () => {
      mobile.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = '☰';
    }));
  }

  function setupContactForm() {
    const form = $('#contactForm');
    if (!form) return;

    form.addEventListener('submit', () => {
      trackEvent('contact_submit', { method: 'contact_form' });
    });

    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') {
      trackEvent('contact_success', { method: 'contact_form' });
      const success = $('#formSuccess');
      if (success) {
        success.hidden = false;
        success.textContent = state.lang === 'fr' ? 'Message envoyé — merci.' : 'Message sent — thank you.';
      }
    }

    if (window.location.protocol === 'file:') {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const subject = encodeURIComponent(`Portfolio contact — ${data.get('name') || 'new message'}`);
        const body = encodeURIComponent(
          `Name: ${data.get('name') || ''}\nEmail: ${data.get('email') || ''}\nCompany: ${data.get('company') || ''}\n\n${data.get('message') || ''}`
        );
        window.location.href = `mailto:${PORTFOLIO.contact.email}?subject=${subject}&body=${body}`;
      });
    } else {
      let next = form.querySelector('input[name="_next"]');
      if (!next) {
        next = document.createElement('input');
        next.type = 'hidden';
        next.name = '_next';
        form.appendChild(next);
      }
      next.value = `${window.location.origin}${window.location.pathname}?sent=1#contact`;
    }
  }

  function setupControls() {
    $('#themeToggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolioTheme', state.theme);
      setupTheme();
      trackEvent('theme_change', { theme: state.theme });
    });
    $('#langToggle').addEventListener('click', () => {
      state.lang = state.lang === 'en' ? 'fr' : 'en';
      localStorage.setItem('portfolioLang', state.lang);
      applyI18n();
      trackEvent('language_change', { selected_language: state.lang });
    });
  }

  function init() {
    setupTheme();
    wireContactLinks();
    setupNavigation();
    setupControls();
    setupContactForm();
    applyI18n();
    setupAnalyticsConsent();
    setupAnalyticsEvents();
    $('#year').textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
