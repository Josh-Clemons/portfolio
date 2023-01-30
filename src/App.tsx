import * as THREE from 'three';
import React, { useState } from 'react';
import { Material, Texture } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './App.css';
import { AboutMe } from './components/AboutMe/AboutMe';
import { MyProjects } from './components/MyProjects/MyProjects';
import { Dna } from 'react-loader-spinner'

function App() {
  const [loadingState, setLoadingState] = React.useState<boolean>(false)



  const setUpVideo = (inSrc: string) => {
    const vidElem = document.createElement("video");
    /// ... some setup like poster image, size, position etc. goes here...
    /// now, add sources:
    const sourceMP4 = document.createElement("source");
    sourceMP4.type = "video/mp4";
    sourceMP4.src = inSrc;
    // performance


    vidElem.appendChild(sourceMP4);

    vidElem.autoplay = true;
    vidElem.muted = true;
    vidElem.loop = true;
    vidElem.setAttribute("crossorigin", "anonymous");
    // i think this will not be not be needed if you have a server

    vidElem.style.display = "none"; // this makes it so the html element isnt there

    vidElem.load();
    vidElem.play()

    return vidElem;
  }
  const createTextureFromVideoElement = (video: HTMLVideoElement) => {
    let texture = new THREE.VideoTexture(video);
    texture.needsUpdate;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    return texture;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 300);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // renderers render method
  renderer.render(scene, camera);


  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(20, 20, 20);

  const ambientLight = new THREE.AmbientLight(0xffffff);

  scene.add(ambientLight);



  // helpers
  // const lightHelper = new THREE.PointLightHelper(pointLight);
  // const gridHelper = new THREE.GridHelper(200, 50);

  // scene.add(lightHelper);

  camera.position.y = 10;
  camera.position.z = 50;

  const orbitControls = new OrbitControls(camera, renderer.domElement); // listens to dom events on the mouse and updates camera position accordingly

  // loads and sets the background image
  const spaceTexture = new THREE.TextureLoader().load('../assets/bg2.png', () => {
    setLoadingState(true)
  }) as Texture;
  scene.background = spaceTexture;

  const texLoader = new THREE.TextureLoader();
  const fillerMaterial = new THREE.MeshStandardMaterial({ color: 'rgb(1, 35, 80, 1)' });

  // This is for the CUBE with my pictures being displayed on it
  const mat1 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/Fam-in-black-white.png') });
  const mat2 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/ben-catching-leaves.png') });
  const mat3 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/ben-josh-park.png') });
  const mat4 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/headshot_reduced.png') });
  const mat5 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/tina_hill.png') });
  const mat6 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/skol.png') });


  const cubeMaterial = [
    mat5,
    mat2,
    mat3,
    mat1,
    mat4,
    mat6,
  ];

  const cubeGeometry = new THREE.BoxGeometry(20, 20, 20);
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.y = 15;
  cube.position.x = 25;


  // const cube = ProfileCube()
  scene.add(cube);
  // end cube design


  const planeMat1 = new THREE.MeshStandardMaterial({ map: texLoader.load('assets/usmc.png') });
  const planeMat2 = new THREE.MeshStandardMaterial({ map: texLoader.load('assets/vettec.png') });
  const planeMat3 = new THREE.MeshStandardMaterial({ color: 0x0e2c37 });
  const planeMaterial = [
    fillerMaterial,
    fillerMaterial,
    fillerMaterial,
    fillerMaterial,
    planeMat1,
    planeMat2,
  ]

  const planeGeometry = new THREE.BoxGeometry(20, 20, 2);
  const usmcPlane = new THREE.Mesh(planeGeometry, planeMaterial)
  usmcPlane.position.x = -20;
  usmcPlane.position.y = 10;
  usmcPlane.position.z = 200;

  scene.add(usmcPlane);


  // start gridIron cube
  const gMat1 = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const gMat2 = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const gMat3 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/gridiron_league_detail_picks.png') });
  const gMat4 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/gridiron_league_detail.png') });
  const gMat5 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/gridiron_user_dashboard.png') });
  const gMat6 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/gridiron_landing_page.png') });

  const gridIronMaterial = [
    gMat3,
    gMat5,
    gMat1,
    gMat2,
    gMat4,
    gMat6
  ]

  const gridIronGeometry = new THREE.BoxGeometry(20, 40, 20);

  const gridIronCube = new THREE.Mesh(gridIronGeometry, gridIronMaterial)
  gridIronCube.position.x = 25;
  gridIronCube.position.y = 10;
  gridIronCube.position.z = 620;
  scene.add(gridIronCube);
  // end gridIron cube





  const movieSagaVideo = setUpVideo('assets/movie_saga.mp4');
  const movieSagaTexture = createTextureFromVideoElement(movieSagaVideo)
  const movieSagaMaterial = new THREE.MeshBasicMaterial({
    map: movieSagaTexture,
    toneMapped: false, // turn of tone mapping, used for showing HDR
  });
  const serverCalcVideo = setUpVideo('assets/server_calculator.mp4');
  const serverCalcTexture = createTextureFromVideoElement(serverCalcVideo)
  const serverCalcMaterial = new THREE.MeshBasicMaterial({
    map: serverCalcTexture,
    toneMapped: false, // turn of tone mapping, used for showing HDR
  });
  const taskListVideo = setUpVideo('assets/task_list.mp4');
  const taskListTexture = createTextureFromVideoElement(taskListVideo)
  const taskListMaterial = new THREE.MeshBasicMaterial({
    map: taskListTexture,
    toneMapped: false, // turn of tone mapping, used for showing HDR
  });
  const photoGalleryVideo = setUpVideo('assets/photo_gallery2.mp4');
  const photoGalleryTexture = createTextureFromVideoElement(photoGalleryVideo)
  const photoGalleryMaterial = new THREE.MeshBasicMaterial({
    map: photoGalleryTexture,
    toneMapped: false, // turn of tone mapping, used for showing HDR
  });

  const projectMaterial = [
    taskListMaterial,
    movieSagaMaterial,
    fillerMaterial,
    fillerMaterial,
    serverCalcMaterial,
    photoGalleryMaterial,

  ]

  const projectGeometry = new THREE.BoxGeometry(24, 24, 24);
  const projectCube = new THREE.Mesh(projectGeometry, projectMaterial)
  projectCube.position.x = 40;
  projectCube.position.y = 10;
  projectCube.position.z = 700;
  scene.add(projectCube);
  // end projectCube cube




  // start tanya cube
  const tanyaMat1 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/power_wheels.jpg') });
  const tanyaMat2 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/dartboard.png') });
  // const tanyaMat3 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/tanya_front_frame.jpg') });
  // const tanyaMat4 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/tanya_rear.jpg') });
  const tanyaMat5 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/cornhole_score_keeper.png') });
  const tanyaMat6 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('assets/tanya_profile.png') });

  const tanyaMaterial = [
    tanyaMat2,
    tanyaMat5,
    fillerMaterial,
    fillerMaterial,
    tanyaMat1,
    tanyaMat6
  ]

  const tanyaGeometry = new THREE.BoxGeometry(24, 24, 24);

  const tanyaCube = new THREE.Mesh(tanyaGeometry, tanyaMaterial)
  tanyaCube.position.x = 50;
  tanyaCube.position.y = 10;
  tanyaCube.position.z = 750;
  scene.add(tanyaCube);
  // end tanya cube

  // function to move camera on scroll
  const moveCamera = (event: any) => {
    const top = document.body.getBoundingClientRect().top;
    // console.log('top', top)
    camera.position.z = (top * -.5) + 50;
  }
  // resize renderer and camera aspect when window sizes change
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  document.body.onscroll = moveCamera;


  const animate = () => {
    requestAnimationFrame(animate); // requestAnimationFrame is a built in that tells the browser I'm going to animate something

    cube.rotation.x += 0.003;
    cube.rotation.y += 0.003;
    cube.rotation.z += 0.003;
    usmcPlane.rotation.y -= 0.01;
    gridIronCube.rotation.y -= 0.005;
    projectCube.rotation.y -= 0.0025;
    tanyaCube.rotation.y -= 0.003;
    // personalProjectCube.rotation.y -= 0.003;

    orbitControls.update();

    renderer.render(scene, camera); // re-renders the screen when something is animated
  };

  animate();

  return (
    <div className="App" style={{ marginLeft: '20px' }}>
      <AboutMe />
      <MyProjects />
    </div>
  )
}

export default App;
