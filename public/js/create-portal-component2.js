AFRAME.registerComponent('create-portal-component2', {
    schema: {},
    init : function() {
        const Context_PG = this; //PG = portal gun

        Context_PG.soundElem = document.querySelector('#createSound');

        Context_PG.el.addEventListener('click', function(event) {
            console.log("click");
            //On click, the portal appears in place of the gun
            Context_PG.createPortal();

            //SOUND FUNCTIONS
            Context_PG.soundElem.components['sound'].stopSound(); //stop sound from playing before playing sound
            Context_PG.soundElem.components['sound'].playSound();
        });

        Context_PG.el.addEventListener('mouseenter', function(event) {
            //Expand gun on hover
            Context_PG.el.object3D.scale.set(0.15, 0.15, 0.15);
        });
        Context_PG.el.addEventListener('mouseleave', function(event) {
            //Bring back to regular size
            Context_PG.el.object3D.scale.set(0.1, 0.1, 0.1);
        });
    },
    createPortal : function() {
        const Context_PG = this;
        //Set up portal attributes
        let port2Elem = document.createElement('a-image');
        port2Elem.setAttribute('class', 'clickable');
        port2Elem.setAttribute('image');
        port2Elem.setAttribute('material', {src:'/assets/textures/portal.png'});

        port2Elem.setAttribute('position', {x:0.0, y:2.0, z:6.0});
        port2Elem.setAttribute('scale', {x:4.2, y:4.2, z:4.2});
        port2Elem.setAttribute('rotation', {x:0.0, y:0.0, z:0.0});
        port2Elem.setAttribute('animation', 'property:rotation; to:0 0 360; loop:true; dur:25000; easing:linear')
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(port2Elem);

        //Destroy gun
        Context_PG.el.parentNode.removeChild(Context_PG.el);

        //CHANGE SKY BOX MATERIAL - TELEPORT
        const skyBox = document.querySelector('#sky');
        skyBox.setAttribute('material', 'shader:flat; src:/assets/textures/nightSky.jpg; side:back; height:2048; width: 2048');
    }
});