// ?    VARIABLE DECLARATIONS HERE

let tabLinks = document.querySelectorAll("#feature_tab_link"),
    tabs = document.querySelectorAll(".feature_tab"),
    questions = document.querySelectorAll(".question"),
    questionItems = document.querySelectorAll(".question_item"),
    formButton = document.querySelector(".newsletter_btn"),
    email = document.querySelector("#email"),
    msg = document.querySelector(".msg"),
    menuBtn = document.querySelector("#hamburger_img")

// ?    EVENTS HANDLERS HERE

// ? Handles feature tabs clicks
tabLinks.forEach((link) => link.addEventListener("click", showTab))

// ? Handles mouseover event for questions links
questions.forEach((question) =>
    question.addEventListener("mouseover", function (e) {
        question.style.color = "hsl(0, 94%, 66%)"
        question.style.cursor = "pointer"
    })
)

// ? Handles mouseout event for questions links
questions.forEach((question) =>
    question.addEventListener("mouseout", function (e) {
        question.style.color = "hsl(229, 31%, 21%)"
    })
)

// ? Handles click event for questions container
questionItems.forEach((item) => {
    item.addEventListener("click", displayQuestion)
})

// ? Handles focus event for email input
email.addEventListener("focus", function (e) {
    msg.style.visibility = "hidden"
})

// ? Handles click event for email form submit button
formButton.addEventListener("click", validateEmail)

// ? Handles click event of mobile menu button
menuBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (e.target.className == "menu") {
        e.target.src = "./images/icon-close.svg"
        document.querySelector(".navbar").className += " active"
        document.querySelector(".flex .brand_logo").src = "./images/logo-bookmark-white.svg"
        e.target.className = "hide"
    } else {
        document.querySelector(".navbar").className = "navbar"
        e.target.src = "./images/icon-hamburger.svg"
        document.querySelector(".flex .brand_logo").src = "./images/logo-bookmark.svg"

        e.target.className = "menu"
    }
})

// ?    FUNCTIONS / EVENT FUNCTIONS HERE

// ? Displays the clicked feature tab
function showTab(e) {
    e.preventDefault()
    let id = parseInt(e.target.dataset.key) - 1
    tabs.forEach((tab) => (tab.style.display = "none"))
    tabs[id].style.display = "flex"
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = "feature_tab_link"
    }
    e.target.className += " feature_tab_link-active"
}

// ? Displays the clicked question
function displayQuestion(e) {
    e.preventDefault()
    let id
    if (e.target.className == "question") {
        id = e.target.parentNode.dataset.question
    } else if (e.target.classList.contains("fas")) {
        id = e.target.parentNode.parentNode.dataset.question
    }
    let link = document.querySelector(`[data-link="${id}"]`)
    if (link.children[0].className == "fas fa-angle-down") {
        document.querySelector(`[data-answer="${id}"]`).style.display = "block"
        link.style.color = "hsl(0, 94%, 66%)"
        link.children[0].className = "fas fa-angle-up"
    } else {
        document.querySelector(`[data-answer="${id}"]`).style.display = "none"
        link.style.color = "hsl(231, 69%, 60%)"
        link.children[0].className = "fas fa-angle-down"
    }
}

// ? Validates submitted email
function validateEmail(e) {
    e.preventDefault()
    let email = document.querySelector("#email")
    let msg = document.querySelector(".msg")

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        alert("Thanks for signing up")
        email.value = ""
    } else {
        msg.style.visibility = "visible"
    }
}
