var isConnected = false;

function send_connection()
{
    hide_all();
    document.getElementById("footer_copyright").style.display = 'none';
    document.getElementById("footer_sender").style.display = 'block';
    document.getElementById("bubble_container").style.display = 'block';
    // TODO:Send, Queue, Accept the connection request. 
    isConnected = true;
}

function send_paragraph()
{
    var text = document.getElementById("input_dialog").value;
    if (typeof text != "undefined" && text != 0)
    {
        document.getElementById("bubble_container").innerHTML += '<div class="row">' + 
        '<div class="col-lg-6"></div>' + '<div class="col-lg-6">' + 
        '<div class="card mb-4 py-3 border-left-warning">' + 
        '<div class="card-body">' + '<p class="text-gray-800 mb-0" style="font-family:' + "'Microsoft YaHei'" + ';font-size: x-large">' + text + '</p>' + 
        '</div>' + '</div>' + '</div>' + '</div>';
        document.getElementById("input_dialog").value = null;
    }
}

function exit_connection(page)
{
    if(confirm("確定要離開?"))
    {
        isConnected = false;
        hide_all();
        var id = resolve_pages(page);
        document.getElementById(id).style.display = 'block';
    }
}

function keyword(key)
{
    const elem    = document.getElementById(key);
    const elem2   = document.getElementById("secret_input");
    elem2.value = elem.innerText;
}

function load_container(page)
{
    if(isConnected)
        exit_connection(page);
    else
    {
        hide_all();
        var id = resolve_pages(page);
        document.getElementById(id).style.display = 'block';
    }
}

function hide_all()
{
    document.getElementById("main_container").style.display = 'none';
    document.getElementById("secret_container").style.display = 'none';
    document.getElementById("information_container").style.display = 'none';
    document.getElementById("contact_container").style.display = 'none';
    document.getElementById("bubble_container").style.display = 'none';
    document.getElementById("404_container").style.display = 'none';
    document.getElementById("eula_container").style.display = 'none';
    document.getElementById("footer_sender").style.display = 'none';
    document.getElementById("footer_copyright").style.display = 'block';
}

function resolve_pages(page)
{
    var resolove_answer;

    if(page == "secret_page")
        resolove_answer = "secret_container";
    else if(page == "main_page")
        resolove_answer = "main_container";
    else if(page == "information_page")
        resolove_answer = "information_container";
    else if(page == "contact_page")
        resolove_answer = "contact_container";
    else if(page == "eula_page")
        resolove_answer = "eula_container";
    else
        resolove_answer = "404_container";

    return resolove_answer;
}