class Task{
    constructor(data){
        this.data = data
    }
    
    getName(day){
        return (this.data);
    }
}

const payload = fetch('./src/data.json')
.then((response) => response.json())
.then((json) => {
    return (json)
});

const data = new Task(payload);
console.log(data.getName("rabu"));
// console.log(payload)

