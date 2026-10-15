<script>
    let { data } = $$props;
    //import "../../../app.css";
    import 'github-markdown-css/github-markdown.css'
    
    import { onMount } from "svelte";

    onMount(() => {
        import('$lib/live-code.js');
    });
</script>


<div class="flex w-full h-20">
    <header class="mx-auto w-full">
        <p>Test Text</p>
    </header>
</div>

<div class="flex w-full justify-center">
    <article class="markdown-body mx-auto w-full max-w-4xl px-6">
        {@html data.htmlContent}
    </article>
</div>