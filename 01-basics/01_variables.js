const accountId = 144553
let accountEmail = "luckyvash123@goog"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState; //undefined 
//var doesn't able to identify scope that's why we use let
//accountId = 2           //not allowed
/*
prefer not to use var
because of issue in block scope and functional scope
*/ 
accountEmail = "hc@"
accountPassword = "21212212121"
accountCity = "Bengaluru"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])