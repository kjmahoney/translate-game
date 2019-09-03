require('babel-polyfill');
import {translate, toneIsCorrect} from 'translate-utils';

const print = async () => {
    console.log(await translate('lettuce'));
    // console.log(toneIsCorrect([1,4],'生菜'))
}

print()