const hiddenSkills = document.querySelectorAll('.skills');
const showSkills = document.querySelectorAll('.hiddenSkills');

// for(let i=0; i<hiddenSkills.length; i++){
//     hiddenSkills[i].addEventListener('mouseover',()=>{
//         console.log(i)
//     })
// }

hiddenSkills.forEach(skill => {
    skill.addEventListener('mouseover', () => {

        for (let i = 0; i < showSkills.length; i++) {
            if (i == skill.id) {
                showSkills[i].toggleAttribute('hidden');
                setTimeout(() => {
                    showSkills[i].classList.remove('outAnimacion');
                    showSkills[i].classList.add('overAnimacion');
                }, 0100);
            }
        }
    });

    skill.addEventListener('mouseout', () => {
        for (let i = 0; i < showSkills.length; i++) {
            if (i == skill.id) {
                showSkills[i].classList.remove('overAnimacion')
                showSkills[i].classList.add('outAnimacion');
                setTimeout(() => {
                    showSkills[i].toggleAttribute('hidden');
                }, 1400);
            }
        }
    })
});
