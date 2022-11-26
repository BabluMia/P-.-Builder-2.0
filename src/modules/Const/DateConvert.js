export  const dateFunction = (e,setState)=>{
    const defaultDate = e.target.value.split('-')
    return  setState(`${defaultDate[1]}/${defaultDate[2]}/${defaultDate[0]}`)
}