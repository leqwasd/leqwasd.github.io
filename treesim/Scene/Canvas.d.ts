import * as React from "react";
import { Scene, PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export declare const Canvas: React.FC;
export interface IScene {
    scene: Scene;
    camera: PerspectiveCamera;
    controls: OrbitControls;
}
export declare const useSceneContext: () => IScene;
