import _ from 'lodash';
import '../assets/style.scss';
import '../test/style.scss';
import '../test/regular_css.css'
// import Icon from '../components/icon.png';
// import Data from '../components/data.xml';


function component() {
    const element = document.createElement('div');
    const element2 = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('mod1')

    element.innerHTML = _.join(["I am testing css joining"], ' ')
    element.classList.add('mod2')



    // const myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);

    // console.log(Data)

    return element;
}

document.body.appendChild(component());