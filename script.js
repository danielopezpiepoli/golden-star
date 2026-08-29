document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const menuToggle = document.getElementById('menu-toggle');
  const navContainer = document.getElementById('nav-container');
  const navLinks = document.querySelectorAll('.nav-link');
  const langButtons = document.querySelectorAll('.lang-btn');

  // 1. Sombra de la cabecera al hacer scroll
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }

  // 2. Menú móvil
  if (menuToggle && navContainer) {
    menuToggle.addEventListener('click', () => {
      navContainer.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navContainer.classList.remove('active');
      });
    });
  }

  // 3. Selector de Idiomas
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      langButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const selectedLanguage = button.getAttribute('data-lang');
      console.log(`Language changed to: ${selectedLanguage.toUpperCase()}`);
    });
  });

  // 4. Control de Acordeones de Ciudades (Tour Dates)
  const accordionHeaders = document.querySelectorAll('.city-accordion-header');
  
  accordionHeaders.forEach(headerBtn => {
    headerBtn.addEventListener('click', () => {
      const parentItem = headerBtn.parentElement;
      const isActive = parentItem.classList.contains('active');

      // Cerrar otros acordeones abiertos para mantener orden
      document.querySelectorAll('.city-accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      // Alternar el actual
      if (!isActive) {
        parentItem.classList.add('active');
      }
    });
  });
});

// 5. Selección interactiva de paquetes de boda
  const packageButtons = document.querySelectorAll('.select-package-btn');
  const packageSelect = document.getElementById('selectedPackage');

  packageButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const packageName = button.getAttribute('data-package');
      if (packageSelect && packageName) {
        for (let i = 0; i < packageSelect.options.length; i++) {
          if (packageSelect.options[i].text.includes(packageName)) {
            packageSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });


// 6. Envío asíncrono de Wedding Form mediante Web3Forms
const weddingForm = document.getElementById('weddingForm');
const resultMessage = document.getElementById('formResult');
const submitButton = document.getElementById('submitBtn');

if (weddingForm) {
  weddingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(weddingForm);
    const originalText = submitButton.textContent;

    submitButton.textContent = 'Sending Inquiry...';
    submitButton.disabled = true;

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(async (response) => {
      const json = await response.json();
      resultMessage.style.display = 'block';
      if (response.status === 200) {
        resultMessage.style.color = 'var(--gold-hover)';
        resultMessage.innerHTML = '✦ Thank you! Your wedding inquiry has been sent successfully. We will reply within 24 hours.';
        weddingForm.reset();
      } else {
        resultMessage.style.color = '#c0392b';
        resultMessage.innerHTML = json.message || 'Something went wrong. Please email us directly at gsmusictrio@gmail.com';
      }
    })
    .catch(() => {
      resultMessage.style.display = 'block';
      resultMessage.style.color = '#c0392b';
      resultMessage.innerHTML = 'Network error. Please try again or email us directly at gsmusictrio@gmail.com';
    })
    .finally(() => {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      setTimeout(() => {
        resultMessage.style.display = 'none';
      }, 8000);
    });
  });
}

// 7. Envío asíncrono de General Contact Form mediante Web3Forms
const generalForm = document.getElementById('generalContactForm');
const generalResult = document.getElementById('contactFormResult');
const generalSubmitBtn = document.getElementById('contactSubmitBtn');

if (generalForm) {
  generalForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(generalForm);
    const originalText = generalSubmitBtn.textContent;

    generalSubmitBtn.textContent = 'Sending Message...';
    generalSubmitBtn.disabled = true;

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(async (response) => {
      const json = await response.json();
      generalResult.style.display = 'block';
      if (response.status === 200) {
        generalResult.style.color = 'var(--gold-hover)';
        generalResult.innerHTML = '✦ Thank you! Your message has been sent successfully. We will reply within 24 hours.';
        generalForm.reset();
      } else {
        generalResult.style.color = '#c0392b';
        generalResult.innerHTML = json.message || 'Something went wrong. Please email us directly at stella.karalis@goldenstarmusic.agency';
      }
    })
    .catch(() => {
      generalResult.style.display = 'block';
      generalResult.style.color = '#c0392b';
      generalResult.innerHTML = 'Network error. Please try again or email us directly at stella.karalis@goldenstarmusic.agency';
    })
    .finally(() => {
      generalSubmitBtn.textContent = originalText;
      generalSubmitBtn.disabled = false;
      setTimeout(() => {
        generalResult.style.display = 'none';
      }, 8000);
    });
  });
}


