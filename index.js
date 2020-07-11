const passkey = "cnffjbeq"
const giftCode = "1234567890"
var submitBtn = document.getElementById('submit')

document.getElementById('password-input').addEventListener('click', function() {
    submitBtn.style.width = "6em"
})

document.addEventListener('keydown', event => {
    if (event.keyCode == 13) { submit() }
})

function submit() {
    var valid;
    submitBtn.style.backgroundPosition = "left bottom"
    console.log(rot13(passkey, 13)
    if(!(document.getElementById('password-input').value == rot13(passkey, 13))) {
        submitBtn.classList.add('wrong-pass')
        document.getElementById('cover').style.backgroundColor = '#ff1a1a'
        document.getElementById('message').innerHTML = 'TRY AGAIN'
        valid = false
    } else {
        submitBtn.classList.add('correct-pass')
        document.getElementById('cover').style.backgroundColor = 'rgb(86, 217, 56)'
        document.getElementById('message').innerHTML = ''
        valid = true
    }
    document.getElementById('password-input').blur();
    setTimeout(function() { 
        document.getElementById('cover').style.height = "100%";
        submitBtn.style.color = "white"; 
        submitBtn.classList.remove('wrong-pass'); 
        submitBtn.classList.remove('correct-pass')
        document.getElementById('message').display="block"}, 500)

    setTimeout(function() { 
        document.getElementById('password-input').value = ""; 
        document.getElementById('cover').style.height = "0%";
        submitBtn.style.color = ""; 
        submitBtn.style.backgroundPosition = "";
        if(valid) { document.getElementById('wrapper').innerHTML = "" }
        document.getElementById('message').display=""
        if(valid){revealKey()}}, 1700)
}

function revealKey() {
    confetti.start()
    var heading = document.createElement('h1')
    heading.appendChild(document.createTextNode("Congratulations, you unlocked your gift!"))
    heading.style.fontSize = "4em"
/*     heading.style.background = "linear-gradient(to right, orange , yellow, green, cyan, blue, violet)"
    heading.style.webkitBackgroundClip = "text"
    heading.style.webkitTextFillColor = "transparent" */
    
    var enterThisCode = document.createElement('h2')
    enterThisCode.appendChild(document.createTextNode("For a full credit on the $24 ArtSnacks monthly box,"))
    enterThisCode.appendChild(document.createElement('br'))
    enterThisCode.appendChild(document.createTextNode("enter this code at checkout:"))
    enterThisCode.style.fontSize = "4em"

    var code = document.createElement('h2')
    code.appendChild(document.createTextNode(giftCode))
    code.style.fontSize = "4em"

    var storeBtn = document.createElement('div')
    var text = document.createElement('h3')
    text.appendChild(document.createTextNode('Gift Link!'))
    text.classList.add('no-select')
    storeBtn.appendChild(text)
    storeBtn.classList.add('store-btn')

    var infoBtn = document.createElement('div')
    var text = document.createElement('h3')
    text.appendChild(document.createTextNode('How it Works'))
    text.classList.add('no-select')
    infoBtn.appendChild(text)
    infoBtn.classList.add('store-btn')

    var buttonFlex = document.createElement('div')
    buttonFlex.style.display = "flex"
    buttonFlex.style.justifyContent = "center"
    buttonFlex.style.alignContent = "center"

    buttonFlex.appendChild(storeBtn)
    buttonFlex.appendChild(infoBtn)

    storeBtn.addEventListener('click', function() {
        window.open("https://www.artsnacks.co/signup")
    })

    infoBtn.addEventListener('click', function() {
        window.open("https://www.artsnacks.co/how-it-works")
    })

    document.getElementById('wrapper').appendChild(heading)
    document.getElementById('wrapper').appendChild(enterThisCode)
    document.getElementById('wrapper').appendChild(code)
    document.getElementById('wrapper').appendChild(buttonFlex)
}

function rot13(str, rot) { // LBH QVQ VG!
  
  var string = "";
  for(var i = 0; i < str.length; i++) {
    var temp = str.charAt(i);
    if(temp !== " " || temp!== "!" || temp!== "?") {
       string += String.fromCharCode(rot + String.prototype.charCodeAt(temp));
    } else {
      string += temp;
    }
  }
  
  return string;
}
