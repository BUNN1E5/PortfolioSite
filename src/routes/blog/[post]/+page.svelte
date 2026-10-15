<script>
    let { data } = $$props;
    //import "../../../app.css";
    import 'github-markdown-css/github-markdown.css'
    
    import { onMount } from "svelte";

    onMount(() => {
        import('$lib/live-code.js');
    });
</script>

<article class="mx-auto w-full max-w-7xl flex flex-col bg-base-100">
    {@html data.htmlContent}
</article>