// 8. Filtrado de Conciertos por Categoría & URL Search Params
  const filterButtons = document.querySelectorAll('.filter-tab-btn');
  const concertItems = document.querySelectorAll('.city-accordion-item[data-category]');

  function applyCategoryFilter(category) {
    // Actualizar botón activo
    filterButtons.forEach(btn => {
      if (btn.getAttribute('data-filter') === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Filtrar elementos del acordeón
    concertItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'all' || itemCategory === category) {
        item.classList.remove('filtered-out');
        item.classList.add('fade-in-item');
      } else {
        item.classList.add('filtered-out');
        item.classList.remove('fade-in-item', 'active');
      }
    });
  }

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        applyCategoryFilter(filter);
      });
    });

    // Detectar parámetro ?tour= en la URL al cargar la página
    const urlParams = new URLSearchParams(window.location.search);
    const tourParam = urlParams.get('tour');
    if (tourParam) {
      applyCategoryFilter(tourParam);
    }
  }


// ================= 9. LIGHTBOX & FULLSCREEN MEDIA (UNIVERSAL) =================
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxContent = document.getElementById('lightboxContent');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxTitle = document.getElementById('lightboxTitle');

  const galleryItems = document.querySelectorAll('#galleryContainer .gallery-item');
  let currentGalleryIndex = 0;

  // Colección de elementos de galería (si existen en la página)
  const galleryData = Array.from(galleryItems).map(item => ({
    src: item.getAttribute('data-src') || item.querySelector('img')?.src,
    alt: item.querySelector('img')?.getAttribute('alt') || 'Live Concert Impression'
  }));

  function openLightboxImage(src, titleText = 'Concert Production Poster') {
    if (!lightboxModal || !lightboxContent) return;
    lightboxContent.innerHTML = `<img src="${src}" alt="${titleText}">`;
    if (lightboxTitle) lightboxTitle.textContent = titleText;
    if (lightboxCounter) lightboxCounter.textContent = 'Artwork';

    if (lightboxPrevBtn) lightboxPrevBtn.style.display = 'none';
    if (lightboxNextBtn) lightboxNextBtn.style.display = 'none';

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Bloquea scroll
  }

  function openGalleryIndex(index) {
    if (!lightboxModal || galleryData.length === 0) return;
    currentGalleryIndex = index;
    const currentItem = galleryData[currentGalleryIndex];

    lightboxContent.innerHTML = `<img src="${currentItem.src}" alt="${currentItem.alt}">`;
    if (lightboxCounter) lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${galleryData.length}`;
    if (lightboxTitle) lightboxTitle.textContent = currentItem.alt;

    if (lightboxPrevBtn) lightboxPrevBtn.style.display = 'flex';
    if (lightboxNextBtn) lightboxNextBtn.style.display = 'flex';

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function openLightboxVideo(videoSrc) {
    if (!lightboxModal || !lightboxContent) return;
    lightboxContent.innerHTML = `
      <video controls autoplay playsinline style="width: auto; height: 75vh; max-width: 90vw;">
        <source src="${videoSrc}" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    `;
    if (lightboxCounter) lightboxCounter.textContent = 'Preview';
    if (lightboxTitle) lightboxTitle.textContent = 'Live Performance Teaser';

    if (lightboxPrevBtn) lightboxPrevBtn.style.display = 'none';
    if (lightboxNextBtn) lightboxNextBtn.style.display = 'none';

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    lightboxContent.innerHTML = ''; // Detiene reproducción de vídeos
    document.body.style.overflow = '';
  }

  function showNextImage() {
    if (galleryData.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
    openGalleryIndex(currentGalleryIndex);
  }

  function showPrevImage() {
    if (galleryData.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    openGalleryIndex(currentGalleryIndex);
  }

  // Activa el Lightbox para cualquier póster principal (Nosferatu, Hans Zimmer, MJ, etc.)
  const mainPosterTrigger = document.getElementById('mainPosterTrigger');
  if (mainPosterTrigger) {
    mainPosterTrigger.addEventListener('click', () => {
      const img = mainPosterTrigger.querySelector('img');
      const src = img?.getAttribute('data-src') || img?.src;
      const alt = img?.getAttribute('alt') || 'Official Production Poster';
      if (src) openLightboxImage(src, alt);
    });
  }

  // Activa la galería si existe
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openGalleryIndex(index));
  });

  // Botón de reproducción de teaser en pantalla completa dinámico
  const playTeaserBtn = document.getElementById('playTeaserBtn');
  const teaserVideoEl = document.getElementById('nosferatuTeaserVideo');

  if (playTeaserBtn && teaserVideoEl) {
    playTeaserBtn.addEventListener('click', () => {
      // Obtiene la ruta exacta del <source> que esté en el HTML
      const videoSource = teaserVideoEl.querySelector('source')?.getAttribute('src');
      if (videoSource) {
        openLightboxVideo(videoSource);
      }
    });
  }

  // Controles del Modal
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextImage);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevImage);

  // Navegación con teclado (←, →, Escape)
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight' && lightboxNextBtn && lightboxNextBtn.style.display !== 'none') showNextImage();
    if (e.key === 'ArrowLeft' && lightboxPrevBtn && lightboxPrevBtn.style.display !== 'none') showPrevImage();
  });