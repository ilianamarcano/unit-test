const multiply = (a,b)=>{
    let result = 0;
    const n = Math.abs(b);
    for (let i = 0; i < n; ++i) {
        result += a;
    }

    return result;
}

module.exports = {
    multiply,
}
