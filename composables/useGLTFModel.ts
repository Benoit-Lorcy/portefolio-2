import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export function useGLTFModel() {
    const glfLoader = new GLTFLoader()

    function load(url: string) {
        return new Promise((resolve, reject) => {
            glfLoader.load(url, resolve, undefined, reject)
        })
    }

    return {
        load,
    }
}