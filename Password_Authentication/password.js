let passwordSaved=''
let signUpPasswordField=document.getElementById("signUpInput")
let loginPasswordField=document.getElementById("loginInput")
let signUpValid=document.getElementById('signUpValid')
let loginValid=document.getElementById('loginValid')
let loginInValid=document.getElementById('loginInValid')
let passwordStrength=document.getElementById('password-Strength')

const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '_': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': '_'
  }
const encode = (inputString) => {
    const lookupKeys = Object.keys(lookup)
    const lookupValues = Object.values(lookup)
    const codeArr = inputString.split("")
    let encodedArr = codeArr.map(codeArrChar => {
      let index = lookupValues.findIndex((element) => element === codeArrChar)
      return lookupKeys[index]
    })
    return encodedArr.join("")
  }


  const decode = (encodedStr) => {
    const codeArr = encodedStr.split("")
    let decodedArr = codeArr.map(codeArrChar => lookup[codeArrChar])
    return decodedArr.join("")
  }
const signUp=()=>{
    let inputPassword=signUpPasswordField.value
    
    passwordSaved=encode(inputPassword)
    signUpValid.style.display='block'
}

const login=()=>{
    let inputPassword=loginPasswordField.value

    if(passwordSaved===decode(inputPassword)){
       loginValid.style.display='block'
    } 
    else{
        loginValid.style.display='none'
        loginInValid.style.display='block'
    }  
}



const checkPasswordStrength = () => {
    if(signUpPasswordField.value.length < 5){
      passwordStrength.style.display = 'block'
      passwordStrength.innerText = 'Weak'
      passwordStrength.style.color = 'red'
    } else if (signUpPasswordField.value.length < 8) {
      passwordStrength.style.display = 'block'
      passwordStrength.innerText = 'Moderate'
      passwordStrength.style.color = 'orange'
    } else {
      passwordStrength.style.display = 'block'
      passwordStrength.innerText = 'Strong'
      passwordStrength.style.color = 'green'
    }
}  