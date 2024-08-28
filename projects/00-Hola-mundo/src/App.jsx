import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName: 'DuckyBoy2112',
        name: 'Sopo',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Sapo',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Pacowo',
        isFollowing: true
    }
]
export function App() {
    // const [isFollowing, setIsFollowing] = useState(false)
    return  (
        <section className="App">
            {
                users.map(({userName,name,isFollowing}) => (
                        <TwitterFollowCard 
                        key={userName}
                        userName={userName} 
                        initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    
                )
            )
            }

            {/* <TwitterFollowCard userName="midudev" initialIsFollowing={isFollowing}>
                Sopo
            </TwitterFollowCard> */}

            {/* <button onClick={() => setIsFollowing(!isFollowing)}>Cambiar estado de app</button> */}

            {/* <TwitterFollowCard userName="DuckyBoy2112">
                Sapo
            </TwitterFollowCard> */}
        </section>
    )
}