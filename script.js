fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
    .then(function (res) { return res.json(); })
    .then(function (res) {addCard(res); })
let cards = document.querySelector(".Div");
let cards2=document.querySelector(".Div3");
function addCard(res) {
    for (let i = 42; i < res.length; i++) {
        cards.innerHTML += `
            <div class="carD col-lg-3 text-center col-md-5 col-10  ">
            <div class="imges p-5 w-100"><img class="img-fluid" src="${res[i].simple_thumb}"/> </div>
            <h4 class="card-color my-4">${res[i].title}</h4>
            <p class="P">${res[i].author}</p>
            </div>

        `;

    }
    for(let i=0 ; i<8 ; i++){
        cards2.innerHTML+=`
            <div class="carD col-lg-3 text-center col-md-5 col-10  ">
            <div class="imges p-5 w-100"><img class="img-fluid" src="${res[i].simple_thumb}"/> </div>
            <h4 class="card-color my-4">${res[i].title}</h4>
            <p class="P">${res[i].author}</p>
            </div>

        `;
    }
}
//2
fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
    .then(function (ans){ return ans.json(); })
    .then(function(ans) {addBook(ans);})
let Book=document.querySelector(".Div2");
function addBook(ans){
    Book.innerHTML=`
        <div class="row d-flex justify-content-around flex-wrap">
        <div class="col-lg-5 col-md-5 col-8 Img"><img class="img-fluid" src="${ans.simple_thumb}"/></div>
        <div class="col-lg-4 col-md-5 col-8">
            <h2 class="R-text ">Best Selling Books</h2>
            <div class="small-line mt-5"></div>
            <p class="mt-5">${ans.authors[2]}</p>
            <p class="mt-3 mb-5 fs-3">${ans.title}r</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus vel, eveniet eaque consectetur 
                dignissimos.eveniet eaque consectetur dignissimos</p>
            <div class="d-flex justify-content-start mt-2 mb-5">
                    <button class="py-2  view1 border-0 text-dark fs-4 mt-5"> Shop It Now <i class="fa-solid fa-arrow-right fa-2xl ms-3"
                        ></i> </button>
                </div>
        </div>

        </div>
    `;
}