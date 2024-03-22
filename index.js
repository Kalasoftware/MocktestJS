
function idcheck(cid,err)
{
    if(cid.value.trim() == ""){
        err.innerHTML = "cannot be empty ";
        cid.focus()
        return false;
    }
    else if(!/^(CID)[0-9]{5}$/.test(cid.value))
    {
        err.innerHTML = "pattern doesnt match ";
        return false;
    }
    else 
    {
        err.innerHTML = ""
        return true;
    }
}

function emailc(email,err)
{
    if(email.value.trim() == "")
    {
        err.innerHTML = "cannot be empty ";
        return false;
    }
    else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-_]+\.[a-zA-z]{2,4}$/.test(email.value))
    {
        err.innerHTML= "provide proper email";
        return false;
    }
    else 
    {
        err.innerHTML = ""
        return true;
    }
}

function namec(name,err)
{
    if(name.value.trim() == "")
    {
        err.innerHTML = "cannot be empty ";
        return false;
    }
    else if(!/^[a-zA-Z]{2,15}/.test(name.value))
    {
        err.innerHTML = "enter valid name";
        return false;
    }
    else 
    {
        err.innerHTML = ""
        return true;
    }
}

function pamtc(pamt,err)
{
    if(pamt.value.trim() == "")
    {
        err.innerHTML = "cannot be empty ";
        return false;
    }
    else if(pamt.value < 10000 || pamt.value > 100000)
    {
        err.innerHTML = " please enter amount bet 10000 and 100000 "
        return false;
    }
    else
    {
        err.innerHTML = ""
        return true;
    }
}

function roic(roi,err)
{
    if(roi.value.trim() == "")
    {
        err.innerHTML = "cannot be empty ";
        return false;
    }
    else if(roi.value <2 || roi.value>20)
    {
        err.innerHTML =" value must be from 2 to 20"
        return false;
    }
    else 
    {
        err.innerHTML = ""
        return true;
    }

}

function noyc(noi,err)
{
    if(noi.value.trim() == "")
    {
        err.innerHTML = "cannot be empty ";
        return false;
    }
    else if(noi.value < 1 || noi.value > 10 )
    {
        err.innerHTML = " year must be in 1 - 10";
        return false;
    }
    else 
    {
        err.innerHTML = ""
        return true;
    }
}

function checkmybox(chk,chkerr)
{
    console.log("checkbox function called");;
    var hobb = "";
    for(i=0; i<chk.length; i++)
    {
        if(chk[i].checked)
        {
            hobb+= chk[i].value;
            console.log("in loop")
        }
    }
    if(hobb == ""){
        chkerr.innerHTML = "not selected any value";
        return false;
    }else 
    {
        return true;
    }

}