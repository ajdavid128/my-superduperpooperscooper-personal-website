/* Button 1 */

function buttonGame1() {
    const input = document.getElementById('button1');

    function clickAlert() {
        input.classList.add("wrong");
      alert('Try harder.');
    }
    
    input.addEventListener('click', clickAlert);
}
buttonGame1();

/* Button 2 */

function buttonGame2() {
    const input2 = document.getElementById('button2');

    function clickAlert() {
        input2.classList.add("wrong");
      alert('Not even close...');
    }
    
    input2.addEventListener('click', clickAlert);
}
buttonGame2();

/* Button 3 */

function buttonGame3() {
    const input3 = document.getElementById('button3');

    function clickAlert() {
        input3.classList.add("wrong");
      alert('Coldest.');
    }
    
    input3.addEventListener('click', clickAlert);
}
buttonGame3();

/* Button 4 */

function buttonGame4() {
    const input4 = document.getElementById('button4');

    function clickAlert() {
        input4.classList.add("wrong");
      alert('Warmer.');
    }
    
    input4.addEventListener('click', clickAlert);
}
buttonGame4();

/* Button 5 */

function buttonGame5() {
    const input5 = document.getElementById('button5');

    function clickAlert() {
        input5.classList.add("wrong");
      alert("If I had $1 for every time this button was clicked... I'd have a few whole dollars.");
    }
    
    input5.addEventListener('click', clickAlert);
}
buttonGame5();

/* Button 6 */

function buttonGame6() {
    const input6 = document.getElementById('button6');

    function clickAlert() {
        input6.classList.add("wrong");
      alert('Nope.');
    }
    
    input6.addEventListener('click', clickAlert);
}
buttonGame6();

/* Button 7 */

function buttonGame7() {
    const input7 = document.getElementById('button7');

    function clickAlert() {
        input7.classList.add("right");
      alert('Nailed it! How many tries did it take?');
    }
    
    input7.addEventListener('click', clickAlert);
}
buttonGame7();

/* Button 8 */

function buttonGame8() {
    const input8 = document.getElementById('button8');

    function clickAlert() {
        input8.classList.add("wrong");
      alert('Ooo getting close!');
    }
    
    input8.addEventListener('click', clickAlert);
}
buttonGame8();

/* Button 9 */

function buttonGame9() {
    const input9 = document.getElementById('button9');

    function clickAlert() {
        input9.classList.add("wrong");
      alert(`Congrats, you didn't click the right button.`);
    }
    
    input9.addEventListener('click', clickAlert);
}
buttonGame9();