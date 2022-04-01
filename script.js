import products from './data/products-list.js';

let subTitle = 'These are some of my latest pieces for display'

function createItemForHomePage(prod) {
    
    let item = document.createElement('div');
    item.className = 'product';
    item.id = prod.code;

    let mainImg = document.createElement('img');
    mainImg.src = prod.featImg;
    
    let h3 = document.createElement('h3');
    h3.innerText = prod.name;

    let desc = document.createElement('p');
    desc.innerText = prod.description;

    let butt = document.createElement('button');
    butt.innerText = "Show me!";
    butt.addEventListener('click',()=>window.location.href = `single-item.html?${prod.code}`);

    item.appendChild(mainImg);
    item.appendChild(h3);
    item.appendChild(desc);

    item.appendChild(butt);

    return item;
}

function buildSingleItemPage(prod) {
    
    let h2 = document.createElement('h2');
    h2.innerText = prod.name;

    let itemImage = document.createElement('img');
    itemImage.src = prod.featImg;
    itemImage.className = 'item-image';

    let description = document.createElement('p');
    description.innerText = prod.description;

    // THE FOLLOWING BLOCK OF CODE IS FOR THE SHOPPING MODULE WHICH WILL BE BUILT IN THE NEXT STAGE
    let oldPrice = document.createElement('div');
    oldPrice.className = 'prev-price hide-me';
    oldPrice.innerText = prod.origPrice;
    
    let newPrice = document.createElement('div');
    newPrice.innerText = prod.discPrice;
    newPrice.className = 'hide-me';
    // END OF BLOCK

    function addImageToGallery(i) {
        imgGallery.className = 'imgGallery';
        let myImg = document.createElement('img');
        myImg.className = 'galImgs';
        myImg.src = i;
        myImg.addEventListener('click', ()=>document.querySelector('.item-image').src=i);
        imgGallery.appendChild(myImg);
    }

    let imgGallery = document.createElement('div');
    for (let i of prod.imgGallery) addImageToGallery(i);
    addImageToGallery(prod.featImg);

    let singleItem = document.createElement('div');
    singleItem.className = 'product-single';
    singleItem.appendChild(h2);
    singleItem.appendChild(itemImage);
    singleItem.appendChild(description);
    singleItem.appendChild(oldPrice);
    singleItem.appendChild(newPrice);
    singleItem.appendChild(imgGallery);

    return singleItem;
}


let sourcePage = window.location.href.split("/")
let myPage = sourcePage[sourcePage.length-1];

if (myPage == "index.html") {
    document.querySelector('#index-content').textContent = subTitle;
    for (let prod of products) {
        if (prod.featured == true && prod.display == true) {
            document.querySelector('#products-container').appendChild(createItemForHomePage(prod));
        } 
    }
} else {
    let itemPage = myPage.split("?");
    if (itemPage[0] == "single-item.html") {
        let currItem = products.filter(item => {return item.code == itemPage[1]});
        document.querySelector('#product-content').appendChild(buildSingleItemPage(currItem[0]));
    }
}

