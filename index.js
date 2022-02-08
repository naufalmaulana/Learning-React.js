function Header(){
    return (        
        <nav>
            <img src="./react-logo.png" width="40px" />
        </nav>
    )
}
function Page() {
    return (
        <div>
        <h1>Reasons i'm excited to learn React</h1>
        <ol>
            <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
            if I know React</li>
        </ol>      
        </div>
    )
}
function Footer(){
    return (        
        <div>
            <p>© 20xx name development. All rights reserved.</p>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Header />
        <Page />
        <Footer />
    </div>
    , document.getElementById("root"))