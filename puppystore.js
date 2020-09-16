// Puppy Store JS

function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginRight = '250px';
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginRight = '0';
}

// Place Holder for navigation bar
$(function(){
    $("#nav-placeholder").load("sub_tabs/navigation.html");
  });

//Place holder for footer
$(function(){
    $("#footer-placeholder").load("sub_tabs/footer.html");
  });