(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ThreeBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThreeBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThreeBackground() {
    _s();
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeBackground.useEffect": ()=>{
            const mount = mountRef.current;
            if (!mount) return;
            // Scene setup
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](60, mount.clientWidth / mount.clientHeight, 0.1, 100);
            camera.position.z = 5;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderer"]({
                antialias: true,
                alpha: true
            });
            renderer.setSize(mount.clientWidth, mount.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);
            mount.appendChild(renderer.domElement);
            // Lights
            const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0xede0c4, 0.5);
            scene.add(ambientLight);
            const pointLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0xd4ba88, 1.2, 30);
            pointLight.position.set(5, 5, 5);
            scene.add(pointLight);
            const pointLight2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0x9b7b57, 0.6, 20);
            pointLight2.position.set(-5, -5, 3);
            scene.add(pointLight2);
            // ---------- Particles ----------
            const particleCount = 1800;
            const positions = new Float32Array(particleCount * 3);
            for(let i = 0; i < particleCount; i++){
                positions[i * 3] = (Math.random() - 0.5) * 14;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
            }
            const particleGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            particleGeo.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
            const particleMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                color: 0xc8b89a,
                size: 0.03,
                sizeAttenuation: true,
                transparent: true,
                opacity: 0.7,
                depthWrite: false
            });
            const particles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](particleGeo, particleMat);
            scene.add(particles);
            // ---------- Glow Sphere ----------
            const sphereGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1.2, 32, 32);
            const sphereMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0xd4ba88,
                transparent: true,
                opacity: 0.12,
                roughness: 0.3,
                metalness: 0.6
            });
            const sphere = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](sphereGeo, sphereMat);
            sphere.position.set(2.5, 0, -2);
            scene.add(sphere);
            // ---------- Wireframe Orbs ----------
            const orbData = [
                {
                    pos: [
                        -3,
                        1,
                        -1
                    ],
                    scale: 0.7,
                    speed: 0.6
                },
                {
                    pos: [
                        3.5,
                        -1.5,
                        -1.5
                    ],
                    scale: 0.5,
                    speed: 0.8
                },
                {
                    pos: [
                        0,
                        2.5,
                        -3
                    ],
                    scale: 0.9,
                    speed: 0.4
                }
            ];
            const orbs = orbData.map({
                "ThreeBackground.useEffect.orbs": ({ pos, scale, speed })=>{
                    const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](1, 1);
                    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0xb09b78,
                        wireframe: true,
                        transparent: true,
                        opacity: 0.18
                    });
                    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, mat);
                    mesh.position.set(...pos);
                    mesh.scale.setScalar(scale);
                    scene.add(mesh);
                    return {
                        mesh,
                        baseY: pos[1],
                        speed
                    };
                }
            }["ThreeBackground.useEffect.orbs"]);
            // ---------- Animation Loop ----------
            let animId;
            const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
            const animate = {
                "ThreeBackground.useEffect.animate": ()=>{
                    animId = requestAnimationFrame(animate);
                    const t = clock.getElapsedTime();
                    // Particle slow rotation
                    particles.rotation.y = t * 0.025;
                    particles.rotation.x = Math.sin(t * 0.015) * 0.12;
                    // Sphere breath
                    const s = 1 + Math.sin(t * 0.7) * 0.04;
                    sphere.scale.setScalar(s);
                    sphere.rotation.y = t * 0.08;
                    sphere.rotation.x = t * 0.05;
                    // Orb float
                    orbs.forEach({
                        "ThreeBackground.useEffect.animate": ({ mesh, baseY, speed })=>{
                            mesh.position.y = baseY + Math.sin(t * speed) * 0.4;
                            mesh.rotation.x = t * 0.2;
                            mesh.rotation.z = t * 0.15;
                        }
                    }["ThreeBackground.useEffect.animate"]);
                    renderer.render(scene, camera);
                }
            }["ThreeBackground.useEffect.animate"];
            animate();
            // ---------- Resize Handler ----------
            const handleResize = {
                "ThreeBackground.useEffect.handleResize": ()=>{
                    if (!mount) return;
                    camera.aspect = mount.clientWidth / mount.clientHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(mount.clientWidth, mount.clientHeight);
                }
            }["ThreeBackground.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            // ---------- Cleanup ----------
            return ({
                "ThreeBackground.useEffect": ()=>{
                    cancelAnimationFrame(animId);
                    window.removeEventListener("resize", handleResize);
                    renderer.dispose();
                    if (mount.contains(renderer.domElement)) {
                        mount.removeChild(renderer.domElement);
                    }
                }
            })["ThreeBackground.useEffect"];
        }
    }["ThreeBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mountRef,
        className: "fixed inset-0 pointer-events-none",
        style: {
            zIndex: 0,
            width: "100%",
            height: "100%"
        }
    }, void 0, false, {
        fileName: "[project]/components/ThreeBackground.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s(ThreeBackground, "V9/qkEdV8GfsDZk7lMTA1T8g5Ps=");
_c = ThreeBackground;
var _c;
__turbopack_context__.k.register(_c, "ThreeBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ThreeBackground.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ThreeBackground.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_ThreeBackground_tsx_b20f4bba._.js.map