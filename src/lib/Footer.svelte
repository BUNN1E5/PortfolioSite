<script>
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faSquareLinkedin, faSquareGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
</script>

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