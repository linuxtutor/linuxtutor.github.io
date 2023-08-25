var list = 
    ["index", 
    "introduction_to_linux",
    "linux_installation",
    "linux_filesystem_structure", 
    "user_and_group_management", 
    "file_permissions", 
    "command_line_interface", 
    "package_manager", 
    "bash_scripting", 
    "conclusion"];

function previous(previous_tuto) {
    var str = window.location.href;
    previous_tuto = str.substring(str.lastIndexOf('/')+1, str.lastIndexOf('.'));
    var tuto = list[list.indexOf(previous_tuto) - 1];
    if (tuto) {
        window.location.href = "file:///home/kali/linuxninja/website/learn/" + tuto + ".html";
    }
}

function next(previous_tuto) {
    var str = window.location.href;
    previous_tuto = str.substring(str.lastIndexOf('/')+1, str.lastIndexOf('.'));
    var tuto = list[list.indexOf(previous_tuto) + 1];
    if (tuto) {
        window.location.href = "file:///home/kali/linuxninja/website/learn/" + tuto + ".html";
    }
}

var ct = 0;
function content_table() {
    if (ct == 0 ) {
        document.getElementById("content_table").style.display="flex";
        document.getElementById("content_table").style.paddingTop="40px";
        ct = 1;
    } else {
        document.getElementById("content_table").style.display="none";
        ct = 0;
    }
}