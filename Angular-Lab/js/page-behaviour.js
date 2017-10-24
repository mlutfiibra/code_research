// redirect page
function moveTo(url) {
    window.location.href = url;
}

//ASTERISK BEHAVIOUR
var pinDigit = 0;
var correctPin = '000000';
var mLeft = 12;
var pin = '';

//create Asterisk When Click button
function createAsterisk(x) {
    var modal = document.getElementById('myModal');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            location.reload();
        }
    }

    pin += x;

    if (pinDigit != 6) {
        var elem = document.createElement("IMG");
        var container = document.getElementById("asterisk-container");
        var mTop = '40vw';
        elem.setAttribute("src", "../img/asterisk.png");
        elem.setAttribute("background-width", "100vw");
        elem.setAttribute("background-height", "100vw");
        elem.setAttribute("margin", "25vh");
        elem.setAttribute("width", "25vw");
        elem.setAttribute("height", "25vw");
        elem.style.top = mTop;
        elem.style.left = mLeft + 'vw';
        container.appendChild(elem);
        mLeft += 12.9;
        pinDigit++;

        if (pinDigit == 6) {
            if (pin == correctPin) {
                pinDigit = 0;
                mLeft = 12;
                pin = '';
                moveTo("http://localhost/index.html#!/cc-auth");
            }
            if (pin != correctPin) {
                modal.style.display = "block";
            }
        }
    }

}

//delete asterisk when click backspace button
function removeAsterisk() {
    if (pinDigit != 0) {
        var elementToBeRemoved = document.getElementById("asterisk-container");
        elementToBeRemoved.removeChild(elementToBeRemoved.lastChild);
        mLeft -= 12.9;
        pin = pin.slice(0, -1);
        pinDigit--;
    }
}
//ASTERISK BEHAVIOUR

//calcutating balance on top-up's page
var currentBalance = 0;

function topUp(value) {
    this.currentBalance += value;
    document.getElementById("total-balance").innerHTML = currentBalance;
}

function countDown(timeleft, url) {
    var downloadTimer = setInterval(function() {
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
        if (timeleft <= 0)
            clearInterval(downloadTimer);
    }, 1000);
    moveTo(url);
}