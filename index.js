function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

var phrases = ["Are you lost?", "Welcome stranger!", "Who are you?"];

async function start()
{
    $(".menu-content").text(phrases[Math.floor(Math.random() * phrases.length)]);
    await sleep(5000);
    window.location.replace("specials/3dh.html");
}

start();