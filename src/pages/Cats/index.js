import CatCard from "../../components/CatCard";

const CATS = [
    {
        id: '1',
        src: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350',
        alt: 'cat',
        description: 'Black, short hair slightly reveals a fresh, tense face. Glittering green eyes, set thightly within their sockets, watch vigilantly over the families they\'ve safeguarded for so long.\n' +
            'A large beard handsomely compliments his hair and cheekbones and leaves a satisfying memory of his fortunate looks.\n' +
            '\n' +
            'This is the face of Cale Falkner, a true spectacle among humans. He stands big among others, despite his light frame.\n' +
            '\n' +
            'There\'s something charming about him, perhaps it\'s a feeling of sadness or perhaps it\'s simply a feeling of anguish. But nonetheless, people tend to ask him about his adventures, while thinking of ways to become his friend.'
    },
    {
        id: '2',
        src: 'http://www.catster.com/wp-content/uploads/2017/08/Pixiebob-cat.jpg',
        alt: 'cat',
        description: 'Silver, dreadlocks tight in a ponytail reveals a fresh, radiant face. Glittering hazel eyes, set deep within their sockets, watch delightfully over the stronghold they\'ve disassociated with for so long.\n' +
            'A sword left a mark reaching from the bottom of the right cheek , first running towards thin lips and ending above his right eye leaves an agonizing memory of his fortunate destiny.\n' +
            '\n' +
            'This is the face of Maverick Rosemond, a true challenger among halflings. He stands towering among others, despite his delicate frame.\n' +
            '\n' +
            'There\'s something misleading about him, perhaps it\'s his personality or perhaps it\'s simply his patience. But nonetheless, people tend to flock towards him, while trying to hide from him.'
    },
    {
        id: '3',
        src: 'https://www.argospetinsurance.co.uk/assets/uploads/2017/12/cat-pet-animal-domestic-104827.jpeg',
        alt: 'cat',
        description: 'Red, short hair gently hangs over a fresh, warm face. Glittering blue eyes, set deep within their sockets, watch cheerfully over the homes they\'ve sought solace in for so long.\n' +
            'A gunshot left a mark stretching from the right side of the forehead , running towards his right nostril and ending on his left cheekbone leaves a painful burden of lost honor.\n' +
            '\n' +
            'This is the face of Bruno Lockwood, a true guardian among giants. He stands common among others, despite his heavy frame.\n' +
            '\n' +
            'There\'s something curious about him, perhaps it\'s his unfortunate past or perhaps it\'s simply his painful past. But nonetheless, people tend to shower him with gifts, while hoping to one day follow in his footsteps.'
    },
    {
        id: '4',
        src: 'http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg',
        alt: 'cat',
        description: 'Black, greasy hair gently hangs over a full, wild face. Bloodshot black eyes, set buried within their sockets, watch vigorously over the river they\'ve nearly died for for so long.\n' +
            'A scar stretching from the right side of the forehead , running towards the right side of his lips and ending on his right cheekbone leaves a tormenting memory of hidden talents.\n' +
            '\n' +
            'This is the face of Wimax Gearnozzle, a true utopian among goblins. He stands easily among others, despite his thin frame.\n' +
            '\n' +
            'There\'s something inexplicable about him, perhaps it\'s his company or perhaps it\'s simply his warmth. But nonetheless, people tend to ask him about his adventures, while training with him whenever he\'s available.'
    },
    {
        id: '5',
        src: 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
        alt: 'cat',
        description: 'White, shoulder-length hair tight in a bun reveals a full, warm face. Beady aquamarine eyes, set a-symmetrically within their sockets, watch enthusiastically over the natives they\'ve have been seperated from for so long.\n' +
            'Several moles are spread seductively around her nose and and leaves a heartbreaking memory of her luck in love.\n' +
            '\n' +
            'The is the face of Nafareath Dawnfury, a true ally among wood elves. She stands seductively among others, despite her hefty frame.\n' +
            '\n' +
            'There\'s something extraordinary about her, perhaps it\'s her suffering or perhaps it\'s simply her friendly demeanor. But nonetheless, people tend to hopelessly try to seduce her, while hoping their sons will grow up to be like her.'
    },
    {
        id: '6',
        src: 'https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
        alt: 'cat',
        description: 'Chestnut, shaggy hair neatly coiffured to reveal a round, cheerful face. Squinting amber eyes, set sunken within their sockets, watch delightfully over the wildlife they\'ve disassociated with for so long.\n' +
            'A tattoo of a small eagle is almost hidden just above the side of her left eye and leaves a painful burden of heroic liberations.\n' +
            '\n' +
            'The is the face of Camille Hanson, a true globetrotter among vampires. She stands alluringly among others, despite her tough frame.\n' +
            '\n' +
            'There\'s something seductive about her, perhaps it\'s her sense of justice or perhaps it\'s simply her bravery. But nonetheless, people tend to worship her, while treating her to a good meal when she\'s around.'
    },
    {
        id: '7',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
        alt: 'cat',
        description: 'Black, frizzy hair awkwardly hangs over a skinny, cheerful face. Wide gray eyes, set graciously within their sockets, watch merrily over the deserts they\'ve grieved with for so long.\n' +
            'Freckles are spread neatly around his cheeks and leaves a bittersweet memory of his fortunate upbringing.\n' +
            '\n' +
            'This is the face of Bruce Gedney, a true nobleman among werewolves. He stands tall above others, despite his scraggy frame.\n' +
            '\n' +
            'There\'s something appealing about him, perhaps it\'s his painful past or perhaps it\'s simply his odd companions. But nonetheless, people tend to ask him about his latest victory, while hoping he will one day be their leader.'
    },
    {
        id: '8',
        src: 'https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg',
        alt: 'cat',
        description: 'Golden, sleek hair neatly coiffured to reveal a furrowed, lively face. Wide blue eyes, set graciously within their sockets, watch affectionately over the ancestors they\'ve been isolated from for so long.\n' +
            'Soft skin graciously compliments his eyes and hair and leaves a delightful memory of his adventurous love life.\n' +
            '\n' +
            'This is the face of Tinlef Dawnthorn, a true adventurer among night elves. He stands graciously among others, despite his tough frame.\n' +
            '\n' +
            'There\'s something mystifying about him, perhaps it\'s his fortunate past or perhaps it\'s simply his kindness. But nonetheless, people tend to stay on his good side, while hoping he will one day be their leader.'
    },
    {
        id: '9',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Cat-eating-prey.jpg/220px-Cat-eating-prey.jpg',
        alt: 'cat',
        description: 'Gray, shaggy hair clumsily hangs over a handsome, gloomy face. Smart brown eyes, set rooted within their sockets, watch heartily over the mines they\'ve befriended for so long.\n' +
            'A gunshot left a mark stretching from the top of the left cheek , running towards his upper lip and ending on his upper lip leaves a stinging memory of former lives.\n' +
            '\n' +
            'This is the face of Gimkink Stormgauge, a true nobleman among gnomes. He stands high among others, despite his muscled frame.\n' +
            '\n' +
            'There\'s something bizarre about him, perhaps it\'s his suffering or perhaps it\'s simply his reputation. But nonetheless, people tend to invite him into their homes, while training with him whenever he\'s available.'
    },
]


const Cats = () => {
    return (
        <div className='cats-container'>
            {
                CATS.map(({id, alt, src, description}) => (
                    <CatCard
                        id={id}
                        key={id}
                        src={src}
                        alt={alt}
                        description={description}
                    />
                ))
            }
        </div>
    )
}

export default Cats
