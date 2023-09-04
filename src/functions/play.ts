

async function funseque(...functions: Function[]) {
    return functions[0]()
}


funseque(() => {
    console.log('first')
}).then()

export { funseque }