console.log('Drag and drop utility in js ');
const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

//Event listener for dragable imgBox element
imgBox.addEventListener('dragstart', (e) => {
    console.log('dragStart has been triggered');
    e.target.className += 'hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});
imgBox.addEventListener('dragend', (e) => {
    console.log('dragStart has been triggered');
    e.target.className = 'imgBox'

});


for (const whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('Dragover has been triggerd');

    });
    whiteBox.addEventListener('dragenter', (e) => {
        e.target.className += 'dashed';
        console.log('Dragenter has been triggerd');
    });
    whiteBox.addEventListener('dragleave', (e) => {
        e.target.className = 'whiteBox'
        console.log('Dragleave has been triggerd');

    });
    whiteBox.addEventListener('drop', (e) => {
        console.log('drop has been triggerd');
        e.target.append(imgBox)

    })
}