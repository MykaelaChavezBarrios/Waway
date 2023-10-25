const categories = document.querySelectorAll('#categories .category');
const contQuestions = document.querySelectorAll('.cont-questions');
let categoryActive = null;

categories.forEach((category) => {
    category.addEventListener('click', (e) => {
        categories.forEach((element) => {
            element.classList.remove('active')
        });

        e.currentTarget.classList.toggle('active');
        categoryActive = category.dataset.category;
    });
});