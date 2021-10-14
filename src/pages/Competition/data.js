/* eslint-disable no-param-reassign */
import img from './background.png';

import logo from '../../images/logo/Dark.svg';

const data = {
  block: 'competition',
  title: 'Company Name',
  logo,
  img,
  points: new Array(4).fill({
    title: 'Company',
    body: 'Their reviews average 3.5, whereas we average 5 stars',
  }),
};
data.points = data.points.map((el, i) => {
  el.id = i;
  return el;
});
export default data;
