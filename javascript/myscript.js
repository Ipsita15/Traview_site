// search-box open close js code
let header = document.querySelector(".header");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  header.classList.toggle("showInput");
  if(header.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});



{/* <div class="search-box">
    <i class='bx bx-search'></i>
    <div class="input-box">
        <input type="text" placeholder="Search...">
    </div>
</div> */}

{/* <script async src="https://cse.google.com/cse.js?cx=333d1be2ebb02dd68"></script>
<div class="gcse-search"></div> */}