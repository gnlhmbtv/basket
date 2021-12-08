let table=document.getElementById("table");
let tableBody=document.getElementById("tableBody");
let totalPrice=document.getElementById("totalPrice");

function GetBasketCount(){
    let localStorageArr=JSON.parse(localStorage.getItem("basket"));
    document.getElementById("basketCount").innerText=localStorageArr.length;

}
GetBasketCount();
let localStorageArr=JSON.parse(localStorage.getItem("basket"));
let totalProductPrice=0;       
localStorageArr.forEach(product => {
    totalProductPrice+=parseInt(product.price);
    let tr=document.createElement("tr");
    let tdImage=document.createElement("td");
    let image=document.createElement("img");
    image.setAttribute("src",product.src)
    image.style.height="240px";
    image.style.width="300px";
    tdImage.append(image);
    tdProductName=document.createElement("td");
    tdProductName.innerText=product.name;
    let tdPrice=document.createElement("td");
    tdPrice.innerText=product.price;
    let tdCount=document.createElement("td");
    tdCount.innerText=product.count;

    tr.append(tdImage,tdProductName,tdPrice,tdCount);
    tableBody.append(tr);
});

totalPrice.innerText=`${totalProductPrice}$`











