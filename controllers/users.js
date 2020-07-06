const loop = (n,a)=>{
    console.log('loop')
    let result = 0;
    for (let i = 0; i < n; ++i) {
        result += a;
    }

    return result;
}

const multiply = (a,b)=>{
    const n = Math.abs(b);

    return loop(n,a);
}

module.exports = {
    multiply,
    loop
}
