const counterEl = document.querySelectorAll(".counter")

counterEl.forEach((counter)=>{
    counter.innerText = "0"

    incrementCounter()

    function incrementCounter(){
        let currentNum = +counter.innerText
        const dataCeil = counter.getAttribute("data-ceil")
        const increment = Math.ceil(dataCeil / 10)
        currentNum = currentNum + increment
       

        if(currentNum < dataCeil){
            counter.innerText = currentNum
            setTimeout(incrementCounter,50)
        }else {
            counter.innerText = dataCeil
        }
    }
})