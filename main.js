$(document).ready(() => {
  $('.text').slideUp();

  $('.accoedian-item').each((index, item) => {
    $(item).click((e) => {
      const $currentItem = $(e.currentTarget);
      const $currentText = $currentItem.find('.text');

      // Toggle text visibility for the clicked item
      $currentText.slideToggle(400);

      // Toggle text color for the clicked item
      $currentItem.find('.title').toggleClass('text-slate-800');

      // Toggle button color for the clicked item
      $currentItem.find('.btn').toggleClass('bg-purple-400');

      // Toggle line visibility for the clicked item
      $currentItem.find('.line').toggleClass('hidden');

      // Close other items
      $('.accoedian-item').not($currentItem).find('.text').slideUp(400);
      $('.accoedian-item').not($currentItem).find('.title').removeClass('text-slate-800');
      $('.accoedian-item').not($currentItem).find('.btn').removeClass('bg-purple-400');
      $('.accoedian-item').not($currentItem).find('.line').removeClass('hidden');
    });
  });
  
  
  $(window).resize(() => {
    if ($(window).width() <= 640) {
      $('.main-img').attr('src', 'https://raw.githubusercontent.com/Benjihunt97/Accordian/ae630da0330e8ac8f6162b908ccc518bde0e8c40/background-pattern-mobile.svg');
    } else {
      $('.main-img').attr('src', 'https://raw.githubusercontent.com/Benjihunt97/Accordian/ae630da0330e8ac8f6162b908ccc518bde0e8c40/background-pattern-desktop.svg');
    }
  });
  
});
                  
