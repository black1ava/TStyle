window.onload = function(){
  const anchors = document.getElementsByTagName('a');
  const dropdowns = Array.prototype.filter.call(anchors, function(anchor){
    return anchor.getAttribute('toggle-type') === 'dropdown';
  });

  dropdowns.map(function(dropdown){
    const icons = document.getElementsByClassName('dropdown-icon');
    const icon = Array.prototype.filter.call(icons, function(icon){
      return icon.getAttribute('toggle-for') === dropdown.getAttribute('id');
    });

    const contents = document.getElementsByClassName('dropdown-content');
    const content = Array.prototype.filter.call(contents, function(content){
      return content.getAttribute('content-of') === dropdown.getAttribute('id');
    });

    let count = 1;
    dropdown.addEventListener('click', function(){

      if(icon.length > 0){
        icon[0].style.transform = `rotate(${ (count % 2) * 180 }deg)`;
      }

      if(content.length > 0){
        content[0].classList.toggle('dropdown-content-active');
      }

      count++;
    });
  });
}
