document.getElementById('introduction').style.display="block";
window.location.href="#introduction";
var previous_tuto = "introduction";
var list = 
    ["#introduction", 
    "#introduction_to_linux",
    /*"#what_is_linux", 
    "#advantages_of_using_linux", 
    "#disadvantages_of_using_linux", 
    "#who_uses_linux_and_where", */
    "#linux_installation",
    /*"#what_is_virtualbox", 
    "#install_virtualbox_in_windows", 
    "#install_virtualbox_in_macos", 
    "#install_ubuntu_in_virtualbox", 
    "#install_ubuntu_on_a_computer", */
    "#linux_filesystem_structure", 
    "#user_and_group_management", 
    "#file_permissions", 
    "#command_line_interface", 
    /*"#what_is_a_shell", 
    "#what_is_the_terminal", 
    "#which_shell_is_the_default_in_my_linux_distro", 
    "#which_shell_should_I_use", 
    "#use_terminal_to_do_tasks", 
    "#text_manipulations", 
    "#files_and_directories_manipulations", 
    "#system", 
    "#hardware_and_system", 
    "#piping", 
    "#output_redirection", 
    "#running_multiple_commands_in_one_line", 
    "#terminal_shortcut", */
    "#package_manager", 
    "#bash_scripting", 
    "#conclusion"];
var listN = 0;
function display(tuto) {
    if (previous_tuto != "0") {
        document.getElementById(previous_tuto).style.display="none";
    }
    document.getElementById(tuto).style.display="block";
    previous_tuto = tuto;
}


function previous() {
    var tuto = list[list.indexOf("#" + previous_tuto) - 1];
    display(tuto.slice(1));
    window.location.href = tuto;
}

function next() {
    var tuto = list[list.indexOf("#" + previous_tuto) + 1];
    display(tuto.slice(1));
    window.location.href = tuto;
}