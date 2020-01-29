AFRAME.registerComponent('remove-component', {
    schema: {},
    init : function() {
        const Context_PG = this;

        Context_PG.el.addEventListener('click', function(event) {
            console.log("click");
            //gun clicked -> destroy gun
            Context_PG.deleteSelf();
        });
    },
    deleteSelf : function() {
        const Context_PG = this;
        Context_PG.el.parentNode.removeChild(Context_PG.el); 

        //CHANGE SKY BOX MATERIAL - TELEPORT
        const skyBox = document.querySelector('#sky');
        skyBox.setAttribute('material', 'shader:flat; src:/assets/textures/sunset.jpg; side:back; height:2048; width: 2048');
    }
});