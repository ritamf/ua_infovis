// console

let elem = d3.select(".p1")
// undefined
elem.style('background-color') // verify color
elem.style('background-color', '#990099') // change color
// Selection$1 {_groups: Array(1), _parents: Array(1)}
elem.style()===elem
// false
elem.text("Good morning world!")
// Selection$1 {_groups: Array(1), _parents: Array(1)}