ArticleDetail.pageTitle = 'Article Detail'
import Link from "next/link"
import Image from 'next/image'

export default function ArticleDetail() {
    return (
        <div className="container white-text">
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="right">Last Updated: January 10, 2023</div>
                        <div className="col s12"><h3>Cat Chef</h3></div>
                        <div className="col s12">
                            <p>
                                Cat chef is the most hilarious, wacked out, Mario clone video game I have ever built.
                                You play as a cat, collecting ingredients to make a cake.
                                You are not making any normal cake, it is a banana cake and the banana men are after you.
                                Defeat the banana men and collect the ingredients and the coins throughout the game.
                                Once there, there is a cat oven and cook up the cake and you win!
                            </p>
                        </div>
                        <div className="col s12"><Image src="/Screenshot 2022-03-25 150644.jpg" width={500} height={300} alt="Cat Chef Image 1"/>
                            <p>This is take in the middle of the level.</p></div>
                        <div className="col s12"><Image src="/Screenshot 2022-03-25 150916.jpg" width={500} height={300} alt="Cat Chef Image 2"/>
                            <p>This is take at end of the level.</p>
                            <p>This project was created by a team of two, one programmer, one designer. I was the programmer for the game.
                                I create the logic for collecting items, move, jump, attack, defeat the enemies, the oven, you win, you lose, and much more.
                            </p>
                        </div>
                        <div className="col s12">
                            <h5><Link className="blue-text" target="_blank" href="https://monstrous-entertainment.itch.io/cat-chef">You can play it here!</Link></h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}