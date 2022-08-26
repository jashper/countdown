let target = new Date("2028-2-27 00:00:00");
let leap = 0;


function leapYear(){
    let dateStart = new Date().getFullYear()
    let dateEnd = target.getFullYear();
    let ary = [];      

    for(var i = dateStart; i <= dateEnd; i++){
        ary.push(i)
    }

    ary = ary.filter(function(el, idx, arr){
        let data = new Date(`${el}/3/01`)
            data.setDate(-1);
        return data.getDate() == 28
    })//get leap year in an array

    leap = ary.length

    target.getMonth() < 2 ? leap-=1 : leap = leap;

    return leap
}

function run() {
    
    let countdown = ((target.getTime()- new Date().getTime()) / 1000) >> 0,
    counter = document.querySelector("#counter")
    if (countdown < 0) return false;

    let sec = countdown % 60;
    let min = (countdown - sec) /60 % 60;
    let hour = ((countdown - sec - min * 60) / (60*60)) % 24;
    let day = ((countdown - sec - min * 60 - hour * 3600) / (60 * 60 * 24))
    
    let year  = Math.floor(day / 365)
    // console.log(target.getMonth()<2)
    // console.log(leap)

    day = (day % 365) - leap

    //print on screen
    counter.innerHTML = `<h1>${year}年 ${day} 天 ${hour} 時 ${min} 分 ${sec} 秒</h1>`

};

leapYear();
run();
setInterval(run,1000)
