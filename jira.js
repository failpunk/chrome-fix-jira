var sidebar = document.getElementById('viewissuesidebar');

if(document.getElementById('details-module')){
    sidebar.insertBefore(document.getElementById('details-module'), sidebar.firstChild);
}

if(document.getElementById('view-subtasks')){
    sidebar.appendChild(document.getElementById('view-subtasks'));
}

if(document.getElementById('linkingmodule')){
    sidebar.appendChild(document.getElementById('linkingmodule'));
}

if(document.getElementById('activitymodule')){
    sidebar.appendChild(document.getElementById('activitymodule'));
}

// Comment button 
if(document.getElementById('addcomment')){
    sidebar.appendChild(document.getElementById('addcomment'));
}
