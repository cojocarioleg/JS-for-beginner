const accordeonTitles = document.querySelectorAll('[data-name="accordeon-title"]');

accordeonTitles.forEach((item) => {
  item.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('hidden');
  });
});
