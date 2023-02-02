

export default function Terminal() {

    return (
        <div className="about-container">
            <div className="terminal-header">
                <div className="circle-red"></div>
                <div className="circle-yellow"></div>
                <div className="circle-green"></div>
            </div>
            <div className="terminal-window">
                <div className="statement">
                    <p className="input-statement">{'>          '}Joel.qualifications</p>
                    <p className="return-statement">"B.S. in Computer Science - Boise State University (2021) - 3.7 GPA"</p>
                </div>

                <div className="statement">
                    <p className="input-statement">{'>          '}Joel.currentRole</p>
                    <p className="return-statement">"Embedded Software Engineer | HP | 2021-Present"</p>
                </div>

                <div className="statement">
                    <p className="input-statement">{'>          '}Joel.contact</p>
                    <p className="return-statement">
                        {'['} "
                        <a className="link" href="mailto:joel61499@gmail.com?subject=Email via joelkoehler.github.io">joel61499@gmail.com</a>
                        " , "
                        <a className="link" href="https://github.com/joelkoehler">Github</a>
                        " , "
                        <a className="link" href="https://www.linkedin.com/in/joel-koehler/">Linkedin</a>

                        " {']'}
                    </p>
                </div>

                <div className="statement">
                    <p className="input-statement">{'>          '}Joel.hobbies</p>
                    <p className="return-statement">
                        {'['} "music production" , "guitar" , "drums" , "climbing", "skiing", "woodcarving" {']'}
                    </p>
                </div>

                <div className="statement">
                    <p className="input-statement blink">{'>          '}</p>
                </div>

            </div>
        </div>
    )

}