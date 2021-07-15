const hidSkills = document.getElementById('js')
const hiddenSkills = document.getElementsByClassName('skills');
console.log(hiddenSkills)

// const asd = () => {
//     for (const i of hiddenSkills) {
//         console.log(i)
//         i.addEventListener('click', console.log('asd'))
//     }
// }
// asd();


hidSkills.addEventListener('mouseover', () => {
    const skill = document.getElementById('hiddenSkills');
    skill.toggleAttribute('hidden');
    setTimeout(() => {
        skill.classList.remove('outAnimacion');
        skill.classList.add('overAnimacion');
    }, 0100);
})

hidSkills.addEventListener('mouseout', () => {
    const skill = document.getElementById('hiddenSkills');
    skill.classList.remove('overAnimacion')
    skill.classList.add('outAnimacion');
    setTimeout(() => {
        skill.toggleAttribute('hidden');
    }, 1510);

});
