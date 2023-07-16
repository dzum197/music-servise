import React from 'react';
import TrackImage from './track/track-image';
import Author from './track/author';
import Album from './track/album';

import ButtonPrev from './buttons/button-prev';
import ButtonPlay from './buttons/button-play';
import ButtonNext from './buttons/button-next';
import ButtonRepeat from './buttons/button-repeat';
import ButtonShuffle from './buttons/button-shuffle';
import ButtonLike from './buttons/button-like';
import ButtonDislike from './buttons/button-dislike';
import styles from ".bar.module.css";

import VolumeImage from './volume/volume-image';
import VolumeProgress from './volume/volume-progress';

function Bar() {
    return(
        <div className="bar">
            <div className="bar__content">
                <div className="bar__player-progress" />
                <PlayerBlock />
            </div>
        </div>
    );
}

export default Bar

function PlayerBlock() {
    return(
        <div className="bar__player-block">

            <div className="bar__player player">

                <div className="player__controls">
                    <ButtonPrev />
                    <ButtonPlay />
                    <ButtonNext />
                    <ButtonRepeat />
                    <ButtonShuffle />
                </div>

                <div className="player__track-play track-play">
                    <div className="track-play__contain">
                        <TrackImage />
                        <Author author="Ты та..."/>
                        <Album album="Баста" />
                    </div>

                    <div className="track-play__like-dis">
                        <ButtonLike />
                        <ButtonDislike />
                    </div>
                </div>
            </div>

            <div className="bar__volume-block volume">
                <div className="volume__content">
                    <VolumeImage />
                    <VolumeProgress />
                </div>
            </div>
        </div>
    );
}