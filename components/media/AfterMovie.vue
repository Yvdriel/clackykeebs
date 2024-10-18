<template>
    <div class="absolute h-screen overflow-hidden -z-10">
        <video class="h-screen w-screen object-cover fixed" autoplay muted loop playsinline>
            Your browser does not support the video tag.
            <source src="https://cdn-cf-east.streamable.com/video/mp4/0cbnnc.mp4?Expires=1725397667030&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=WhzwbTxOXs9TZZ~oNJRf8ukiMhPC7grqyATv3hNDHxUEZiffPYgUTeWA9Gt1QxtOViCgEsve-fXzm4t~xsCkMG-6ZBwnI~PprwswZu2q4xfh2JhmOn~3ty2pYFOcx8R7imtYi3AHNGWs-C2YHBEZeL0ZB6XR6mqiixzGdKgR4O0XJmTFhO0mRyvzFj0RhW2rZ5xpcAWPkqZ9vVwRjPxP4NpoVnvA7~mWirlbcca3xvr8SLyqsMukbgyQKqz35ms5sJei6sz9Y-wOjvtBUZjxNiWIC5D4imhXXWOM4-A4yRwNSof2zzcz1-wERUlPT6rCOOh35NLKhhSJHepvgrhHDQ__" type="video/mp4" />
        </video>
        <div class="backgroundFade h-screen w-full fixed">
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.backgroundFade {
    background: #000;
    animation: fadeBackground 2s;
    animation-fill-mode: forwards;
}

@keyframes fadeBackground {
    from { background-color: #000; }
    to { 
        background-color: #000; 
        opacity: 50%;
    }
}
</style>