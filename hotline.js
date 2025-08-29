

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




// copy button


let copy = parseInt(document.getElementById('copycount').innerText)
console.log(copy)
const copyvalue = document.getElementById('copycount')





document.getElementById('copyToClick').addEventListener('click', function () {
    // console.log('click is working');
    copy++
    console.log(copy);
    copyvalue.innerText = copy


    const cpynumber = document.getElementById('callnum').innerText
    // console.log(cpynumber);
    const copyDone = navigator.clipboard.writeText(cpynumber)
    // console.log(copyDone);
    alert('Copied: ' + cpynumber)

    //




})
document.getElementById('copyToClick2').addEventListener('click', function () {
    // console.log('click is working');
    copy++
    console.log(copy);
    copyvalue.innerText = copy


    const cpynumber2 = document.getElementById('callnum2').innerText
    // console.log(cpynumber);
    const copyDone2 = navigator.clipboard.writeText(cpynumber2)
    // console.log(copyDone);
    alert('Copied: ' + cpynumber2)



})
document.getElementById('copyToClick3').addEventListener('click', function () {
    // console.log('click is working');
    copy++
    console.log(copy);
    copyvalue.innerText = copy


    const cpynumber3 = document.getElementById('callnum3').innerText
    // console.log(cpynumber);
    const copyDone3 = navigator.clipboard.writeText(cpynumber3)
    // console.log(copyDone);
    alert('Copied: ' + cpynumber3)



})

document.getElementById('copyToClick4').addEventListener('click', function () {
    // console.log('click is working');
    copy++
    console.log(copy);
    copyvalue.innerText = copy


    const cpynumber4 = document.getElementById('callnum4').innerText
    // console.log(cpynumber);
    const copyDone4 = navigator.clipboard.writeText(cpynumber4)
    // console.log(copyDone);
    alert('Copied: ' + cpynumber4)

    //




})
document.getElementById('copyToClick5').addEventListener('click', function () {
    // console.log('click is working');
    copy++
    console.log(copy);
    copyvalue.innerText = copy


    const cpynumber5 = document.getElementById('callnum5').innerText
    // console.log(cpynumber);
    const copyDone5 = navigator.clipboard.writeText(cpynumber5)
    // console.log(copyDone);
    alert('Copied: ' + cpynumber5)

    //




})
document.getElementById('copyToClick6').addEventListener('click', function () {
    // console.log('click is working');
    copy++
    console.log(copy);
    copyvalue.innerText = copy


    const cpynumber6 = document.getElementById('callnum6').innerText
    // console.log(cpynumber);
    const copyDone6 = navigator.clipboard.writeText(cpynumber6)
    // console.log(copyDone);
    alert('Copied: ' + cpynumber6)

    //



})
document.getElementById('copyToClick7').addEventListener('click', function () {
    // console.log('click is working');
    copy++
    console.log(copy);
    copyvalue.innerText = copy


    const cpynumber7 = document.getElementById('callnum7').innerText
    // console.log(cpynumber);
    const copyDone7 = navigator.clipboard.writeText(cpynumber7)
    // console.log(copyDone);
    alert('Copied: ' + cpynumber7)

    //7


})
document.getElementById('copyToClick8').addEventListener('click', function () {
    // console.log('click is working');
    copy++
    console.log(copy);
    copyvalue.innerText = copy


    const cpynumber8 = document.getElementById('callnum8').innerText
    // console.log(cpynumber);
    const copyDone8 = navigator.clipboard.writeText(cpynumber8)
    // console.log(copyDone);
    alert('Copied: ' + cpynumber8)

    //7


})

document.getElementById('copyToClick9').addEventListener('click', function () {
    // console.log('click is working');
    copy++
    console.log(copy);
    copyvalue.innerText = copy


    const cpynumber9 = document.getElementById('callnum9').innerText
    // console.log(cpynumber);
    const copyDone9 = navigator.clipboard.writeText(cpynumber9)
    // console.log(copyDone);
    alert('Copied: ' + cpynumber9)

    //7


})

function increase2(value1) {

    //     document.getElementById(value1).addEventListener('click', function () {
    //         // console.log('click is working');
    //         copy++
    //         console.log(copy);
    //         copyvalue.innerText = copy


    //         const cpynumber = document.getElementById('callnum').innerText
    //         // console.log(cpynumber);
    //         const copyDone = navigator.clipboard.writeText(cpynumber)
    //         // console.log(copyDone);
    //         alert('Copied: ' + cpynumber)

    //         //




    //     })




    //     return value1




    //     //*** */ copy to clipboard 



    // const cpynumber2 = document.getElementById('callnum2').innerText
    // // console.log(cpynumber);
    // const copyDone2 = navigator.clipboard.writeText(cpynumber2)
    // // console.log(copyDone);
    // alert('Copied: ' + cpynumber2)

    //     //
    //     const cpynumber3 = document.getElementById('callnum3').innerText
    //     // console.log(cpynumber);
    //     const copyDone3 = navigator.clipboard.writeText(cpynumber3)
    //     // console.log(copyDone);
    //     alert('Copied: ' + cpynumber3)

    //     //
    //     const cpynumber4 = document.getElementById('callnum4').innerText
    //     // console.log(cpynumber);
    //     const copyDone4 = navigator.clipboard.writeText(cpynumber4)
    //     // console.log(copyDone);
    //     alert('Copied: ' + cpynumber4)

    //     //
    //     const cpynumber5 = document.getElementById('callnum5').innerText
    //     // console.log(cpynumber);
    //     const copyDone5 = navigator.clipboard.writeText(cpynumber5)
    //     // console.log(copyDone);
    //     alert('Copied: ' + cpynumber5)

    //     //
    //     const cpynumber6 = document.getElementById('callnum6').innerText
    //     // console.log(cpynumber);
    //     const copyDone6 = navigator.clipboard.writeText(cpynumber6)
    //     // console.log(copyDone);
    //     alert('Copied: ' + cpynumber6)

    //     //
    //     const cpynumber7 = document.getElementById('callnum7').innerText
    //     // console.log(cpynumber);
    //     const copyDone7 = navigator.clipboard.writeText(cpynumber7)
    //     // console.log(copyDone);
    //     alert('Copied: ' + cpynumber7)

    //     //
    //     const cpynumber8 = document.getElementById('callnum8').innerText
    //     // console.log(cpynumber);
    //     const copyDone8 = navigator.clipboard.writeText(cpynumber8)
    //     // console.log(copyDone);
    //     alert('Copied: ' + cpynumber8)

    //     //
    //     const cpynumber9 = document.getElementById('callnum9').innerText
    //     // console.log(cpynumber);
    //     const copyDone9 = navigator.clipboard.writeText(cpynumber9)
    //     // console.log(copyDone);
    //     alert('Copied: ' + cpynumber9)

    //     //





}












increase2('copyToClick')
increase2('copyToClick2')
increase2('copyToClick3')
increase2('copyToClick4')
increase2('copyToClick5')
increase2('copyToClick6')
increase2('copyToClick7')
increase2('copyToClick8')
increase2('copyToClick9')

// copy a number part





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




