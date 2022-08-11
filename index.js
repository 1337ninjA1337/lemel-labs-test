function createCounter(value) {
    let counter = {
        counterMinValue: -Infinity,
        counterMaxValue: Infinity,
        counter: isNaN(value) ? 0 : value,
        decrement(){
            this.counter-=1;
        },
        increment(value){
            this.counter+=1;
        },
        minValue(value){
            isNaN(value) ? this.counterMinValue = -Infinity : this.counterMinValue = value 
        },
        maxValue(value){
            isNaN(value) ? this.counterMaxValue = Infinity : this.counterMaxValue = value 
        }
    }

    let decrementButton = document.createElement('button')
    decrementButton.classList.add('decrementButton')
    decrementButton.textContent = "-"
    decrementButton.addEventListener('click', ()=>{
        counter.decrement()
        render()
    })

    let counterValue = document.createElement('p')
    
    let incrementButton = document.createElement('button')
    incrementButton.classList.add('incrementButton')
    incrementButton.textContent = "+"
    incrementButton.addEventListener('click', ()=>{
        counter.increment()
        render()
    })

    let counterContainer = document.createElement('div')
    counterContainer.classList.add('counterContainer')
    counterContainer.appendChild(decrementButton)
    counterContainer.appendChild(counterValue)
    counterContainer.appendChild(incrementButton)
    document.getElementById('counters').appendChild(counterContainer)

    function render(){
        counterValue.textContent = counter.counter.toString()
        counter.counter<=counter.counterMinValue ? decrementButton.disabled = true : decrementButton.disabled = false
        counter.counter>=counter.counterMaxValue ? incrementButton.disabled = true : incrementButton.disabled = false
    }

    render()
    return counter
}



const counter_1 = createCounter()
const counter_2 = createCounter(-6)
const counter_3 = createCounter(10)
    counter_1.minValue(-3)
    counter_1.maxValue(6)



console.log(counter_1.counter);
console.log(counter_2.counter);
console.log(counter_3.counter);


// counter_1.decrement()
// console.log(counter_1.counter);
// counter_3.increment()
// console.log(counter_3.counter);

