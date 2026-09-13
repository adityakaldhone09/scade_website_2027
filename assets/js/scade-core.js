/**
 * SCADE Club - GHRCEM Core JavaScript
 * Handles navigation, mobile drawer, interactive filters, search, and full-featured Lightbox.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  initLightbox();
  initFilters();
  initSearch();
  initContactForm();
});

/* ===================================================
   1. NAVBAR & ACTIVE LINK LOGIC
   =================================================== */
function initNavbar() {
  const navbar = document.querySelector('.scade-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Set active link based on current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.scade-nav-link, .mobile-nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Check exact match or anchor
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else if (href.startsWith('#') && (currentPage === 'index.html' || currentPage === '')) {
      // Allow scroll spy for hash links on homepage if desired
    }
  });
}

/* ===================================================
   2. MOBILE DRAWER NAVIGATION
   =================================================== */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.mobile-drawer-close');

  if (!drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Close when clicking any link inside drawer
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ===================================================
   3. ZERO-DEPENDENCY FULLSCREEN LIGHTBOX
   =================================================== */
let lightboxItems = [];
let currentLightboxIndex = 0;

function initLightbox() {
  // Check if lightbox modal element exists, if not create and append it to body
  let modal = document.querySelector('.scade-lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'scade-lightbox-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
      <div class="lightbox-content-box">
        <button class="lightbox-close-btn" aria-label="Close Lightbox">&times;</button>
        <button class="lightbox-nav-btn lightbox-prev-btn" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
        <button class="lightbox-nav-btn lightbox-next-btn" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
        <img src="" alt="SCADE Event Media" id="scade-lightbox-img">
        <div class="lightbox-caption-text" id="scade-lightbox-caption"></div>
        <div class="lightbox-counter-text" id="scade-lightbox-counter"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const lightboxImg = document.getElementById('scade-lightbox-img');
  const lightboxCaption = document.getElementById('scade-lightbox-caption');
  const lightboxCounter = document.getElementById('scade-lightbox-counter');
  const closeBtn = modal.querySelector('.lightbox-close-btn');
  const prevBtn = modal.querySelector('.lightbox-prev-btn');
  const nextBtn = modal.querySelector('.lightbox-next-btn');

  function openLightbox(index) {
    if (lightboxItems.length === 0) return;
    currentLightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
    const item = lightboxItems[currentLightboxIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt || 'SCADE Club Media';
    lightboxCaption.textContent = item.caption || item.alt || '';
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${lightboxItems.length}`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNext() {
    openLightbox(currentLightboxIndex + 1);
  }

  function showPrev() {
    openLightbox(currentLightboxIndex - 1);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  // Click outside content to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // Collect all elements with [data-scade-lightbox]
  refreshLightboxTriggers();
}

function refreshLightboxTriggers() {
  const triggers = document.querySelectorAll('[data-scade-lightbox]');
  lightboxItems = [];

  triggers.forEach((trigger, idx) => {
    const src = trigger.getAttribute('data-scade-lightbox') || trigger.getAttribute('src');
    const caption = trigger.getAttribute('data-caption') || trigger.getAttribute('alt') || '';
    lightboxItems.push({ src, caption, alt: caption });

    // Remove prior click listeners by cloning or direct setter
    trigger.onclick = (e) => {
      e.preventDefault();
      // Find current item's index in trigger list
      openLightboxAtSrc(src);
    };
  });
}

function openLightboxAtSrc(src) {
  const index = lightboxItems.findIndex(item => item.src === src);
  if (index !== -1) {
    const modal = document.querySelector('.scade-lightbox-modal');
    if (!modal) return;
    currentLightboxIndex = index;
    const item = lightboxItems[currentLightboxIndex];
    document.getElementById('scade-lightbox-img').src = item.src;
    document.getElementById('scade-lightbox-caption').textContent = item.caption;
    document.getElementById('scade-lightbox-counter').textContent = `${currentLightboxIndex + 1} / ${lightboxItems.length}`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/* ===================================================
   4. FILTER TABS (EVENTS, GALLERY, PROJECTS)
   =================================================== */
function initFilters() {
  const filterBars = document.querySelectorAll('[data-filter-group]');
  
  filterBars.forEach(bar => {
    const targetSelector = bar.getAttribute('data-filter-target');
    const buttons = bar.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll(targetSelector);

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        items.forEach(item => {
          if (filterValue === '*' || item.classList.contains(filterValue.replace('.', ''))) {
            item.style.display = '';
            item.style.opacity = '1';
          } else {
            item.style.display = 'none';
          }
        });

        // Check if any empty state placeholder is present
        const emptyState = document.getElementById(bar.getAttribute('data-empty-id'));
        if (emptyState) {
          const visibleCount = Array.from(items).filter(i => i.style.display !== 'none').length;
          emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        // Re-calculate lightbox index for filtered items if on gallery
        refreshLightboxTriggers();
      });
    });
  });
}

/* ===================================================
   5. REAL-TIME SEARCH
   =================================================== */
function initSearch() {
  const searchInputs = document.querySelectorAll('[data-search-target]');

  searchInputs.forEach(input => {
    const targetSelector = input.getAttribute('data-search-target');
    const items = document.querySelectorAll(targetSelector);
    const emptyState = document.getElementById(input.getAttribute('data-search-empty'));

    input.addEventListener('input', () => {
      const term = input.value.toLowerCase().trim();
      let visibleCount = 0;

      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(term)) {
          item.style.display = '';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });
}

/* ===================================================
   6. CONTACT FORM & FEEDBACK TOASTS
   =================================================== */
function initContactForm() {
  const form = document.getElementById('scadeContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...';

    // Simulate reliable dispatch
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      btn.classList.remove('btn-scade-primary');
      btn.classList.add('btn-scade-secondary');
      
      showToast('Thank you for contacting SCADE! Our team will respond shortly.', 'success');
      form.reset();

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        btn.classList.remove('btn-scade-secondary');
        btn.classList.add('btn-scade-primary');
      }, 3500);
    }, 800);
  });
}

function showToast(message, type = 'info') {
  let container = document.getElementById('scade-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'scade-toast-container';
    container.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 10px;
    `;
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    background: #060e40;
    color: white;
    padding: 14px 22px;
    border-radius: 10px;
    font-size: 0.92rem;
    font-weight: 500;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    border-left: 4px solid ${type === 'success' ? '#10b981' : '#0284c7'};
    display: flex;
    align-items: center;
    gap: 12px;
    animation: toastSlideIn 0.3s ease;
  `;
  toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}" style="color:${type === 'success' ? '#10b981' : '#38bdf8'}"></i> ${message}`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}
