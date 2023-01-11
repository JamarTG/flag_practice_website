//React Hooks
import { useState } from 'react';
import WavingFlag from './components/WavingFlag';


// Utility Functions
import getCountryOptions from './util/getCountryOptions';
import verifyAnswer from './util/verifyAnswer';

//Interfaces
import {Country,Progress} from '../resource/interfaces';


export default function Home() {
  
  const chooseNewCountries = async () => {
    let results = await (getCountryOptions());
  
    setAnswer(results.answer);
    setOptions(results.options);
  }


  const [gameHasStarted,setGameHasStarted] = useState(false);

  
  const [answer,setAnswer] = useState({} as Country);
  const [options,setOptions] = useState([] as Country[]);


  const [progress,setProgress] = useState({
    correct:0,
    total:0,
    percCorrect:0
  } as Progress)


  return (
    
<div className={`container ${!gameHasStarted ? 'center' : ''}`}>

      {gameHasStarted&& <h1>Which country's flag is this?</h1>}
      <div className='percentage'>
      {gameHasStarted && progress.percCorrect.toFixed(0)}{gameHasStarted ? '%':''}
      </div>
          {gameHasStarted &&
          <div className='progress'>
            <h4>Correct : {progress.correct}  |  Incorrect : {progress.total - progress.correct}</h4>
            {gameHasStarted && <progress id="progress-bar" value={progress.percCorrect.toString()} max="100"></progress>}
          </div>
          }          

      {(gameHasStarted && answer.flag) ?  <WavingFlag countrySrc={answer.flag}/>:<h1>Click to Start Game...</h1>}

      {!gameHasStarted && <button className="start-button" onClick={async ()=>{

        let results = (await getCountryOptions());

        setAnswer(results.answer);
        setOptions(results.options);

        setGameHasStarted(true);
      }}> Start Game</button>}
      
    
      {
        <div className='centered-items'>
          
          {options.map(country => {
          return(
            
            <div key={country.id}>
            
              <button className='button' 
                onClick={
                  async () => {
        
                    let temporaryProgess = progress;

                    verifyAnswer(country,answer) ? temporaryProgess.correct++:temporaryProgess.correct;
                    
                    temporaryProgess.total++;

                    temporaryProgess.percCorrect = 100 * (temporaryProgess.correct/temporaryProgess.total);

                    setProgress({
                      correct:temporaryProgess.correct,
                      total:temporaryProgess.total,
                      percCorrect:temporaryProgess.percCorrect
                    
                    });

                    chooseNewCountries();
                  }
                }>

              {country.name}
              
              </button>
            
            </div>
          )})}
        </div>
      }
    </div>
  )
}
