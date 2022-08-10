//Solution code added https://github.com/HackerUSA-CE/RR-DOM-Methods-to-JSX/blob/v1-solution/src/index.js
let koalaContainer = (
    <div className="ui items">
        {koalas.map( koala => (
            <div className="item" style={{ cursor: 'pointer' }}>
                <div className="image" >
                    <img src={koala.imageURL} />
                </div>
                <div className="content">
                    <div className="header">
                        {koala.name}
                    </div>
                    <div className="description">
                        <p>{koala.description}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
)

document.body.append(koalaContainer)