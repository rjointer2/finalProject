
import { useEffect } from 'react';
import { init } from '../../ulits/init'


// this is can be used with a proxy later on



const Game = () => {

    useEffect(() => {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        // init here 
        init(canvas, context);
    }, [])


    return (
        <div>
            {/* THIS IS WHERE THE GAME'S SCREEN IS HELD */}
           <canvas height="200" width="600"  style={{
               border: '1px solid red',
               background: 'gray'
           }}></canvas>
        </div>
    )
}

export default Game