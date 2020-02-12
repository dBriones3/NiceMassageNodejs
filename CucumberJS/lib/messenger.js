class Messenger {

    constructor( ) {
        
    }

    getMessage() {
        return "Hello World!";
    } 

    getMessageWithHour(hour, languaje) {

        if (hour >= "00:00" && hour < "12:00")
        { 
            return (languaje == undefined || languaje == "es") ?  "Buenos dias" :  "good morning";            
        }
        else if (hour >= "12:00" && hour < "19:00")
        {
            return (languaje == undefined || languaje == "es") ? "Buenas tardes" : "Good afternoon";
        }
        else if(hour >= "19:00")
        {
            return (languaje == undefined || languaje == "es") ? "Buenas noches" : "Goodnight";
        }
        return "Hello World!";
    }
}

module.exports = Messenger;