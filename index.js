import _ from 'lodash';

export default function solution(content) {
  const data = content.split('\n')
    .slice(1)
    .map((str) => (str).split('|'))
    .map((str) => str.map((el) => el.trim()))
    .map((el) => el.filter((elt) => (elt)));
  console.log(`Число записей: ${data.length}`);
  let ters = data.map((el) => el[4]).sort();
  ters = ters.map((el) => ` ${el}`);

  console.log(`Список округов:${_.union(ters)}`);
  const sqrs = data.map((el) => (el[2]));
  const numSqr = sqrs.map((el) => Number(el));

  console.log(numSqr);
  console.log(`Наибольшая площадь: ${Math.max(sqrs)} кв.км.`);

  // console.log(data);
}
