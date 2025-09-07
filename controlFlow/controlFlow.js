let userRole = 'admin';
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = 'subscriber';
let userCategory;

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


} else {
    userMessage = "Please log in to access the system.";
}

switch (userType) {
    case 'admin':
        userCategory = "Administrator";
        break;
    case 'manager':
        userCategory = "Manager";
        break;
    case 'subscriber':
        userCategory = 'Subscriber';
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Message: ", userMessage);
console.log("User Category: ", userCategory);

let isAunthenticated = true;
let authenticationStatus;

authenticationStatus = isAunthenticated ? "Authenticated":"Not authenticated";

