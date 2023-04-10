import React from 'react';

class Main extends React.Component {
    render () {
        return (
            <>
                <HornedBeast title="Primal Beast" imageURL={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/social/primal_beast.jpg"} description={"Primal Beast is a strength melee Hero in Dota 2.  Primal Beast has strong AoE abilities that excels at creating chaos in teamfights."} /> 
                <HornedBeast title="Beastmaster" imageURL={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/social/beastmaster.jpg"} description={"Beastmaster is a hero in Dota 2.  Beastmaster is a melee strength Hero who excels at controlling the battlefield and disrupting the enemy team. He is typically played as a utility hero and is often picked to provide vision, initiate fights, and control enemy heroes."}/>
            </>
        )
    }
}

class HornedBeast extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageURL} alt={this.props.title}/>
                <p>{this.props.description}</p>
            </>    
        )
    }
}

export default Main;