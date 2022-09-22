var style = document.createElement('style');
style.setAttribute("id", "multiselect_dropdown_styles");
style.innerHTML = `
.multiselect-dropdown{
    display: inline-block;
    padding: 2px 5px 0px 5px;
    border-radius: 4px;
    border: solid 1px #ced4da;
    background-color: white;
    position: relative;
    background-size: 16px 12px;
}

.multiselect-dropdown span.optext, .multiselect-dropdown span.placeholder{
    margin-right:0.5em; 
    margin-bottom:2px;
    padding:1px 0; 
    border-radius: 4px; 
    display:inline-block;
}

.multiselect-dropdown span.optext{
    background-color:lightgray;
    padding:1px 0.75em; 
}

.multiselect-dropdown span.optext .optdel {
    float: right;
    margin: 0 -6px 1px 5px;
    font-size: 0.7em;
    margin-top: 2px;
    cursor: pointer;
    color: #666;
}

.multiselect-dropdown span.optext .optdel:hover { color: #c66;}
.multiselect-dropdown span.placeholder{
  color:#ced4da;
}

.multiselect-dropdown-list-wrapper{
    box-shadow: gray 0 3px 8px;
    z-index: 100;
    padding:2px;
    border-radius: 4px;
    border: solid 1px #ced4da;
    display: none;
    margin: -1px;
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    background: white;
}

.multiselect-dropdown-list-wrapper .multiselect-dropdown-search{
    margin-bottom:5px;
}

.multiselect-dropdown-list{
    padding:2px;
    height: 15rem;
    overflow-y:auto;
    overflow-x: hidden;
}

.multiselect-dropdown-list::-webkit-scrollbar {
    width: 6px;
}

.multiselect-dropdown-list::-webkit-scrollbar-thumb {
    background-color: #bec4ca;
    border-radius:3px;
}

.multiselect-dropdown-list div{
    padding: 5px;
}

.multiselect-dropdown-list input{
    height: 1.15em;
    width: 1.15em;
    margin-right: 0.35em;  
}
  
.multiselect-dropdown-list div.checked{
}
  
.multiselect-dropdown-list div:hover{
    background-color: #ced4da;
}

.multiselect-dropdown span.maxselected {width:100%;}
.multiselect-dropdown-all-selector {border-bottom:solid 1px #999;}
`;

document.head.appendChild(style);

function MultiselectDropdown(options) {
    var config = {
        search: true,
        height: '15rem',
        placeholder: 'select',
        txtSelected: 'selected',
        txtAll: 'All',
        txtRemove: 'Remove',
        txtSearch: 'search',
        ...options
    };

    function newEl(tag, attrs) {
        var e = document.createElement(tag);
        if (attrs !== undefined) Object.keys(attrs).forEach(k => {
            if (k === 'class') { Array.isArray(attrs[k]) ? attrs[k].forEach(o => o !== '' ? e.classList.add(o) : 0) : (attrs[k] !== '' ? e.classList.add(attrs[k]) : 0) }
            else if (k === 'text') { attrs[k] === '' ? e.innerHTML = '&nbsp;' : e.innerHTML = attrs[k] }
            else e[k] = attrs[k];
        });
        return e;
    }

    document.querySelectorAll("select[multiple]").forEach((el,k) =>{
        var div = newEl('div', {class: 'multiselect-dropdown', style: {}})
    })
}