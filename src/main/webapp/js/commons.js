function insertSidebar(){
    elmt = document.getElementById("sidebar");
    elmt.innerHTML='\
        <a href="homepage.html"><img class="img-fluid my-3" src="images/logo.png"><\a>\
        <form class="form-inline my-2 my-lg-0">\
            <input class="form-control mr-sm-0" type="search" placeholder="Search" aria-label="Search">\
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">🔎</button>\
        </form>\
        <hr>\
        <div class="list-group">\
        <a href="homepage.html" class="list-group-item list-group-item-action">Home</a>\
        <a href="AboutPage.html" class="list-group-item list-group-item-action">About</a>\
        <a href="homepage.html" class="list-group-item list-group-item-action">Surprise Me</a>\
        </div>'; 
}