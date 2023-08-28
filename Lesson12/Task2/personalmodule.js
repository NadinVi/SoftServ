
module.exports.timeIsNow = new Date().getHours(); 

module.exports.messegeGreenting = function greeting(username) {
    let greeting = "";
    if(timeIsNow >= 6 && timeIsNow <= 12) {
        greeting = "Good morning";
    } else if(timeIsNow > 12 && timeIsNow <= 18) {
        greeting = "Good afternoon";
    } else if(timeIsNow > 18 && timeIsNow <= 21) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }
   return `${greeting},  ${username}` 
};
