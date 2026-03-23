console.log("Portfolio Loaded Successfully");
function sharePortfolio() {

if (navigator.share) {
navigator.share({
title: "Muthu Mari Devi Portfolio",
text: "Check out my developer portfolio!",
url: window.location.href
})
.then(() => console.log("Shared successfully"))
.catch((error) => console.log("Error sharing", error));

} else {

alert("Sharing not supported on this browser. Copy the link manually.");
}
}

function copyLink(){
navigator.clipboard.writeText(window.location.href);
alert("Portfolio link copied!");
}