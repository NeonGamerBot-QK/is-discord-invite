module.exports = async (str) => {
    const regex = (/dis(?:board\.org\/(?:(?:en\/)?|pl\/)server\/join|cord(?:\.me\/server\/join|(?:(?:app\.com\/invite|\.(?:com\/invite|gg\/))|home\.com\/join)))/gi).test(str);
    let ok = false;
    if(str.includes("/discord.")) {
const { get } = require("https")
let code = new URL(str).pathname.slice(1)
get("https://discord.com/api/v10/invites/" + code, res => {
   let str = "";
   response.on('data', function (chunk) {
    str += chunk;
});

response.on('end', function () {
   let json = JSON.parse(str);
   if(!json.code === 10006) return ok = true;
});

})    
} else {
    ok=true;
}
return ok; 
}