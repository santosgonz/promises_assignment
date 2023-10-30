let url = "http://numbersapi.com/13/?json"
axios.get(url)
    .then (res => console.log(res.data))
// console.log(url)

let url2 = "http://numbersapi.com/1..4";

axios.get(url2)
    .then(res => {
        let numbers = res.data;
        const container = $('#numbersContainer');
        for (let num in numbers) {
            let divElement = $('<div></div>').text(numbers[num]);
            container.append(divElement);
        }
    });


let fourpromises = [];
for (let i = 5; i < 10; i++) {
    fourpromises.push(
        axios.get(`http://numbersapi.com/${i}/`)
    )
}

Promise.all(fourpromises)
    .then(numbersArr => {
        for (res of numbersArr) {
            console.log(res.data)
        }
    })
    .catch(err => console.log(err))


// $('#numbers').text({url2})
