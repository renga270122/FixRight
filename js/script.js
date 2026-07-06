// Small interactions for the FixRight MVP
document.addEventListener('DOMContentLoaded', function(){
  // Set current year in footer
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // Product modal: open and populate
  const modal = document.getElementById('productModal');
  const modalImage = document.querySelector('.modal-image');
  const modalTitle = document.querySelector('.modal-title');
  const modalDesc = document.querySelector('.modal-desc');
  const modalPrice = document.querySelector('.modal-price');

  function openModal(card){
    const img = card.querySelector('.product-media img');
    const title = card.dataset.title || card.querySelector('h3')?.textContent;
    const desc = card.dataset.desc || card.querySelector('p')?.textContent;
    const price = card.dataset.price || card.querySelector('.price')?.textContent;
    if(modalImage && img) modalImage.src = img.src;
    if(modalTitle) modalTitle.textContent = title || '';
    if(modalDesc) modalDesc.textContent = desc || '';
    if(modalPrice) modalPrice.textContent = price || '';
    if(modal) modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    if(modal) modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.view-product').forEach(btn => {
    btn.addEventListener('click', function(){
      const card = this.closest('.product-card');
      if(card) openModal(card);
    });
  });

  document.querySelectorAll('.modal-close, .modal').forEach(elm => {
    elm.addEventListener('click', function(e){
      // close when clicking overlay or close button
      if(e.target === this || this.classList.contains('modal-close')) closeModal();
    });
  });

  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeModal(); });
});
