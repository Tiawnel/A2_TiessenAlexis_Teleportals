AFRAME.registerComponent('create-portal-component', {
    schema: {},
    init : function() {
        const Context_PG = this; //PG = portal gun

        Context_PG.soundElem = document.querySelector('#createSound');

        Context_PG.el.addEventListener('click', function(event) {
            console.log("click");
            //ON CLICK -> PLACE PORTAL WHERE GUN IS
            Context_PG.createPortal();

            //SOUND FUNCTIONS
            Context_PG.soundElem.components['sound'].stopSound(); //stop sound from playing before playing sound
            Context_PG.soundElem.components['sound'].playSound();
        });

        Context_PG.el.addEventListener('mouseenter', function(event) {
            //EXOAND GUN
            Context_PG.el.object3D.scale.set(0.15, 0.15, 0.15);
        });
        Context_PG.el.addEventListener('mouseleave', function(event) {
            //REGULAR SIZE
            Context_PG.el.object3D.scale.set(0.1, 0.1, 0.1);
        });
    },
    createPortal : function() {
        const Context_PG = this;
        //ADD ATTRIBUTES
        let portElem = document.createElement('a-image');
        portElem.setAttribute('class', 'clickable');
        portElem.setAttribute('image');
        portElem.setAttribute('material', {src:'/assets/textures/portal.png'});
        portElem.setAttribute('remove-component', {});

        portElem.setAttribute('position', {x:0.0, y:2.0, z:-6.0});
        portElem.setAttribute('scale', {x:4.2, y:4.2, z:4.2});
        portElem.setAttribute('rotation', {x:0.0, y:0.0, z:0.0});
        portElem.setAttribute('animation', 'property:rotation; to:0 0 360; loop:true; dur:25000; easing:linear')

        let scene = document.querySelector('a-scene');
        scene.appendChild(portElem);
    }
});