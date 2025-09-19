(function handleActivePracticeItems() {
  const activeItems = document.querySelectorAll('.box-practice-container .owl-item.active');
  if (activeItems.length === 0) return;

  // ตัวแรก
  const first = activeItems[0];
  if (first && !first.querySelector('.image .tag-top-left')) {
    first.querySelector('button.call-to-action')?.click();
  }

  // ตัวที่สอง
  const second = activeItems[1];
  if (second && !second.querySelector('.image .tag-top-left')) {
    second.querySelector('button.call-to-action')?.click();
  }
})();
