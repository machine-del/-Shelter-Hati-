document.addEventListener('DOMContentLoaded', function() {
  const tabsBtn = document.querySelectorAll('.tabButton');
  const tabsContent = document.querySelectorAll('.cards');

  tabsBtn.forEach(onTabClick)

  function onTabClick(item) {
    item.addEventListener('click', function() {
      let currentBtn = item;
      let tabData = currentBtn.getAttribute('data-path');
      let currentTabText = document.querySelector(`[data-target-text="${tabData}"]`);
     /* let currentTabImg = document.querySelector(`[data-target-img="${tabData}"]`);*/

      if (!currentBtn.classList.contains('tabs__btn-active')) {
        tabsBtn.forEach(function(item) {
          item.classList.remove('tabs__btn-active');
        })

        tabsContent.forEach(function(item) {
          item.classList.remove('tabs-active')
        })

        currentBtn.classList.add('tabs__btn-active');
        currentTabText.classList.add('tabs-active');
       /* currentTabImg.classList.add('tabs-active');*/
      }
    })
  }

  /*document.querySelector('.js-tabBtn').click();*/
})


function navMain() {
  alert("Временно недоступно!");
}