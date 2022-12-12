//import { useThree, extend } from '@react-three/fiber'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

//extend({ OrbitControls })

import {  MeshReflectorMaterial, Float, Text, Html, PivotControls, TransformControls, OrbitControls } from '@react-three/drei'

import { useRef } from 'react'

export default function Experience()
{
    //const { camera, gl } = useThree()
    const cube = useRef()
    const sphere = useRef()

    return <>

        {/* <orbitControls args={ [ camera, gl.domElement ] } /> */}

        <OrbitControls  makeDefault  />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <PivotControls  
            anchor={ [ 0, 0, 0 ] } 
            depthTest={ false }
            lineWidth={ 4 }
            axisColors={ [ '#9381ff', '#ff4d6d', '#7ae582' ] }
            scale={ 100 }
            fixed={ true }
            >
             <mesh position-x={ - 2 }   >
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                <Html position={ [ 1, 1, 0 ] } 
                      wrapperClass="label"

                      center
                        distanceFactor={ 8 }
                
                
                >That's a sphere 👍</Html>
            </mesh>
        </PivotControls>

        <TransformControls   object={ cube }   >
           <mesh  ref={ cube } position-x={ 2 } scale={ 1.5 }>
               <boxGeometry />
               <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </TransformControls>

        <mesh ref={ sphere } position-x={ - 3 }>
            {/* ... */}
            <Html
                position={ [ -4, 1, 0 ] }
                  wrapperClass="label"
                  center
                  distanceFactor={ 8 }
                  occlude={ [ sphere, cube ] }
            >
    That's a sphere 👍
</Html>
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <MeshReflectorMaterial 
                 resolution={ 512 }
                 blur={ [ 1000, 1000 ] }
                   mixBlur={ 1 }
                   mirror={ 0.75 }
                   color="greenyellow"
            
            />
        </mesh>

        <Html>Test</Html>
        <Float
            speed={ 5 }
            floatIntensity={ 3 }
        >
            
           <Text 
                font="./bangers-v20-latin-regular.woff"
                fontSize={ 1 }
                color="salmon"
                position-y={ 7 }
                maxWidth={ 2 }
               textAlign="center"
        
         >take me by the hand  take me somewhere new  </Text>
        </Float>

    </>
}