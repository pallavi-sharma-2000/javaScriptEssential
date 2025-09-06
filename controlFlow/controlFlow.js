let userRole = 'admin';
let accessLevel;

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    
    if (userRole === 'admin'){
        accessLevel = "Full access granted!";
        userMessage = "Welcome Admin!";
    } else if (userRole === 'manager') {
        accessLevel = "Limited access granted";
        userMessage = "Welcome Manager!";
    } else {
        accessLevel = "No access granted";
        userMessage = "Welcome User!"
    }

    console.log("Access Level: ", accessLevel);
    console.log("User Message: ", userMessage);


} else {
    userMessage = "Please log in to access the system.";
}

