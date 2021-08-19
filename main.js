let tabLinks = document.querySelectorAll("#feature_tab_link"),
    tabs = document.querySelectorAll(".feature_tab")

// ? Listens for tab links clicked
tabLinks.forEach((link) => link.addEventListener("click", showTab))

// ? Displays the clicked tab
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

let questions = document.querySelectorAll(".question")

// ? Triggers when the mouse hovers on questions
questions.forEach((question) =>
    question.addEventListener("mouseover", function (e) {
        question.style.color = "hsl(0, 94%, 66%)"
        question.style.cursor = "pointer"
    })
)

// ? Returns questions to previous state on mouse leave
questions.forEach((question) =>
    question.addEventListener("mouseout", function (e) {
        question.style.color = "hsl(229, 31%, 21%)"
    })
)

let questionItems = document.querySelectorAll(".question_item")

questionItems.forEach((item) => {
    item.addEventListener("click", displayQuestion)
})

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

let formButton = document.querySelector(".newsletter_btn")

let email = document.querySelector("#email")
let msg = document.querySelector(".msg")

email.addEventListener("focus", function (e) {
    msg.style.visibility = "hidden"
})

formButton.addEventListener("click", validateEmail)

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
