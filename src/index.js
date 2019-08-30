require('babel-polyfill');
import {translate, toneIsCorrect} from 'translate-utils';

const print = async () => {
    // https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
    console.log(await translate('lettuce'));
    console.log(toneIsCorrect([1,4],'生菜'))
}

print()