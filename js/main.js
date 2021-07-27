const questions = document.querySelectorAll(".question");

for (let question of questions) {
    question.addEventListener('click', function() {
        if (question.classList.contains("unopen")) {
            question.classList.remove("unopen");
            question.classList.add("open");
        } else if (question.classList.contains("open")) {
            question.classList.remove("open");
            question.classList.add("unopen");
        }
    });
}

