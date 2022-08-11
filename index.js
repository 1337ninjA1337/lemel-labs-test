function createCounter(value) {
    let counter = {
        counter: isNaN(value) ? 0 : value,
        decrement(){
            this.counter-=1;
        },
        increment(value){
            this.counter+=1;
        },
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

    }

    render()
    return counter
}



const counter_1 = createCounter()
const counter_2 = createCounter(-6)
const counter_3 = createCounter(10)
    


console.log(counter_1.counter);
console.log(counter_2.counter);
console.log(counter_3.counter);


// counter_1.decrement()
// console.log(counter_1.counter);
// counter_3.increment()
// console.log(counter_3.counter);

