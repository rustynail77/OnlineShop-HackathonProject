const title1 = "Dvir Shvartzbard";
const title2 = "Creative Pottery";
const icon = "./assets/icon.png";

let header = `
        <a href="index.html"><img src=${icon} alt="ceramic plate"></a>
        <div class="heading-title">
            ${title1} | 
            <span class="bold">${title2}</span>
        </div>
        `;

let navItems = `
        <ul class="nav-tabs" id="myLinks">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="products.html">Shop</a></li>
        </ul>
`;

let navBurger = `
    <a href="javascript:void(0);" class="burgIcon" onclick="navBurControl()">
    <i class="fa fa-bars fa-2x"></i>`;


function navBurControl() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function createHeader(header) {
    let myHeader = document.createElement('nav');
    myHeader.innerHTML = header + navBurger + navItems;
    document.getElementsByTagName('header')[0].appendChild(myHeader);
}
createHeader(header);