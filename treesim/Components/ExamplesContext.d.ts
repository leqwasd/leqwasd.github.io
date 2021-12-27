import * as React from "react";
export interface IAnimation {
    name: string;
    frames: number[][];
}
export interface IExamplesContext {
    animation: IAnimation;
    setAnimation: React.Dispatch<React.SetStateAction<IAnimation>>;
    currentFrame: number;
    setCurrentFrame: React.Dispatch<React.SetStateAction<number>>;
    currentFrameRef: React.MutableRefObject<number>;
}
export declare const ExamplesContextProvider: React.FC;
export declare const useExamplesContext: () => IExamplesContext;
