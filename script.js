// 카테고리별로 테스트를 필터링하는 기능을 추가할 수 있습니다.
const categories = document.querySelectorAll('.category');

function filterTests(categoryName) {
    categories.forEach(category => {
        if (categoryName === 'all' || category.querySelector('h2').innerText.includes(categoryName)) {
            category.style.display = 'block';
        } else {
            category.style.display = 'none';
        }
    });
}

// 초기에는 모든 카테고리를 보여줍니다.
filterTests('all');

// 검색 기능을 추가할 수 있습니다.
document.getElementById('search').addEventListener('input', function(e) {
    filterTests(e.target.value);
});
