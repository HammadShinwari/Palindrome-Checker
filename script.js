function checkPal(){
    let str = document.getElementById("input").value;
    let strLength = str.length;
    let isPalindrome = true;


    for(let i = 0; i < str.length/2; i++){
        if(str[i] !== str[str.length - i - 1]){
            isPalindrome = false
            break
        };
    };

    let result = document.getElementById("result")
    if(isPalindrome){
        result.innerHTML = "Yes, 👍 It's Palindrome!"
    }else{
        result.innerHTML = "No, ❌ It's not Palindrome!"
    }
};