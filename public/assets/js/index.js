window.onload = function(){

  const mainContent = document.getElementsByClassName('main-content');

  const anchors = document.getElementsByClassName('topbar-dropdown');
  const dropdowns = Array.prototype.filter.call(anchors, function(anchor){
    return anchor.getAttribute('toggle-type') === 'dropdown';
  });

  dropdowns.map(function(dropdown){
    const icons = document.getElementsByClassName('dropdown-icon');
    const icon = Array.prototype.filter.call(icons, function(icon){
      return icon.getAttribute('toggle-for') === dropdown.getAttribute('id');
    });

    const contents = document.getElementsByClassName('topbar-dropdown-content');
    const content = Array.prototype.filter.call(contents, function(content){
      return content.getAttribute('content-of') === dropdown.getAttribute('id');
    });

    let count = 1;
    dropdown.addEventListener('click', function(){

      if(icon.length > 0){
        icon[0].style.transform = `rotate(${ (count % 2) * 180 }deg)`;
      }

      if(content.length > 0){
        content[0].classList.toggle('topbar-dropdown-content-active');
      }

      count++;
    });
  });

  const sidebarToggles = document.getElementsByClassName('sidebar-toggle-icon');
  Array.prototype.map.call(sidebarToggles, function(sidebarToggle){

    const sidebars = document.getElementsByClassName('sidebar');
    const sidebar = Array.prototype.filter.call(sidebars, function(sidebar){
      return sidebar.getAttribute('id') === sidebarToggle.getAttribute('toggle-for');
    });

    const darkScreen = document.createElement('div');
    darkScreen.setAttribute('class', 'dark-screen');
    sidebar[0].appendChild(darkScreen);

    sidebarToggle.addEventListener('click', function(){
      sidebarToggle.classList.toggle('close');

      if(sidebar.length === 0) return null;

      sidebar[0].classList.toggle('active');
      darkScreen.classList.toggle('active');
      mainContent[0].classList.toggle('side-bar-active');
    });

    darkScreen.addEventListener('click', function(){
      sidebarToggle.classList.toggle('close');
      darkScreen.classList.toggle('active');
      sidebar[0].classList.toggle('active');
      mainContent[0].classList.toggle('side-bar-active');
    });
  });
}
