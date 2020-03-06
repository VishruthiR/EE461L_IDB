function insertSidebar(){
    elmt = document.getElementById("sidebar");
    elmt.innerHTML='\
    <div class="row">\
        <a href="homepage.html"><img class="img-fluid my-3" src="images/logo.png"><\a>\
        <form class="form-inline my-2 my-lg-0">\
            <input class="form-control mr-sm-0" type="search" placeholder="Search" aria-label="Search">\
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">🔎</button>\
        </form>\
        <hr>\
        <ul class="list-unstyled">\
        <li><a href="homepage.html">Home</a></li><br>\
        <li><a href="AboutPage.html">About</a></li><br>\
        <li><a href="">Surprise Me</a></li><br>\
        </ul>\
    </div>';
}