document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.navbar__text-size').forEach(function(li) {
        li.onclick = function () {
            document.querySelector('#navbar').style.color = li.dataset.color
        }
    })
})