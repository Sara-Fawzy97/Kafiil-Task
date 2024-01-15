var x = document.getElementById('x')
const y = document.getElementById('y')

var submit = document.getElementById('submit')


//to show the responsive navbar 
function togglerBtn() {

    if (x.style.display === "none") {

        x.style.display = 'flex'


    } else { x.style.display = 'none' }

}

//to show user profile
function showList() {
    if (y.style.display === "none") {

        y.style.display = 'block'


    } else { y.style.display = 'none' }
}

// console.log(slides)
let currentIndex = 1
displaySlide(currentIndex);

function nextSlide(n) {
    displaySlide(currentIndex += n)
}

function currentSlide(n) {
    displaySlide(currentIndex = n)
}


function displaySlide(n) {
    let slides = document.getElementsByClassName('slides')
    let dots = document.getElementsByClassName('dot')

    if (n > slides.length) { currentIndex = 1 };
    if (n < 1) {
        currentIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {

        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[currentIndex - 1].style.display = "block";
    dots[currentIndex - 1].className += " active";

}

//count the cost of services
let count = 3;
var servicesAmount = document.getElementById('serviceNo').innerHTML;
let cost = document.getElementById('cost').innerHTML;


function increament() {
    count += 1
        // servicesAmount += 1
    document.getElementById('serviceNo').innerHTML = count
}

function decreament() {
    count -= 1
    document.getElementById('serviceNo').innerHTML = count

}

function submitClick() {
    cost = count * 100
    document.getElementById('cost').innerHTML = "$" + cost
    submit.innerHTML = "Submit";
    submit.style.backgroundColor = "#FFCB31"

}

var select = document.getElementById('servicesItems')
for (let i = 1; i < 3; i++) {
    select.innerHTML += '<div> <label class = "checkList" > <input type = "checkbox"class = "checkbox" > <span class = "checkmark" > <svg xmlns = "http://www.w3.org/2000/svg"width = "30"height = "31"viewBox = "0 0 30 31"fill = "none" > <path d = "M6.7867 13.5118C7.01599 13.2753 7.32693 13.1424 7.65115 13.1424C7.97537 13.1424 8.28631 13.2753 8.5156 13.5118L12.8391 17.9723L21.4836 9.05248C21.5971 8.93528 21.7319 8.84229 21.8802 8.77883C22.0286 8.71537 22.1876 8.68268 22.3482 8.68262C22.5088 8.68256 22.6678 8.71514 22.8162 8.77849C22.9646 8.84184 23.0995 8.93473 23.2131 9.05185C23.3267 9.16897 23.4168 9.30803 23.4783 9.46109C23.5398 9.61415 23.5715 9.7782 23.5716 9.9439C23.5716 10.1096 23.54 10.2737 23.4786 10.4268C23.4172 10.5799 23.3272 10.719 23.2137 10.8362L12.8391 21.5398L6.7867 15.2955C6.55748 15.0589 6.42871 14.7381 6.42871 14.4036C6.42871 14.0691 6.55748 13.7483 6.7867 13.5118Z"fill = "white" / > </svg> </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Diam nisi, cras neque Lorem ipsumdolor sit amet, Lorem ipsum dolor sit amet. </label> <div><span >$100 </span> <span> 2 days </span> </div> </div> '
}

var review = document.getElementById('reviewsItems')
for (let i = 1; i < 3; i++) {

    review.innerHTML += '<div> <div class = "flex" > <img src = "images/user2.jpg" alt = ""title = "" > <div> <h4> Jane Smith </h4> <div class = "flex" > <svg xmlns = "http://www.w3.org/2000/svg" width = "114" height = "19"viewBox = "0 0 114 19" fill = "none" > <path d="M19.9066 7.17987C19.7759 6.77841 19.4175 6.49327 18.9934 6.45531L13.2328 5.9357L10.9549 0.639404C10.7869 0.251254 10.4044 0 9.97941 0C9.55441 0 9.17189 0.251254 9.00393 0.640312L6.72603 5.9357L0.964514 6.45531C0.541187 6.49418 0.183642 6.77841 0.0522282 7.17987C-0.0791861 7.58133 0.042178 8.02167 0.362415 8.29925L4.71675 12.0927L3.43276 17.7112C3.3388 18.1243 3.50022 18.5513 3.84527 18.7991C4.03075 18.9322 4.24774 19 4.46656 19C4.65523 19 4.84238 18.9495 5.01034 18.8496L9.97941 15.8995L14.9467 18.8496C15.3101 19.0669 15.7683 19.047 16.1126 18.7991C16.4578 18.5506 16.6191 18.1234 16.5252 17.7112L15.2412 12.0927L19.5955 8.3C19.9157 8.02167 20.038 7.58209 19.9066 7.17987Z"fill = "#FFCB31" /> <path d = "M66.9271 7.17987C66.7964 6.77841 66.438 6.49327 66.0139 6.45531L60.2533 5.9357L57.9754 0.639404C57.8074 0.251254 57.4249 0 56.9999 0C56.5749 0 56.1924 0.251254 56.0244 0.640312L53.7465 5.9357L47.985 6.45531C47.5617 6.49418 47.2042 6.77841 47.0727 7.17987C46.9413 7.58133 47.0627 8.02167 47.3829 8.29925L51.7373 12.0927L50.4533 17.7112C50.3593 18.1243 50.5207 18.5513 50.8658 18.7991C51.0513 18.9322 51.2682 19 51.4871 19C51.6757 19 51.8629 18.9495 52.0308 18.8496L56.9999 15.8995L61.9672 18.8496C62.3306 19.0669 62.7888 19.047 63.1331 18.7991C63.4784 18.5506 63.6396 18.1234 63.5457 17.7112L62.2617 12.0927L66.616 8.3C66.9362 8.02167 67.0585 7.58209 66.9271 7.17987Z"fill = "#FFCB31" /> <path d = "M43.0184 7.17987C42.8878 6.77841 42.5293 6.49327 42.1052 6.45531L36.3446 5.9357L34.0667 0.639404C33.8987 0.251254 33.5162 0 33.0912 0C32.6662 0 32.2837 0.251254 32.1157 0.640312L29.8378 5.9357L24.0763 6.45531C23.653 6.49418 23.2955 6.77841 23.164 7.17987C23.0326 7.58133 23.154 8.02167 23.4742 8.29925L27.8286 12.0927L26.5446 17.7112C26.4506 18.1243 26.612 18.5513 26.9571 18.7991C27.1426 18.9322 27.3596 19 27.5784 19C27.767 19 27.9542 18.9495 28.1222 18.8496L33.0912 15.8995L38.0585 18.8496C38.422 19.0669 38.8802 19.047 39.2245 18.7991C39.5697 18.5506 39.7309 18.1234 39.637 17.7112L38.353 12.0927L42.7073 8.3C43.0275 8.02167 43.1498 7.58209 43.0184 7.17987Z"fill = "#FFCB31" /> <path d = "M90.0392 7.17987C89.9085 6.77841 89.5501 6.49327 89.126 6.45531L83.3654 5.9357L81.0875 0.639404C80.9195 0.251254 80.537 0 80.112 0C79.687 0 79.3045 0.251254 79.1365 0.640312L76.8586 5.9357L71.0971 6.45531C70.6738 6.49418 70.3162 6.77841 70.1848 7.17987C70.0534 7.58133 70.1747 8.02167 70.495 8.29925L74.8493 12.0927L73.5653 17.7112C73.4714 18.1243 73.6328 18.5513 73.9778 18.7991C74.1633 18.9322 74.3803 19 74.5991 19C74.7878 19 74.9749 18.9495 75.1429 18.8496L80.112 15.8995L85.0792 18.8496C85.4427 19.0669 85.9009 19.047 86.2452 18.7991C86.5904 18.5506 86.7517 18.1234 86.6577 17.7112L85.3737 12.0927L89.7281 8.3C90.0483 8.02167 90.1706 7.58209 90.0392 7.17987Z"fill = "#FFCB31" /> <path d = "M113.948 7.17987C113.817 6.77841 113.459 6.49327 113.035 6.45531L107.274 5.9357L104.996 0.639404C104.828 0.251254 104.446 0 104.021 0C103.596 0 103.213 0.251254 103.045 0.640312L100.767 5.9357L95.0058 6.45531C94.5824 6.49418 94.2249 6.77841 94.0935 7.17987C93.9621 7.58133 94.0834 8.02167 94.4037 8.29925L98.758 12.0927L97.474 17.7112C97.3801 18.1243 97.5415 18.5513 97.8865 18.7991C98.072 18.9322 98.289 19 98.5078 19C98.6965 19 98.8836 18.9495 99.0516 18.8496L104.021 15.8995L108.988 18.8496C109.351 19.0669 109.81 19.047 110.154 18.7991C110.499 18.5506 110.66 18.1234 110.566 17.7112L109.282 12.0927L113.637 8.3C113.957 8.02167 114.079 7.58209 113.948 7.17987Z"fill = "#E6EAEF" /> </svg> <span> .30 m </span > </div> </div> </div> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Diam nisi, cras neque Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit....Lorem ipsum dolor sit amet, consectetur adipiscingelit.Diam nisi, cras neque Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit.... </p> </div>'

}