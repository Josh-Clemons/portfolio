import * as THREE from 'three';
import { Material, Texture } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './App.css';
import { AboutMe } from './components/AboutMe/AboutMe';
import { MyProjects } from './components/MyProjects/MyProjects';

function App() {

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

  // const addStar = () => {
  //   const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  //   const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  //   const star = new THREE.Mesh(geometry, material);

  //   const [x, y, z]: number[] = Array(3).fill(0).map(() => THREE.MathUtils.randFloatSpread(100));

  //   star.position.set(x, y, z);
  //   scene.add(star);
  // }

  // Array(200).fill('').forEach(addStar);

  // loads and sets the background image
  const spaceTexture = new THREE.TextureLoader().load('../src/assets/space.png') as Texture;
  scene.background = spaceTexture;

  // This is for the CUBE with my pictures being displayed on it
  const texLoader = new THREE.TextureLoader();
  const mat1 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('src/assets/Fam-in-black-white.png') });
  const mat2 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('src/assets/ben-catching-leaves.png') });
  const mat3 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('src/assets/ben-josh-park.png') });
  const mat4 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('src/assets/jen-and-i.png') });
  const mat5 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('src/assets/tinaaa.png') });
  const mat6 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('src/assets/skol.png') });

  const movieSagaVideo = setUpVideo('src/assets/movie_saga.mp4');
  const movieSagaTexture = createTextureFromVideoElement(movieSagaVideo)
  // const movieSagaTexture = new THREE.VideoTexture()
  const movieSagaMaterial = new THREE.MeshBasicMaterial({
    map: movieSagaTexture,
    toneMapped: false, // turn of tone mapping, used for showing HDR
  })


  const cubeMaterial = [
    mat6,
    mat2,
    mat3,
    mat4,
    mat1,
    mat5,
  ];

  const cubeGeometry = new THREE.BoxGeometry(20, 20, 20);
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.y = 15;
  cube.position.x = 25;


  // const cube = ProfileCube()
  scene.add(cube);
  // end cube design


  const planeMat1 = new THREE.MeshStandardMaterial({ map: texLoader.load('src/assets/usmc.png') });
  const planeMat2 = new THREE.MeshStandardMaterial({ map: texLoader.load('src/assets/vettec.png') });
  const planeMat3 = new THREE.MeshStandardMaterial({ color: 0x0e2c37 });
  const planeMaterial = [
    planeMat3,
    planeMat3,
    planeMat3,
    planeMat3,
    planeMat1,
    planeMat2,
  ]

  const planeGeometry = new THREE.BoxGeometry(20, 20, 2);
  const usmcPlane = new THREE.Mesh(planeGeometry, planeMaterial)
  usmcPlane.position.x = -20;
  usmcPlane.position.y = 10;
  usmcPlane.position.z = 200;

  scene.add(usmcPlane);




  const gMat1 = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const gMat2 = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const gMat3 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('src/assets/gridiron_league_detail_picks.png') });
  const gMat4 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('src/assets/gridiron_league_detail.png') });
  const gMat5 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('src/assets/gridiron_user_dashboard.png') });
  const gMat6 = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texLoader.load('src/assets/gridiron_landing_page.png') });

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
  gridIronCube.position.y = 20;
  gridIronCube.position.z = 530;
  scene.add(gridIronCube);

  


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
    gridIronCube.rotation.y -= 0.01;

    orbitControls.update();

    renderer.render(scene, camera); // re-renders the screen when something is animated
  };

  animate();

  return (
    <div className="App" style={{ marginLeft: '20px' }}>
      <AboutMe />
      <MyProjects />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Obcaecati quam, tenetur laudantium perspiciatis et architecto qui!</p>
      <p>Itaque est neque, non eum explicabo autem culpa!</p>
      <p>Non nisi dicta at illo dignissimos iusto quae.</p>
      <p>Illum quis voluptas cupiditate, fugit beatae doloribus similique!</p>
      <p>Architecto facilis, culpa esse totam voluptas similique eum.</p>
      <p>Eveniet magni perferendis excepturi reiciendis ratione hic ipsum?</p>
      <p>Totam quas nostrum enim dolor temporibus minima itaque.</p>
      <p>Assumenda fugit similique impedit delectus aliquid, magni amet?</p>
      <p>Eum incidunt harum eaque delectus numquam sed aspernatur!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Obcaecati quam, tenetur laudantium perspiciatis et architecto qui!</p>
      <p>Itaque est neque, non eum explicabo autem culpa!</p>
      <p>Non nisi dicta at illo dignissimos iusto quae.</p>
      <p>Illum quis voluptas cupiditate, fugit beatae doloribus similique!</p>
      <p>Architecto facilis, culpa esse totam voluptas similique eum.</p>
      <p>Eveniet magni perferendis excepturi reiciendis ratione hic ipsum?</p>
      <p>Totam quas nostrum enim dolor temporibus minima itaque.</p>
      <p>Assumenda fugit similique impedit delectus aliquid, magni amet?</p>
      <p>Eum incidunt harum eaque delectus numquam sed aspernatur!</p>
    </div>
  )
}

export default App;
