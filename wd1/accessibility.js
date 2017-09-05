(function () {
    
    "use strict";
    
    var child_list,
        hamburger_menu,
        i,
        nav,
        nav_labels;
    
    function click_entered_target(event) {
        if (event.keyCode === 13) {
            document.querySelector('#' + event.target.getAttribute('for')).click();
        }
    }
    
    function show_hide_nav() {
        nav = document.querySelector('#top_nav > ul');
        nav.classList.toggle('show');
    }
    
    function show_hide_nav_enter(event) {
        if (event.keyCode === 13) {
            nav = document.querySelector('#top_nav > ul');
            nav.classList.toggle('show');
        }
    }
    
    function reverse_tabindex(index_value) {
        if (index_value === 0) {
            return -1;
        } else {
            return 0;
        }
    }
    
    function change_tab_index_click(event) {
        //child_list = event.target.childNodes;
        child_list = event.target.nextElementSibling.querySelectorAll('a');
        //console.log(child_list);
        //console.log(child_list);
        for (i = 0; i < child_list.length; i += 1) {
            child_list[i].tabIndex = reverse_tabindex(child_list[i].tabIndex);
        }
    }
    
    function change_tab_index_enter(event) {
        if (event.keyCode === 13) {
            //child_list = event.target.childNodes;
            child_list = event.target.nextElementSibling.querySelectorAll('a');
            //console.log(child_list);
            for (i = 0; i < child_list.length; i += 1) {
                child_list[i].tabIndex = reverse_tabindex(child_list[i].tabIndex);
            }
            //event.target.querySelectorAll('a')
        }
    }
    
    function init() {
        nav_labels = document.querySelectorAll('#top_nav label');
        for (i = 0; i < nav_labels.length; i += 1) {
            nav_labels[i].addEventListener("keyup", click_entered_target, false);
            
            nav_labels[i].addEventListener("click", change_tab_index_click, false);
            nav_labels[i].addEventListener("keyup", change_tab_index_enter, false);
            //nav_labels[i].addEventListener("click", printing, false);
        }
        
        hamburger_menu = document.querySelector('label[for="hamburger_menu_box"]');
        hamburger_menu.addEventListener("click", show_hide_nav, false);
        hamburger_menu.addEventListener("keyup", show_hide_nav_enter, false);
        //hamburger_menu.addEventListener("click", printing, false);
        hamburger_menu.addEventListener("keyup", click_entered_target, false);
    }
    
    document.addEventListener("DOMContentLoaded", init, false);
    
    /*function printing() {
        console.log("hello");
    }*/
    
    
})();