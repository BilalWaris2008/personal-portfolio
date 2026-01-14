const resumeLists = document.querySelectorAll('.resume-list');

// resume section when clicking tab lists
resumeLists.forEach((list,idx) => {
    list.addEventListener('click', () =>{
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');
    })
});