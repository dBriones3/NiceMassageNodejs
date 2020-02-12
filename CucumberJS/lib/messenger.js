class Messenger {

    constructor( ) {
        
    }

    getMessage() {
        return "Hello World!";
    } 

    getMessageWithHour(hour, languaje) {
        var result = ""; 

        if (hour >= "00:00" && hour < "12:00")
        {
            switch (languaje)  
            {
                case "es": 
                    result = "Buenos dias"; 
                break; 
                case "us":  
                    result = "good morning"; 
                break;  
                case "fr":  
                    result = "Bonjour";
                break;  
            }
        }
        else if (hour >= "12:00" && hour < "19:00")
        {
            switch (languaje)  
            {
                case "es": 
                    result = "Buenas tardes"; 
                break; 
                case "us":  
                    result = "Good afternoon"; 
                break;  
                case "fr":  
                    result = "Bonsoir";
                break;  
            }
        }
        else if(hour >= "19:00")
        {
            switch (languaje)  
            {
                case "es": 
                    result = "Buenas noches"; 
                break; 
                case "us":  
                    result = "Goodnight"; 
                break;  
                case "fr":  
                    result = "Bonne nuit";
                break;  
            }

            //return (languaje == undefined || languaje == "es") ? "Buenas noches" : "Goodnight";
        }

        return result; 
    }
}

module.exports = Messenger;