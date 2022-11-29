//URL of API
let URL =   "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
//Array of API
let allMovies =[];

function movies (){
    let http = new XMLHttpRequest()
    http.open('get', URL)
    http.send();
    http.addEventListener('readystatechange', function (){
        if(http.readyState == 4 && http.status == 200){
            allMovies = (JSON.parse(http.response).results)
            console.log(allMovies) 
            displayMovies();  
        }
    })
}
movies()
//Add API To Body
function displayMovies(){
    let movies = ``
    for (let i = 0; i <allMovies.length; i++ ){
        movies += `<div class="col-lg-4 img-hover my-3 position-relative rounded overflow-hidden">
            <div class="bg-hover rounded position-absolute h-100 d-flex flex-column px-2 text-center justify-content-center align-items-center"> 
                <h1>${allMovies[i].original_title}</h1>
                <p>${allMovies[i].overview}</p>
                <p>${"rate: " + allMovies[i].vote_average}</p>
                <p>${allMovies[i].release_date}</p>
            </div>
            <img class="w-100  rounded  overflow-hidden" src="${"https://image.tmdb.org/t/p/w500" + allMovies[i].poster_path}" alt="">
        </div>`
    }
    document.getElementById('moviess').innerHTML = movies
};
//Function Of Search By Name
let searchMovies = document.getElementById("search")
function searchInputSearch() {
    let movies = ``
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].original_title.toLowerCase().includes(searchMovies.value.toLowerCase()) == true) {
            movies += `<div class="col-lg-4 img-hover my-3 position-relative rounded overflow-hidden">
                <div class="bg-hover rounded position-absolute h-100 d-flex flex-column px-2 text-center justify-content-center align-items-center"> 
                    <h1>${allMovies[i].original_title}</h1>
                    <p>${allMovies[i].overview}</p>
                    <p>${"rate: " + allMovies[i].vote_average}</p>
                    <p>${allMovies[i].release_date}</p>
                </div>
                <img class="w-100  rounded  overflow-hidden" src="${"https://image.tmdb.org/t/p/w500" + allMovies[i].poster_path}" alt="">
            </div>`
        }
    }
    document.getElementById('moviess').innerHTML = movies
}
searchMovies.addEventListener("keyup", function(){
    searchInputSearch(searchMovies.value)
})
//Function Of Search By Vote
let getMovie = document.getElementById("getMovies")
function searchInputGet(){
    let movies = ``
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].vote_average == getMovie.value) {
            movies += `<div class="col-lg-4 img-hover my-3 position-relative rounded overflow-hidden">
                    <div class="bg-hover rounded position-absolute h-100 d-flex flex-column px-2 text-center justify-content-center align-items-center"> 
                        <h1>${allMovies[i].original_title}</h1>
                        <p>${allMovies[i].overview}</p>
                        <p>${"rate: " + allMovies[i].vote_average}</p>
                        <p>${allMovies[i].release_date}</p>
                    </div>
                    <img class="w-100  rounded  overflow-hidden" src="${"https://image.tmdb.org/t/p/w500" + allMovies[i].poster_path}" alt="">
                </div>`
        }
    }
    document.getElementById('moviess').innerHTML = movies
}
getMovie.addEventListener("keyup", function () {
    searchInputGet(getMovie.value)
})
//close-side-bar
$(".sideBarBtn").click(() => {
    let navBtn = $("#contactDiv").outerWidth()
    if ($(".sideBarBtn").css("left") == "0px"){
        $(".sideBarBtn").animate({ left: `-${navBtn}`} , 500);
        $(".side-bar-line").animate({left: "0px" } , 500)
        $(".sidebar").animate({ left: "-252px" }, 500)
        $(".sideBarBtn").removeClass("fa-times fs-2")
        $(".sideBarBtn").addClass("fa-align-justify fs-4")
        $("ul li").animate({ top: `1000px` ,opacity: 0}, 500)
//open-side-bar
    } else if ($(".sideBarBtn").css("left") != "0px"){
        $(".sideBarBtn").animate({ left: `0px` }, 500);
        $(".side-bar-line").animate({ left: "252px" }, 500)
        $(".sidebar").animate({ left: "0px" }, 500)
        $(".sideBarBtn").addClass("fa-times fs-2")
        $(".sideBarBtn").removeClass("fa-align-justify fs-4")
        $("#sideBarElement").animate({top: `10px`,opacity: 1}, 1200)
        $("#sideBarElement1").animate({top: `20px`,opacity: 1}, 1300)
        $("#sideBarElement2").animate({top: `30px`,opacity: 1}, 1400)
        $("#sideBarElement3").animate({top: `40px`,opacity: 1}, 1500)
        $("#sideBarElement4").animate({top: `50px`,opacity: 1}, 1600)
        $("#sideBarElement5").animate({top: `60px`,opacity: 1}, 1700)
    }
})
//Get Element From HTML
let userName = document.getElementById("validationInput")
let email = document.getElementById("validationInput1")
let phone = document.getElementById("validationInput2")
let age = document.getElementById("validationInput3")
let password = document.getElementById("validationInput4")
let rePassword = document.getElementById("validationInput5")
//Function Of Validation Of Name
function validationOfName(){
    let regexName = /^[A-Z][a-z]{4,15}$/
    if (!regexName.test(userName.value)) {
        document.getElementById('validationDiv').innerHTML = `Your Name Should start With capital Letter and from 4 to 15 letters`
    } else if (userName.value == '' || userName.value == null) {
        document.getElementById('validationDiv').innerHTML = `your input is empty`
    }else {
        document.getElementById('validationDiv').innerHTML = ``
    }
} 
userName.addEventListener('keyup' ,function(){
    validationOfName(userName.value)
})
//Function Of Validation Of email
function validationOfEmail(){
    let regexEmail = /[a-z0-9]+@(gmail|yahoo)+\.[a-z]{2,3}$/
    if (email.value == '' || email.value == null) {
        document.getElementById('validationDiv1').innerHTML = `your input is empty`
    } else if (!regexEmail.test(email.value)) {
        document.getElementById('validationDiv1').innerHTML = `Your Email is not Valid`
    } else {
        document.getElementById('validationDiv1').innerHTML = ``
    }
}
email.addEventListener('keyup', function () {
    validationOfEmail(email.value)
})
//Function Of Validation Of phone
function validationOfPhone(){
    let regexPhone = /^[01](1|2|4|5){1}[0-9]{9}$/
    if (phone.value == '' || phone.value == null) {
        document.getElementById('validationDiv2').innerHTML = `your input is empty`
    } else if (!regexPhone.test(phone.value)){
        document.getElementById('validationDiv2').innerHTML = `Your phone is not valid `
    } else {
        document.getElementById('validationDiv2').innerHTML = ``
    }
}
phone.addEventListener('keyup', function () {
    validationOfPhone(phone.value)
})
//Function Of Validation Of age
function validationOfAge(){
    let regexAge = /^[2-9][1-9]{1,2}$/
    if (age.value == '' || age.value == null) {
        document.getElementById('validationDiv3').innerHTML = `your input is empty`
    } else if (!regexAge.test(age.value)) {
        document.getElementById('validationDiv3').innerHTML = `Your age should start +20`
    } else {
        document.getElementById('validationDiv3').innerHTML = ``
    }
}
age.addEventListener('keyup', function () {
    validationOfAge(age.value)
})
//Function Of Validation Of password
function validationOfPassword(){
    let regexPass = /^[A-Z][0-9a-z]{4,15}$/
    if (password.value == '' || password.value == null) {
        document.getElementById('validationDiv4').innerHTML = `your input is empty`
    } else if (!regexPass.test(password.value)){
        document.getElementById('validationDiv4').innerHTML = `Your password Should start With capital Letter and from 4 to 15 numbers or letters`
    } else {
        document.getElementById('validationDiv4').innerHTML = ``
    }
}
password.addEventListener('keyup', function () {
    validationOfPassword(password.value)
})
//Function Of Validation Of rePassword
function validationOfRePassword(){
    let regexRePass = /^[A-Z][0-9a-z]{4,15}$/
    if (rePassword.value == '' || rePassword.value == null) {
        document.getElementById('validationDiv5').innerHTML = `your input is empty`
    } else if (!regexRePass.test(rePassword.value)) {
        document.getElementById('validationDiv5').innerHTML = `Your password Should start With capital Letter and from 4 to 15 numbers or letters`
    } else if (password.value != rePassword.value){
        document.getElementById('validationDiv5').innerHTML = `your rePassword doesn't match`
    } else {
        document.getElementById('validationDiv5').innerHTML = ``
    }
}
rePassword.addEventListener('keyup', function () {
    validationOfRePassword(rePassword.value)
})

