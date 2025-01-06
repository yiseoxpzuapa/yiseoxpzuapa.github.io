const passwords = [
    {
        pass: "roblox",
        page: "https://www.roblox.com/users/7009510135/profile"
    },
    {
        pass: "venus",
        page: "https://github.com/yiseoxpzuapa/marbleracefun/blob/00dc2450d67fbf0fb5c2bb402225b320d0967934/img/oh.png"
    },
    {
        pass: "marbles",
        page: "https://yiseoxpzuapa.github.io/marbleracefun/"
    },

    {
        pass: "youtube",
        page: "https://www.youtube.com/@skeletrix1233"
    },

    {
        pass: "juggernaut",
        page: "https://www.roblox.com/catalog/20945159/Chill-Classic"
    },

    {
        pass: "projects",
        page: "" //hol up
    }

];


function checkPswd() {
    const passInput = document.getElementById("pswd").value;
    const passMatch = passwords.find(o => o.pass === passInput);
  
    if (passMatch ) {
        window.location = `${passMatch.page}`;
    } else {
        alert("Passwords do not match.");
    }
}