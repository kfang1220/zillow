import _ from 'lodash';
import './assets/style.scss';
import '../test/style.scss';
import '../test/regular_css.css'
import Icon from './assets/images/icon.png';
import Data from './assets/data.xml';



function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('mod1')

    const myIcon = new Image();
    console.log('test')
    myIcon.src = Icon;

    element.appendChild(myIcon);

    element.classList.add('mod2')
    return element;
}

document.body.appendChild(component());