(function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
  window.handleForm = function(e){
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    // Simple fallback: open mail client
    const mailto = `mailto:you@example.com?subject=${encodeURIComponent('Message from '+name)}&body=${encodeURIComponent(message+'\n\n— '+name+' ('+email+')')}`;
    window.location.href = mailto;
  };
})();
