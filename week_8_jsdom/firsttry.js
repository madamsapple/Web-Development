function printHTMLnavbar(){
    /*back tick encases multiple lines of strings*/
    let bar = `
    <nav>
        <ul>
            <li><a href= "#" >Link 1</a></li>
            <li><a href= "#" >Link 2</a></li>
        </ul>
    </nav>
    `;
    /* we are utilising the Document Object Model (DOM)here
    it allows JS to use the webiste's HTML structure of 
    head, body, footer, their attributes, etc
    therefore you can control any change/manipulation brought to all those elements*/
    document.getElementById('navbar').innerHTML = bar;
}

function printHTMLfooter(){
    let footer = `
    This is a footer.
    `;
    document.getElementById('new_footer').innerHTML = footer;
}