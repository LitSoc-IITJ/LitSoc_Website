import React from 'react';
import './Timeline.css';

export default function Timeline(){
  return (
    <div class="fandom-timeline">
    <h2 id="timeline" class="timeline__heading">Timeline</h2>
    <div class="timeline">
    <div class="timeline__component">
      <div class="timeline__date timeline__date--right">
      <p>July 5th</p><br/>
      <p class="timeline__venue">Venue: LHC 105</p></div>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component timeline__component--bg">
      <h2 class="timeline__title">Quiz</h2>
      <p class="timeline__paragraph">
      Are you an anime expert? Test your prowess and 
      compete against fellow enthusiasts in our Anime Quiz Showdown.
       Only the most knowledgeable will claim victory!</p>
    </div>
    <div class="timeline__component timeline__component--bg">
      <h2 class="timeline__title">Scavenger Hunt</h2>
      <p class="timeline__paragraph">
        Venue: Outside LHC
      </p>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component">
      <div class="timeline__date">July 6th</div>
    </div>
    <div class="timeline__component">
      <div class="timeline__date timeline__date--right">July 7th</div>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component timeline__component--bg">
      <h2 class="timeline__title">Karaoke</h2>
      <p class="timeline__paragraph">
        Venue: LHC 105
      </p>
    </div>
    <div
      class="timeline__component timeline__component--bottom timeline__component--bg"
    >
      <h2 class="timeline__title">Movie Screening</h2>
      <p class="timeline__paragraph">
        Movie: Kimi no Nawa
      </p>
      <p class="timeline__paragraph">
        Informal Grounds
      </p>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
      <div class="timeline__point timeline__point--bottom"></div>
    </div>
    <div class="timeline__component timeline__component--bottom">
      <div class="timeline__date">July 8th</div>
    </div>
  </div>
  </div>
  );
};

