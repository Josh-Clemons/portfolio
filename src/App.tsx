import * as THREE from 'three';
import { Texture } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './App.css';
import { AboutMe } from './components/AboutMe/AboutMe';

function App() {

  // need a scene/camera/renderer for any 3d background
  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000); // first is FOV (field of view, number of degrees of screen you see, out of 360)
  // const renderer = new THREE.WebGL1Renderer({
  //   canvas: document.querySelector('#bg') as HTMLCanvasElement
  // });

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // renderers render method
  renderer.render(scene, camera);

  // create an object to render, need:
  // 1. Geometry, 3js has a bunch of built-ins
  // const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
  // // 2. Material, (wrapping paper for geometry), custom shaders can come from webgl or others
  // const material = new THREE.MeshStandardMaterial({ color: 0xffff00, wireframe: false });
  // // 3. Mesh, combines geometry and material
  // const torusKnot = new THREE.Mesh(geometry, material);

  // scene.add(torusKnot);

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(20, 20, 20);

  const ambientLight = new THREE.AmbientLight(0xffffff);

  scene.add(pointLight, ambientLight);



  // helpers
  const lightHelper = new THREE.PointLightHelper(pointLight);
  const gridHelper = new THREE.GridHelper(200, 50);

  scene.add(lightHelper, gridHelper);

  camera.position.z = 50;

  const orbitControls = new OrbitControls(camera, renderer.domElement); // listens to dom events on the mouse and updates camera position accordingly

  const addStar = () => {
    const geometry = new THREE.SphereGeometry(0.1, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z]: number[] = Array(3).fill(0).map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
  }

  Array(200).fill('').forEach(addStar);

  // loads and sets the background image
  const spaceTexture = new THREE.TextureLoader().load('../src/assets/space.png') as Texture;
  scene.background = spaceTexture;

  // This is for the CUBE with my pictures being displayed on it
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
  cube.position.x = 35;
  scene.add(cube);
  // end cube design

  // function to move camera on scroll
  const moveCamera = (event: any) => {
    const top = document.body.getBoundingClientRect().top;
    console.log('top', top)
    camera.position.z = (top * -.5) + 50;
    camera.position.x = top * -.1;
    camera.position.y = top * .01;
  }

  document.body.onscroll = moveCamera;

  const animate = () => {
    requestAnimationFrame(animate); // requestAnimationFrame is a built in that tells the browser I'm going to animate something

    cube.rotation.x += 0.003;
    cube.rotation.y += 0.003;
    cube.rotation.z += 0.003;


    orbitControls.update();

    renderer.render(scene, camera); // re-renders the screen when something is animated
  };

  animate();

  return (
    <div className="App">
      <AboutMe />
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
