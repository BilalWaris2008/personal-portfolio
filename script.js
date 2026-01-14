const resumeLists = document.querySelectorAll('.resume-list');



// resume section when clicking tab lists
resumeLists.forEach((list,idx) => {
    list.addEventListener('click', () =>{
        list.classList.add('active');
    })
});