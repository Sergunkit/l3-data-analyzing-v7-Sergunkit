// import content from './bin/cities.js'

export default function solution(content) {
    const data = content.split('\n')
     .slice(1)
     .map((str) => (str).split('|'))
     .map((str) => str.map((el) => el.trim()))
     .map((el) => el.filter((elt) => (elt)));
     console.log(data.length);
     const ters = data.map((el) => el[4]).sort()
     console.log(ters);
     


    // console.log(data);
}
