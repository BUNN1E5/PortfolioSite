<script>
    // local Custom Components
    import "../app.css";
    
    import SectionHeader from "../lib/SectionHeader.svelte";
    import ShaderCard from "../lib/ShaderCard.svelte";

    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faSquareLinkedin, faSquareGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
    
</script>

<!-------------------------Hero------------------------->
<section id="hero" class="hero bg-base-300 h-[80dvh] flex flex-col justify-between p-8">
    <div class="w-full flex flex-wrap items-start justify-between gap-4">
        <div>
            <h1 class="text-3xl font-bold font-header">Put header here</h1>
            <p class="opacity-70 text-lg">Subheadline</p>
        </div>
        <button class="btn btn-primary self-start">Wanna get to the action?</button>
    </div>
    <a href="#projects" class="self-center mb-4 text-2xl animate-bounce">⌄</a>
</section>

<!-------------------------Page Size Setup------------------------->
<div class="w-full flex flex-col items-stretch justify-center bg-base-100">


<!-------------------------Projects------------------------->
<SectionHeader title="Projects">
    <div class="grid grid-cols-2 gap-4">
        <ShaderCard id="project-1"/>
        <ShaderCard id="project-2"/>
        <ShaderCard id="project-3"/>
        <ShaderCard id="project-4"/>
    </div>
    <div class="flex justify-center mt-4">
        <button class="btn btn-primary">Wanna see more?</button>
    </div>
</SectionHeader>

<!-------------------------About Me------------------------->
<SectionHeader title="About Me" >
    <div class="flex justify-center items-center">
        <div class="avatar avatar-placeholder">
            <div class="bg-neutral text-neutral-content w-24 rounded-full">
                <span class="text-3xl">J</span>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div class="divder divider-horizontal"></div>

        <div class="card w-1/1 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Put Skill Tree Here</h2>
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-4">
        <button class="btn btn-primary">Download Resume</button>
    </div>
</SectionHeader>

<!-------------------------Contact------------------------->
<SectionHeader title="Contact Me">
   <form class="flex flex-col gap-4 mt-4">
        <input type="text" class="input input-bordered w-full" />
        <textarea class="textarea textarea-bordered w-full"></textarea>
        <button type="button" class="btn btn-primary self-start">Send</button>
    </form>
</SectionHeader>

</div>

<!-------------------------Footer------------------------->
<section id="footer" class="footer bg-neutral p-4">
  <div class="flex w-full justify-between items-center">
        <p class="font-sans size-md">Built with Svelte + DaisyUI</p>
        <p class="font-sans size-md">Jade Golden-Needham ©2026</p>
        <div class="flex space-x-4">
            <a href="https://www.linkedin.com/in/jgoldenneedham/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSquareLinkedin} size="2x"/>
            </a>
            <a href="https://github.com/BUNN1E5" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSquareGithub} size="2x"/>
            </a>
            <a href="https://bunn1e5.itch.io/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faItchIo} size="2x"/>
            </a>
        </div>
    </div>
</section>
