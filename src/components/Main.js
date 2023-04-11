import React from 'react';

class Main extends React.Component {
    render () {
        return (
            <>
                <HornedBeast title="Abaddon" imageURL={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/social/abaddon.jpg"} description={"Abaddon is a strength melee Hero in Dota 2.  Abaddon is known for his abilities to shield himself and his allies from harm, as well as to heal himself and his allies while damaging nearby enemies with a passive ability."} /> 
                <HornedBeast title="Beastmaster" imageURL={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/social/beastmaster.jpg"} description={"Beastmaster is a hero in Dota 2.  Beastmaster is a melee strength Hero who excels at controlling the battlefield and disrupting the enemy team. He is typically played as a utility hero and is often picked to provide vision, initiate fights, and control enemy heroes."}/>
                <HornedBeast title="Centaru Warrunner" imageURL={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/social/centaur.jpg"} description={"Centaur Warrunner is a durable strength hero who excels at countering all attacks and returning a fixed amount back to the attacker."} /> 
                <HornedBeast title="Clinkz" imageURL={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/social/clinkz.jpg"} description={"Clinkz is a ranged agility Hero who is played as a carry or a ganker due to his high physical damage output and mobility."} /> 
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