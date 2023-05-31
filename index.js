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
  const sqrs = data.map((el) => el[2]);
  const numSqr = sqrs.map((elt) => {
    const ter = Number(elt.replace(/ /g, ''));
    return ter;
  });
  console.log(`Наибольшая площадь: ${Math.max(...numSqr)} кв.км.`);
//   console.log(data);
  const resps = data.filter((el) => {
    const resp = el[0].split(' ');
    return resp[0] === 'Республика';
  });
  const population = resps.map((el) => el[1]);
  const numPop = population.map((elt) => {
    const pop = Number(elt.replace(/ /g, ''));
    return pop;
  });
  const maxPop = Math.max(...numPop);
  const maxPopResp = resps.filter((el) => Number(el[1].replace(/ /g, '')) === maxPop);
  console.log(`Республика с наибольшим количеством населения: ${maxPopResp[0][0]}`);
  const densitys = data.reduce((acc, el) => {
    const pop = Number(el[1].replace(/ /g, ''));
    const ter = Number(el[2].replace(/ /g, ''));
    const density = pop / ter;
    if (!acc.name) {
      return { name: el[0], density };
    }
    if ((acc.density) > density) {
      return { ...acc, name: el[0], density };
    }
    return acc;
  }, {});
  console.log(`Наименьшая плотность населения: ${densitys.name}`);
}
