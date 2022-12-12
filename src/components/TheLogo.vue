<script setup lang="ts">
    import {Scene, WebGLRenderer, PerspectiveCamera, MeshStandardMaterial, Group, ExtrudeGeometry, AmbientLight, PointLight, Mesh}  from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
	import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
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
    function init() {
        

        scene = new Scene();
        renderer = new WebGLRenderer({canvas: logoCanvas.value as unknown as HTMLCanvasElement, antialias: true, alpha: true});
        renderer.setSize(sizes.width, sizes.height);
        LogoWrapper.value?.appendChild(renderer.domElement)

        camera = new PerspectiveCamera( 50, sizes.width / sizes.height, 0.1);
        camera.position.set( 15, 8, 1);
        console.log(typeof camera);
        // controls

        controls = new OrbitControls( camera, renderer.domElement );
        //controls.listenToKeyEvents( window ); // optional

        //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        controls.dampingFactor = 0.05;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 6.0;
        controls.screenSpacePanning = false;
        controls.enablePan = false;
        controls.enableZoom = false;

        

        

        const material = new MeshStandardMaterial( { color: '#5CFF23' } )

        //scene.add( sphere );
        if (SvgLogo.value) {
            svgString = SvgLogo.value.outerHTML.toString();
        }
        
        const svgLoader = new SVGLoader();
        const svgData = svgLoader.parse(svgString);
        const svgGroup = new Group();
        svgGroup.scale.y *= -10;
        svgGroup.scale.x *= 10;
        svgData.paths.forEach((path:any, i:any) => {
            const shapes = SVGLoader.createShapes(path);

            // Each path has array of shapes
            shapes.forEach((shape:any, j:any) => {
                // Finally we can take each shape and extrude it
                const geometry = new ExtrudeGeometry(shape, {
                    depth: 2,
                    bevelEnabled: true,
					bevelThickness: 0.1,
					bevelSize: 0.02,
					bevelSegments: 5

                    
                });

                geometry.computeVertexNormals();

                // Create a mesh and add it to the group
                mesh = new Mesh(geometry, material);
                mesh.position.set(-0.5, -0.5, -1);
                svgGroup.add(mesh);
            });
        });
        
        scene.add( svgGroup );
        // ambient light

				scene.add( new AmbientLight( 0x222222 ) );

            // point light

            const light = new PointLight( 0xffffff, 1, 100 );
           
            camera.add( light );

            // helper
        
        scene.add( camera );

        // const axesHelper = new THREE.AxesHelper( 10);
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
    <svg ref="SvgLogo" id="SvgLogo" width="100%" height="100%" viewBox="0 0 1 1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        
        <path id="mini-logo" d="M0.062,0.381c-0,0 0.129,0.129 0.129,0.129c-0,0 0.165,-0.165 0.165,-0.165l-0.284,-0.283c-0.01,-0.01 -0.013,-0.026 -0.008,-0.04c0.006,-0.013 0.019,-0.022 0.034,-0.022l0.186,0c0.009,0 0.019,0.004 0.025,0.011c0,-0 0.191,0.19 0.191,0.19l0.191,-0.19c0.006,-0.007 0.016,-0.011 0.025,-0.011l0.186,0c0.015,0 0.028,0.009 0.034,0.022c0.005,0.014 0.002,0.03 -0.008,0.04l-0.284,0.283l0.165,0.165l0.129,-0.129c0.01,-0.01 0.026,-0.013 0.04,-0.007c0.013,0.005 0.022,0.018 0.022,0.033l-0,0.186c-0,0.01 -0.004,0.019 -0.011,0.026l-0.37,0.37c-0.007,0.007 -0.016,0.011 -0.026,0.011l-0.186,0c-0.01,0 -0.019,-0.004 -0.026,-0.011l-0.37,-0.37c-0.007,-0.007 -0.011,-0.016 -0.011,-0.026l-0,-0.186c0,-0.015 0.009,-0.028 0.022,-0.033c0.014,-0.006 0.03,-0.003 0.04,0.007Zm0.438,0.109c-0,-0 -0.165,0.165 -0.165,0.165c0,-0 0.165,0.165 0.165,0.165c0,-0 0.165,-0.165 0.165,-0.165l-0.165,-0.165Z" style="fill:#5cff23;"/>
    
    </svg>
    <div ref="LogoWrapper" id="logo-wrapper"><canvas ref="logoCanvas" id="logo-canvas"></canvas></div>
    
</template>