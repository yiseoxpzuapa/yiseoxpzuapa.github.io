const passwords = [
    {
        pass: "roblox",
        page: "https://www.roblox.com/users/7009510135/profile"
    },
    
    {
        pass: "marbles",
        page: "https://yiseoxpzuapa.github.io/marbleracefun/"
    },

    {
        pass: "youtube",
        page: "https://www.youtube.com/@yungbludarchives"
    },

    {
        pass: "project",
        page: "https://yiseoxpzuapa.github.io/projects.html"
    },

    {
        pass: "lua",
        page: "https://yiseoxpzuapa.github.io/luapublications.html"
    },

    {
        pass: "change",
        page: "https://yiseoxpzuapa.github.io/changelog.html"
    },

    {
        pass: "gitgay",
        page: "https://git.gay/yiseoxpzuapa"
    },

];


function checkPswd() {
    const passInput = document.getElementById("pswd").value;
    const passMatch = passwords.find(o => o.pass === passInput);

    if (passMatch ) {
        window.location = `${passMatch.page}`;
    } else {
        alert("wrong!")
    }
}
