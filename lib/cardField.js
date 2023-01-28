const cardFieldRender = (i) => {
    return {
        tag: 'div',
        cls: 'field-active',
        content: [{
            tag: 'div',
            cls: 'suit',
            content: i.suit
        }, {
            tag: 'div',
            cls: 'value',
            content: i.value
        }]
    }
}

const boxFieldActive = document.createElement('div');
boxFieldActive.classList.add('box-field-active');
let fieldActive;




