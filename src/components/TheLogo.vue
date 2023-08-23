<script setup lang="ts">
    import {Scene, WebGLRenderer, PerspectiveCamera, MeshStandardMaterial, AmbientLight, PointLight, Color}  from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
    import { useDark } from '@vueuse/core';
	//import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { onMounted, ref} from 'vue';

    const LogoWrapper = ref<HTMLElement | null>(null);
    const logoCanvas = ref<HTMLCanvasElement | null>(null);
    const SvgLogo = ref<SVGElement | null>(null);
    
    let camera:any, controls:any, scene:any, renderer:any, sizes:any, mesh:any, svgString:string;

    // const sphere = new Mesh(
    //     new SphereGeometry( 0.5, 16, 8 ),
    //     new MeshBasicMaterial( { color: 0xffaa00, wireframe: true } )
    // );
    
    
    onMounted(() => {
        sizes = {
            width: LogoWrapper.value?.clientWidth,
            height: LogoWrapper.value?.clientHeight
        }
        if (logoCanvas.value) {
            init();
            animate();
        }
    });
    const isDark = useDark({
    onChanged(dark: boolean) {
        // update the dom, call the API or something
        if (logoCanvas.value) {
            init();
            animate();
        }
    },
    })
    function init() {
        

        scene = new Scene();
        renderer = new WebGLRenderer({canvas: logoCanvas.value as unknown as HTMLCanvasElement, antialias: false, alpha: true});
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(sizes.width, sizes.height);
        LogoWrapper.value?.appendChild(renderer.domElement)

        camera = new PerspectiveCamera( 45, sizes.width / sizes.height, 1, 100);
        camera.position.set( - 1, 1, 2 );
        
        //console.log(typeof camera);
        // controls

        controls = new OrbitControls( camera, renderer.domElement );
        //controls.listenToKeyEvents( window ); // optional

        //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        controls.dampingFactor = 0.05;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.0;
        controls.screenSpacePanning = false;
        controls.enablePan = false;
        controls.enableZoom = false;
        

        

        

        let accentCSSColor:string | undefined = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
        let extraCSSColor:string | undefined = getComputedStyle(document.documentElement).getPropertyValue('--extra-light');
        let ambientCSSColor:string | undefined = getComputedStyle(document.documentElement).getPropertyValue('--bg-medium');
        accentCSSColor = accentCSSColor.trimStart().replace('deg', '');
        extraCSSColor = extraCSSColor.trimStart().replace('deg', '');
        ambientCSSColor = ambientCSSColor.trimStart().replace('deg', '');
        
        let accentColor = new Color(accentCSSColor);
        let extraColor = new Color(extraCSSColor);
        let ambientColor = new Color(ambientCSSColor);

        const loader = new GLTFLoader().setPath( '/assets/models/' );
            loader.load( 'logo.gltf', function ( gltf ) {
                const model = gltf.scene;
                let newMaterial = new MeshStandardMaterial({color: accentColor});
                model.traverse((o:any) => {
                if (o.isMesh) o.material = newMaterial;
                });
                gltf.scene.scale.set(55, 55, 55);;
                gltf.scene.position.y = -0.325;
                gltf.scene.position.x = -0.7;
                gltf.scene.position.z = -0.25;
                scene.add( gltf.scene );

                

            } );
        // //scene.add( sphere );
        // if (SvgLogo.value) {
        //     svgString = SvgLogo.value.outerHTML.toString();
        // }
        
        // const svgLoader = new SVGLoader();
        // const svgData = svgLoader.parse(svgString);
        // const svgGroup = new Group();
        // svgGroup.scale.y *= -10;
        // svgGroup.scale.x *= 10;
        // svgData.paths.forEach((path:any, i:any) => {
        //     const shapes = SVGLoader.createShapes(path);

        //     // Each path has array of shapes
        //     shapes.forEach((shape:any, j:any) => {
        //         // Finally we can take each shape and extrude it
        //         const geometry = new ExtrudeGeometry(shape, {
        //             depth: 2,
        //             bevelEnabled: true,
		// 			bevelThickness: 0.1,
		// 			bevelSize: 0.02,
		// 			bevelSegments: 5

                    
        //         });

        //         geometry.computeVertexNormals();

        //         // Create a mesh and add it to the group
        //         mesh = new Mesh(geometry, material);
        //         mesh.position.set(-0.5, -0.5, -1);
        //         svgGroup.add(mesh);
        //     });
        // });
        
        // scene.add( svgGroup );
        // ambient light

				scene.add( new AmbientLight( ambientColor ) );

            // point light

            const light = new PointLight( extraCSSColor, 1, 100 );
           
            camera.add( light );

            // helper
        
        scene.add( camera );

        // const axesHelper = new AxesHelper( 1);
        // scene.add( axesHelper );

        window.addEventListener( 'resize', onWindowResize );
        
    }
    function onWindowResize() {
        sizes = {
            width: LogoWrapper.value?.clientWidth,
            height: LogoWrapper.value?.clientHeight
        }

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize( sizes.width, sizes.height );
    render();

    }

    function animate() {

    requestAnimationFrame( animate );

    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

    render();

    }

    function render() {
        LogoWrapper.value?.appendChild(renderer.domElement)
        renderer.render( scene, camera);

    }
</script>
<template>
    
    <div ref="LogoWrapper" id="logo-wrapper"><canvas ref="logoCanvas" id="logo-canvas"></canvas></div>
    
</template>