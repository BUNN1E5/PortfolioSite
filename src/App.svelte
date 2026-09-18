<script>
    import ShaderCard from "./lib/ShaderCard.svelte";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faSquareLinkedin, faSquareGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
</script>

<!-------------------------Hero------------------------->
<section id="hero" class="hero bg-base-200 h-[80dvh] flex flex-col justify-center items-center">
    <aside>
        <h1 class="text-5xl font-bold">Headline</h1>
        <p class="py-6">Subheadline</p>
        <button class="btn btn-primary">Wanna get to the action?</button>
    </aside>
</section>

<!-------------------------Projects------------------------->
<div class="w-full flex flex-col items-center justify-center">

<section id="projects">
    <div class="p-4">
        <h1 class="flex justify-center text-4xl font-bold">PROJECTS</h1>
        <div class="grid grid-cols-2 gap-4">
            <ShaderCard/>
            <ShaderCard/>
            <ShaderCard/>
            <ShaderCard/>
        </div>
    </div>
</section>

<!-------------------------About Me------------------------->

<section id="about-me">
    <div>
        <h1 class="flex justify-center text-4xl font-bold">ABOUT ME</h1>
        <div class="flex justify-center">
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
    </div>
</section>

<!-------------------------Contact------------------------->
<section id="contact">
    <div class="p-4 width-1/2">
        <h1 class="flex justify-center text-4xl font-bold">CONTACT</h1>
        <!-- Add Contact form here -->
        <div class="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/jgoldenneedham/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSquareLinkedin} size="4x"/>
            </a>
            <a href="https://github.com/BUNN1E5" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSquareGithub} size="4x"/>
            </a>
            <a href="https://bunn1e5.itch.io/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faItchIo} size="4x"/>
            </a>
        </div>
    </div>
</section>


</div>
<!-------------------------Footer------------------------->
<section id="footer" class="footer sm:footer-horizontal bg-neutral p-4">
    <div class="flex justify-self-center items-center grid-flow-col">
        <p class="justify-center">Jade Golden-Needham ©2026</p>
    </div>
</section>