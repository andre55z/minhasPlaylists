'use strict'
const swrt = document.querySelector(".btncolor");
swrt.addEventListener('click', function()
{
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
    const className = document.body.className;
    if (className=='dark')
    {
        this.textContent = "Dark";
    }
    else
    {
        this.textContent = "Light";
    }
});