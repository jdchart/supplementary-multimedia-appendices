let tm_header_node = document.getElementById("top_menu");

// Adding space:
let tm_header_space = document.createElement("div");
tm_header_space.style.height = String(tm_header_node.offsetHeight) + "px";
tm_header_node.after(tm_header_space);

// 
let tm_nav = document.createElement("nav");
let tm_list = document.createElement("ul");

// Menu elements:
let tm_home_link = document.createElement("a");
tm_home_link.setAttribute("href", "/index.html");
tm_home_link.style.height = String(tm_header_node.offsetHeight) + "px";
tm_home_link.innerHTML = "Home";

let tm_test_link = document.createElement("a");
tm_test_link.setAttribute("href", "/pages/utilities/template.html");
tm_test_link.style.height = String(tm_header_node.offsetHeight) + "px";
tm_test_link.innerHTML = "Test Page";

// Appending elements:
tm_list.appendChild(tm_home_link);
tm_list.appendChild(tm_test_link);
tm_nav.appendChild(tm_list);
tm_header_node.appendChild(tm_nav);