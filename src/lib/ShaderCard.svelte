<script>
    export let id = "shader_preview";
    //export let src = "";

    function open() {
        document.getElementById(id)?.showPopover();
    }
</script>

<div class="hover-3d" role="button">
    <div class="card aspect-square bg-base-300 p-6">
        <div class="card-body">
            <h2 class="card-title">Shader Card</h2>
            <p>Click the button to open the modal</p>
        </div>
    </div>
</div>

<div {id} popover class="modal">
    <div class="modal-box">
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">Put Shader Preview Here</p>
    </div>
    <div class="modal-backdrop">
        <button popovertarget={id} popovertargetaction="hide">close</button>
    </div>
</div>