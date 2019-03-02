var phrases = ["Are you lost?", "Welcome stranger!", "Who are you?"];

$(".menu-content").text(phrases[Math.floor(Math.random() * phrases.length)]);
