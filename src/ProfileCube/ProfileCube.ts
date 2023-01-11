import THREE from "three";

const ProfileCube = () => {
    const texLoader = new THREE.TextureLoader();
    const mat1 = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texLoader.load('src/assets/Fam-in-black-white.png') });
    const mat2 = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texLoader.load('src/assets/ben-catching-leaves.png') });
    const mat3 = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texLoader.load('src/assets/ben-josh-park.png') });
    const mat4 = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texLoader.load('src/assets/jen-and-i.png') });
    const mat5 = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texLoader.load('src/assets/tinaaa.png') });
    const mat6 = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texLoader.load('src/assets/smoker-with-wings.png') });

    var cubeMaterial = [
        mat1,
        mat2,
        mat3,
        mat4,
        mat5,
        mat6,
    ];

    const cubeGeometry = new THREE.BoxGeometry(20, 20, 20);
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.y = 15;
    cube.position.x = 25;
    return new THREE.Mesh(cubeGeometry, cubeMaterial);
}

export default ProfileCube;