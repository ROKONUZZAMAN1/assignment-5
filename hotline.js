

// ### 4. Heart Icons

// const { createElement } = require("react");

// const { createElement } = require("react");

let count = parseInt(document.getElementById('heartCount').innerText)
console.log(count);
const heartvalue = document.getElementById('heartCount')



function increase(value) {

    document.getElementById(value).addEventListener('click', function () {
        // console.log('click is working');
        count++
        // console.log(count);
        heartvalue.innerText = count
    })
    return value
}
increase('heartToClick')
increase('heartToClick2')
increase('heartToClick3')
increase('heartToClick4')
increase('heartToClick5')
increase('heartToClick6')
increase('heartToClick7')
increase('heartToClick8')
increase('heartToClick9')










// ### 5. Call Buttons

function showName(name1) {
    return document.getElementById(name1).innerText
}
function showNumber(num) {
    return document.getElementById(num).innerText
}


// time setup

const Time = new Date().toLocaleTimeString();
// console.log(Time)

function timePrint(timevalue) {
    document.getElementById(timevalue).innerText = Time
}



let minus = parseInt(document.getElementById('coin').innerText)
console.log(minus);
let loseCoin = document.getElementById('coin')


function DoCall(emergency) {

    document.getElementById(emergency).addEventListener('click', function (event) {
        event.preventDefault()

        if (emergency === 'call-btn' && minus >= 20) {
            alert(showName('callname') + ' '
                + showNumber('callnum') + '  Calling' + '...')
            minus = minus - 20
            loseCoin.innerText = minus
            if (emergency === 'call-btn') {
                const historyText = document.getElementById('History').innerText;

                const newEntry = document.createElement('div');
                newEntry.innerText = historyText;

                const historyPushSection = document.getElementById('headHistory');
                historyPushSection.appendChild(newEntry);

                historyPushSection.style.display = 'block';

            }



        }
        else if (emergency === 'call-btn2' && minus >= 20) {
            alert(showName('callname2') + ' '
                + showNumber('callnum2') + '  Calling ' + '...')
            minus = minus - 20
            loseCoin.innerText = minus

            if (emergency === 'call-btn2') {
                const historyText = document.getElementById('History2').innerText;

                const newEntry = document.createElement('div');
                newEntry.innerText = historyText;

                const historyPushSection = document.getElementById('headHistory');
                historyPushSection.appendChild(newEntry);

                historyPushSection.style.display = 'block';

            }

        }
        else if (emergency === 'call-btn3' && minus >= 20) {
            alert(showName('callname3') + ' '
                + showNumber('callnum3') + '  Calling' + '...')
            minus = minus - 20
            loseCoin.innerText = minus



            if (emergency === 'call-btn3') {
                const historyText = document.getElementById('History3').innerText;

                const newEntry = document.createElement('div');
                newEntry.innerText = historyText;

                const historyPushSection = document.getElementById('headHistory');
                historyPushSection.appendChild(newEntry);

                historyPushSection.style.display = 'block';

            }



        }
        else if (emergency === 'call-btn4' && minus >= 20) {
            alert(showName('callname4') + ' '
                + showNumber('callnum4') + '  Calling' + '...')
            minus = minus - 20
            loseCoin.innerText = minus

            if (emergency === 'call-btn4') {
                const historyText = document.getElementById('History4').innerText;

                const newEntry = document.createElement('div');
                newEntry.innerText = historyText;

                const historyPushSection = document.getElementById('headHistory');
                historyPushSection.appendChild(newEntry);

                historyPushSection.style.display = 'block';

            }

        }
        else if (emergency === 'call-btn5' && minus >= 20) {
            alert(showName('callname5') + ' '
                + showNumber('callnum5') + '  Calling ' + '...')
            minus = minus - 20
            loseCoin.innerText = minus

            if (emergency === 'call-btn5') {
                const historyText = document.getElementById('History5').innerText;

                const newEntry = document.createElement('div');
                newEntry.innerText = historyText;

                const historyPushSection = document.getElementById('headHistory');
                historyPushSection.appendChild(newEntry);

                historyPushSection.style.display = 'block';

            }

        }
        else if (emergency === 'call-btn6' && minus >= 20) {
            alert(showName('callname6') + ' '
                + showNumber('callnum6') + 'is Calling' + '...')
            minus = minus - 20
            loseCoin.innerText = minus


            if (emergency === 'call-btn6') {
                const historyText = document.getElementById('History6').innerText;

                const newEntry = document.createElement('div');
                newEntry.innerText = historyText;

                const historyPushSection = document.getElementById('headHistory');
                historyPushSection.appendChild(newEntry);

                historyPushSection.style.display = 'block';

            }
        }
        else if (emergency === 'call-btn7' && minus >= 20) {
            alert(showName('callname7') + ' '
                + showNumber('callnum7') + '  Calling' + '...')
            minus = minus - 20
            loseCoin.innerText = minus
            if (emergency === 'call-btn7') {
                const historyText = document.getElementById('History7').innerText;

                const newEntry = document.createElement('div');
                newEntry.innerText = historyText;

                const historyPushSection = document.getElementById('headHistory');
                historyPushSection.appendChild(newEntry);

                historyPushSection.style.display = 'block';

            }


        }
        else if (emergency === 'call-btn8' && minus >= 20) {
            alert(showName('callname8') + ' '
                + showNumber('callnum8') + '  Calling' + '...')
            minus = minus - 20
            loseCoin.innerText = minus

            if (emergency === 'call-btn8') {
                const historyText = document.getElementById('History8').innerText;

                const newEntry = document.createElement('div');
                newEntry.innerText = historyText;

                const historyPushSection = document.getElementById('headHistory');
                historyPushSection.appendChild(newEntry);

                historyPushSection.style.display = 'block';

            }

        }
        else if (emergency === 'call-btn9' && minus >= 20) {
            alert(showName('callname9') + ' '
                + showNumber('callnum9') + '  Calling' + '...')
            minus = minus - 20
            loseCoin.innerText = minus
            if (emergency === 'call-btn9') {
                const historyText = document.getElementById('History9').innerText;

                const newEntry = document.createElement('div');
                newEntry.innerText = historyText;

                const historyPushSection = document.getElementById('headHistory');
                historyPushSection.appendChild(newEntry);

                historyPushSection.style.display = 'block';

            }


        }
        else {
            return alert('You have no sufficient coin.You need 20 coin')

        }
    })

    return emergency

}


DoCall('call-btn')
DoCall('call-btn2')
DoCall('call-btn3')
DoCall('call-btn4')
DoCall('call-btn5')
DoCall('call-btn6')
DoCall('call-btn7')
DoCall('call-btn8')
DoCall('call-btn9')



showName('callname')
showName('callname2')
showName('callname3')
showName('callname4')
showName('callname5')
showName('callname6')
showName('callname7')
showName('callname8')
showName('callname9')


showNumber('callnum')
showNumber('callnum2')
showNumber('callnum3')
showNumber('callnum4')
showNumber('callnum5')
showNumber('callnum6')
showNumber('callnum7')
showNumber('callnum8')
showNumber('callnum9')

timePrint('current-time')
timePrint('current-time2')
timePrint('current-time3')
timePrint('current-time4')
timePrint('current-time5')
timePrint('current-time6')
timePrint('current-time7')
timePrint('current-time8')
timePrint('current-time9')




