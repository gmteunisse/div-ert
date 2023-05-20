change_divs();

function change_divs()
{
    var divs = document.getElementsByClassName("QYm5-Photo");

    for(var i = (divs.length - 1); i >= 0; i--)
    {
        divs[i].className = "jo6g-Content-black";
    }
};