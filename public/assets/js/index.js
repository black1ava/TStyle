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

    if(icon.length === 0) return null;

    let count = 1;

    dropdown.addEventListener('click', function(){
      icon[0].style.transform = `rotate(${ (count % 2) * 180 }deg)`;
      count++;
    });
  });
}
