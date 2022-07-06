const frequencies = require('../challenges/frequencies')
console.log(frequencies)

describe('Frequencies', () => {

  const answer = {
    t: 0.09473214882849945,
    h: 0.05880910448759391,
    e: 0.12837684196446486,
    p: 0.01923222685422565,
    r: 0.058592861760706244,
    o: 0.07391934369217737,
    j: 0.0009028691174175714,
    c: 0.027297857636489287,
    g: 0.01851884878614263,
    u: 0.02887174799919745,
    n: 0.0699823884789442,
    b: 0.014878391332456473,
    k: 0.00497581202487906,
    f: 0.025962503065296388,
    w: 0.020779365539380697,
    s: 0.06085114920748155,
    d: 0.04176382727333527,
    a: 0.077258844773391,
    l: 0.04064694473549279,
    v: 0.010836658715473617,
    m: 0.026907729005506385,
    y: 0.01851884878614263,
    i: 0.07370533027175245,
    z: 0.0006687919388278306,
    q: 0.001070067102124529,
    x: 0.001939496622600709
  }

  test('calculates the correct frequencies', () => {
    expect(frequencies).toEqual(answer)
  })

})