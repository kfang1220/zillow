import _ from 'lodash';
import './assets/style.scss';
import '../test/style.scss';
import '../test/regular_css.css'
import Icon from './assets/images/test.png';
import Data from './assets/data.xml';
// import Logo from './assets/images/logo.svg'


function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('mod1')

    const myIcon = new Image();
    const myLogo = new Logo();
    myIcon.src = Icon;
    // myLogo.src = Logo;


    element.appendChild(myIcon);

    element.classList.add('mod2')
    return element;
}

document.body.appendChild(component());